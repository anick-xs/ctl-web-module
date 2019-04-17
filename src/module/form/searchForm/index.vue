/**
* User: wuxinshuang
* Date: 2019/4/11
* Time: 17:01
* remark:
*/
<template>
    <div>
        <search-form
                :searchModel="searchModel"
                :formData.sync="formData"
                :loading.sync="loading"
                @refreshTable="getList(1)"
        ></search-form>
    </div>
</template>

<script>
    export default {
        name: "index",
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
            }
        },
        methods:{
            getList(){
                console.log(this.formData)
            }
        }
    }
</script>

<style scoped>

</style>
