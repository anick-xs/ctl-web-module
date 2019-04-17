# input 类型
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
  },
```
- **key**：***String*** 组件key值，相当于`v-model = 'input'` ；
- **elemType**：***String*** 组件类型 ；
- **name**：***String*** 组件名称 ；
- **placeholder**：***String*** input组件placeholder值 ；
- **type**：***String*** 类型，text，textarea 和其他 原生 input 的 type 值 ；
- **rows**：***Number*** 输入框行数，只对 `type="textarea"` 有效 ；
- **maxlength**：***Number*** 最大输入值 ；
- **disabled**：***Boolean*** disabled ；
