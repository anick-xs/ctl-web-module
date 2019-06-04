/**
* User: wuxinshuang
* Date: 2018/11/14
* Time: 18:10
* remark:
*/
<template>
    <div class="upload">
        <div v-if="type === 'singlePic'">
            <el-upload
                    :disabled="disabledIs"
                    class="avatar-uploader"
                    :data="upToken"
                    action="https://up-z2.qbox.me/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                <div class="content-img">
                    <i v-if="imageUrl" class="el-icon-close avatar-delete-icon" @click.stop="deleteImage"></i>
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </div>
            </el-upload>
        </div>
        <div v-else-if="type === 'pictureCard'">
            <el-upload
                    :key="key"
                    :disabled="disabledIs"
                    action="https://up-z2.qbox.me/"
                    :data="upToken"
                    list-type="picture-card"
                    :limit="limit"
                    :file-list="fileList"
                    :before-upload='beforeAvatarUpload'
                    :on-success="handleAvatarSuccess"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                <i class="el-icon-plus" v-if="!limit" ></i>
                <i v-else-if="limit>fileList.length" class="el-icon-plus" :class="limit>fileList.length?'':'lineWrite'"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" :append-to-body="true">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </div>
        <div v-else-if="type === 'file'" style="display: flex;">
            <el-upload
                    :key="key"
                    :disabled="disabledIs"
                    :data="upToken"
                    action="https://up-z2.qbox.me/"
                    multiple
                    :limit="limit"
                    :file-list="fileList"
                    :on-remove="handleRemove"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                <div class="upload-button" v-if="!disabledIs">
                    <el-button v-if="!fileList" size="small" type="primary">点击上传</el-button>
                    <el-button v-else size="small" type="primary">重新上传</el-button>
                </div>
            </el-upload>
        </div>
        <div v-else-if="type === 'audioFile'" style="display: flex;">
            <el-upload
                    :disabled="disabledIs"
                    :data="upToken"
                    action="https://up-z2.qbox.me/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                <div class="upload-button" v-if="!disabledIs">
                    <el-button v-if="!fileUrl" size="small" type="primary">点击上传</el-button>
                    <el-button v-else size="small" type="primary">重新上传</el-button>
                </div>
            </el-upload>
            <audio  v-if="fileUrl && !disabledIs" :src="fileUrl" controls="controls" style="height: 40px;margin-left: 10px">
                Your browser does not support the audio element.
            </audio>
            <a v-else class="link-type" style="width: 90%;word-wrap: break-word;" :href="fileUrl" target="_blank">{{fileUrl}}</a>
        </div>
        <div v-else-if="type === 'excel'" style="display: block;">
            <el-upload
                    :disabled="disabledIs"
                    :data="upToken"
                    action="https://up-z2.qbox.me/"
                    :show-file-list="true"
                    :on-success="handleAvatarSuccess"
                    :before-remove="handleBeforeRemove"
                    :before-upload="beforeAvatarUpload">
                <div class="upload-button" v-if="!disabledIs">
                    <el-button v-if="!fileUrl" size="small" type="primary">点击上传</el-button>
                    <el-button v-else size="small" type="primary">重新上传</el-button>
                </div>
            </el-upload>
            <span  v-if="fileUrl && !disabledIs" style="word-wrap: break-word;">
                {{fileUrl}}
            </span>
            <a v-else class="link-type" style="width: 90%;word-wrap: break-word;" :href="fileUrl" target="_blank">{{fileUrl}}</a>
        </div>
        <div v-else-if="type === 'drag'" class="box">
            <el-upload
                    width="85%"
                    height="100%"
                    class="upload"
                    :limit="limit"
                    :disabled="disabledIs"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    drag
                    :action="action"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">
                    <span>仅支持.xlsx/.xls格式的文件，如有图片请另于七牛云导入</span>
                    <span class="link-type"  style="margin-left: 20px">下载模板</span>
                </div>
            </el-upload>
        </div>
        <div v-else-if="type === 'aliImg'">
            <upload-image :aliImageUrl.sync="aliImageUrl" @aliImageChange="aliImageChange" :limit="limit"></upload-image>
        </div>
        <div v-else-if="type === 'aliVideo'">
            <upload-video :videoId.sync="videoId" :setFormData.sync="setFormData"   ></upload-video>
        </div>
    </div>
</template>

<script>
    import uploadImage from './uploadImage'
    import uploadVideo from './uploadVideo'
    export default {
        components:{
            uploadImage,
            uploadVideo
        },
        props:{
            type:{
                type: String,
                default: function () {
                    return 'singlePic'
                }
            },
            disabledIs:{
                type: [String,Boolean],
                default:function () {
                    return false
                }
            },
            value:{
                type: [String,Array,Object,Boolean],
            },
            limit:{
                type:[Number,String]
            },
            action: {
                type: [String]
            },
            path: {
                type: [String],
                default: () => ''
            },
            zip: {
                type: [Boolean],
                default: () => false
            },
            //封面图片地址
            coverUrl:{
                type: [String],
                default: () => ''
            },
            formData:{
                type: [Object],
                default: () => {}
            },
            //只能上传的文件格式
            only:{
                type: [String],
                default: () => ''
            },
            //文件名字
            fileName:{
                type: [String],
                default: () => ''
            },
            model:{
                type: [Object],
                default: () => {}
            },
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        watch:{
            value:{
                immediate:true,
                handler(newVal,oldVal){
                    if(this.type === 'singlePic'){
                        this.imageUrl = newVal
                    }else if(this.type === 'pictureCard'){
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
                            console.log(document.querySelector('.dialog .el-upload--picture-card'))
                            this.$nextTick(() => {
                                document.getElementsByClassName('el-upload--picture-card')[0].style.display = 'none'
                                if(document.querySelector('.dialog .el-upload--picture-card')){
                                    document.querySelector('.dialog .el-upload--picture-card').style.display = 'none'
                                }
                            })
                        }else{
                            this.$nextTick(() => {
                                document.getElementsByClassName('el-upload--picture-card')[0].style.display = 'inline-block'
                                if(document.querySelector('.dialog .el-upload--picture-card')){
                                    document.querySelector('.dialog .el-upload--picture-card').style.display = 'inline-block'
                                }
                            })
                        }
                        this.key++;
                    }else if(this.type === 'file'){
                        if(newVal){
                            //如果是安装包
                            if( this.only === "vnd.android.package-archive"){
                                this.fileList = [{ name:this.formData.packageName,url:this.formData.packageLinkAddress }]
                            }
                        }
                        this.key++;
                    }else if(this.type === 'audioFile' || this.type === 'excel'){
                        this.fileUrl = newVal
                    }else if(this.type === 'aliImg'){
                        if(newVal){
                            this.aliImageUrl = newVal;
                        }
                    }else if(this.type === 'aliVideo'){
                        if(newVal){
                            this.videoId = newVal;
                        }
                    }
                }
            },
            videoId:{
                handler(newVal,oldVal){
                    this.$emit("change", newVal);
                }
            },
            aliImageUrl:{
                handler(newVal,oldVal){
                    this.$emit("change", newVal);
                }
            },
            formData: {
                handler(newVal,oldVal){
                    this.setFormData = newVal;
                },
            },
        },
        data() {
            return {
                setFormData:{},
                videoId:'',
                aliImageUrl:'',
                imageUrl: '',
                fileUrl: '',
                dialogImageUrl: '',
                dialogVisible: false,
                urlData:[],
                fileList:[],
                upToken: {
                    token: '',
                    key: ''
                },
                key:0
            };
        },
        methods: {
            handleBeforeRemove () {
                this.$emit("change", '');
            },
            // 图片删除
            deleteImage(){
                this.imageUrl = '';
                this.$emit("change", '');
            },
            async handleAvatarSuccess(response, file, fileList) {
                if(this.type === 'singlePic'){
                    let data = {
                        fileName: response.key,
                        bucketName: 'chetailian-public'
                    };
                    this.imageUrl = URL.createObjectURL(file.raw);
                    this.model.config.upload.apiGetDownUrlByKeys(data).then((res) => {

                        if (res.status) {
                            if(this.zip){
                                this.$emit("change", res.result.downUrl+`?imageslim`);
                            }else{
                                this.$emit("change", res.result.downUrl);
                            }

                        }
                    });
                }else if(this.type === 'pictureCard'){
                    //把数组转成字符串拼接格式
                    let res = {
                        fileName: response.key,
                        bucketName: 'chetailian-public'
                    };
                    await this.model.config.upload.apiGetDownUrlByKeys(res).then((res) => {
                        if (res.status) {
                            if(this.zip){
                                this.fileList.push({ url:res.result.downUrl+`?imageslim`,key:response.key})
                            }else{
                                this.fileList.push({ url:res.result.downUrl,key:response.key})
                            }

                        }
                    });
                    let url = [];
                    await this.fileList.forEach(res=>{
                        url.push(res.url)
                    });
                    this.$emit("change",url.join(','));
                }else if(this.type === 'file'){
                    let data = {
                        fileName: response.key,
                        bucketName: 'chetailian-public'
                    };
                    await this.model.config.upload.apiGetDownUrlByKeys(data).then((res) => {
                        if (res.status) {
                            //如果是apk，只能上传一个，重新上传就覆盖之前
                            if(this.only === 'vnd.android.package-archive'){
                                this.fileList = [{name:file.name, url:res.result.downUrl }]
                            }else{
                                this.fileList.push({name:file.name, url:res.result.downUrl })
                            }
                        }
                    });
                    let url = [];
                    await this.fileList.forEach(res=>{
                        url.push(res.url)
                    });
                    this.$emit("change",url.join(','));

                }else if(this.type === 'audioFile' || this.type === 'excel'){
                    let data = {
                        fileName: response.key,
                        bucketName: 'chetailian-public'
                    };
                    this.imageUrl = URL.createObjectURL(file.raw);
                    this.model.config.upload.apiGetDownUrlByKeys(data).then((res) => {
                        if (res.status) {
                            this.$emit("change", res.result.downUrl);
                        }
                    });
                }
            },
            beforeAvatarUpload(file) {
                this.$emit("uploadOnChange",file);
                if(this.type === 'singlePic' || this.type === 'pictureCard'){
                    const isJPG = file.type === 'image/jpeg';
                    const isGIF = file.type === 'image/gif';
                    const isPNG = file.type === 'image/png';
                    const isBMP = file.type === 'image/bmp';
                    const isLt2M = file.size / 1024 / 1024 < 2;

                    if (!isJPG && !isGIF && !isPNG && !isBMP) {
                        this.$message.error('上传图片必须是JPG/GIF/PNG/BMP 格式!');
                        return false
                    }
                    if (!isLt2M) {
                        this.$message.error('上传头像图片大小不能超过 2MB!');
                        return false;
                    } else {
                        this.upToken.key = this.path + '/' + new Date().getTime() + '/' + file.name
                    }

                }else if(this.type === 'file'){
                    if(this.only){
                        const only = file.type.indexOf(this.only) >= 0;
                        if (!only) {
                            if(this.only === 'vnd.android.package-archive'){
                                this.$message.warning(`上传文件只能是apk格式!`);
                            }else{
                                this.$message.warning(`上传文件只能是.${this.only}格式!`);
                            }
                        }
                        if(only) {
                            this.upToken.key = this.path + '/' + new Date().getTime() + '/' + file.name;
                            return true;
                        } else {
                            return false;
                        }
                    }else{
                        this.upToken.key = this.path + '/' + new Date().getTime() + '/' + file.name;
                    }
                } else if(this.type === 'audioFile'){
                    const isMp3 = file.type.indexOf('audio') >= 0;
                    const isLt10M = file.size / 1024 / 1024 < 10;
                    if (!isMp3) {
                        this.$message.error('上传音频文件只能是mp3或wav格式!');
                    }
                    if (!isLt10M) {
                        this.$message.error('上传的音频文件大小不能超过 10MB!');
                    }
                    if (isLt10M && isMp3) {
                        this.upToken.key = this.path + '/' + new Date().getTime() + '/' + file.name;
                        return true;
                    } else {
                        return false;
                    }
                } else if (this.type === 'excel') {
                    const isLt10M = file.size / 1024 / 1024 < 10;
                    const isXlsx = file.type.indexOf('sheet') !== -1;
                    const isXls = file.type.indexOf('excel') !== -1;
                    if( !isLt10M ) this.$message.warning('上传的文件大小不能超过10MB');
                    if( !isXlsx && !isXls ) this.$message.warning('上传的文件格式只能是.xlsx或.xls');

                    if (isLt10M && isXlsx || isXls) {
                        this.upToken.key = this.path + '/' + new Date().getTime() + '/' + file.name
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            handleRemove(file, fileList) {
                this.urlData = [];
                fileList.forEach(res=>{
                    this.urlData.push(res.url)
                });
                this.fileList = fileList;
                if(!this.urlData.length){
                    this.fileList = [];
                }
                this.$emit("change", this.urlData.join(','));
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            //获取上传token
            getUpToken(){
                this.model.config.upload.apiUpToken({bucketName:'chetailian-public'}).then(res=>{
                    if(res.status){
                        this.upToken.token = res.result.upToken;
                    }
                })
            },
            aliImageChange(file){
                this.$emit("uploadOnChange",file);
            },
        },
        created(){
            //获取图片上传token
            //如果是阿里视频封面
            if(this.type !== 'aliImg' && this.type !== 'aliVideo' ){
               this.getUpToken();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar-delete-icon {
        position: absolute;
        right: -13px;
        top: -12px;
        font-size: 28px;
        z-index: 9999;
        color: #8c939d;
        text-align: center;
    }
    .content-img{
        position: relative;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .lineWrite{
        display: none;
    }
    .upload-button{
        width: 100px;
        text-align: left;
    }
    .upload{
        margin-bottom: 5px;
    }
</style>
