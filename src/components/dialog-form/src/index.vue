<template>
    <div>
        <el-dialog title="提示" :visible.sync="visible" width="30%" :before-close="handleClose">
            <el-form :model="form" ref="form" label-width="100px">
                <div v-for="(model,index) in module.formModel" :key="index + key">
                    <template v-for="(item,itemKey) in modules">
                        <component
                                v-if="model.elemType === itemKey && !model.show"
                                :is="item"
                                :key="index+itemKey"
                                @upKey="upKey"
                                :index="index"
                                :form="form"
                                :model="model"
                                :formModel.sync="module.formModel">
                        </component>
                    </template>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    const files = require.context('../../form-component', true ,/\.vue$/);
    export default {
        name: "DialogForm",
        props:{
            visible:[Boolean],
            module:[Object],
        },
        data(){
            return{
                form:{},
                modules:{},
                key:0
            }
        },
        methods:{
            //更新key值，重新渲染
            upKey(){
                this.key++;
            },
            handleClose(){
                this.$emit('update:visible', false)
            },
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.form)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        },
        created(){
            const modules = {};
            files.keys().forEach(key => {
                modules[key.replace(/(\.\/|\/index.vue)/g, '')] = files(key).default
            });
            this.modules = modules;
        }
    }
</script>

<style scoped>

</style>
