<template>
  <div class="warp">
    <!-- 刘青松 -->
    <div class="class">
      <div><span>商品数据</span><i class="el-icon-edit el-icon--right"></i></div>
      <div><span>商品数据</span><i class="el-icon-edit el-icon--right"></i></div>
      <div><span>商品数据</span><i class="el-icon-edit el-icon--right"></i></div>
      <div><span>商品数据</span><i class="el-icon-edit el-icon--right"></i></div>
    </div>
    <div class="filter">
      <div>
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
      </div>
      <div class="chaxun">
        <el-button type="primary" @click="filter">查询</el-button>
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
          <el-table border :data="tableData" stripe>
            <el-table-column prop="categoryTitle" label="商品名称" align="center"> </el-table-column>
            <el-table-column prop="count" label="商品销量" align="center"> </el-table-column>
            <el-table-column prop="address" label="销售排序" align="center"> </el-table-column>
          </el-table>
        </div>
        <div>
          <h6>商品数量销量前10名</h6>
          <el-table border :data="tableData1" stripe>
            <el-table-column prop="categoryTitle" label="商品名称" align="center"> </el-table-column>
            <el-table-column prop="price" label="商品销量" align="center"> </el-table-column>
            <el-table-column prop="address" label="销售排序" align="center"> </el-table-column>
          </el-table>
        </div>
        <div>
          <h6>商品店铺销量前10名</h6>
          <el-table border :data="tableData2" stripe>
            <el-table-column prop="name" label="商品名称" align="center"> </el-table-column>
            <el-table-column prop="date" label="商品销量" align="center"> </el-table-column>
            <el-table-column prop="address" label="销售排序" align="center"> </el-table-column>
          </el-table>
        </div>
        <div>
          <h6>快递小哥配送前10名</h6>
          <el-table border :data="tableData3" stripe>
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      ...mapActions(["getRankingData"]),
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
      tableData: [],
      tableData1:[],
      tableData2:[],
      tableData3:[],
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
            center: ["40%","60%"],
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
            center: ["40%","60%"],
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
            center: ["40%","60%"],
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

    },
    filter(){
      console.log(this.value1);
      console.log(1);
      console.log(this.value);
    },
    async fn(){
      let res = await this.getRankingData();
      if(res.status == 1){
        console.log(res.data);
        this.tableData = res.data.categoryRanking;
        this.tableData1 = res.data.productRanking;
        console.log(this.tableData);
        console.log(this.tableData1);
      }else{
        console.log("获取失败!");
      }
    }
  },
  async mounted() {
    this.drawnBar();
    console.log(await this.fn());
  },
};
</script>

<style lang="scss" scoped>
.warp {
  min-width: 1100px;
  & .class {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1%;
    & > div{
      color: white;
      background: var(--color);
      padding: 4.5% 6%;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
    }
    & .fen {
      background: #409EFF;
      padding: 5% 3.5%;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  & .filter {
    margin: 1% 0;
    border-radius: 3px;
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 0.5% 1%;
    font-size: 14px;
    & > div {
      display: flex;
      align-items: center;
    }
  }
  & .bottom{
    & .bottom-s,
    & .bottom-b{
      display: grid;
      grid-template-columns: repeat(4, 24.25%);
      gap: 1% 1%;
      & > div {
        margin: 0 0 4% 0;
        padding: 3%;
        background: white;
        border: 1px solid white;
        border-radius: 5px;
        & .type {
          height: 25vh;
        }
      }
    }
  }
}

::v-deep .el-cascader>.el-input{
  display: flex;
  align-items: center;
}
.bottom-b>div{
  height: 32vh;
}
::v-deep .el-cascader .el-input .el-input__inner{
  margin-left: 10%;
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