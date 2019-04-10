/**
* User: wuxinshuang
* Date: 2019/4/3
* Time: 17:34
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules" v-if="!model.isShow">
        <el-input size="small"
                  :type="model.type"
                  :rows="model.rows"
                  :maxlength="model.maxlength"
                  v-model.trim="formData[model.key]"
                  :placeholder="'请输入'+model.name"
                  :disabled="formModel.disabled || model.disabled"
                  :clearable="!formModel.disabled">
        </el-input>
    </el-form-item>
</template>

<script>
    export default {
        name: "aa",
        props:{
            formData:[Object],
            model:[Object],
            formModel:[Object],
        },
        created() {

        }
    }
</script>

<style scoped>

</style>
