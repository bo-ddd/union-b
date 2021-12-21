<template>
<div class="wrap">
    <div class="selectbox">
        <div>
            <span>角色归属</span>
            <el-select v-model="value" placeholder="全部" size='small' class="mar-right_20">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="values" filterable placeholder="商铺名称" size='small' >
                <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div>
            <el-button size='small' type="primary">查询</el-button>
            <el-button size='small' plain>重置</el-button>
        </div>
    </div>
    <div class="btnbox">
        <el-button size='small' icon="el-icon-plus" type="primary" @click="jump">商户入驻</el-button>
        <el-button size='small' plain>批量删除</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" stripe>
        <el-table-column label="商铺名称" prop="name" align="center">
        </el-table-column>
        <el-table-column label="角色归属" prop="role" align="center">
        </el-table-column>
        <el-table-column label="商铺地址" prop="address" align="center">
        </el-table-column>
        <el-table-column label="创铺时间" prop="date" align="center">
        </el-table-column>
        <el-table-column label="账户状态" prop="status" align="center">
        </el-table-column>
        <el-table-column align="center" label="操作">
            <template slot-scope="scope">
                <el-button type='text' @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                name: '王小虎',
                role: '平台',
                address: '上海市普陀区金沙江路 1518 弄',
                date: '2016-05-02',
                status: '优'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            option: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            values: ''
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        jump(){
          this.$router.push({
            name:'Settled'
          })
        }
    },
}
</script>

<style lang="scss" scoped>
.wrap {
    & .mar-right_20 {
        margin-right: 20px;
    }

    & .selectbox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;

        & span {
            margin-right: 10px;
        }
    }

    & .btnbox {
        padding-bottom: 20px;

        & .bac-ff4070 {
            background-color: '#ff4070';
        }
    }
}
</style>
