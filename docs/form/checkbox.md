# checkbox 类型
![solar](/ui/docs/images/checkbox.png)
``` js
   checkbox:{
      key:'checkbox',
      keyType:'Array',
      elemType:"checkbox",
      name:'接收对象',
      isCheckAll:true,
      checkAll:false,
      indeterminate:false,
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
```
- **属性 Attributes**

| 参数        | 说明       | 类型  | 可选值  | 默认值  |
| :------------- |:-------------| :-----:| :-----|:-----|
| key  | 组件key值，相当于`v-model = 'input'` | String |  |  |
| keyType | value类型    |    String | String，Array，Object | String |
| elemType      | 组件类型      |   String | input,select |  |
| name | 组件名称      |    String |  |  |
| isCheckAll | 是否全选      |    Boolean |  |  |
| checkAll | 全选框是否勾选      |    Boolean |  |  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制      |    Boolean |  |  |
| colValue | child的value key值      |    String |  |  |
| colName | child的label key值      |    String |  |  |
| child | child的数据源      |    Array |  |  |
| rules | 校验      |    Array |  |  |

- **事件 Events**

| 事件名称        | 说明       | 回调参数  | 
| :-------------: |:-------------:| :-----:| 
| handleCheckAllChange  | 选中值发生变化时触发	 | event ( 原生属性 )<br> model ( 当前model值 )<br> formData ( 表单值 )|
