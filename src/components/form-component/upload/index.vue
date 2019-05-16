/**
* User: wuxinshuang
* Date: 2019/4/23
* Time: 19:38
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules" >
        <upload v-model="formData[model.key]"
                :formData="formData"
                :path="model.path"
                :type="model.type"
                :limit="model.limit"
                :zip="model.zip"
                :fileName="model.fileName"
                :only="model.only"
                :coverUrl.sync="model.coverUrl"
                :config="model.config"
                :model="model"
                @uploadOnChange="event => onChange(event, model, index,formData,formModel)"
                :disabledIs="formModel.disabled || model.disabled">
        </upload>
    </el-form-item>
</template>

<script>
    import upload from './upload'
    export default {
        name: "index",
        components:{
          upload
        },
        props:{
            formData:[Object],
            model:[Object],
            formModel:[Object],
        },
        methods:{

        },
        created(){

        }
    }
</script>

<style scoped>

</style>
