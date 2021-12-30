<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="店铺管理" name="first">
        <div class="main">
          <div class="main-left">
            <div class="mask"></div>
            <iframe
              class="left"
              src="http://localhost:8081"
              frameborder="0"
            ></iframe>
            <!-- <el-table
              :data="
                tableData.filter(
                  (data) =>
                    !search ||
                    data.name.toLowerCase().includes(search.toLowerCase())
                )
              "
              style="width: 100%"
            >
              <el-table-column label="店铺名称" prop="date" >
              </el-table-column>
              <el-table-column label="店铺介绍" prop="name"> </el-table-column>
              <el-table-column label="店主电话" prop="name"> </el-table-column>
              <el-table-column align="right"> </el-table-column> -->
            <!-- <template slot="header">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"
                />
              </template> 
            </el-table> -->
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
                  <span>开启</span>
                </div>
                <div class="bootm">
                  <div>公共广告</div>
                  <span>开启</span>
                </div>
                <div class="bootm">
                  <div>店铺导航</div>
                  <span>开启</span>
                </div>
                <div class="bootm">
                  <div>全店风格</div>
                  <span>开启</span>
                </div>
                <div class="bootm">
                  <div>装修首页</div>
                </div>
                <div class="bootm">
                  <div>个人中心</div>
                </div>
                <div class="bootm">
                  <div>模板市场</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
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
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-riaht-top {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 43vw;
  padding: 0 20px;
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
.text >h3{
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
  margin: 4px 21px 20px 0;
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
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
}
.bootm > span {
  color: rgb(142, 143, 145);
  margin: 1% 0;
  display: inline-block;
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
  color: rgb(51,51,52);
}
.size {
  font-size: 13px;
}
.left {
  width: 375px;
  height: 540px;
}
.mask {
  width: 374px;
  height: 539px;
  position: absolute;
  border: 1px solid #ccc;
}
</style>