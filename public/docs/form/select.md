# select 类型
![solar](/images/select.png)
``` js
  select: {
     key: 'select',
     elemType: 'select',
     name: '关键词',
     colValue: 'value',
     colName: 'label',
     child:[],
     placeholder: '输入版本号/更新内容'，
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
| child | 子级    |   Array |  |  |
| colValue | 子级-value    |   String |  |  |
| colName | 子级-label    |   String |  |  |
| placeholder | placeholder值      |    String |  |  |
| disabled | 禁用      |    Boolean |  |  |
| multiple | 是否多选      |    Boolean |  | false |
| filterable | 是否可搜索      |    Boolean |  | false |
| defaultValue | 默认值    |    String |  |  |

- **事件 Events**

| 事件名称        | 说明       | 回调参数  | 
| :-------------: |:-------------:| :-----:| 
| handleChange  | 选中值发生变化时触发	 | event ( 原生属性 )<br> model ( 当前model值 )<br> index ( 当前index值 )<br> formData ( 表单值 )<br> formModel ( 整个model值 )|
