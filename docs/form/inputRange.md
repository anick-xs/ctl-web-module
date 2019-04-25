# inputRange 类型
![solar](/ui/docs/images/inputRange.png)
``` js
  inputRange: {
     key: 'inputRange',
     elemType: 'inputRange',
     name: '随机值',
     placeholder:['请输入','请输入'],
     type:['text','text'],
     rows:[1,2],
     maxlength:[5,5],
     disabled:[true,true],
  },
```

- **属性 Attributes**

| 参数        | 说明       | 类型  | 可选值  | 默认值  |
| :------------- |:-------------| :-----:| :-----|:-----|
| key  | 组件key值，相当于`v-model = 'input'` | String |  |  |
| keyType | value类型    |    String | String，Array，Object | String |
| elemType      | 组件类型      |   String | input,select |  |
| name | 组件名称      |    String |  |  |
| placeholder | placeholder值      |    Array |  |  |
| type | 类型      |    Array |  text，textarea 和其他 原生 input 的 type 值 | text |
| rows | 输入框行数，只对 `type="textarea"` 有效      |    Array |  |  |
| maxlength | 最大输入值      |    Array | number |  |
| disabled | 禁用      |    Array | Boolean |  |

