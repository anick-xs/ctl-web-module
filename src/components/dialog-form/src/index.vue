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
            <el-form :model="form" ref="dialogForm" label-width="100px">
                <template v-for="(model,index) in dialogModel.formModel" >
                    <template v-for="(item,itemKey) in modules">
                        <component
                                style="margin-bottom: 15px;"
                                v-if="model.elemType === itemKey && !model.show"
                                :is="item"
                                :key="index+itemKey"
                                @upKey="upKey"
                                :index="index"
                                :formData.sync="form"
                                :model="model"
                                :formModel.sync="dialogModel.formModel">
                        </component>
                        <slot v-if="model.elemType === itemKey && !model.show" :name="model.key"></slot>
                    </template>
                </template>
            </el-form>
            <div class="dialog-footer" v-if="!disabled && !dialogModel.disabled">
                <template v-for="(btn,index) in dialogModel.bottomBtn">
                    <el-button
                            :key="index"
                            :type="btn.type"
                            :size="btn.size"
                            @click.native="btn.method(thisPint, 'dialogForm', btn, form, formDataDefault)"
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
    import mixins from '@/components/mixins'
    export default {
        name: "DialogForm",
        mixins:[mixins],
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
                form:{}, //form值
                modules:{},  //组件
                key:0, //key
                dialogKey:0,
                formDataDefault: {},
            }
        },
        watch: {
            dialogFormData:{
                handler(curVal){
                    this.formData = curVal;
                    this.$emit('update:dialogFormData', this.form)
                },
                deep:true
            },
            dialogVisible:{
                handler(curVal){
                    if(curVal){
                        this._createdData(this.dialogModel.formModel,this.dialogFormData)
                    }else{
                        this.$emit('update:dialogFormData', {});
                        this.$refs.dialogForm.resetFields();
                    }
                },
                deep:true
            }
        },
        methods:{
            //更新key值，重新渲染
            upKey(){
                this.key++;
                this._createdData(this.dialogModel.formModel,this.dialogFormData); //重新获取值
            },
            //弹窗关闭事件
            dialogClose(){
                this.$refs.dialogForm.resetFields();
                this.$emit('update:dialogVisible', false);
                this.$emit('update:disabled', false);
                this.$emit('dialogClose');
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
            this._createdData(this.dialogModel.formModel,this.dialogFormData);
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
