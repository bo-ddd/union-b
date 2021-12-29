<template>
<div class="wrap">
    <div style="margin-top: 20px" v-for="(link, index) in routes" :key="index">
        <span>{{link.meta.title}}</span>
        <el-checkbox-group v-model="checkboxGroup1" :label="link.meta.title">
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

<style>
.wrap {
    background-color: #ffffff;
    height: calc(100vh - 100px);
    overflow-y: auto;
}
</style>
