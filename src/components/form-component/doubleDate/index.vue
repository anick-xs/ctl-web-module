/**
* User: wuxinshuang
* Date: 2019/4/23
* Time: 17:45
* remark:
*/
<template>
    <div class="doubleDate">
        <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules">
            <el-form-item :prop="model.startData" >
                <el-date-picker
                        size="small"
                        v-model="formData[model.startData]"
                        :type="model.type"
                        :value-format="model.valueFormat"
                        placeholder="请选择">
                </el-date-picker>
            </el-form-item>
            <el-form-item :prop="model.endData" >
                <el-date-picker
                        size="small"
                        v-model="formData[model.endData]"
                        :type="model.type"
                        :value-format="model.valueFormat"
                        default-time="23:59:59"
                        placeholder="请选择">
                </el-date-picker>
            </el-form-item>
        </el-form-item>
    </div>
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
    .doubleDate{
        .el-form-item{
            margin-right: 0;
            display: inline-block;
        }
        display: inline-block;
    }
</style>
