/**
* User: wuxinshuang
* Date: 2019/4/3
* Time: 17:48
* remark:
*/
<template>
    <div style="margin-bottom: 20px;">
        <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules" >
            <el-select
                    size="small"
                    :multiple="model.multiple && model.multiple"
                    :filterable ="model.filterable && model.filterable"
                    :popper-append-to-body="false"
                    v-model="form[model.key]"
                    @change="event => onChange(event, model, index,form,formModel)"
                    :placeholder="'请选择'+model.name"
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
    </div>
</template>

<script>
    export default {
        name: "bb",
        props:{
            form:[Object],
            model:[Object],
            formModel:[Object],
            index:[String],
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

</style>
