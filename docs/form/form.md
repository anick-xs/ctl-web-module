# 表单
- 为了兼容之前的页面，所以还是分成三个指令。

组件全局引用，不需要单独引用：

### searchForm 搜索组件
``` vue
<ctl-search-form 
    :searchModel="searchModel" 
    :formData.sync="formData" 
    :loading.sync="loading" 
    @refreshTable="getList()">
</ctl-search-form>
```
- **searchModel**：搜索表单数据源；
- **formData**：表单值；
- **loading**：按钮loading；
- **@refreshTable**：按钮触发事件；

### dialogForm 弹窗组件
``` vue
<ctl-dialog-form
    :dialogModel="dialogModel"
    :dialogFormData.sync="dialogFormData"
    :dialogVisible.sync="dialogVisible">
</ctl-dialog-form>
```
- **dialogModel**：弹窗表单数据源；
- **dialogFormData**：表单值；
- **dialogVisible**：显隐值；

### ctlForm 表单组件
``` vue
<ctl-form><ctl-form/>
```
### 实例代码
``` vue
<template>
    <div>
        <ctl-search-form
                :searchModel="searchModel"
                :formData.sync="formData"
                :loading.sync="loading"
                @refreshTable="getList(1)"
        ></ctl-search-form>
         <ctl-dialog-form
                :dialogVisible.sync="dialogVisible"
                :dialogModel="dialogModel"
                :dialogFormData.sync="dialogFormData">
        </ctl-dialog-form>
    </div>
</template>
<script>
    export default {
        name: "index",
        data(){
            return{
              /**
               ** 搜索表单
               **/
               formData:{},
               loading:false,
               searchModel:{
                  input: {
                     key: 'input',
                     elemType: 'input',
                     name: '关键词',
                     placeholder: '输入版本号/更新内容'
                  },
                  select: {
                     key: 'select',
                     elemType: 'select',
                     name: '客户端',
                     colValue: 'value',
                     colName: 'label',
                     child: [],
                 }
               },
               /**
                ** 弹窗表单
                **/
                dialogVisible:false,
                dialogFormData:{},
                dialogModel:{
                    labelWidth:'20%',
                    width:'45%',  //弹窗宽度
                    formModel:{
                        input: {
                           key: 'input',
                           elemType: 'input',
                           name: '关键词',
                           placeholder: '输入版本号/更新内容'
                        },
                        select: {
                           key: 'select',
                           elemType: 'select',
                           name: '客户端',
                           colValue: 'value',
                           colName: 'label',
                           child: [],
                        }
                    }
                }
            }
        }
    }
</script>
```
