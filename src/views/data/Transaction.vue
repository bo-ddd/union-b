<template>
  <div class="wrap">
    <div class="header">
      <div class="left">
        <div>
          <div>
            <img
              src="@/assets/images/iconfont-merchant.png"
              alt=""
              class="img"
            />
          </div>
          <div class="ml-5">
            <h3>{{allData.storeCount}}</h3>
            <span>平台商家总数</span>
          </div>
        </div>
        <div>
          <div>
            <img
              src="@/assets/images/iconfont-product.png"
              alt=""
              class="img"
            />
          </div>
          <div class="ml-5">
            <h3>{{allData.goodsCount}}</h3>
            <span>平台商品总数</span>
          </div>
        </div>
      </div>
      <div class="center">
        <h4>平台使用情况</h4>
        <div class="main">
          <div class="top">
            <span></span>
            <div class="top_left">
              <span class="font-15">80%</span>
              <span class="font-12">用户总数</span>
            </div>
            <div class="top_center">
              <span class="font-20">80%</span>
              <span class="font-16">日均访问量</span>
            </div>
            <span></span>
            <div class="top_right">
              <span class="font-15">80%</span>
              <span class="font-12">成交率</span>
            </div>
          </div>
          <div class="bottom">
            <span></span>
            <div class="bottom_left">
              <span class="font-20">80%</span>
              <span class="font-16">总访问量</span>
            </div>
            <span></span>
            <div class="bottom_center">
              <span class="font-15">80%</span>
              <span class="font-12">商品好评率</span>
            </div>
            <div class="bottom_right">
              <span class="font-20">80%</span>
              <span class="font-16">日均活跃度</span>
            </div>
            <span></span>
          </div>
        </div>

        <!-- 平台使用情况 -->
      </div>
      <div class="right">
        <h4>品类分布</h4>
        <div class="type"></div>
        <!-- 商品品类分布 -->
      </div>
    </div>
    <div class="footer">
      <div class="echarts_stata">
        <h4>商品成交量情况</h4>
        <div class="stata"></div>
        <!-- 本周商品成交率与上周成交率柱状图 -->
      </div>
      <div class="echarts_info">
        <h4>商家信息统计</h4>
        <div class="info"></div>
        <!--  -->
        <!--  -->
        <!--  -->
      </div>
      <div class="echarts_rank">
        <h4>成交量排行榜</h4>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%"
          id="#out-table"
        >
          <el-table-column prop="date" label="类目"> </el-table-column>
          <el-table-column prop="name" label="名称"> </el-table-column>
          <el-table-column prop="address" label="销售量"> </el-table-column>
          <el-table-column slot="scope"> </el-table-column>
        </el-table>
        <!-- 商家综合排行 -->
        <!-- 商品排行 -->
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      allData:[],
      tableData: [
        {
          date: "家电",
          name: "插座",
          address: "1518",
        },
        {
          date: "生活用品",
          name: "袜子",
          address: "1517",
        },
        {
          date: "家居",
          name: "沙发",
          address: "1300",
        },
        {
          date: "零食",
          name: "阿尔卑斯",
          address: "1516",
        },
      ],
    };
  },
  mounted() {
    let myBarChart = this.drawnBar();
    let myPieChart = this.drawnPie();
    let myTotalChart = this.drawnTotal();
    window.addEventListener("resize", function () {
      myBarChart.resize();
      myPieChart.resize();
      myTotalChart.resize();
    });
  },
  created() {
    this.getTrade();
  },
  methods: {
    ...mapActions(["getTradeData"]),
    async getTrade() {
      let res = await this.getTradeData({});
      this.allData = res.data;
    },
    drawnBar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementsByClassName("stata")[0]);
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["去年同期", "今年"],
        },
        grid:{
        bottom:'1%',
        left:'5%',
        right:'5%',
        },
        toolbox: {
          center:['20%','50%'],
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            // prettier-ignore
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "去年同期",
            type: "bar",
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
          },
          {
            name: "今年",
            type: "bar",
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
            markPoint: {
              data: [
                { name: "Max", value: 182.2, xAxis: 7, yAxis: 183 },
                { name: "Min", value: 2.3, xAxis: 10, yAxis: 3 },
              ],
            },
          },
        ],
      });
      return myChart;
    },
    drawnPie() {
      let myChart = echarts.init(document.getElementsByClassName("type")[0]);
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "40%",
          left: "50%",
        },
        series: [
          {
            name: "品类分布",
            type: "pie",
            radius: ["40%", "70%"],
            center:['30%','60%'],
            avoidLabelOverlap: true,
            data: [
              { value: 1048, name: "电器" },
              { value: 735, name: "食品" },
              { value: 580, name: "家居" },
              { value: 484, name: "电子产品" },
              { value: 300, name: "母婴用品" },
            ],
          },
        ],
      });
      return myChart;
    },
    drawnTotal() {
      let myChart = echarts.init(document.getElementsByClassName("info")[0]);
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["收入", "支出"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom:'1%',
          containLabel: true,
        },
        xAxis: [
          {
            type: "value",
          },
        ],
        yAxis: [
          {
            type: "category",
            axisTick: {
              show: true,
            },
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        series: [
          {
            name: "收入",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              position: "right",
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 341, 374, 390, 450, 420],
          },
          {
            name: "支出",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              position: "left",
            },
            emphasis: {
              focus: "series",
            },
            data: [-120, -132, -101, -134, -190, -230, -210],
          },
        ],
      });
      return myChart;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-table__cell {
  padding: 5px;
}
.wrap {
  display: grid;
  grid-template-rows: repeat(1, 1fr 1.5fr);
  gap: 20px 20px;
  height: calc(100vh - 100px);
  overflow-y: scroll;
  & > .header {
    display: grid;
    grid-template-columns: repeat(1, 1fr 2fr 2fr);
    gap: 20px;
    & > div {
      padding: 10px;
    }
    & > .left {
      background-color: #ffffff;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      gap: 20px;
      padding: 20px;
      & > div {
        width: 100%;
        background-color: var(--color);
        display: flex;
        align-items: center;
        color: white;
        padding-left: 20px;
        box-sizing: border-box;
        border-radius: 10px;
        & > div {
          & > .img {
            width: 50px;
            height: 50px;
          }
          & > h3 {
            font-size: 30px;
          }
        }
      }
    }
    & > .center {
      background-color: #ffffff;
      & > .main {
        display: grid;
        grid-template-rows: repeat(1, 1fr 1fr);
        --size: 60px;
        font-size: 12px;
        height: 80%;
        padding: 10px;
        & > .top,
        .bottom {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          & > div {
            min-width: var(--size);
            min-height: var(--size);
            border-radius: 50%;
            display: flex;
            flex-flow: column;
            text-align: center;
            color: white;
            margin: 10px 20px;
            justify-content: center;
            padding: 5px;
            transition: 1s;
          }
          & > div:hover {
            transform: scale(1.5);
            z-index: 1;
          }
        }
        & > .top {
          & > .top_left {
            background-color: #f59604;
          }
          & > .top_center {
            background-color: #2396e6;
            transform: scale(1.2);
            box-shadow: 0 0 10px #0e3a53;
          }
          & > .top_right {
            background-color: #0bafa6;
          }
        }
        & > .bottom {
          & > .bottom_left {
            background-color: #6058df;
            transform: scale(1.2);
            box-shadow: 0 0 10px #1c2d59;
          }
          & > .bottom_center {
            background-color: #e7536b;
          }
          & > .bottom_right {
            background-color: #129633;
            transform: scale(1.2);
            box-shadow: 0 0 10px #0d3c36;
          }
        }
      }
    }
    & > .right {
      background-color: #ffffff;
      & > .type {
        width: 100%;
        height: 20vh;
        margin-top: 20px;
      }
    }
  }
  & > .footer {
    margin: 0;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(1, 2fr 1fr 1fr);
    gap: 20px;
    & > div {
      background-color: #ffffff;
      min-width: 100px;
      padding: 10px;
      & > div {
        height: 46vh;
        width: 100%;
      }
    }
  }
}
h4 {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
</style>