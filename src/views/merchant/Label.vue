<template>
<div class="wrap">
    <div class="box" v-for="(link, index) in routes" :key="index">
        <div class="title">{{link.meta.title}}</div>
        <el-checkbox-group v-model="checkboxGroup1" :label="link.meta.title" >
            <el-checkbox :label="children.meta.title" border v-for="(children, index) in link.children" :key="index"></el-checkbox>
        </el-checkbox-group>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
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
     
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    background-color: #ffffff;
    height: calc(100vh - 100px);
    overflow-y: auto;

    & .box{
        padding-left: 20px;

        & .title{
            margin: 20px 0;
            font-weight: bold;
        }
    }
}
</style>
