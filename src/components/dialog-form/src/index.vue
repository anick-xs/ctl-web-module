<template>
    <el-dialog
            append-to-body
            ref="dialog__wrapper"
            class="dialog"
            :title="dialogModel.title"
            :visible.sync="dialogVisible"
            :close-on-click-modal="false"
            :width="dialogModel.width"
            :top="dialogModel.top"
            :before-close="dialogClose"
            :key="dialogKey">
            <el-form :model="formData" ref="formData" label-width="100px">
                <div v-for="(model,index) in dialogModel.formModel" :key="index + key">
                    <template v-for="(item,itemKey) in modules">
                        <component
                                style="margin-bottom: 15px;"
                                v-if="model.elemType === itemKey && !model.show"
                                :is="item"
                                :key="index+itemKey"
                                @upKey="upKey"
                                :index="index"
                                :formData.sync="formData"
                                :model="model"
                                :formModel.sync="dialogModel.formModel">
                        </component>
                    </template>
                </div>
            </el-form>
            <div class="dialog-footer" v-if="!disabled && !dialogModel.disabled">
                <template v-for="(btn,index) in dialogModel.bottomBtn">
                    <el-button
                            :key="index"
                            :type="btn.type"
                            :size="btn.size"
                            @click.native="btn.method(thisPint, 'formData', btn, formData, createFormModel)"
                            :class="btn.className"
                            :loading="btn.loading">
                        {{btn.value}}
                    </el-button>
                </template>
            </div>
    </el-dialog>
</template>

<script>
    const files = require.context('../../form-component', true ,/\.vue$/);
    export default {
        name: "DialogForm",
        props:{
            //弹窗表单json数据
            dialogModel:{
                type:[Object],
                default: () => {}
            },
            //弹窗表单值
            dialogFormData:{
                type:[Object],
                default: () => {}
            },
            //弹窗显隐
            dialogVisible:{
                type:[Boolean],
                default: () => false
            },
            //状态
            disabled: {
                type: [Boolean],
                default: () => false
            },
        },
        data(){
            return{
                thisPint:this,  //获取this
                formData:{}, //form值
                modules:{},  //组件
                key:0, //key
                dialogKey:0,
                createFormModel: {},
            }
        },
        watch: {
            dialogFormData:{
                handler(curVal){
                    this.formData = curVal;
                    this.$emit('update:dialogFormData', this.formData)
                },
                deep:true
            },
            dialogVisible:{
                handler(curVal){
                    if(curVal){
                        this._createdData()
                    }else{
                        this.dialogKey++;
                        this.$emit('update:dialogFormData', {});
                        this.$refs.formData.resetFields();
                    }
                },
                deep:true
            }
        },
        methods:{
            //更新key值，重新渲染
            upKey(){
                this.key++;
                this._createdData(); //重新获取值
            },
            //弹窗关闭事件
            dialogClose(){
                this.$refs.formData.resetFields();
                this.$emit('update:dialogVisible', false);
                this.$emit('update:disabled', false);
                this.$emit('dialogClose');
            },
            //初始化
            _createdData(){
                let dialogFormModel = this.dialogModel.formModel;
                let formModel ={};
                for(let i in dialogFormModel){
                    if(!dialogFormModel.hasOwnProperty(i)) continue;
                    let item = dialogFormModel[i];
                    if(item.defaultValue !== undefined){
                        //如果formData有值，就不赋值
                        if(!formModel[item.key]){
                            formModel[item.key] = item.defaultValue
                        }
                    }else {
                        if(item.key){
                            /**
                             * 类型判断
                             * */
                            if(item.keyType === 'Array'){
                                formModel[item.key] = [];
                            }else if(item.keyType === 'Object'){
                                formModel[item.key] = {};
                            }else{
                                formModel[item.key] = "";
                            }
                        }
                    }
                    //如果是隐藏，则删除值
                    if(item.show){
                       delete formModel[i];
                       delete this.dialogFormData[i];
                    }
                }
                let formData = Object.assign(formModel,this.dialogFormData);
                this.createFormModel = this.deepCopy(formData); // 初始的formdata值
                this.formData = formData;
                this.$emit('update:dialogFormData', formData)
            },
        },
        created(){
            //获取小组件 start
            const modules = {};
            files.keys().forEach(key => {
                modules[key.replace(/(\.\/|\/index.vue)/g, '')] = files(key).default
            });
            this.modules = modules;
            //初始化
            this._createdData();
        }
    }
</script>

<style lang="scss" scoped>
    .dialog{
        .el-form-item{
            margin-bottom: 15px;
        }
        .el-select{
            width: 100%;
        }
        //组合 多选 和 输入框
        .checkboxAndInput{
            .el-checkbox-group{
                display: inline-block;
                margin-right: 10%;
            }
            .input{
                width: 30%;
                display: inline-block;
            }
        }
        //组合 单选 和 输入框
        .radioAndInput{
            display: flex;
            /*align-items: center;*/
            .el-radio-group{
                min-width: 250px;
                display: inline-block;
                .el-radio{
                    display: inline-block;
                    line-height: 40px;

                }
            }
            .inputBox{
                display: inline-block;
                display: flex;
                .el-form-item{
                    line-height: 40px;
                    padding-left: 10px;
                }
                .input{
                    width:120px;
                    display: inline-block;
                }
                .inputKey2{
                    padding-left: 10px;
                }
            }
        }
        //组合 下拉框 和 输入框
        .selectAndInput{

        }
        //仅多选
        .checkboxOnly{
            display: inline-block;
            margin-right: 10px;
        }
        //底部按钮
        .dialog-footer{
            text-align: center;
            padding:10px 0;
            border-top: 1px solid #dcdfe6;
        }
        //时间控件
        .el-date-editor{
            width: 100%;
            // margin-bottom: 10px;
        }
        //动态添加表格
        .addTable{
            margin: 5px 0 10px 0;
            .el-button{
                margin: 0 0 10px 0;
            }
        }
        //富文本
        .quill{
            .el-form-item__content{
                line-height: 0;
            }
            .ql-container{
                height: 240px;
            }
        }
        .imageShow{
            width: 100%;
            max-height: 480px;
            /*height: 100%;*/
            display: inline-block;
            background: red;
        }
    }
    .areaChoose{
        display: flex;
        align-items: center;

        .inputAddress{
            flex: 1;
            margin-left: 20px;
        }
    }
    //范围input输入框
    .el-input-range{
        display: inline-block;
        width: 48%
    }
    .el-input-range-icon{
        display: inline-block;
        width: 4%;
        text-align: center;
    }
    //按钮新样式
    .el-button{
        background:linear-gradient(270deg,rgba(185,185,185,1) 0%,rgba(211,211,211,1) 100%);
        border:none;
        border-radius: 50px;
        width: 100px;
        margin: 0 20px;
        &.btn-active{
            background: linear-gradient(to right, #90CAF9, #047EDF);
        }
    }

</style>
