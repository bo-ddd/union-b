<template>
  <div class="warp">
    <div class="main-t">
      <div class="main-t_left">
        <h3>实时数据</h3>
        <span>更新时间</span>
        <span class="date">2019-12-19 13:21:25</span>
      </div>
      <div>
        <el-cascader :options="options">
          <template slot-scope="{ data }">
            <span>{{ data.label }}</span>
          </template>
        </el-cascader>
      </div>
    </div>
    <div class="main_c">
      <div class="main_c-left">
        <h3>成交统计</h3>
        <div class="statistics"></div>
      </div>
      <div class="main_c-right">
        <h3>数据统计</h3>
        <div>
          <div class="pub">
            <img src="../../assets/images/icon-order.png" alt="" />
            <div>
              <div>订单量</div>
              <h3>201</h3>
              <div>-0.3% 同比昨日</div>
            </div>
          </div>
          <div class="pub">
            <img src="../../assets/images/icon-price.png" alt="" />
            <div>
              <div>客单价(元)</div>
              <h3>28,429</h3>
              <div>+1.1% 同比昨日</div>
            </div>
          </div>
          <div class="pub">
            <img src="../../assets/images/icon-browse.png" alt="" />
            <div>
              <div>浏览量</div>
              <h3>38,127</h3>
              <div>+3.9% 同比昨日</div>
            </div>
          </div>
          <div class="pub">
            <img src="../../assets/images/icon-paid.png" alt="" />
            <div>
              <div>待付款订单</div>
              <h3>9</h3>
              <div>-2.1% 同比昨日</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main_c-left">
        <h3>商品概括</h3>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="ranking" label="排名"> </el-table-column>
          <el-table-column prop="name" label="商品"> </el-table-column>
          <el-table-column prop="quantity" label="销量" :sortable="true">
          </el-table-column>
          <el-table-column prop="money" label="成交金额" sortable>
          </el-table-column>
        </el-table>
      </div>
      <div class="main_c-right">
        <h3>品牌销售额占比</h3>
        <div class="ranking"></div>
      </div>
      <div class="main_c-c" style="margin-right: 1.5%">
        <h3>采购商销售额排行榜</h3>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="ranking" label="排名"> </el-table-column>
          <el-table-column prop="name" label="商品"> </el-table-column>
          <el-table-column prop="money" label="成交金额"> </el-table-column>
        </el-table>
      </div>
      <div class="main_c-c">
        <h3>供应商销售额排行榜</h3>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column prop="ranking" label="排名"> </el-table-column>
          <el-table-column prop="name" label="商品"> </el-table-column>
          <el-table-column prop="money" label="成交金额"> </el-table-column>
        </el-table>
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
          name: "可乐",
          money: 5000,
          quantity: 1000,
        },
        {
          name: "王小虎",
          money: 5500,
          quantity: 100,
        },
        {
          name: "王小虎",
          money: 40000,
          quantity: 10,
        },
      ],
      options: [
        {
          label: "全部终端",
        },
      ],
    };
  },
  mounted() {
    this.statistics();
    this.ranking();
  },
  methods: {
    formatter(row) {
      return row.address;
    },
    statistics() {
      var chartDom = document.getElementsByClassName("statistics")[0];

      var myChart = echarts.init(chartDom);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      var option;

      option = {
        title: {
          subtext: "纯属虚构",
          left: "left",
        },
        xAxis: {
          type: "category",
          data: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290,
              1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 500, 600, 900,
            ],
            type: "line",
            smooth: true,
          },
        ],
      };

      option && myChart.setOption(option);
    },
    ranking() {
      var chartDom = document.getElementsByClassName("ranking")[0];
      var myChart = echarts.init(chartDom);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      var option;

      option = {
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  created() {
    this.tableData.sort(function (a, b) {
      return b.money - a.money;
    });
    this.tableData.forEach((e, index) => {
      e["ranking"] = index + 1;
    });
  },
};
</script>

<style lang="scss" scoped>
.warp {
  overflow-y: auto;
  height: 86vh;
}
.ranking {
  height: 98%;
}
.main-t {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #c8c8c8;
  padding-right: 2%;
}
.main-t_left {
  display: flex;
  align-items: center;
}
.main-t h3 {
  margin-right: 15px;
  color: #000;
}
.date {
  margin-left: 10px;
}
.statistics {
  height: 98%;
}
.main_c {
  display: flex;
  flex-wrap: wrap;
}
.main_c-left {
  padding: 2%;
  width: 50%;
  margin: 2.5% 1.5% 0 0;
  height: 40vh;
  background-color: #fff;
}
.main_c-right {
  padding: 2%;
  width: 40%;
  height: 40vh;
  margin: 2.5% 0 0 0;
  background-color: #fff;
}
.main_c-c {
  width: 45%;
  height: 40vh;
  margin-top: 2.5%;
  background-color: #fff;
  padding: 2%;
}
img {
  width: 45px;
  height: 45px;
  margin-right:3%;
  border-radius: 45px;
}
.pub {
  display: flex;
  align-items: center;
  width: 50%;
  height: 18vh;
}
.main_c-right > div {
  display: flex;
  flex-wrap: wrap;
}
</style>