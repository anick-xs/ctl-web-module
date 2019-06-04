# upload 类型

``` js
   upload: {
      key: 'upload',
      elemType: 'upload',
      path: 'exam/subject4',
      name: '图片',
      type: 'pictureCard',
      limit: 1,
      config: config
   }
```
- **属性 Attributes**

| 参数        | 说明       | 类型  | 可选值  | 默认值  |
| :------------- |:-------------| :-----:| :-----|:-----|
| key  | 组件key值，相当于`v-model = 'input'` | String |  |  |
| keyType | value类型    |    String | String，Array，Object | String |
| elemType      | 组件类型      |   String | input,select |  |
| name | 组件名称      |    String |  |  |
| type | 组件类型      |    String |  |  |
| limit | 限制数量      |    String |  |  |
| config | 配置      |    String |  |  |
