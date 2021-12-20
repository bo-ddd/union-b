<template>
  <div class="warp">
    <!-- 刘青松 -->
    <div class="class">
      <div class="fen"><span>商品数据</span> <i class="el-icon-edit"></i></div>
      <div class="fen"><span>商品数据</span> <i class="el-icon-edit"></i></div>
      <div class="fen"><span>商品数据</span> <i class="el-icon-edit"></i></div>
      <div class="fen"><span>商品数据</span> <i class="el-icon-edit"></i></div>
    </div>
    <div class="filter">
      <div>
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00']">
        </el-date-picker>
      </div>
      <div>
        <el-cascader
          v-model="value"
          :options="options"
          @change="handleChange"></el-cascader>
      </div>
      <div class="chaxun">
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-s">
        <div>
          <h6>全部商品的费用百分比</h6>
          <div class="type"></div>
        </div>
        <div>
          <h6>全部商品的费用百分比</h6>
          <div class="type"></div>
        </div>
        <div>
          <h6>全部商品的费用百分比</h6>
          <div class="type"></div>
        </div>
        <div>
          <h6>全部商品的费用百分比</h6>
          <div class="type"></div>
        </div>
      </div>
      <div class="bottom-b">
        <div>
          <h6>商品类目销量前10名</h6>
          <el-table border :data="tableData" stripe size="small">
            <el-table-column prop="name" label="商品名称" align="center"> </el-table-column>
            <el-table-column prop="date" label="商品销量" align="center"> </el-table-column>
            <el-table-column prop="address" label="销售排序" align="center"> </el-table-column>
          </el-table>
        </div>
        <div>
          <h6>商品数量销量前10名</h6>
          <el-table border :data="tableData" stripe size="small">
            <el-table-column prop="name" label="商品名称" align="center"> </el-table-column>
            <el-table-column prop="date" label="商品销量" align="center"> </el-table-column>
            <el-table-column prop="address" label="销售排序" align="center"> </el-table-column>
          </el-table>
        </div>
        <div>
          <h6>商品店铺销量前10名</h6>
          <el-table border :data="tableData" stripe size="small">
            <el-table-column prop="name" label="商品名称" align="center"> </el-table-column>
            <el-table-column prop="date" label="商品销量" align="center"> </el-table-column>
            <el-table-column prop="address" label="销售排序" align="center"> </el-table-column>
          </el-table>
        </div>
        <div>
          <h6>快递小哥配送前10名</h6>
          <el-table border :data="tableData" stripe size="small">
            <el-table-column prop="name" label="商品名称" align="center"> </el-table-column>
            <el-table-column prop="date" label="商品销量" align="center"> </el-table-column>
            <el-table-column prop="address" label="销售排序" align="center"> </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
      }], 
      value:"",
      value1:"",
      tableData: [
        { name: "牛奶", date: "100", address: "1" },
        { name: "啤酒", date: "98", address: "2" },
        { name: "手机", date: "95", address: "3" },
        { name: "电视机", date: "89", address: "4" },
        { name: "洗衣机", date: "86", address: "5" },
        { name: "冰箱", date: "83", address: "6" },
        { name: "空调", date: "80", address: "7" },
        { name: "自行车", date: "50", address: "8" },
        { name: "窗帘", date: "30", address: "9" },
        { name: "毛衣", date: "29", address: "10" },
      ],
    };
  },
  methods: {
    drawnBar() {
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "10%",
          left: "70%",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["25%", "50%"],
            center: ["40%","50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "10",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "牛奶" },
              { value: 735, name: "啤酒" },
            ],
          },
        ],
      }
      let option1 = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "10%",
          left: "70%",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["25%", "50%"],
            center: ["40%","50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "10",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 580, name: "手机" },
              { value: 484, name: "电视机" },
              { value: 300, name: "洗衣机" },
            ],
          },
        ],
      }
      let option2 = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "10%",
          left: "70%", 
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["25%", "50%"],
            center: ["40%","50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "10",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 735, name: "冰箱" },
              { value: 484, name: "空调" },
              { value: 180, name: "自行车" },
            ],
          },
        ],
      }
      let option3 = {
        grid:{
          height:'50%',
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Rainfall", "Evaporation"],
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: ['Jan', 'Feb', 'Mar'],
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
            data: [20.0, 40.9, 77.0],
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
            data: [20.6, 50.9, 90.0],
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
      }
      let myChart = echarts.init(document.getElementsByClassName("type")[0]);
      let myChart1 = echarts.init(document.getElementsByClassName("type")[1]);
      let myChart2 = echarts.init(document.getElementsByClassName("type")[2]);
      let myChart3 = echarts.init(document.getElementsByClassName("type")[3]);
      window.addEventListener("resize",function(){
        myChart.resize();
        myChart1.resize()
        myChart2.resize()
        myChart3.resize()
      });
      myChart.setOption(option);
      myChart1.setOption(option1);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
    },
    handleChange(){

    }
  },
  mounted() {
    this.drawnBar();
  },
};
</script>

<style lang="scss" scoped>
.warp {
  min-width: 90%;
  height: 80vh;
}
::v-deep .el-input__inner,
.filter .el-input{
  height: 55%;
}
::v-deep .el-date-editor .el-range__icon,::v-deep .el-date-editor .el-range-separator{
  line-height: 150%;
}
::v-deep .el-cascader .el-input .el-input__inner{
  padding: 1.24% 5% 1.24% 3%;
}
.class {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1%;
  & .fen {
    background: #e7536b;
    padding: 5% 3.5%;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.el-button--primary{
    color: #FFF;
    background-color: #e7536b;
    border-color: #e7536b;
}
.type {
  height: 25vh;
}
.filter {
  margin: 1% 0;
  border-radius: 3px;
  padding-left: 1%;
  background: white;
  display: flex;
  position: relative;
  & > div {
    height: 8vh;
    padding-right: 2%;
    display: flex;
    align-items: center;
    & .el-input{
      height: 8vh !important;
    }
  }
  & > .chaxun {
    position: absolute;
    right: 0px;
    height: 100%;
  }
}
::v-deep .el-cascader,::v-deep .el-cascader>.el-input{
  height: 100%;
}
::v-deep .el-cascader>.el-input{
  display: flex;
  align-items: center;
}
.bottom{
  height: 100%;
}
.bottom-s,
.bottom-b{
  display: grid;
  grid-template-columns: repeat(4, 24.25%);
  gap: 1% 1%;
  & > div {
    margin: 0 0 4% 0;
    padding: 3%;
    background: white;
    border: 1px solid white;
    border-radius: 5px;
  }
}
::v-deep .filter .el-button {
  padding: 12% 16%;
}
.filter {
  font-size: 14px;
}
::v-deep .el-table .el-table__cell {
  padding: 0 !important;
}
.el-table {
  margin-top: 3% !important;
}
::v-deep .el-table .cell{
  line-height: 4vh;
}
</style>