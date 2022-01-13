<template>
<div class="wrap">
    <div class="btnBox">
        <el-button icon="el-icon-plus" type="primary" @click="jump">添加主路由</el-button>
    </div>
    <el-table :data="routerList" style="width: 100%;margin-bottom: 20px;" border row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="meta.title" label="meta.title" align="center">
        </el-table-column>
        <el-table-column prop="path" label="path" align="center">
        </el-table-column>
        <el-table-column prop="name" label="name" align="center">
        </el-table-column>
        <el-table-column prop="meta.identity" label="identity" align="center">
        </el-table-column>
        <el-table-column prop="meta.icon" label="meta.icon" align="center">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
            <template slot-scope="scope">
                <el-dropdown @command="handleCommand" type="text">
                    <el-button type="text">
                        编辑
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="handleClick(scope.row)" command="a">新增子路由</el-dropdown-item>
                        <el-dropdown-item @click.native="handleClick(scope.row)" command="b">新增meta</el-dropdown-item>
                        <el-dropdown-item @click.native="handleClick(scope.row)" command="c">编辑路由</el-dropdown-item>
                        <el-dropdown-item @click.native="handleClick(scope.row)" command="d">编辑meta</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button type="text" @click="handleClick(scope.row), dialogDeleteMate = true">删除meta</el-button>
                <el-button type="text" @click="deleteRouter(scope.row.id)">删除路由</el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- 新增路由 -->
    <el-dialog title="新增路由" :visible.sync="dialogFormVisible">
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
                <el-input v-model="form.pid" disabled></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitRoute ">提 交</el-button>
        </div>
    </el-dialog>
    <!-- 编辑路由 -->
    <el-dialog title="编辑路由" :visible.sync="dialogUpdateRoute">
        <el-form :model="updateForm" label-width="120px" ref="updateForm">
            <el-form-item label="id">
                <el-input v-model="updateForm.id" disabled></el-input>
            </el-form-item>
            <el-form-item label="path">
                <el-input v-model="updateForm.path"></el-input>
            </el-form-item>
            <el-form-item label="name">
                <el-input v-model="updateForm.name"></el-input>
            </el-form-item>
            <el-form-item label="component">
                <el-input v-model="updateForm.component"></el-input>
            </el-form-item>
            <el-form-item label="pid">
                <el-input v-model="updateForm.pid"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogUpdateRoute = false">取 消</el-button>
            <el-button type="primary" @click="updateRouter">提 交</el-button>
        </div>
    </el-dialog>
    <!-- 新增meta -->
    <el-dialog title="新增meta" :visible.sync="dialogMetaFormVisible">
        <el-form :model="metaFrom" label-width="120px" ref="metaFrom">
            <el-form-item label="key">
                <el-input v-model="metaFrom.key"></el-input>
            </el-form-item>
            <el-form-item label="value">
                <el-input v-model="metaFrom.value"></el-input>
            </el-form-item>
            <el-form-item label="routeId">
                <el-input v-model="metaFrom.routeId" disabled></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogMetaFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="metaSubmit">提 交</el-button>
        </div>
    </el-dialog>
    <!-- 编辑meta -->
    <el-dialog title="编辑meta" :visible.sync="dialogUpdateMate">
        <el-form :model="updateMateFrom" label-width="120px" ref="updateMateFrom">
            <el-form-item label="key">
                <el-input v-model="updateMateFrom.key"></el-input>
            </el-form-item>
            <el-form-item label="value">
                <el-input v-model="updateMateFrom.value"></el-input>
            </el-form-item>
            <el-form-item label="routeId">
                <el-input v-model="updateMateFrom.routeId" disabled></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogUpdateMate = false">取 消</el-button>
            <el-button type="primary" @click="updateMate">提 交</el-button>
        </div>
    </el-dialog>
    <!-- 删除meta -->
    <el-dialog title="删除meta" :visible.sync="dialogDeleteMate">
        <el-form :model="deleteMateFrom" label-width="120px" ref="deleteMateFrom">
            <el-form-item label="key">
                <el-input v-model="deleteMateFrom.key"></el-input>
            </el-form-item>
            <el-form-item label="routeId">
                <el-input v-model="deleteMateFrom.routeId" disabled></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogDeleteMate = false">取 消</el-button>
            <el-button type="primary" @click="deleteMate">提 交</el-button>
        </div>
    </el-dialog>

</div>
</template>

<script>
import {
    mapActions
} from "vuex";
import Router from "../../assets/lib/router"
export default {
    data() {
        return {
            routerList: [],
            dialogFormVisible: false,
            dialogMetaFormVisible: false,
            dialogUpdateRoute: false,
            dialogUpdateMate: false,
            dialogDeleteMate: false,
            form: {
                path: '',
                name: '',
                component: '',
                key: 'title',
                value: '',
                pid: null
            },
            updateForm: {
                id: '',
                path: '',
                name: '',
                component: '',
                pid: null
            },
            metaFrom: {
                key: '',
                value: '',
                routeId: ''
            },
            updateMateFrom: {
                key: '',
                value: '',
                routeId: ''
            },
            deleteMateFrom: {
                key: '',
                routeId: ''
            },
        }
    },
    methods: {
        ...mapActions(["getRouteList", "createRoute", "createRouteMeta", "updateRoute", "updateRouteMeta", "deleteRoute", "deleteRouteMeta"]),
        async getRouterList() {
            let res = await this.getRouteList()
            let router = new Router({
                routeList:res.data.route, 
                metaList: res.data.meta
            })
            this.routerList = router.data
        },
        jump() {
            this.$router.push({
                name: 'AddRoute'
            })
        },
        handleClick(row) {
            this.form.pid = row.id;
            this.metaFrom.routeId = row.id;
            this.updateMateFrom.routeId = row.id;
            this.updateForm.id = row.id;
            this.updateForm.path = row.path;
            this.updateForm.name = row.name;
            this.updateForm.component = row.component;
            this.updateForm.pid = row.pid;
            this.deleteMateFrom.routeId = row.id;
        },
        async submitRoute() {
            let res = await this.createRoute(this.form);
            this.dialogFormVisible = false;
            this.msg(res)
            this.form = {
                key: 'title',
            };
        },
        async msg(res) {
            if (res.status === 1) {
                this.$message.success(res.msg);
                await this.getRouterList();
            } else {
                this.$message.error(res.msg);
            }
        },
        async metaSubmit() {
            let res = await this.createRouteMeta(this.metaFrom);
            this.dialogMetaFormVisible = false;
            this.msg(res)
            this.metaFrom = {};
        },
        handleCommand(command) {
            if (command === 'a') {
                this.dialogFormVisible = true;
            } else if (command === 'b') {
                this.dialogMetaFormVisible = true;
            } else if (command === 'c') {
                this.dialogUpdateRoute = true;
            } else if (command === 'd') {
                this.dialogUpdateMate = true;
            }
        },
        async updateRouter() {
            let res = await this.updateRoute(this.updateForm);
            this.dialogUpdateRoute = false;
            this.msg(res)
            this.updateForm = {};
        },
        async updateMate() {
            let res = await this.updateRouteMeta(this.updateMateFrom);
            this.dialogUpdateMate = false;
            this.msg(res)
            this.updateMateFrom = {};
        },
        async deleteRouter(id) {
            let res = await this.deleteRoute({
                id
            });
            this.msg(res)
        },
        async deleteMate() {
            let res = await this.deleteRouteMeta(this.deleteMateFrom);
            this.dialogDeleteMate = false;
            this.msg(res)
            this.deleteMateFrom = {}
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

    & .btnBox {
        padding: 20px;
    }
}
</style>
