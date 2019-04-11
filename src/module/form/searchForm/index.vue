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
                            console.log(event, model, index,formData,formModel)
                            if(event === '1'){
                                formModel.status.show = true
                            }else{
                                formModel.status.show = false
                            }
                        }
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
