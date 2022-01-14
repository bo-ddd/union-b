<template>
  <div id="app">
    <div class="inptpack">
      <el-input placeholder="经度" v-model="longitude" :disabled="false">
      </el-input>
      <el-input placeholder="纬度" v-model="latitude" :disabled="false">
      </el-input>
      <el-row>
        <el-button type="primary" @click="upload">查询</el-button>
      </el-row>
    </div>

    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
import VueAMap from "vue-amap";
import { mapActions } from "vuex";

export default {
  created() {
    // 设置地图级别，级别为数字。
    // 参数zoom可设范围：[2,20]；
    // 同时传入缩放级别和中心点经纬度
    VueAMap.setZoomAndCenter(10, [116.205467, 39.907761]);
  },
  data() {
    return {
      longitude: "",
      latitude: "",
      form: {
        storeId: "",
      },
    };
  },
  methods: {
    // 查询店铺信息接口
    ...mapActions(["getStoreDetail"]),
    async upload() {
      let { storeId } = this.form;
      let res = await this.getStoreDetail({
        storeId,
      });
      console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  min-width: 1300px;
}
.amap-wrapper {
  width: 100%;
  height: 600px;
  margin-top: 20px;
}
.inptpack {
  width: 100%;
  display: flex;
}
.el-input {
  width: 15%;
  margin-left: 15px;
}

.el-button {
  margin-left: 25px;
}
</style>