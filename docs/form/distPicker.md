# distPicker 类型
![solar](/ui/docs/images/distPicker.png)
``` js
   regionCodeArr: {
      key: 'regionCodeArr',
      keyType:'Array',
      elemType: 'distPicker',
      name: '所属地区',
      lastCode:'regionCode',
      colValue: 'regionCode',
      colName: 'regionName',
      hideArea:true,
      showCountry:true,
      child:[]
  },
```
- **属性 Attributes**

| 参数        | 说明       | 类型  | 可选值  | 默认值  |
| :------------- |:-------------| :-----:| :-----|:-----|
| key  | 组件key值，相当于`v-model = 'input'` | String |  |  |
| keyType | value类型    |    String | String，Array，Object | String |
| elemType      | 组件类型      |   String | input,select |  |
| name | 组件名称      |    String |  |  |
| lastCode | 最后一个值(云霞姐专用)      |    String |  |  |
