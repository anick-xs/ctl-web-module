/**
* User: wuxinshuang
* Date: 2019/4/9
* Time: 16:32
* remark:
*/
<template>
    <div>
        <dialog-form-demo></dialog-form-demo>
        <search-form-demo></search-form-demo>
    </div>
</template>

<script>
    import searchFormDemo  from './searchForm';
    import dialogFormDemo from  './dialogForm'
    export default {
        name: "demo",
        components:{
            searchFormDemo,
            dialogFormDemo
        },
        data(){
            return{}
        }
    }
</script>

<style scoped>

</style>
