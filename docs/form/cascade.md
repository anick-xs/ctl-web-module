# cascade 类型
``` js
  cascade:{
      key: 'cascade',
      keyType:'Array',
      elemType: 'cascade',
      name: '级联',
      props:{
          value:'value',
          label:'label', 
          children:'children',   
          disabled:'disabled',    
      },
      child:[{
          value: 'zhinan',
          label: '指南',
          children: [{
              value: 'shejiyuanze',
              label: '设计原则',
          }]
      }],
  }
```
- **属性 Attributes**

| 参数        | 说明       | 类型  | 可选值  | 默认值  |
| :------------- |:-------------| :-----:| :-----|:-----|
| key  | 组件key值，相当于`v-model = 'input'` | String |  |  |
| keyType | value类型    |    String | String，Array，Object | String |
| elemType      | 组件类型      |   String | input,select |  |
| name | 组件名称      |    String |  |  |
| child | 数据源      |    Array |  |  |
| props | 数据源key属性值      |    Object |  |  |
