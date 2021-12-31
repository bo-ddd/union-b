<template>
<div class="wrap">
    <el-form ref="form" :model="form" label-width="80px" class="from">
        <div class="title">创建route</div>
        <el-form-item label="path">
            <el-input v-model="form.path"></el-input>
        </el-form-item>
        <el-form-item label="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="component">
            <el-input v-model="form.component"></el-input>
        </el-form-item>
        <!-- <el-form-item label="key">
            <el-input v-model="form.key"></el-input>
        </el-form-item> -->
        <el-form-item label="title">
            <el-input v-model="form.value"></el-input>
        </el-form-item>
        <el-form-item label="pid">
            <el-input v-model="form.pid"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">立即创建</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-form-item>
    </el-form>
    <el-form ref="form" :model="metaFrom" label-width="80px" class="from">
        <div class="title">创建meta</div>
        <el-form-item label="key">
            <el-input v-model="metaFrom.key"></el-input>
        </el-form-item>
        <el-form-item label="value">
            <el-input v-model="metaFrom.value"></el-input>
        </el-form-item>
        <el-form-item label="routeId">
            <el-input v-model="metaFrom.routeId"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="metaSubmit">立即创建</el-button>
            <el-button @click="metaCancel">取消</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
export default {
    data() {
        return {
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
        ...mapActions(["createRoute", "createRouteMeta"]),
        async submit() {
            console.log(this.form)
            let res = await this.createRoute(this.form)
            console.log(res)
            if (res.status == 1) {
                this.$message.success(res.msg)
            }else{
                this.$message.error(res.msg)
            }
        },
        async metaSubmit() {
            console.log(this.metaFrom)
            let res = await this.createRouteMeta(this.metaFrom)
            console.log(res)
             if (res.status == 1) {
                this.$message.success(res.msg)
            }else{
                this.$message.error(res.msg)
            }
        },
        cancel() {
            this.form = {}
        },
        metaCancel() {
            this.metaFrom = {}
        },
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    height: calc(100vh - 100px);
    overflow-y: auto;

    & .from {
        margin-bottom: 20px;
        padding: 20px;
        background-color: #ffffff;

        & .el-input {
            width: 25vw;
        }

        & .title {
            padding-bottom: 20px;
            font-weight: bold;
        }

    }
}
</style>
