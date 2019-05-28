/**
* User: wuxinshuang
* Date: 2019/4/3
* Time: 17:34
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules">
        <el-input size="small"
                  :type="model.type"
                  :rows="model.rows"
                  :maxlength="model.maxlength"
                  v-model.trim="formData[model.key]"
                  :placeholder="model.placeholder || ('请输入'+model.name)"
                  :disabled="formModel.disabled || model.disabled"
                  :clearable="!formModel.disabled">
        </el-input>
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
        watch: {
            formData: {
                handler (val) {
                    // 如果是number类型,强制转换
                    if (this.model.modelType === 'number') {
                        this.formData[this.model.key] = parseInt(val[this.model.key])
                    }
                },
                deep: true
            }
        },
        created () {

        }
    }
</script>

<style lang="scss" scoped>
    .el-radio-group{
        .el-radio{
            margin-right: 5px;
        }
    }

</style>
