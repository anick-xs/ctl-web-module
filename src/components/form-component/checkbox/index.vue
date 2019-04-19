/**
* User: wuxinshuang
* Date: 2019/4/19
* Time: 16:10
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules" >
        <el-checkbox v-if="model.isCheckAll" :indeterminate="model.indeterminate" v-model="model.checkAll" @change="event => handleCheckAllChange(event,model,formData)">全选</el-checkbox>
        <el-checkbox-group v-model="formData[model.key]" @change="event => handleCheckedCitiesChange(event,model)" :max="model.max?model.max:100" :disabled="formModel.disabled || model.disabled">
            <el-checkbox v-for="item in model.child" :label="item[model.colValue]" :key="item[model.colValue]">{{item[model.colName]}}</el-checkbox>
        </el-checkbox-group>
    </el-form-item>
</template>

<script>
    export default {
        name: "index",
        props:{
            formData:[Object],
            model:[Object],
            formModel:[Object],
            upKey:[String,Number]
        },
        methods:{
            handleCheckAllChange(val,model,formData) {
                if(val){
                    model.handleCheckAllChange(val,model,formData);
                    model.indeterminate = false;
                }else{
                    this.formData[model.key] =  [];
                    model.indeterminate = false;
                }
            },
            handleCheckedCitiesChange(value,model){
                let checkedCount = value.length;
                model.checkAll = checkedCount === model.child.length;
                model.indeterminate = checkedCount > 0 && checkedCount < model.child.length;
                this.$emit('upKey')
            },
        },
    }
</script>

<style scoped>

</style>
