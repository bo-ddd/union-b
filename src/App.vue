<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
export default {
    created() {
        let route = {
            path: "/about",
            name: "About",
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/set/Theme.vue"),
            redirect: "/child",
            children: [{
                path: "/child",
                name: "Child",
                component: () =>
                    import( /* webpackChunkName: "child" */ "./views/news/Help.vue"),
            }, ],
        };
        this.$router.addRoute(route);
    }
}
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
