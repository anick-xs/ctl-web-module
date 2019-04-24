# radioAndInput 类型
![solar](/images/radioAndInput.png)
``` js
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
  }
```
- **属性 Attributes**

| 参数        | 说明       | 类型  | 可选值  | 默认值  |
| :------------- |:-------------| :-----:| :-----|:-----|
| radioKey  | 组件radio值 | Boolean |  |  |
| elemType      | 组件类型      |   String | input,select |  |
| name | 组件名称      |    String |  |  |
| radioDefaultValue | radio默认值    |    Boolean |  |  |
| disabledKey | radio值等于disabledKey,输入框就disabled    |     |  |  |
| radioArray | radio值  |  Array |  |  |
| **前面的input** |  |   |  |  |
| inputFirstKey | 前面的input key值  |  String |  |  |
| inputFirstDefaultValue | 前面的input 默认值  |  String |  |  |
| inputFirstTitleBefore | 前面的input 的前面的字  |  String |  |  |
| inputFirstTitleAfter | 前面的input 的后面的字  |  String |  |  |
| inputFirstPlaceholder | 前面的input 的Placeholder  |  String |  |  |
| inputFirstRules | 前面的input 的检验规则  |  String |  |  |
| **后面的input** |  |   |  |  |
| inputLastKey | 后面的input key值  |  String |  |  |
| inputLastDefaultValue | 后面的input 默认值  |  String |  |  |
| inputLastTitleBefore | 后面的input 的前面的字  |  String |  |  |
| inputLastTitleAfter | 后面的input 的前面的字  |  String |  |  |
| inputLastPlaceholder | 后面的input 的Placeholder  |  String |  |  |
| inputLastRules | 后面的input 的检验规则  |  String |  |  |























