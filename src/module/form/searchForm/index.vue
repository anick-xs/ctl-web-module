/**
* User: wuxinshuang
* Date: 2019/4/11
* Time: 17:01
* remark:
*/
<template>
    <div>
        <ctl-search-form
                :searchModel="searchModel"
                :formData.sync="formData"
                :loading.sync="loading"
                @refreshTable="getList(1)">
        </ctl-search-form>
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
                 * 搜索
                 * */
                formData:{},
                loading:false,
                searchModel:{},
            }
        },
        methods:{
            getList(){
                console.log(this.formData)
            }
        },
        created() {
            this.searchModel = this.model;
        }
    }
</script>

<style scoped>

</style>
