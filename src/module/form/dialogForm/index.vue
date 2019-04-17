/**
* User: wuxinshuang
* Date: 2019/4/11
* Time: 17:02
* remark:
*/
<template>
    <div>
        <el-button size="small" @click="btn">弹窗表单</el-button>
        <dialog-form
                :dialogVisible.sync="dialogVisible"
                :dialogModel="dialogModel"
                :dialogFormData.sync="dialogFormData">
        </dialog-form>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                /**
                 * 弹窗
                 * */
                dialogVisible:false,
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
                            handleChange:(event, model, index,formData,formModel) =>{
                                formModel.userName.show = event === '1';
                            }
                        },
                        userName: {
                            key: 'userName',
                            elemType: 'input',
                            name: '姓名',
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
            },
        }
    }
</script>

<style scoped>

</style>
