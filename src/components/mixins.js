export default {
    data(){
        return{
            formDataDefault: {},
        }
    },
    methods:{
        //初始化
        _createdData(formModel,formData){
            let form = {};
            for(let i in formModel){
                if(!formModel.hasOwnProperty(i)) continue;
                let item = formModel[i];
                //如果组件有默认值，就赋值
                if( item.defaultValue !== undefined  || item.defaultStartData || item.defaultEndData || item.radioDefaultValue !== undefined || item.inputFirstDefaultValue || item.inputLastDefaultValue){
                    if(item.key){
                        form[item.key] = item.defaultValue;
                    }else  if(item.startData|| item.endData){
                        form[item.startData] = item.defaultStartData;
                        form[item.endData] = item.defaultEndData;
                    //单选框和输入框,因为这个组件有三个默认值
                    }else if( item.radioDefaultValue  !== undefined || item.inputFirstDefaultValue || item.inputLastDefaultValue){
                        form[item.radioKey] = item.radioDefaultValue;
                        form[item.inputFirstKey] = item.inputFirstDefaultValue;
                        form[item.inputLastKey] = item.inputLastDefaultValue;
                    }
                }else{
                    if(item.key){
                        //类型判断
                        if(item.keyType === 'Array'){
                            form[item.key] = [];
                        }else if(item.keyType === 'Object'){
                            form[item.key] = {};
                        }else if(item.keyType === 'Null'){
                            form[item.key] = null;
                        }else {
                            form[item.key] = '';
                        }
                    //如果是时间
                    }else if(!form[item.startData] && item.startData || !form[item.endData] && item.endData){
                        form[item.startData] = '';
                        form[item.endData] = '';
                    }else if(  !form[item.radioKey] && item.radioKey ||  !form[item.inputFirstKey] && item.inputFirstKey || !form[item.inputLastKey] && item.inputLastKey){
                        form[item.radioKey] = '';
                        form[item.inputFirstKey] = '';
                        form[item.inputLastKey] = '';
                    }
                }
                //显隐，删除隐藏值
                if(item.show){
                    delete form[i];
                    delete formData[i];
                }
            }
           // console.log(formModel,form)
            let formDataDefault = Object.assign(form,formData);
            this.form = formDataDefault; //重新赋值
            this.$emit('update:formData', form);  //搜索表单监听
            this.$emit('update:dialogFormData', formDataDefault); //弹窗表单监听
        },
    }
}
