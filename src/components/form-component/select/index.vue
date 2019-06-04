/**
* User: wuxinshuang
* Date: 2019/4/3
* Time: 17:48
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules" >
        <el-select
                size="small"
                :multiple="model.multiple && model.multiple"
                :filterable ="model.filterable && model.filterable"
                :popper-append-to-body="false"
                v-model="formData[model.key]"
                @change="event => onChange(event, model, index,formData,formModel)"
                :placeholder="model.placeholder || ('请选择'+model.name)"
                :disabled="model.disabled"
                :prop="model.key">
            <el-option v-for=" (opt,index) in model.child "
                       :value="opt[model.colValue]"
                       :label="opt[model.colName]"
                       :disabled="opt.disabled"
                       :key="index">
            </el-option>
        </el-select>
    </el-form-item>
</template>

<script>
    export default {
        name: "bb",
        props:{
            formData:[Object],
            model:[Object],
            formModel:[Object],
            index:[String,Number],
            upKey:[String,Number]
        },
        methods:{
            onChange(event, model, index,form,formModel){
                if (model.handleChange && typeof model.handleChange === 'function') {
                    model.handleChange(event, model, index,form,formModel);
                    this.$emit('upKey')
                }
            }
        },
        created() {

        }
    }
</script>

<style scoped>
    .el-select{
        width: 100%;
    }
</style>
