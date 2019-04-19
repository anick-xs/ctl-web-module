/**
* User: wuxinshuang
* Date: 2019/4/18
* Time: 13:31
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules">
        <el-input size="small"
                  class="el-input-range"
                  :type="model.type && model.type[0]"
                  :rows="model.rows && model.rows[0]"
                  :maxlength="model.maxlength && model.maxlength[0]"
                  v-model.trim="formData[model.key][0]"
                  :placeholder="model.placeholder && model.placeholder[0]"
                  :disabled="formModel.disabled || (model.disabled && model.disabled[0])"
                  :clearable="!formModel.disabled">
        </el-input>
        <span class="el-input-range-icon">~</span>
        <el-input size="small"
                  class="el-input-range"
                  :type="model.type && model.type[1]"
                  :rows="model.rows && model.rows[1]"
                  :maxlength="model.maxlength && model.maxlength[1]"
                  v-model.trim="formData[model.key][1]"
                  :placeholder="model.placeholder && model.placeholder[1]"
                  :disabled="formModel.disabled || (model.disabled && model.disabled[1])"
                  :clearable="!formModel.disabled">
        </el-input>
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
    }
</script>

<style lang="scss" scoped>
    //范围input输入框
    .el-input-range{
        display: inline-block;
        width: 48%
    }
    .el-input-range-icon{
        display: inline-block;
        width: 4%;
        text-align: center;
    }
</style>
