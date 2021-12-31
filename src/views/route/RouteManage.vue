<template>
<div>
    <el-table :data="routeList" stripe style="width: 100%">
        <el-table-column prop="id" label="id" width="180" align="center">
        </el-table-column>
        <el-table-column prop="path" label="path" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="name" width="180" align="center">
        </el-table-column>
        <el-table-column prop="component" label="component" align="center">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
export default {
    data() {
        return {
            routeList: [],
            metaList: [],

        }
    },
    methods: {
        ...mapActions(["getRouteList"]),
        async getRouterList() {
            let res = await this.getRouteList()
            this.routeList = res.data.route
            this.metaList = res.data.meta[0]
            console.log(this.routeList)
            console.log(this.metaList)
        },

    },
    created() {
        this.getRouterList()
    }
}
</script>

<style>

</style>
