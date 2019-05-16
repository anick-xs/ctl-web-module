<template>
    <div class="container">
        <div class="upload">
            <div class="upload-type">
               <!-- <label>
                    <input type="file" id="fileUpload" @change="fileChange($event)" style="width: 170px;" value="Submit">
                </label>-->
                <!--<input type="file" id="fileinp" @change="fileChange($event)" style="width: 170px;" value="Submit">-->
                <el-upload
                        class="upload-demo"
                        action="/"
                        :on-change="handlePreview"
                        :http-request="myUpload"
                        :file-list="fileList"
                        :before-remove="beforeRemove"
                        >
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
                <!--<button @click="authUpload" :disabled="uploadDisabled">开始上传</button>-->
                <!--<button @click="pauseUpload" :disabled="pauseDisabled">暂停</button>-->
                <!--<button :disabled="resumeDisabled" @click="resumeUpload">恢复上传</button>-->
             <!--   <span class="progress">上传进度: <i id="auth-progress">{{authProgress}}</i> %,</span>-->
                <el-progress v-if="authProgress > 0" :percentage="authProgress" >上传进度</el-progress>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            videoId:{
                type: [Number,String],
            },
            setFormData:{
                type: [Number,String,Object],
            },
        },
        watch:{
            setFormData:{
                handler(newVal){
                    this.fileList = [{name: newVal.name}];
                }
            }
        },
        data () {
            return {
                timeout: '',
                partSize: '',
                parallel: '',
                retryCount: '',
                retryDuration: '',
                region: 'cn-shanghai',
                userId: '',
                file: null,
                authProgress: 0,
                uploadDisabled: true,
                resumeDisabled: true,
                pauseDisabled: true,
                uploader: null,
                statusText: '',
                token:{},
                endFormData:'',
                vid:'',
                fileList:[],
                aliUserId:''
            }
        },
        created(){
            //初始化，获取账号
            api.common.getUploadVideocert({fileName:'name.mp4'}).then(res=>{
                if(res.status){
                    this.aliUserId = res.result.aliUserId;
                }
            })
        },
        methods: {
            beforeRemove(){
                this.fileList = [];
                this.authProgress = 0;
                this.$emit("update:videoId", '');
            },
            myUpload(){

            },
            handlePreview(event, file, fileList){
                this.fileChange(event.raw);
                this.fileList = [{name: event.name}];
            },
            fileChange (e) {
                // this.file = e.target.files[0];
                this.file =e;
                if (!this.file) {
                    alert("请先选择需要上传的文件!");
                    return;
                }
                let Title = this.file.name;
                let userData = '{"Vod":{}}';
                if (this.uploader) {
                    this.uploader.stopUpload();
                    this.authProgress = 0;
                    this.statusText = "";
                }
                this.uploader = this.createUploader();
                //   console.log(userData);
                this.uploader.addFile(this.file, null, null, null, userData);
                this.uploadDisabled = false;
                this.pauseDisabled = true;
                this.resumeDisabled = true;
                //开始上传
                this.authUpload()
            },
            authUpload () {

                // 然后调用 startUpload 方法, 开始上传
                if (this.uploader !== null) {
                    this.uploader.startUpload();
                    this.uploadDisabled = true;
                    this.pauseDisabled = false;
                }
            },
            // 暂停上传
            pauseUpload () {
                if (this.uploader !== null) {
                    this.uploader.stopUpload();
                    this.resumeDisabled = false;
                    this.pauseDisabled = true;
                }
            },
            // 恢复上传
            resumeUpload () {
                if (this.uploader !== null) {
                    this.uploader.startUpload();
                    this.resumeDisabled = true;
                    this.pauseDisabled = false;
                }
            },
            createUploader (type) {
                let self = this;
                let uploader = new AliyunUpload.Vod({
                    //阿里账号ID，必须有值 ，值的来源https://help.aliyun.com/knowledge_detail/37196.html
                    userId:this.aliUserId || '',
                    //上传到点播的地域， 默认值为'cn-shanghai',//eu-central-1,ap-southeast-1
                    region:"cn-shanghai",
                    //分片大小默认1M，不能小于100K
                    partSize: 1048576,
                    //并行上传分片个数，默认5
                    parallel: 5,
                    //网络原因失败时，重新上传次数，默认为3
                    retryCount: 3,
                    //网络原因失败时，重新上传间隔时间，默认为2秒
                    retryDuration: 2,
                    // 添加文件成功
                    addFileSuccess: function (uploadInfo) {
                        console.log('添加文件成功',uploadInfo)
                        self.statusText = '添加文件成功, 等待上传...';
                        // console.log("addFileSuccess: " + uploadInfo.file.name)
                    },
                    // 开始上传
                    onUploadstarted: function (uploadInfo) {
                        //上传方式1, 需要根据uploadInfo.videoId是否有值，调用点播的不同接口获取uploadauth和uploadAddress，如果videoId有值，
                        // 调用刷新视频上传凭证接口，否则调用创建视频上传凭证接口
                        if (uploadInfo.videoId) {
                            // 如果 uploadInfo.videoId 存在, 调用 刷新视频上传凭证接口(https://help.aliyun.com/document_detail/55408.html)
                            let uploadAuth,uploadAddress,videoId;
                            api.common.refreshUplaodVideocert({vid:uploadInfo.videoId}).then(res=>{
                                if(res.status){
                                    let data = res.result;
                                    uploadAuth = data.uploadAuth;
                                    uploadAddress = data.uploadAddress;
                                    videoId =  self.vid = data.videoId;
                                    //从点播服务获取的uploadAuth、uploadAddress和videoId,设置到SDK里
                                    uploader.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress,videoId)
                                }
                            });
                        }
                        else{
                            //如果 uploadInfo.videoId 不存在,调用 获取视频上传地址和凭证接口(https://help.aliyun.com/document_detail/55407.html)
                            let uploadAuth,uploadAddress,videoId;
                            api.common.getUploadVideocert({fileName:uploadInfo.file.name}).then(res=>{
                                if(res.status){
                                    console.log('开始上传',res)
                                    let data = res.result;
                                    uploadAuth = data.uploadAuth;
                                    uploadAddress = data.uploadAddress;
                                    videoId =  self.vid = data.videoId;
                                    self.userId = data.aliUserId;
                                    //从点播服务获取的uploadAuth、uploadAddress和videoId,设置到SDK里
                                    uploader.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress,videoId)
                                }
                            });
                            self.statusText = '文件开始上传...';
                            //console.log("onUploadStarted:" + uploadInfo.file.name + ", endpoint:" + uploadInfo.endpoint + ", bucket:" + uploadInfo.bucket + ", object:" + uploadInfo.object)
                        }
                    },
                    // 文件上传成功
                    onUploadSucceed: function (uploadInfo) {
                        //  console.log("onUploadSucceed: " + uploadInfo.file.name + ", endpoint:" + uploadInfo.endpoint + ", bucket:" + uploadInfo.bucket + ", object:" + uploadInfo.object)
                        self.statusText = '文件上传成功!'
                        self.$emit("update:videoId", uploadInfo.videoId);
                        console.log('文件上传成功',uploadInfo,self.vid)
                    },
                    // 文件上传失败
                    onUploadFailed: function (uploadInfo, code, message) {
                        // console.log("onUploadFailed: file:" + uploadInfo.file.name + ",code:" + code + ", message:" + message)
                        self.statusText = '文件上传失败!'
                    },
                    // 取消文件上传
                    onUploadCanceled: function (uploadInfo, code, message) {
                        // console.log("Canceled file: " + uploadInfo.file.name + ", code: " + code + ", message:" + message)
                        self.statusText = '文件已暂停上传'
                    },
                    // 文件上传进度，单位：字节, 可以在这个函数中拿到上传进度并显示在页面上
                    onUploadProgress: function (uploadInfo, totalSize, progress) {
                        //console.log("onUploadProgress:file:" + uploadInfo.file.name + ", fileSize:" + totalSize + ", percent:" + Math.ceil(progress * 100) + "%");
                        self.authProgress = Math.ceil(progress * 100);
                        self.statusText = '文件上传中...'
                    },
                    // 上传凭证超时
                    onUploadTokenExpired: function (uploadInfo) {
                        console.log("上传凭证超时",uploadInfo);
                        //实现时，根据uploadInfo.videoId调用刷新视频上传凭证接口重新获取UploadAuth
                        //https://help.aliyun.com/document_detail/55408.html
                        //从点播服务刷新的uploadAuth,设置到SDK里
                        let uploadAuth;
                        api.common.refreshUplaodVideocert({vid:uploadInfo.videoId}).then(res=>{
                            if(res.status){
                                let data = res.result;
                                uploadAuth = data.uploadAuth;
                                //从点播服务获取的uploadAuth、uploadAddress和videoId,设置到SDK里
                                uploader.resumeUploadWithAuth(uploadAuth)
                            }
                        });
                        self.statusText = '文件超时...'
                    },
                    // 全部文件上传结束
                    onUploadEnd: function (uploadInfo) {
                        // console.log("onUploadEnd: uploaded all the files")
                        self.statusText = '文件上传完毕'
                    }
                });
                return uploader
            },
        }
    }
</script>

<style scoped>
    .container{
        background:#fff;
    }
</style>
