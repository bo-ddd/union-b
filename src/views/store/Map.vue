<template>
  <div id="app">
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
import VueAMap from "vue-amap";

export default {
  created() {
    // 设置地图级别，级别为数字。
    // 参数zoom可设范围：[2,20]；
    // 同时传入缩放级别和中心点经纬度
    VueAMap.setZoomAndCenter(10, [116.205467, 39.907761]);
  },
};
</script>

<style lang="scss" scoped>
.amap-wrapper {
  width: 100%;
  height: 600px;
}
</style>