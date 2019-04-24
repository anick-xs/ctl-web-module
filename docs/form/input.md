# input 类型
![solar](/images/input.png)
``` js
  input: {
     key: 'input',
     elemType: 'input',
     name: '关键词',
     placeholder: '输入版本号/更新内容'，
     type:'text',
     rows:2,
     maxlength:50,
     disabled:true,
     defaultValue:'',
     handleChange:(event, model, index,formData,formModel) =>{
        //do someting
     },
  },
```
- **属性 Attributes**

| 参数        | 说明       | 类型  | 可选值  | 默认值  |
| :------------- |:-------------| :-----:| :-----|:-----|
| key  | 组件key值，相当于`v-model = 'input'` | String |  |  |
| keyType | value类型    |    String | String，Array，Object | String |
| elemType      | 组件类型      |   String | input,select |  |
| name | 组件名称      |    String |  |  |
| placeholder | placeholder值      |    String |  |  |
| type | 类型      |    String |  text，textarea 和其他 原生 input 的 type 值 | text |
| rows | 输入框行数，只对 `type="textarea"` 有效      |    Number |  |  |
| maxlength | 最大输入值      |    Number |  |  |
| disabled | 禁用      |    Boolean |  |  |
| defaultValue | 默认值    |    String |  |  |

- **事件 Events**

| 事件名称        | 说明       | 回调参数  | 
| :-------------: |:-------------:| :-----:| 
| handleChange  | 选中值发生变化时触发	 | event ( 原生属性 )<br> model ( 当前model值 )<br> index ( 当前index值 )<br> formData ( 表单值 )<br> formModel ( 整个model值 )|
