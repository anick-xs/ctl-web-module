/**
* User: wuxinshuang
* Date: 2019/4/18
* Time: 14:07
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules" >
        <el-cascader
                size="small"
                v-model="formData[model.key]"
                :props="model.props"
                :options="model.child">
        </el-cascader>
    </el-form-item>
</template>

<script>
    export default {
        name: 'index',
        props: {
            formData: [Object],
            model: [Object],
            formModel: [Object]
        },
        created () {

        }
    }
</script>

<style scoped>
    .el-cascader{
        width: 100%;
    }
</style>
