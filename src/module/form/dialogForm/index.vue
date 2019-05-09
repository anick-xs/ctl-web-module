/**
* User: wuxinshuang
* Date: 2019/4/11
* Time: 17:02
* remark:
*/
<template>
    <div>
        <el-button size="small" @click="btn">弹窗表单</el-button>
        <ctl-dialog-form
                :dialogVisible.sync="dialogVisible"
                :dialogModel="dialogModel"
                :dialogFormData.sync="dialogFormData">
        </ctl-dialog-form>
    </div>
</template>

<script>
    import mixins from 'ctl-web-module/src/module/form/formMixins'
    export default {
        name: "index",
        mixins:[mixins],
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
                    formModel: {},
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
        },
        created() {
            this.dialogModel.formModel = this.model;
        }
    }
</script>

<style scoped>

</style>
