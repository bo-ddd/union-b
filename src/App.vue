<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
import Router from "../public/lib/router"
export default {
    data() {
        return {
            routerList: []
        }
    },
    methods: {
        ...mapActions(["getRouteList"]),
        async getRouterList() {
            let res = await this.getRouteList()
            console.log(res.data.route)
            let router = new Router(res.data.route, res.data.meta)
            this.routerList = router.data
            console.log(this.routerList)
        },
    },
    async created() {
        // let route = [{
        //     path: "/about",
        //     name: "About",
        //     component: () =>
        //         import( /* webpackChunkName: "about" */ "./views/set/Theme.vue"),
        //     redirect: "/child",
        //     children: [{
        //         path: "/child",
        //         name: "Child",
        //         component: () =>
        //             import( /* webpackChunkName: "child" */ "./views/news/Help.vue"),
        //     }, ],
        // }, ];
        // let routes = [
        //   {
        //     path:'/realtime',
        //     name:'real',
        //     component:new Function(`import( /* webpackChunkName: "child" */ "./views/news/Help.vue")`),
        //     children:[
        //       {
                
        //       }
        //     ]
        //   }
        // ]
        await this.getRouterList()
        this.$router.addRoutes(this.routerList);
        // this.$router.addRoutes(this.routerList[0].component);
        console.log(this.routerList[0].component)
    },
};
</script>

<style lang="scss">
@import "./style/common";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    & .el-button--primary {
        background-color: var(--color);
        color: var(--textcolor);
        border-color: var(--color);
    }

    & .el-button--primary:hover {
        background-color: var(--textcolor);
        color: var(--color);
        border-color: var(--color);
    }
}
</style>
