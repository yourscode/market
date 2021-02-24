
<template>
    <el-table :data="tableData"
              border
              stripe
              style="width: 100%"
    >
        <el-table-column
            v-for="(th, key) in tableColumnsConfig"
            :key="key"
            :prop="th.prop"
            :label="th.label"
            :fixed="th.fixed"
            :width="th.width"
            :align="th.align">
            <!-- <template slot-scope="scope">
                <div v-if="th.prop==''">
                    <el-button v-for="(btn,index) in th.operate" type="text" size="small" :key="index"
                               :style="btn.type=='del'?'color:#ff3e3e' : ''" @click="btnHandle(scope.row,btn.type)">
                        {{btn.name}}
                    </el-button>
                </div>
                <div v-else>
                    <span>{{ scope.row[th.prop] }}</span>
                </div>
            </template> -->
        </el-table-column>
    </el-table>
</template>
<script>
    export default {
        name: 'refactor_table',
        props: {
            /**
             * table  渲染所需数据
             * 如：[{id:1,name:'abc'},{id:2,name:'def'}]
             */
            tableData: {
                type: Array,
                default: function () {
                    return []
                }
            },
            /**
             * table 的column 相关配置信息
             * 如：[{
             *      prop: 'id',
                    label: '编号',
                    width: 100,
                    align: 'center'
                    }]
             如果需要操作列需要指定prop为空同时增加operate属性，配置如下
             [{
               prop: '',
               label: '操作',
               width: 280,
               align: 'center',
               operate:[
                   {
                       type:'del',
                       name:'删除',
                   },
                   {
                       type:'add',
                       name:'新增',
                   }
               ]]
            */
            tableColumnsConfig: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        methods: {
            // btnHandle(row, type) {
            //     this.$emit("operateHandle", row, type)
            // }
        }
    }
</script>


