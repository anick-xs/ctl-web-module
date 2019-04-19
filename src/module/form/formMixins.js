export default {
    data() {
        return {
            model: {
                //选择器
                category: {
                    key: 'category',
                    elemType: 'select',
                    name: '活动分类',
                    colValue: 'id',
                    colName: 'roleName',
                    child: [{ id:'1',roleName:'a'},{ id:'2',roleName:'b'}],
                    handleChange:(event, model, index,formData,formModel) =>{
                        formModel.userName.show = event === '1';
                    }
                },
                //输入框
                userName: {
                    key: 'userName',
                    elemType: 'input',
                    name: '姓名',
                },
                //范围输入框
                inputRange: {
                    key: 'inputRange',
                    keyType:'Array',
                    elemType: 'inputRange',
                    name: '随机值',
                },
                //级联选择器
                cascade:{
                    key: 'cascade',
                    keyType:'Array',
                    elemType: 'cascade',
                    name: '级联',
                    child:[{
                        value: 'zhinan',
                        label: '指南',
                        children: [{
                            value: 'shejiyuanze',
                            label: '设计原则',
                        }]
                    }],
                },
                //单选框和输入框组合
                radioAndInput:{
                    radioKey:'radioAndInput',
                    elemType:"radioAndInput",
                    name:'活动人数',
                    radioDefaultValue:false,
                    disabledKey:true,
                    radioArray:[{label:false,value:'不限'},{label:true,value:'有限'}],
                    //第一个输入框
                    inputFirstKey:'inputFirstKey',
                    inputFirstDefaultValue:'',
                    inputFirstTitleBefore:'前面',
                    inputFirstTitleAfter:'后面',
                    inputFirstPlaceholder:'请输入',
                    inputFirstRules:[],
                    //第二个输入框
                    inputLastKey:'inputLastKey',
                    inputLastDefaultValue:'',
                    inputLastTitleBefore:'前面',
                    inputLastTitleAfter:'后面',
                    inputLastPlaceholder:'请输入',
                    inputLastRules:[],
                },
                //单选框
                radio: {
                    key: 'radio',
                    elemType: 'radio',
                    name: '状态',
                    defaultValue:'1',
                    child: [{ value:'1',label:'a'},{ value:'2',label:'b'}],
                    rules: [],
                },
                //多选框
                checkbox:{
                    key:'checkbox',
                    keyType:'Array',
                    isCheckAll:true,
                    checkAll:false,
                    isIndeterminate:false,
                    elemType:"checkbox",
                    name:'接收对象',
                    colValue:'value',
                    colName:'label',
                    child:[{ value:'1',label:'a'},{ value:'2',label:'b'}],
                    rules:[],
                    handleCheckAllChange:(event,model,formData)=>{
                        let arr = [];
                        model.child.map(v=>{
                            arr.push(v.value)
                        });
                        formData.checkbox = event ? arr : [];
                    }
                },
                image:{
                    key:'image',
                    elemType:"image",
                    name:'图片',
                    width:'300',
                    defaultValue: 'http://yundianbo.banbanjd.cn/image/cover/727E90E45A4D41C19BCB1D77ECD25EFF-6-2.png'
                }
            },
        }
    },
    methods:{

    }
}
