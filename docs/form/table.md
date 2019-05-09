# 表格

### tableBox 表格组件
``` vue
<ctl-table-box
    :debug="true"
    :loading="loading"
    :tableModel="tableModel"
    :tableData="tableData"
    :leftButton="leftButton"
    :rightButton="rightButton"
    :index="false"
    :pagingData="pagingData"
    :selectChange.sync="selectChange"
    @refreshTable="getList()">
</ctl-table-box>
```
- **debug**：无权限时，调试专用(后期会删除)；
- **loading**：loading；
- **tableModel**：表格model；
- **tableData**：表格数据源；
- **leftButton**：表格顶部-左侧按钮；
- **rightButton**：表格顶部-右侧按钮；
- **index**：表格默认排序-是否开启；
- **pagingData**：表格分页数据源；
- **selectChange**：表格勾选触发事件；
- **refreshTable**：表格刷新触发事件；

### 实例代码
``` vue
<template>
  <div>
    <ctl-table-box
        :debug="true"
        :loading="loading"
        :tableModel="tableModel"
        :tableData="tableData"
        :leftButton="leftButton"
        :index="false"
        :rightButton="rightButton"
        :pagingData="pagingData"
        :selectChange.sync="selectChange"
        @refreshTable="getList()">
    </ctl-table-box>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                /**
                 * 表格
                **/
                loading:false,
                tableData:[],
                pagingData:{},
                selectChange:[],
                leftButton:[
                    {
                        type: 'primary',
                        size: 'small',
                        id: 'videolist-add',
                        loading: false,
                        value: '新增',
                        elemType: 'button',
                        method: () => {
                            console.log(1)
                        }
                    },
                ],
                rightButton:[],
                tableModel:[
                    {
                        prop: 'versionName',
                        label: '所属城市'
                    },
                    {
                        prop: 'versionName1',
                        label: '驾校简称'
                    },
                    {
                        prop: 'versionName1',
                        label: '行程节点'
                    },
                    {
                        prop: 'versionName1',
                        label: '状态'
                    },
                    {
                        prop: 'versionName1',
                        label: '创建人'
                    },
                    {
                        prop: 'versionName1',
                        label: '创建时间'
                    },
                ],

            }
        },
        methods:{
            getList(){

            }
        }
    }
</script>
```





