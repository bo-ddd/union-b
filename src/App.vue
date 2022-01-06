<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Router from "@/assets/lib/router";
import Realtime from "@/views/data/Realtime";
console.log("demo-----------");
console.log(Realtime);
export default {
  data() {
    return {
      routerList: [],
    };
  },
  methods: {
    ...mapActions(["getRouteList"]),
    async getRouterList() {
      let res = await this.getRouteList();
      console.log(res.data.route);
      const { route, meta } = res.data;
      let router = new Router({
        routeList: route,
        metaList: meta,
      });
      this.routerList = router.data;
      this.$router.addRoutes(this.routerList);
      this.$router.options.routes.push(this.routerList);
      console.log("-asdfasd---");
      console.log(this.$router);
      console.log(this.routerList);
      this.$store.commit('ROUTES',this.routerList);
    },
  },
  async created() {
    await this.getRouterList();
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
