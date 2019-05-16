<template>
    <div>
        <el-upload
                :key="key"
                list-type="picture-card"
                action="/api/exam/inner/video/getUploadImgcert"
                :file-list="fileList"
                :limit="limit"
                :before-upload="beforeAvatarUpload"
                :on-remove="deleteImage"
                :on-preview="handlePictureCardPreview"
                :on-success="handleAvatarSuccess">
                <i class="el-icon-plus" ></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" :append-to-body="true">
            <img width="100%" :src="imageUrl" alt="">
        </el-dialog>
    </div>
</template>
<script>
    export default{
        props:{
            aliImageUrl:{
                type: [Number,String],
            },
            limit:{
                type: [Number,String],
            }
        },
        data(){
            return{
                imageUrl:'',
                dialogVisible:false,
                uploader: null,
                file: null,
                statusText: '',
                authProgress: '',
                token:null,
                url:'',
                setInterval:null,
                successFileData:null,
                fileList:[],
                key:0,
            }
        },
        watch:{
            aliImageUrl:{
                immediate: true,
                handler(newVal,oldVal){
                    let data = [];
                    if(newVal && typeof newVal === 'string'){
                        let url = newVal.split(','); //字符串转数组
                        url.forEach(res=>{
                            data.push({url:res})
                        });
                    }
                    this.fileList = [...data];
                    //以下是对最大图片的修改，不是对所有的页面都使用，尤其是基本资料的页面，1个以上图集的问题。。
                    if(this.limit&&this.fileList.length===this.limit){
                        this.$nextTick(() => {
                            document.getElementsByClassName('el-upload--picture-card')[0].style.display = 'none'
                        })
                    }else{
                        this.$nextTick(() => {
                            document.getElementsByClassName('el-upload--picture-card')[0].style.display = 'inline-block'
                        })
                    }
                    this.key++;
                }
            }
        },
        methods:{
            beforeAvatarUpload(file){
                let fileType  = ['image/png','image/jpeg','image/jpg'];
                if(!fileType.includes(file.type)){
                    this.$message.warning("只能上传jpg或png格式");
                    return false;
                }
            },
            // 删除图片
            deleteImage(file, fileList){
                this.fileList = fileList;
                let url = [];
                fileList.forEach(res=>{
                    url.push(res.url)
                });
                this.$emit("update:aliImageUrl",url.join(','));
            },
            handlePictureCardPreview(file){
                this.imageUrl = file.url;
                this.dialogVisible = true;
            },
            //第一步获取token
            handleAvatarSuccess(res, file){
                this.token = res.result;
                this.uploadFile(file,res.result);
                this.url = res.result.imageURL;
                this.imageUrl = res.result.imageURL;
                this.successFileData = file;
            },
            uploadFile(file, token){
                this.file = file.raw;
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
                this.uploader = this.createUploader(token);
                this.uploader.addFile(this.file, null, null, null, userData);
                this.authUpload(token);
            },
            authUpload () {
                // 然后调用 startUpload 方法, 开始上传
                if (this.uploader !== null) {
                    this.uploader.startUpload();
                }
            },
            createUploader (token) {
                let self = this;
                let URL = URL;
                let uploader = new AliyunUpload.Vod({
                    //阿里账号ID，必须有值 ，值的来源https://help.aliyun.com/knowledge_detail/37196.html
                    userId:token.aliUserId,
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
                        //   console.log('添加文件成功',uploadInfo);
                        self.statusText = '添加文件成功, 等待上传...';
                    },
                    // 开始上传
                    onUploadstarted: function (uploadInfo) {
                        let uploadAuth,uploadAddress,imageId;
                        let data = self.token;
                        uploadAuth = data.uploadAuth;
                        uploadAddress = data.uploadAddress;
                        imageId = data.imageId;
                        //从点播服务获取的uploadAuth、uploadAddress和imageId,设置到SDK里
                        uploader.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress,imageId)
                    },
                    // 文件上传成功
                    onUploadSucceed: function (uploadInfo) {
                        self.statusText = '文件上传成功!';
                        self.fileList.push({ url:self.successFileData.response.result.imageURL});
                        self.key++;
                        let url = [];
                        self.fileList.forEach(res=>{
                            url.push(res.url)
                        });
                        self.$emit("update:aliImageUrl",url.join(','));
                        self.$emit("aliImageChange",self.successFileData);
                        console.log('文件上传成功',uploadInfo);
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
                        // console.log("onUploadTokenExpired");
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
        },
        created(){

        }
    }
</script>
<style lang="scss" scoped>
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
  .avatar-delete-icon {
        position: absolute;
        right: -3px;
        top: -3px;
        font-size: 28px;
        z-index: 9999;
        color: #8c939d;
        text-align: center;
    }
    .content-img{
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .lineWrite{
        display: none;
    }
</style>
