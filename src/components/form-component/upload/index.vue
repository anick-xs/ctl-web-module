/**
* User: wuxinshuang
* Date: 2019/4/23
* Time: 19:38
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules" >
       <!-- <upload v-model="formData[model.key]"
                :formData="formData"
                :path="model.path"
                :type="model.type"
                :limit="model.limit"
                :zip="model.zip"
                :fileName="model.fileName"
                :only="model.only"
                :coverUrl.sync="model.coverUrl"
                @uploadOnChange="event => onChange(event, model, index,formData,formModel)"
                :disabledIs="formModel.disabled || model.disabled || disabled">
        </upload>-->
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

<style scoped>

</style>
