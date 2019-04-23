/**
* User: wuxinshuang
* Date: 2019/4/19
* Time: 18:04
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules" >
        <div class="quill areaChoose">
            <v-distpicker v-model="formData[model.key]"
                          :hideArea="model.hideArea"
                          :hideCity="model.hideCity"
                          :showCountry="model.showCountry"
                          @objData='event =>getObjData(event, model, index,formData,formModel)'
                          :DISTRICTS="model.child"
                          :disabled="model.disabled">
            </v-distpicker>
            <div class="inputAddress" v-if="model.inputKey">
                <el-input v-model="formData[model.inputKey]" :placeholder="model.placeholder" class="input" size="small"
                          :maxlength = "model.maxlength||1000"
                          :disabled="model.disabledTerm ===''?!formData[model.key]:formData[model.key] === model.disabledTerm"
                ></el-input>
            </div>
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
            index:[String],
        },
        methods:{
            getObjData(event, model, index,formData,formModel){
                if (model.handleChange && typeof model.handleChange === 'function') {
                    model.handleChange(event, model, index,formData,formModel)
                }
                if(model.objName === undefined)return;
                formData[model.objName]=event;
            },
        }
    }
</script>

<style scoped>

</style>
