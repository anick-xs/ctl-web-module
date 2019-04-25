/**
* User: wuxinshuang
* Date: 2019/4/25
* Time: 14:10
* remark:
*/
<template>
    <div>
        <ctl-table-box
                :debug="true"
                :loading="loading"
                :tableModel="tableModel"
                :tableData="tableData"
                :index="false"
                :leftButton="leftButton"
                :rightButton="rightButton"
                :selectChange.sync="selectChange"
                :pagingData="pagingData"
                @refreshTable="getList()"
        >
        </ctl-table-box>
    </div>
</template>

<script>
    export default {
        name: "tableIndex",
        data(){
            return{
                /**
                 * 表格盒子
                 * */
                selectChange:[],
                tableData:[],
                loading:false,
                pagingData:{},
                //表格-按钮
                leftButton:[
                    {
                        type: 'primary',
                        size: 'small',
                        id: 'videolist-add',
                        loading: false,
                        value: '新增',
                        elemType: 'button',
                        method: () => {
                            this.dialogVisible = true;
                            this.dialogModel.title='新增视频';
                            this.type = 1;
                        }
                    },
                    {
                        type: 'primary',
                        size: 'small',
                        id: 'videolist-edit',
                        loading: false,
                        value: '编辑',
                        elemType: 'button',
                        method: (event,btn) => {
                            if(this.selectTableData(this.selectChange,true,'编辑')) {
                                this.dialogVisible = true;
                                this.dialogModel.title='编辑视频';
                                this.type = 2;
                                console.log(1)
                            }
                        }
                    },
                    {
                        type: 'danger',
                        size: 'small',
                        id: 'videolist-delete',
                        loading: false,
                        value: '删除',
                        elemType: 'button',
                        method:() =>{
                            let selectData = this.selectChange;
                            if(this.selectTableData(this.selectChange,false,'删除')){
                                //单个删除
                                this.$confirm('此操作将删除该条数据, 是否继续?', '提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    type: 'warning'
                                }).then(() => {
                                    console.log(1)
                                }).catch(() => {
                                    this.$message({
                                        type: 'info',
                                        message: '已取消'
                                    });
                                });
                            }
                        }
                    }
                ],
                rightButton:[],
                //表格-Model
                tableModel:[
                    {
                        prop: 'subject',
                        label: '科目',
                    },
                    {
                        prop: 'name',
                        label: '视频名称',
                        linkType:true,
                        method: (scope) => {

                        }
                    },
                    {
                        prop: 'clickRate',
                        label: '点击量'
                    },
                    {
                        prop: 'likeNum',
                        label: '点赞数'
                    },
                    {
                        prop: 'status',
                        label: '状态',
                    },
                    {
                        prop: 'reason',
                        label: '备注',
                    },
                    {
                        prop: 'createdUser',
                        label: '创建人'
                    },
                    {
                        prop: 'createdTime',
                        label: '创建时间',
                    }
                ],
            }
        },
        methods:{
            getList(){

            }
        }
    }
</script>

<style scoped>

</style>
