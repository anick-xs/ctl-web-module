/**
* User: wuxinshuang
* Date: 2019/4/19
* Time: 16:00
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules" >
        <div>
            <el-radio-group v-model="formData[model.key]" :style="{width:model.width}" :disabled="formModel.disabled || model.disabled">
                <el-radio v-for="(item,index) in model.child" :label="item.value" :key="index" :disabled="item.disabled">{{item.label}}</el-radio>
            </el-radio-group>
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
        },
    }
</script>

<style scoped>

</style>
