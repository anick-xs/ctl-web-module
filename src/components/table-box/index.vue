<template>
    <div class="table-box">
        <div class="btn-content">
            <div class="btn-left">
                <template v-for="btn in leftButton">
                    <el-button  v-if=" btn.elemType === 'button' &&  ( buttonResources[btn.id] || debug )"
                                :loading="btn.loading"
                                :size="btn.size"
                                :icon="iconFun(btn.id) || 'fa '+ 'fa-'+btn.icon"
                                @click="event => btn.method(event,btn,selectChange)"
                                :id="btn.id"
                                :key="btn.id"
                                :class="btn.id || '' +' '+ btn.class || ''" >
                        {{btn.value}}
                    </el-button>
                    <a :key="btn.id" v-if=" btn.elemType === 'buttonLink' &&  ( buttonResources[btn.id] || debug )"
                        :href="btn.url" target="_blank">
                        <el-button
                                :loading="btn.loading"
                                :size="btn.size"
                                :icon="iconFun(btn.id)"
                                :id="btn.id"
                                :key="btn.id"
                                :class="btn.id || '' +' '+ btn.class || ''" >
                            {{btn.value}}
                        </el-button>
                    </a>
                    <el-upload
                            :key="btn.id"
                            style="margin:0 10px;display: inline-block;"
                            :headers="btn.headers"
                            class="upload-file"
                            v-if=" btn.elemType === 'upload' &&  ( buttonResources[btn.id] || debug )"
                            :data="btn.data"
                            :show-file-list="btn.showFileList"
                            :on-success="(response, file, fileList) => btn.uploadFileSuccess && btn.uploadFileSuccess(response, file, fileList, btn)"
                            :before-upload="file => btn.beforeFileUpload && btn.beforeFileUpload(file, btn)"
                            :on-error="event => btn.uploadFileError"
                            :action="btn.action || '' ">
                        <el-button v-show="btn.showButton" size="small"  id="importBtn"  :icon="iconFun(btn.id)"> {{btn.value}}</el-button>
                    </el-upload>
                </template>
            </div>
            <!-- 右侧按钮 -->
            <div class="btn-right">
                <template v-for="btn in rightButton">
                    <el-button
                            v-if=" btn.elemType === 'output' &&   ( buttonResources[btn.id] || debug )"
                            :size="btn.size"
                            @click="btn.method()"
                            :id="btn.id"
                            v-text="btn.value"
                            :key="btn.id"></el-button>
                </template>
                <slot name="popover"></slot>
                <div class="filter" @click="collapseChange" v-if="filter"><i class="fas fa-filter" ></i>筛选</div>
            </div>
        </div>
        <!-- 搜索表单嵌入 -->
        <el-collapse-transition>
            <div class="collapse" v-show="show">
                <slot name="search"></slot>
            </div>
        </el-collapse-transition>
        <!-- 表格 -->
        <el-table
                :data.sync="tableData"
                max-height="600"
                tooltip-effect="dark"
                stripe
                v-loading="loading"
                :key='tableKey'
                :default-sort="defaultSort"
                @selection-change="selectChangeFun"
                :span-method="objectSpanMethod"
        >
            <el-table-column
                    v-if="selection"
                    align="center"
                    type="selection"
                    width="80">
            </el-table-column>  <!--勾选框-->
            <el-table-column
                    v-if="index"
                    label="序号"
                    width="50"
                    type="index"
                    align="center"
                    sortable
                    fixed
            >
            </el-table-column>
            <template v-for="(col, index) in tableModel" >
                <el-table-column
                        v-if="col.linkType"
                        align="center"
                        :fixed="col.fixed"
                        :type="col.type"
                        :label="col.label"
                        :width="col.width"
                        :min-width="col.minWidth"
                        :key="index"
                        :sortable="col.sortable"
                        :show-overflow-tooltip="col.tooltip"
                        :style="{display:col.display}">
                    <template  slot-scope='scope'>
                        <div v-if="col.otherProp&&!scope.row[col.otherProp]">
                            <span v-if="col.formatter" :style="{color:col.color}">
                                {{col.formatter(scope.row[col.prop],scope,scope.row,scope.column)}}
                            </span>
                            <span v-else>{{scope.row[col.prop]}}</span>
                        </div>
                        <div v-else class="link-type" @click="col.method(scope)">
                            <span v-if="col.formatter" :style="{color:col.color}">
                                {{col.formatter(scope.row[col.prop],scope,scope.row,scope.column)}}
                            </span>
                            <span v-else>{{scope.row[col.prop]}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                        v-else
                        :fixed="col.fixed"
                        align="center"
                        :type="col.type"
                        :prop="col.prop"
                        :label="col.label"
                        :width="col.width"
                        :min-width="col.minWidth"
                        :key="index"
                        :sortable="col.sortable"
                        :show-overflow-tooltip="col.tooltip"
                        :style="{display:col.display}">
                    <template  slot-scope='scope'>
                        <!--原有-->
                        <div v-if="col.showType==='img'">
                            <img :src="scope.row[col.prop]" width="40" height="40">
                        </div >
                        <!--加粗-->
                        <div v-else-if="col.showType ==='bold'">
                            <div style="font-weight: bold;" v-if="scope.row[col.typeFlag]">{{scope.row[col.prop]}}</div>
                            <div v-else>{{scope.row[col.prop]}}</div>
                        </div >
                        <div v-else-if="col.showType==='html'">
                            <div v-html="scope.row[col.prop]"></div>
                        </div>
                        <div v-else-if="col.showType==='mp3'">
                            <audio :src="scope.row[col.prop]" controls="controls" >
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                        <div v-else-if="col.showType==='button'">
                            <el-button :key="i" v-for="(v,i) in col.formatter(scope)" @click="v.method(scope)" type="text" size="small">{{v.name}}</el-button>
                        </div>
                        <div v-else >
                            <div  v-if="col.formatter" v-html="col.formatter(scope.row[col.prop],scope,scope.row,scope.column) || '-'"></div>
                            <div v-else >
                                <span v-if="scope.row[col.prop]=== 0">0</span>
                                <span v-else>{{scope.row[col.prop] ? scope.row[col.prop]: '-'}}</span>
                            </div>
                        </div>
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <el-row :span="24" v-if="paginationShow">
            <div class="box-page">
                <el-pagination
                        @current-change="handleCurrentChange"
                        @size-change="handleSizeChange"
                        :current-page="pagingData.current"
                        :page-sizes="[10, 20, 30, 40, 100]"
                        :page-size="pagingData.size"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="pagingData.total">
                </el-pagination>
                <refresh-icon
                      :tableKey="tableKey"
                      @tableKey="tableKey = arguments[0]"
                      @refreshTable="refreshTableFun()"></refresh-icon>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'ctlTableBox',
        props: {
            // 表格头部prop数据
            tableModel: {
                type: [Array],
                default () {
                    return []
                }
            },
            popoverLabelData: {
                type: [Array]
            },
            tableData: {
                type: [Array]
            },
            tableShowData: {
                type: [Array],
                default () {
                    return []
                }
            },
            defaultSort: [Object],
            leftButton: {
                type: [Array]
            },
            rightButton: {
                type: [Array]
            },
            pageName: {
                type: [String]
            },
            // 分页数据
            pagingData: {
                type: [Object],
                default () {
                    return {
                        size: 10,
                        current: 1,
                        total: 0
                    }
                }
            },
            total: [String, Number],
            selection: {
                type: [Boolean],
                default () {
                    return true
                }
            },
            index: {
                type: [Boolean],
                default () {
                    return true
                }
            },
            paginationShow: {
                type: [Boolean],
                default () {
                    return true
                }
            },
            loading: {
                type: [Boolean],
                default: false
            },
            selectChange: {
                type: [Array]
            },

            objectSpanMethod: {
                type: [Function]
            },
            buttonResources: {
                type: [Object],
                default () {
                    return {}
                }
            },
            // 调试专用
            debug: {
                type: [Boolean],
                default () {
                    return false
                }
            },
            tooltip: {
                type: [Boolean],
                default () {
                    return false
                }
            },
            // 搜索表单
            searchModel: {
                type: [Object],
                default () {
                    return {}
                }
            },
            // 是否需要过滤
            filter: {
                type: [Boolean],
                default: () => true
            }
        },
        data () {
            return {
                tableKey: 0,
                tableShow: this.tableShowData,
                activeNames: ['1'],
                show: false
            }
        },
        watch: {
            tableShowData: {
                handler (newVal, oldVal) {
                    this.tableShow = newVal
                },
                deep: true
            }
        },
        methods: {
            iconFun (type) {
                let btnType
                if (type.split('-').length > 1) {
                    btnType = type.split('-')[1]
                }
                switch (btnType) {
                // 添加
                case 'add':
                    return 'fas fa-plus'
                // 编辑
                case 'edit':
                    return 'fas fa-edit'
                // 删除
                case 'delete':
                    return 'fas fa-trash-alt'
                // 启用
                case 'enable':
                    return 'fas fa-play'
                // 停用
                case 'disable':
                    return 'fas fa-stop-circle'
                // 发布
                case 'release':
                    return 'fas fa-cloud-upload-alt'
                // 发布
                case 'cancel':
                    return 'fas fa-window-close'
                // 撤回
                case 'revoke':
                    return 'fas fa-undo'
                // 上传
                case 'upload':
                    return 'fas fa-upload'
                // 下载
                case 'download':
                    return 'fas fa-download'
                // 下载模板
                case 'template':
                    return 'fas fa-download'
                // 下载模板
                case 'setting':
                    return 'fas fa-tools'
                }
            },
            handleSizeChange (val) { // 每页显示多少行
                // this.pagingData.p = 1;
                // this.pagingData.s = val;
                // 兼容
                this.pagingData.current = 1
                this.pagingData.size = val
                this.$emit('update:pagingData', this.pagingData)
                this.$emit('refreshTable')
            },
            handleCurrentChange (val) { // 当前页
                // this.pagingData.p = val;
                this.pagingData.current = val
                this.$emit('update:pagingData', this.pagingData)
                this.$emit('refreshTable')
            },
            selectChangeFun (sels) {
                this.$emit('update:selectChange', sels)
            },
            refreshTableFun () {
                this.$emit('refreshTable')
            },
            refreshPopover () {
                this.$emit('refreshPopover', this.tableShow)
            },
            collapseChange (val) {
                this.show = !this.show
            }
        },
        created () {

        },
        mounted () {

        }
    }
</script>

<style lang="scss" scoped>
    .btn-content{
        height: 30px;
        line-height: 30px;
        .btn-left{
            float: left;
        }
        .btn-right{
            float: right;
            .filter{
                font-size: 14px;
                cursor: pointer;
                i{
                    margin-right: 5px;
                    color: #18CB5E;
                }
            }
        }
    }

    //表格box
    .table-box{
        background:#fff;
       // margin-top: 10px;
        padding: 10px 20px;
        //按钮层
        .btn-content{
            margin-bottom: 10px;
        }
        //分页层
        .box-page{
            margin-top: 10px;
        }
    }
    .box-page{
        text-align: center;
        .el-pagination{
            display: inline-block;
        }
    }
    .link-type{
        color:blue;
        cursor: pointer;
    }
    audio{
        width: 100%;
        height: 40px;
    }
    .el-button{
        border: none;
        border-radius: 15px;
        &:hover,&:focus{
            color:#fff;
            background:linear-gradient(to right, #90CAF9 , #047EDF);;
        }
    }
</style>
