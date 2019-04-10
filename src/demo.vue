/**
* User: wuxinshuang
* Date: 2019/4/9
* Time: 16:32
* remark:
*/
<template>
    <div>
        <el-button size="small">弹窗表单</el-button>
        <dialog-form :visible.sync="visible" :module="dialogModel"></dialog-form>
    </div>
</template>

<script>
    export default {
        name: "demo",
        data(){
            return{
                visible:true,
                /**
                 * 弹窗
                 * */
                dialogModel: {
                    labelWidth: '14%',
                    width: '45%',
                    formModel: {
                        account: {
                            key: 'account',
                            elemType: 'input',
                            name: '账号',
                              rules: this.check_rules({required: true, min: 8, max: 32, type: 'letterAndNumber'}),
                        },
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
                            //  rules: this.check_rules({required: true, min: 2, max: 32}),
                        },
                        phone: {
                            key: 'phone',
                            elemType: 'input',
                            name: '手机号码',
                            // rules: this.check_rules({required: true, min: 11, max: 11, type: 'number'}),
                        },
                    },
                }
            }
        }
    }
</script>

<style scoped>

</style>
