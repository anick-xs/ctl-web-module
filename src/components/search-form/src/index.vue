<template>
    <div class="form-box searchForm">
        <el-form :inline="true" ref="searchForm" :model="form" label-width="80px">
            <template class="item" v-for="(model,index) in searchModel" >
                <template v-for="(item,itemKey) in modules">
                    <component
                            style="margin-bottom: 20px;"
                            v-if="model.elemType === itemKey && !model.show"
                            :is="item"
                            :key="index+itemKey"
                            @upKey="upKey"
                            :index="index"
                            :formData="form"
                            :model="model"
                            :formModel.sync="searchModel">
                    </component>
                    <slot v-if="model.elemType === itemKey && !model.show" :name="model.key"></slot>
                </template>
            </template>
            <div class="btn">
                <el-form-item >
                    <el-button
                            icon="el-icon-search"
                            size="small"
                            @click="searchBtn('searchForm')"
                            id="searchBtn"
                            class="btn-active"
                            v-if="searchShow"
                            :loading="loading"
                            :disabled="loading"
                            round>查询</el-button>
                    <el-button
                            icon="el-icon-refresh"
                            size="small"
                            @click="reset('searchForm')"
                            id="reset"
                            class="reset"
                            v-if="resetShow"
                            round>重置</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>
<script>
    const files = require.context('../../form-component', true ,/\.vue$/);
    import mixins from 'ctl-web-module/src/components/mixins'
    export default {
        name: "CtlSearchForm",
        mixins:[mixins],
        props:{
            //搜索表单json结构
            searchModel: {
                type: [Array,Object],
            },
            //搜索表单值
            formData: {
                type: [Object],
                default: () => {}
            },
            //搜索按钮显隐
            searchShow: {
                type: Boolean,
                default: () => true
            },
            //重置按钮显隐
            resetShow: {
                type: Boolean,
                default: () => true
            },
            //加载
            loading:{
                type: Boolean,
                default: () => false
            },
        },
        data(){
            return{
                //组件
                modules:{},
                form:{},
                index:0,
                key:0,
            }
        },
        watch:{
            searchModel:{
                handler(curVal,oldVal){
                    this._createdData(this.searchModel,this.formData)
                },
                deep:true
            }
        },
        methods:{
            //更新key值，重新渲染
            upKey(){
                this.key++;
                this._createdData(this.searchModel,this.formData); //重新获取值
            },
            searchBtn(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let formDataDefault = this.formData;
                        this.$emit('update:formData',formDataDefault);
                        //默认分页为1
                        this.$emit('refreshTable',1);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            reset(formName){
                this.$refs[formName].resetFields();
                this.$emit('clearSelect');  //重置后清除门店的下拉列表选项
            }
        },
        created() {
            //获取小组件 start
            const modules = {};
            files.keys().forEach(key => {
                modules[key.replace(/(\.\/|\/index.vue)/g, '')] = files(key).default
            });
            this.modules = modules;
            //初始化
            this._createdData(this.searchModel,this.formData);
            // 按下回车搜索
            window.onkeydown = (e) => {
                if(window.event.keyCode === 13) {
                    this.searchBtn();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .item{
        display: inline-block;
    }
    //按钮
    .btn-active{
        background: #53D191;border-color: #53D191;color: #fff;
        &:hover{
             color:#c3f9de;
             border-color: #53D191;
             background-color: #53D191;
         }
    }
    .btn{
        display: inline-block;
        float: right;
    }
</style>
