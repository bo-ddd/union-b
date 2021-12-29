<template>
<div class="wrap">
    <div class="box" v-for="(link, index) in routes" :key="index">
        <div class="title">{{link.meta.title}}</div>
        <el-checkbox-group v-model="checkboxGroup1" :label="link.meta.title">
            <el-checkbox :label="children.meta.title" border v-for="(children, index) in link.children" :key="index"></el-checkbox>
        </el-checkbox-group>
    </div>
    <div class="bottom">
        <el-button type="primary" @click="submit">保存</el-button>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
export default {
    data() {
        return {
            checkboxGroup1: [],

        }
    },
    computed: {
        ...mapGetters(['routes'])
    },
    methods: {
        ...mapActions(["getStoreList"]),
        submit() {
            console.log(this.checkboxGroup1)
        },
        async domo() {
            let res = await this.getStoreList();
            console.log(res)
        }
    },
    created(){
        this.domo()
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    background-color: #ffffff;
    height: calc(100vh - 100px);
    overflow-y: auto;

    & .box {
        padding-left: 20px;
        margin-bottom: 20px;

        & .title {
            margin: 20px 0;
            font-weight: bold;
        }
    }

    & .bottom {
        border-top: 2px solid var(--color);
        width: 100%;
        padding: 20px 0;
        text-align: center;
    }
}
</style>
