<template>
  <div class="wrap">
    <div class="header">
      <div class="left">
        <div>
          <div>
            <i>图片</i>
          </div>
          <div>
            <h3>888</h3>
            <span>平台商家总数</span>
          </div>
        </div>
        <div>
          <div>
            <i>图片</i>
          </div>
          <div>
            <h3>8888</h3>
            <span>平台商品总数</span>
          </div>
        </div>
      </div>
      <div class="center">
        <section><h4>平台使用情况</h4></section>
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
          <el-table :data="tableData" stripe style="width: 100%;height:100%">
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
    this.drawnBar();
    this.drawnPie();
    this.drawnTotal();
  },
  methods: {
    drawnBar() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementsByClassName("stata")[0]);
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
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
  background-color: #fcf9fa;
  & > .header {
    & > div {
      padding: 10px;
    }
    height: 240px;
    display: flex;
    & > .left {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      width: 200px;
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
          & > h3 {
            font-size: 30px;
          }
        }
      }
    }
    & > .center {
      background-color: #ffffff;

      flex: 1.5;
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      margin: 0 20px;
      position: relative;
      & > section {
        width: 100%;
      }
      & > div:hover {
        transform: scale(1.2);
      }
      & > div {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        text-align: center;
        color: white;
        cursor: pointer;
        transition: 1s;
        & > .font-20 {
          font-size: 20px;
          font-weight: bolder;
        }
        & > .font-15 {
          font-size: 15px;
          font-weight: bolder;
        }
        & > .font-16 {
          font-size: 16px;
        }
        & > .font-12 {
          font-size: 12px;
        }
      }
      & > div:nth-child(even) {
        width: 70px;
        height: 70px;
      }
      & > .top_left {
        position: absolute;
        top: 18%;
        left: 18%;
        background-color: #f59604;
        box-shadow: 0 0 10px #f59604;
      }
      & > .top_center {
        position: absolute;
        top: 16%;
        left: 38%;
        background-color: #2396e6;
      }
      & > .top_right {
        position: absolute;
        top: 20%;
        left: 65%;
        background-color: #0bafa6;
        box-shadow: 0 0 10px #0bafa6;
      }
      & > .bottom_left {
        position: absolute;
        top: 56%;
        left: 18%;
        background-color: #6058df;
      }
      & > .bottom_center {
        position: absolute;
        top: 65%;
        left: 45%;
        background-color: #e7536b;
        box-shadow: 0 0 10px #e7536b;
      }
      & > .bottom_right {
        position: absolute;
        top: 56%;
        left: 65%;
        background-color: #129633;
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
      height: calc(100vh - 360px);
      padding: 10px;
      &>div{
        height: 350px;
      }
    }
    & > .echarts_stata {
      flex: 2.5;
    }
    & > .echarts_info {
      flex: 1;
      margin: 0 20px;
    }
    & > .echarts_rank {
      flex: 1;
    }
  }
}
h4 {
  border-bottom: 1px solid;
}

</style>