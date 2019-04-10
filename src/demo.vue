/**
* User: wuxinshuang
* Date: 2019/4/9
* Time: 16:32
* remark:
*/
<template>
    <div>
        <el-button size="small" @click="btn">弹窗表单</el-button>
       <!-- <dialog-form :visible.sync="visible" :module="dialogModel"></dialog-form>-->
        <dialog-form
                :dialogVisible.sync="dialogVisible"
                :dialogModel="dialogModel"
                :dialogFormData.sync="dialogFormData">
        </dialog-form>
        <search-form
                :searchModel="searchModel"
                :formData.sync="formData"
                :loading.sync="loading"
        ></search-form>
    </div>
</template>

<script>
    export default {
        name: "demo",
        data(){
            return{
                /**
                 * 搜索
                 * */
                formData:{},
                loading:false,
                searchModel:{
                    category: {
                        key: 'category',
                        elemType: 'select',
                        name: '活动分类',
                        colValue: 'value',
                        colName: 'label',
                        child:[]
                        //child: this.turnArray(selectChildData.stage, 'label', 'value', true),
                    },
                    status: {
                        key: 'status',
                        elemType: 'select',
                        name: '状态',
                        colValue: 'value',
                        colName: 'label',
                        child:[]
                       // child: this.turnArray(selectChildData.publish, 'label', 'value', true),
                    },
                    query: {
                        key: 'query',
                        elemType: 'input',
                        name: '关键字',
                        placeholder:'请输入活动名称',
                    },
                },
                /**
                 * 弹窗
                 * */
                dialogVisible:true,
                dialogFormData:{},
                dialogModel: {
                    title:'组件',
                    labelWidth: '14%',
                    width: '45%',
                    formModel: {
                        roleIdList: {
                            key: 'roleIdList',
                            elemType: 'select',
                            name: '角色',
                            colValue: 'id',
                            colName: 'roleName',
                            child: [{ id:'1',roleName:'a'},{ id:'2',roleName:'b'}],
                            defaultValue: [],
                            handleChange:(event, model, index,formData,formModel) =>{
                                console.log(event, model, index,formData,formModel)
                                if(event === '1'){
                                    formModel.userName.show = true
                                }else{
                                    formModel.userName.show = false
                                }
                            }
                        },
                        userName: {
                            key: 'userName',
                            elemType: 'input',
                            name: '姓名',
                           // rules: this.check_rules({required: true}),
                        },

                    },
                    //底部按钮配置
                    bottomBtn:[
                        {
                            value:'保存',
                            loading:false,
                            className:'btn-active',
                            type:'primary',
                            size:'small',
                            method:(_this,formName,btn) =>{
                                _this.$refs[formName].validate((valid) => {
                                    if (valid) {
                                        console.log(this.dialogFormData)
                                    }
                                    else {
                                        return false;
                                    }
                                });
                            }
                        },
                        {
                            value:'取消',
                            type:'primary',
                            size:'small',
                            method: (_this, formName, btn, formData, createFormModel) => {
                                this.dialogVisible = false;
                                _this.$refs[formName].resetFields();
                            }
                        }
                    ],
                }
            }
        },
        methods:{
            btn(){
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>

</style>
