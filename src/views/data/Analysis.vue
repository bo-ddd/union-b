<template>
  <div class="warp">
    <div class="main-l">
      <div class="main-left">
        <div class="main-left-left">
          <h3>购买数量</h3>
          <div class="buy"></div>
        </div>
        <div class="main-left-right">
          <h3>地区分布</h3>
          <div class="region"></div>
        </div>
      </div>
      <div class="main-left-bottom">
        <h3>实时访客量</h3>
        <div class="visitor"></div>
      </div>
    </div>
    <div class="main-r">
      <div class="main-right">
        <h3>男女占比</h3>
        <div class="sex"></div>
      </div>
      <div class="main-right">
        <h3>年龄分布</h3>
        <div class="age"></div>
      </div>
      <div class="main-right">
        <h3>交易趋势占比</h3>
        <div class="trend"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.buy();
    this.region();
    this.visitor();
    this.sex();
    this.age();
    this.trend();
  },
  methods: {
    buy() {
      var chartDom = document.getElementsByClassName("buy")[0];
      var myChart = echarts.init(chartDom);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      var option;

      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "饮料" },
              { value: 735, name: "生活用品" },
              { value: 580, name: "床上用品" },
              { value: 484, name: "辅料" },
              { value: 300, name: "速食产品" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    region() {
      var chartDom = document.getElementsByClassName("region")[0];
      var myChart = echarts.init(chartDom);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      var option;

      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
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
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "饮料" },
              { value: 735, name: "生活用品" },
              { value: 580, name: "床上用品" },
              { value: 484, name: "辅料" },
              { value: 300, name: "速食产品" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    visitor() {
      var chartDom = document.getElementsByClassName("visitor")[0];
      var myChart = echarts.init(chartDom);
      var option;
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      option = {
        title: {
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          data: ["线上访客", "线下访客"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data:["10:00", 
                "12:00", 
                "14:00", 
                "16:00", 
                "20:00", 
                "22:00", 
                "24:00"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "线上访客",
            type: "line",
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "线下访客",
            type: "line",
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    sex() {
      var chartDom = document.getElementsByClassName("sex")[0];
      var myChart = echarts.init(chartDom);
      var option;
      window.addEventListener("resize", function () {
        myChart.resize();
      });

      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
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
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "男" },
              { value: 35, name: "女" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    age() {
      var chartDom = document.getElementsByClassName("age")[0];
      var myChart = echarts.init(chartDom);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      var option;

      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "年龄分布",
            type: "pie",
            radius: ["40%", "70%"],
            data: [
              { value: 1048, name: "10-18" },
              { value: 735, name: "18-25" },
              { value: 580, name: "25-35" },
              { value: 484, name: "35-50" },
              { value: 300, name: "55-80" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    trend() {
      var chartDom = document.getElementsByClassName("trend")[0];
      var myChart = echarts.init(chartDom);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      var option;

      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            // name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "教育类" },
              { value: 735, name: "电子类" },
              { value: 580, name: "生活类" },
              { value: 484, name: "日常用品类" },
              { value: 300, name: "衣服类" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.warp {
  display: flex;
  justify-content: space-around;
}
.main-l {
  width: 56%;
  margin-right: 2.5%;
}
.main-r {
  width: 37%;
}
.main-left {
  padding: 2%;
  width: 100%;
  height: 36.5vh;
  background-color: #fff;
  margin-bottom: 3%;
  display: flex;
  justify-content: space-between;
}
.main-right {
  padding: 1.7%;
  width: 100%;
  height: 22.5vh;
  background-color: #fff;
  margin-bottom: 6%;
}
.main-left-left,
.main-left-right {
  width: 49%;
  height: 100%;
}
.buy,
.region,
.visitor,
.sex,
.age,
.trend {
  width: 100%;
  height: 98%;
}
.main-left-bottom {
  padding: 2%;
  width: 100%;
  height: 36.5vh;
  background-color: #fff;
}
</style>