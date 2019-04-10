<template>
    <div class="form-box searchForm">
        <el-form :inline="true" ref="searchForm" :model="form" label-width="80px">
            <div class="item" v-for="(model,index) in searchModel" :key="index + key">
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
                </template>
            </div>
            <div class="btn">
                <el-form-item >
                    <el-button
                            icon="el-icon-search"
                            size="small"
                            @click="searchBtn()"
                            id="searchBtn"
                            class="btn-active"
                            v-if="searchShow"
                            :loading="loading"
                            :disabled="loading"
                            round>查询</el-button>
                    <el-button
                            icon="el-icon-refresh"
                            size="small"
                            @click="reset('formDataDefault')"
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
    export default {
        name: "SearchForm",
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
        methods:{
            upKey(){

            },
            searchBtn(){

            },
            reset(){

            }
        },
        created() {
            const modules = {};
            files.keys().forEach(key => {
                modules[key.replace(/(\.\/|\/index.vue)/g, '')] = files(key).default
            });
            this.modules = modules;
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
