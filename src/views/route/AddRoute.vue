<template>
<div class="wrap">
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="路径">
            <el-input v-model="form.path"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
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
            }
        }

    },
    methods: {
        ...mapActions(["createRoute", "createRouteMeta"]),

    }
}
</script>

<style lang="scss" scoped>
.wrap {
    background-color: #ffffff;
    height: calc(100vh - 100px);
    overflow-y: auto;
}
</style>
