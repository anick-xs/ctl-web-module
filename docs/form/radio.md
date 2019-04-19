# radio 类型
``` js
   radio: {
      key: 'radio',
      elemType: 'radio',
      name: '状态',
      defaultValue:'1',
      child: [{ value:'1',label:'a'},{ value:'2',label:'b'}],
      rules: [],
  },
```
- **属性 Attributes**

| 参数        | 说明       | 类型  | 可选值  | 默认值  |
| :------------- |:-------------| :-----:| :-----|:-----|
| key  | 组件key值，相当于`v-model = 'input'` | String |  |  |
| keyType | value类型    |    String | String，Array，Object | String |
| elemType      | 组件类型      |   String | input,select |  |
| name | 组件名称      |    String |  |  |
| defaultValue | 默认值    |    String |  |  |
| child | 子级    |   Array |  |  |
| rules | 校验      |    Array |  |  |
