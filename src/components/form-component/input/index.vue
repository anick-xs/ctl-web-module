/**
* User: wuxinshuang
* Date: 2019/4/3
* Time: 17:34
* remark:
*/
<template>
    <div style="margin-bottom: 20px;">
        <el-form-item :label="model.name" :prop="model.key" :rules="model.rules">
            <el-input v-model="form[model.key]" size="small"></el-input>
        </el-form-item>
    </div>
</template>

<script>
    export default {
        name: "aa",
        props:{
            form:[Object],
            model:[Object],
        },
        created() {
            //console.log(this.formModel)
        }
    }
</script>

<style scoped>

</style>
