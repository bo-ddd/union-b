<template>
  <div>
    <div class="main">
      <div class="main-left">
        <div class="mask"></div>
        <iframe
          class="left"
          src="http://192.168.1.24:8081/home/first"
          frameborder="0"
        ></iframe>
      </div>
      <div class="main-right">
        <div class="main-riaht-top">
          <div class="main-riaht-tops">
            <div class="name">笑呵呵</div>
            <div>
              <div class="txt">
                <span>支持推广到</span>
                <img
                  class="logo"
                  src="../../assets/images/icon-wechat.png"
                  alt=""
                />
                <img
                  class="logo"
                  src="../../assets/images/icon-micro-blog.png"
                  alt=""
                />
                <img
                  class="logo"
                  src="../../assets/images/icon-qq.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div class="text">
              <h3>更多渠道</h3>
              <span>为店铺提供了更多推广渠道</span>
            </div>
            <div class="alls">
              <div class="all">
                <img src="../../assets/images/icon-supplier.png" alt="" />
                <div>
                  <div>有赞精选</div>
                  <div class="size">千万级流量，促成交易额翻倍提升</div>
                </div>
              </div>
              <div class="all">
                <img src="../../assets/images/icon-supplier.png" alt="" />
                <div>
                  <div>有赞精选</div>
                  <div class="size">千万级流量，促成交易额翻倍提升</div>
                </div>
              </div>
              <div class="all">
                <img src="../../assets/images/icon-supplier.png" alt="" />
                <div>
                  <div>有赞精选</div>
                  <div class="size">千万级流量，促成交易额翻倍提升</div>
                </div>
              </div>
              <div class="all">
                <img src="../../assets/images/icon-supplier.png" alt="" />
                <div>
                  <div>有赞精选</div>
                  <div class="size">千万级流量，促成交易额翻倍提升</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-right-b">
          <h3 class="tool">店铺工具</h3>
          <div class="main-r-b-b">
            <div class="bootm">
              <div>悬浮窗</div>
              <el-switch
                @change="suspension()"
                style="display: block"
                v-model="suspen"
                active-color="#13ce66"
                inactive-color="#ff4949"
             
              >
              </el-switch>
            </div>
            <div class="bootm">
              <div>公共广告</div>
              <el-switch
                style="display: block"
                v-model="advertisement"
                active-color="#13ce66"
                inactive-color="#ff4949"
              
              >
              </el-switch>
            </div>
            <div class="bootm">
              <div>店铺导航</div>
              <el-switch
                style="display: block"
                v-model="navigation"
                active-color="#13ce66"
                inactive-color="#ff4949"
                
              >
              </el-switch>
            </div>
            <div class="bootm">
              <div>全店风格</div>
              <el-switch
                style="display: block"
                v-model="style"
                active-color="#13ce66"
                inactive-color="#ff4949"
           
              >
              </el-switch>
            </div>
            <div class="bootm">
              <div>装修首页</div>
            </div>
            <div class="bootm" @click="store">
              <div>店铺中心</div>
            </div>
            <div class="bootm">
              <div>模板市场</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      search: "",
      suspen: true,
      advertisement: true,
      navigation: true,
      style: true,
    };
  },
  methods: {
    suspension() {
      console.log(this.suspen);
    },
    store() {
      this.$router.push({
        path:'details'
      });
    },
  },
  async created() {},
};
</script>

<style scoped>
::v-deep .el-tabs__nav-scroll {
  padding: 0 1%;
}
::v-deep .el-tabs {
  background-color: #fff;
}
::v-deep .el-tabs__content {
  padding: 0.5%;
  height: 78vh;
}
.el-tab-pane {
  height: 100%;
}
.main {
  height: 79vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  background-color: #fff;
}
.main-riaht-top {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 43vw;
  padding: 0 2.8%;
  /* height: vh; */
}
.main-riaht-tops {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 42vw;
  border-bottom: 2px solid #ebedf0;
}
.name {
  font-size: 25px;
  font-weight: 800;
}
.main-left {
  margin-right: 2%;
}
h3 {
  font-size: 18px;
  margin: 3% 1% 3% 0;
}
.text {
  display: flex;
  align-items: center;
}
.text > span {
  color: rgb(158, 158, 160);
}
.text > h3 {
  font-size: 18px;
}
img {
  width: 45px;
  height: 45px;
}
.all {
  display: flex;
  width: 20vw;
  height: 10vh;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(248, 248, 248);
  margin: 0.1% 3% 3% 0;
}
.alls {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  border: 1px solid transparent;
}
.main-right-b {
  margin-top: 20px;
  width: 43vw;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.tool {
  margin: 0;
  font-size: 18px;
}
.bootm {
  padding: 2% 5.4%;
}
.bootm > div {
  font-size: 17px;
  cursor: pointer;
}
.bootm > span {
  color: rgb(142, 143, 145);
  margin: 1% 0;
  display: inline-block;
  cursor: pointer;
}
.main-r-b-b {
  display: flex;
  flex-wrap: wrap;
}
.logo {
  width: 30px;
  height: 30px;
  margin: 0 8px;
  border-radius: 5px;
}
.txt {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: rgb(51, 51, 52);
}
.size {
  font-size: 13px;
}
.left {
  width: 24.5vw;
  height: 71vh;
}
.mask {
  width: calc(24.5vw - 1px);
  height: calc(71vh - 1px);
  position: absolute;
  border: 1px solid #ccc;
}
</style>