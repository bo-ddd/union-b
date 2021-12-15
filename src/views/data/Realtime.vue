<template>
  <div class="warp">
      <div class="main-t">
        <h3>实时数据</h3>
        <span>更新时间</span>
        <span class="date">2019-12-19 13:21:25</span>
      </div>
      <div class="main_c">
        <div class="main_c-left">成交统计</div>
        <div class="main_c-right">数据统计</div>
        <div class="main_c-left">商品概括</div>
        <div class="main_c-right">品牌销售额占比</div>
        <div class="main_c-c" style="margin-right:4%;">采购商销售额排行榜</div>
        <div class="main_c-c">供应商销售额排行榜</div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  created(){
  }
}
</script>

<style lang="scss" scoped>
.main-t{
  display: flex;
  align-items: center;
  color: #c8c8c8;
  // background-color: rgb(252,250,251);
}
.main-t>h3{
  margin-right: 15px;
  color: #000;
}
.date{
  margin-left: 10px;
}
.main_c{
  display: flex;
  flex-wrap: wrap;
}
.main_c-left{
  padding: 20px;
  width: 56%;
  margin: 2.5% 3% 0 0;
  height: 35vh;
  background-color: #fff;
}
.main_c-right{
  width: 37%;
  height: 35vh;
  margin: 2.5% 0 0 0;
  background-color: #fff;
}
.main_c-c{
  width:48%;
  height: 40vh;
  margin-top: 2.5%;
  background-color: #fff;
}
</style>