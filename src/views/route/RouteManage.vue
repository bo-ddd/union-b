<template>
<div class="wrap">
    <div class="btnbox">
        <el-button icon="el-icon-plus" type="primary" @click="jump">添加主路由</el-button>
    </div>
    <el-table :data="routerList" style="width: 100%;margin-bottom: 20px;" row-key="id" default-expand-all :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="meta.title" label="title" align="center">
        </el-table-column>
        <el-table-column prop="path" label="path" align="center">
        </el-table-column>
        <el-table-column prop="name" label="name" align="center">
        </el-table-column>
        <el-table-column prop="component" label="component" align="center">
        </el-table-column>
        <el-table-column prop="meta.icon" label="icon" align="center">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
            <template slot-scope="scope">
                <el-button @click="dialogFormVisible = true,handleClick(scope.row) " type="text">新增子路由</el-button>
                <el-button @click="dialogMetaFormVisible = true,handleClick(scope.row) " type="text">新增meta</el-button>
                <el-button type="text">删除路由</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-dialog title="新增子路由" :visible.sync="dialogFormVisible">
        <el-form :model="form" label-width="120px" ref="form">
            <el-form-item label="path">
                <el-input v-model="form.path"></el-input>
            </el-form-item>
            <el-form-item label="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="component">
                <el-input v-model="form.component"></el-input>
            </el-form-item>
            <el-form-item label="title">
                <el-input v-model="form.value"></el-input>
            </el-form-item>
            <el-form-item label="pid">
                <el-input v-model="form.pid"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitRoute ">提交</el-button>
        </div>
    </el-dialog>
    <el-dialog title="新增meta" :visible.sync="dialogMetaFormVisible">
        <el-form :model="metaFrom" label-width="120px" ref="metaFrom">
            <el-form-item label="key">
                <el-input v-model="metaFrom.key"></el-input>
            </el-form-item>
            <el-form-item label="value">
                <el-input v-model="metaFrom.value"></el-input>
            </el-form-item>
            <el-form-item label="routeId">
                <el-input v-model="metaFrom.routeId"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogMetaFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="metaSubmit">提交</el-button>
        </div>
    </el-dialog>

</div>
</template>

<script>
import {
    mapActions
} from "vuex";
import Router from "../../../public/lib/router"
export default {
    data() {
        return {
            routerList: [],
            dialogFormVisible: false,
            dialogMetaFormVisible: false,
            form: {
                path: '',
                name: '',
                component: '',
                key: 'title',
                value: '',
                pid: null
            },
            metaFrom: {
                key: '',
                value: '',
                routeId: ''
            }
        }
    },
    methods: {
        ...mapActions(["getRouteList", "createRoute", "createRouteMeta"]),
        async getRouterList() {
            let res = await this.getRouteList()
            let routeList = res.data.route
            let metaList = res.data.meta
            let router = new Router(routeList, metaList)
            this.routerList = router.data
            console.log(this.routerList)
        },
        jump(){
           this.$router.push({
                name: 'AddRoute'
            })
        },
        handleClick(row) {
            this.form.pid = row.id
            this.metaFrom.routeId = row.id
        },
        async submitRoute() {
          console.log(this.form)
            let res = await this.createRoute(this.form)
            this.dialogFormVisible = false
            if (res.status == 1) {
                this.$message.success(res.msg)
                this.getRouterList()
            } else {
                this.$message.error(res.msg)
            }
        },
        async metaSubmit() {
            console.log(this.metaFrom)
            let res = await this.createRouteMeta(this.metaFrom)
            this.dialogMetaFormVisible = false
            if (res.status == 1) {
                this.$message.success(res.msg)
                this.getRouterList()
            } else {
                this.$message.error(res.msg)
            }
        },

    },
    created() {
        this.getRouterList()
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    height: calc(100vh - 100px);
    overflow-y: auto;
    background-color: #fff;

    & .btnbox {
        margin-bottom: 20px;
    }
}
</style>
