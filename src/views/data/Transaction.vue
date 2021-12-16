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
            <h3>888</h3>
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
            <h3>8888</h3>
            <span>平台商品总数</span>
          </div>
        </div>
      </div>
      <div class="center">
        <h4>平台使用情况</h4>
        <div class="main">
          <div class="top">
            <div class="top_left">
              <span class="font-15">80%</span>
              <span class="font-12">日均活跃度</span>
            </div>
            <div class="top_center">
              <span class="font-20">80%</span>
              <span class="font-16">日均活跃度</span>
            </div>
            <div class="top_right">
              <span class="font-15">80%</span>
              <span class="font-12">日均活跃度</span>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom_left">
              <span class="font-20">80%</span>
              <span class="font-16">日均活跃度</span>
            </div>
            <div class="bottom_center">
              <span class="font-15">80%</span>
              <span class="font-12">日均活跃度</span>
            </div>
            <div class="bottom_right">
              <span class="font-20">80%</span>
              <span class="font-16">日均活跃度</span>
            </div>
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
    <div class="footer mt-20">
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
        <div class="rank">
          <el-table :data="tableData" stripe style="width: 100%; height: 100%" :fit="true">
            <el-table-column prop="date" label="类目"> </el-table-column>
            <el-table-column prop="name" label="名称"> </el-table-column>
            <el-table-column prop="address" label="销售量"> </el-table-column>
          </el-table>
        </div>
        <!-- 商家综合排行 -->
        <!-- 商品排行 -->
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
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

  methods: {
    drawnBar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementsByClassName("stata")[0]);
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Rainfall", "Evaporation"],
        },
        toolbox: {
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
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Rainfall",
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
            markLine: {
              data: [{ type: "average", name: "Avg" }],
            },
          },
          {
            name: "Evaporation",
            type: "bar",
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
            markPoint: {
              data: [
                { name: "Max", value: 182.2, xAxis: 7, yAxis: 183 },
                { name: "Min", value: 2.3, xAxis: 11, yAxis: 3 },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "Avg" }],
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
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
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
          data: ["Profit", "Expenses", "Income"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
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
              show: false,
            },
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        series: [
          {
            name: "Income",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 341, 374, 390, 450, 420],
          },
          {
            name: "Expenses",
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
  height: calc(100vh - 100px);
  min-width: 1000px;
  overflow-y: hidden;
  & > .header {
    & > div {
      padding: 10px;
    }
    display: flex;
    & > .left {
      background-color: #ffffff;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      width: 200px;
      padding: 20px;
      & > div {
        width: 100%;
        height: 110px;
        background-color: #e7536b;
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
      flex: 1.5;
      margin: 0 20px;
      & > .main {
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        --size: 60px;
        font-size: 12px;
        & > .top,
        .bottom {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
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
          }
        }
        & > .top {
          & > .top_left {
            background-color: #f59604;
          }
          & > .top_center {
            background-color: #2396e6;
            transform: scale(1.3);
            box-shadow: 0 0 10px #0e3a53;
          }
          & > .top_right {
            background-color: #0bafa6;
          }
        }
        & > .bottom {
          & > .bottom_left {
            background-color: #6058df;
            transform: scale(1.3);
            box-shadow: 0 0 10px #1c2d59;

          }
          & > .bottom_center {
            background-color: #e7536b;
          }
          & > .bottom_right {
            background-color: #129633;
            transform: scale(1.3);
            box-shadow: 0 0 10px #0d3c36;

          }
        }
      }
    }
    & > .right {
      background-color: #ffffff;

      flex: 1;
      & > .type {
        height: 80%;
      }
    }
  }
  & > .footer {
    display: flex;
    & > div {
      background-color: #ffffff;
      padding: 10px;
      & > div {
        height: 320px;
      }
    }
    & > .echarts_stata {
        position: relative;
      & > .stata {
        width: 100%;
        position: absolute;
      }
      flex: 2.5;
    }
    & > .echarts_info {
      flex: 1;
      margin: 0 20px;
      position: relative;
      & > .info {
        width: 100%;
        position: absolute;
      }
    }
    & > .echarts_rank {
      position: relative;
      flex: 1;
      & >.rank{
        width: 95%;
        position: absolute;
      }
    }
  }
}
h4 {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  margin: 0 0 10px 0;
}
</style>