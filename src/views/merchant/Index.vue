<template>
<div class="wrap">
    <div class="selectbox">
        <div>
            <span>角色归属</span>
            <el-select v-model="value" placeholder="全部" size='small' class="mar-right_20">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="values" filterable placeholder="商铺名称" size='small'>
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
        <el-table-column label="申请人" prop="userName" align="center">
        </el-table-column>
        <el-table-column label="申请角色" prop="role" align="center">
        </el-table-column>
        <el-table-column label="申请时间" align="center">
            <template #default="scope">
                <span>{{gettime(scope.row.createdAt)}}</span>
            </template>
        </el-table-column>
        <el-table-column label="账户状态" align="center">
            <template #default="scope">
                <span>{{getType(scope.row.type)}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
            <template slot-scope="scope">
                <el-button type='text' @click="handleEdit(scope.row.id)">审核</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex';
import {
    getTime
} from "../../assets/until/until"
export default {
    data() {
        return {
            tableData: [],
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
        ...mapActions(["getSettledList", "settledAdopt", "settledRefuse"]),
        handleEdit(id) {
            this.$confirm('是否可以审核通过', '审核信息', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '同意申请',
                    cancelButtonText: '拒绝申请'
                })
                .then(async () => {
                    let res = await this.settledAdopt({
                        id
                    })
                    if (res.status) {
                        this.$message.success('同意申请');
                        this.getList()
                    }
                })
                .catch(async action => {
                    let res = await this.settledRefuse({
                        id
                    })
                    if (res.status) {
                        this.$message.error(
                            action === 'cancel' ?
                            '拒绝申请' : '再看一看信息'
                        )
                        this.getList()
                    }
                });
        },
        jump() {
            this.$router.push({
                name: 'Settled'
            })
        },
        gettime(time) {
            return getTime(time)
        },
        getType(type) {
            let arr = ['待审核', '审核已通过', '审核未通过']
            return arr[type]
        },
        async getList() {
            let res = await this.getSettledList();
            if (res.status) {
                this.tableData = res.data.rows
            }
        }
    },
    created() {
        this.getList()
    }
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
