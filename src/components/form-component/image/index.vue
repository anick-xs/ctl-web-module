/**
* User: wuxinshuang
* Date: 2019/4/19
* Time: 16:57
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules" >
        <div >
            <img :src="formData[model.key]" :width="model.width || 300" alt="" class="imageShow">
        </div>
    </el-form-item>
</template>

<script>
    export default {
        name: "index",
        props:{
            formData:[Object],
            model:[Object],
            formModel:[Object],
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .imageShow{
        display: inline-block;
        background: red;
    }
</style>
