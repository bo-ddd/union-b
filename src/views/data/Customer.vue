<template>
  <div class="wrap">
    <div class="title">
      <h2>客户概况</h2>
      <div class="block">
        <span class="demonstration">时间筛选</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="header">
      <div>
        <span>浏览数</span>
        <span class="num">123,456</span>
      </div>
      <div>
        <span>访客数</span>
        <span class="num">123,456</span>
      </div>
      <div>
        <span>采购商注册人数</span>
        <span class="num">123,456</span>
      </div>
      <div>
        <span>采购商购买人数</span>
        <span class="num">123,456</span>
      </div>
      <div>
        <span>供应商入驻人数</span>
        <span class="num">123,456</span>
      </div>
      <div>
        <span>供应商成交人数</span>
        <span class="num">123,456</span>
      </div>
    </div>
    <div class="main">
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">
          <div class="main_header">
            <div class="main_header-left">
              <span>地区</span>
              <el-select v-model="value" placeholder="全部地区">
                <el-option
                  v-for="item in cities"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{
                    item.value
                  }}</span>
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="全部">
                <el-option
                  v-for="item in cities"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{
                    item.value
                  }}</span>
                </el-option>
              </el-select>
            </div>
            <div class="main_header-right">
              <el-button>查询</el-button>
              <el-button>重置</el-button>
            </div>
          </div>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="日期" width="250">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="250">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="250">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="250">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      </el-tabs>
      <div class="block">
        <span class="demonstration">时间筛选</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      pickerOptions1: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      activeName: "first",
    };
  },
  created() {},
  methods: {
    handleTabs(index) {
      console.log(index); //
      this.active = index;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-main {
  background-color: #a71e4c !important;
}
.wrap {

  background-color: bisque;
  & .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    & .block {
      & .demonstration {
        margin-right: 15px;
      }
    }
  }
  & .header {
    display: flex;
    height: 100px;
    background-color: #fff;
    margin-top: 20px;
    padding: 0 20px;
    & > div {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      & > .num {
        display: block;
        margin-top: 5px;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
  & .main {
    display: flex;
    justify-content: space-between;
    position: relative;
    & .block {
      position: absolute;
      right: 0px;
      top: 0px;
      & .demonstration {
        margin-right: 15px;
      }
    }
    & .main_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      // background-color: aqua;
      padding: 0 15px;

      & .el-select {
        margin-left: 25px;
      }
    }
  }
}
::v-deep .el-tabs__nav-wrap::after {
  width: 0;
}
</style>