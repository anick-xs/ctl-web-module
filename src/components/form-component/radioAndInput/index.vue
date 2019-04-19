<template>
    <el-form-item :label="model.name" required>
        <div class="radioAndInput">
            <!-- 单选框 -->
            <el-radio-group v-model="formData[model.radioKey]" :style="{width:model.width}">
                <el-radio v-for="(item,index) in model.radioArray" :label="item.label" :key="index">{{item.value}}</el-radio>
            </el-radio-group>
            <!-- 输入框 -->
            <div class="inputBox">
                <el-form-item class="warp first input-item" v-if="model.inputFirstKey" :prop="model.inputFirstKey" :rules="model.inputFirstRules">
                    <span class="inputFirstTitleBefore" v-if="model.inputFirstTitleBefore">{{ model.inputFirstTitleBefore }}</span>
                    <el-input v-model="formData[model.inputFirstKey]" v-if="model.inputFirstKey"
                              :disabled="model.disabledKey ===''?!formData[model.radioKey]:formData[model.radioKey] === model.disabledKey"
                              :placeholder="model.inputFirstPlaceholder" class="input" size="small">
                    </el-input>
                    <span class="inputFirstTitleAfter" v-if="model.inputFirstTitleAfter">{{ model.inputFirstTitleAfter }}</span>
                </el-form-item>
                <el-form-item class="warp last  input-item" v-if="model.inputLastKey" :prop="model.inputLastKey" :rules="model.inputLastRules">
                    <span class="inputLastTitleBefore" v-if="model.inputLastTitleBefore" style="margin-left: 10px;">{{ model.inputLastTitleBefore }}</span>
                    <el-input v-model="formData[model.inputLastKey]" v-if="model.inputLastKey"
                              :disabled="model.disabledKey ===''?!formData[model.radioKey]:formData[model.radioKey] === model.disabledKey"
                              :placeholder="model.inputLastPlaceholder" class="input" size="small">
                    </el-input>
                    <span class="inputLastTitleAfter" v-if="model.inputLastTitleAfter">{{ model.inputLastTitleAfter }}</span>
                </el-form-item>
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
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .radioAndInput{
        .el-form-item__error{
            left: 10px;
        }
        .el-form-item{
            margin-right: 0;
        }
        .el-radio{
            margin-right: 10px;
        }
        .el-radio:last-child{
            margin-left: 10px;
        }
        .warp{
            white-space : nowrap
        }
        .el-radio-group{
            float: left;
            height: 40px;
            line-height: 50px;
        }
        .inputBox{
            margin-left: 5px;
            float: left;
            .input-item{
                display: inline-block;
            }
            .input{
                width: 150px;
                margin-left: 10px;
                margin-right: 10px;
            }
        }
    }
</style>
