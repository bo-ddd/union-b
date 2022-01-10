<template>
<div class="wrap">
    <div class="selectbox">
        <div>
            <span>申请角色</span>
            <el-select v-model="value" placeholder="全部" clearable class="mar-right_20">
                <el-option v-for="item in IdentList" :key="item.id" :label="item.identityName" :value="item.id">
                </el-option>
            </el-select>
            <span>申请状态</span>
            <el-select v-model="typevalue" placeholder="全部" clearable class="mar-right_20">
                <el-option v-for="(item,index) in typeArr" :key="index" :label="item" :value="index+1">
                </el-option>
            </el-select>
        </div>
        <div>
            <el-button type="primary" @click="inquiry">查询</el-button>
            <el-button plain @click="reset">重置</el-button>
        </div>
    </div>
    <div class="btnbox">
        <el-button icon="el-icon-plus" type="primary" @click="jump">商户入驻</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" stripe>
        <el-table-column label="申请人" align="center">
            <template #default="scope">
                <span>{{scope.row.userName || scope.row.email}}</span>
            </template>
        </el-table-column>
        <el-table-column label="申请角色" prop="role" align="center">
        </el-table-column>
        <el-table-column label="资格证书" align="center">
            <template #default="scope">
                <img :src=" scope.row.qualificationsUrl" alt="" width="50px" height="50px">
            </template>
        </el-table-column>
        <el-table-column label="营业执照" align="center">
            <template #default="scope">
                <img :src=" scope.row.businessUrl" alt="" width="50px" height="50px">
            </template>
        </el-table-column>
        <el-table-column label="申请时间" align="center" width="210%">
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
                <el-button type='text' @click="handleEdit(scope.row)">审核</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" :page-sizes="[4, 6, 8, 10]" layout="total, sizes, prev, pager, next, jumper" :total="total" class="paging">
    </el-pagination>
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
            IdentList: [],
            value: '',
            typevalue: '',
            typeArr: ['审核已通过', '审核未通过', '待审核'],
            currentPage: 1,
            total: null,
            pageSize: 6,
            pageNum: 1
        }
    },
    methods: {
        ...mapActions(["getSettledList", "settledAdopt", "settledRefuse", "getIdentityList", "getUserInfo", "updateUserInfo"]),
        handleEdit(rows) {
            console.log(rows)
            this.$confirm('是否可以审核通过', '审核信息', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '同意申请',
                    cancelButtonText: '拒绝申请'
                })
                .then(async () => {
                    let res = await this.settledAdopt({
                        id: rows.id
                    })
                    if (res.status === 1) {
                        this.$message.success('同意申请');
                        this.getList()
                        let userInfo = await this.getUserInfo()
                        console.log(userInfo.data[0])
                        if (userInfo.data[0].identityId === 0) {
                            await this.updateUserInfo({
                                identityId: rows.roleId
                            })
                        }
                        console.log(userInfo.data[0])
                    }
                })
                .catch(async action => {
                    let res = await this.settledRefuse({
                        id: rows.id
                    })
                    if (res.status === 1) {
                        this.$message.error(
                            action === 'cancel' ?
                            '拒绝申请' : '再看一看信息'
                        )
                        this.getList()
                    }
                });
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.getList()
        },
        handleCurrentChange(val) {
            this.pageNum = val
            this.getList()
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
            return this.typeArr[type - 1]
        },
        async getList() {
            let res = await this.getSettledList({
                pagination: true,
                pageNum: this.pageNum,
                pageSize: this.pageSize
            });
            if (res.status === 1) {
                this.tableData = res.data.rows
                this.total = res.data.count
            }
        },
        async getIdentList() {
            let res = await this.getIdentityList()
            if (res.status == 1) {
                this.IdentList = res.data.rows
            }
        },
        reset() {
            this.value = '';
            this.typevalue = ''
        },
        async inquiry() {
            let res = await this.getSettledList({
                role: this.value || null,
                type: this.typevalue || null
            });
            if (res.status === 1) {
                this.tableData = res.data.rows
                this.total = res.data.rows.length
            }
        },

    },
    created() {
        this.getList()
        this.getIdentList()
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    height: calc(100vh - 100px);
    overflow-y: auto;
    background-color: #fff;

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
    }

    & .paging {
        text-align: center;
        margin: 20px 0px;
    }
}
</style>
