<template>
  <div class="wrap">
    <div class="title">
      <h2>客户概况</h2>
      <div class="block">
        <span class="demonstration">时间筛选</span>
        <el-date-picker v-model="value1" type="daterange" size='small'
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
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
      <el-tabs v-model="activeName" style="width:100%">
        <el-tab-pane label="采购商成交排行" name="first">
          <div class="content">
            <div class="content_header">
              <div class="content-left">
              <span>地区</span>
              <el-select v-model="value" placeholder="全部地区" size='small'>
                <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{item.value}}</span>
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="全部" size='small'>
                <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{item.value}}</span>
                </el-option>
              </el-select>
              </div>
              <div class="content-right">
              <el-button size='small'>查询</el-button>
              <el-button size='small'>重置</el-button>
              </div>
            </div>
            <el-table :data="tableData" stripe size='small'>
            <el-table-column prop="date" label="排名" >
            </el-table-column>
            <el-table-column prop="username" label="用户名" >
            </el-table-column>
            <el-table-column prop="company" label="公司名称" >
            </el-table-column>
            <el-table-column prop="fixtureNumber" label="成交数" sortable >
            </el-table-column>
            <el-table-column prop="price" label="付款金额" sortable >
            </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="供应商成交排行" name="second">
           <div class="content">
            <div class="content_header">
              <div class="content-left">
              <span>地区</span>
              <el-select v-model="value" placeholder="全部地区" size='small'>
                <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{item.value}}</span>
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="全部" size='small'>
                <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{item.value}}</span>
                </el-option>
              </el-select>
              </div>
              <div class="content-right">
              <el-button size='small'>查询</el-button>
              <el-button size='small'>重置</el-button>
              </div>
            </div>
            <el-table :data="tableData" stripe size='small'>
            <el-table-column prop="date" label="排名" >
            </el-table-column>
            <el-table-column prop="username" label="用户名" >
            </el-table-column>
            <el-table-column prop="company" label="公司名称" >
            </el-table-column>
            <el-table-column prop="fixtureNumber" label="成交数" sortable >
            </el-table-column>
            <el-table-column prop="price" label="付款金额" sortable >
            </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="block">
        <span class="demonstration">时间筛选</span>
        <el-date-picker size='small'
          v-model="value2"
          unlink-panels
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "1",
          username: "马云",
          company: "阿里巴巴",
          fixtureNumber: "520",
          price: "1296500",
        },
        {
          date: "2",
          username: "马化腾",
          company: "腾讯",
          fixtureNumber: "310",
          price: "823200",
        },
        {
          date: "3",
          username: "王健林",
          company: "万达",
          fixtureNumber: "301",
          price: "658941",
        },
        {
          date: "4",
          username: "许家印",
          company: "恒大",
          fixtureNumber: "250",
          price: "23561",
        },
        {
          date: "5",
          username: "杨惠妍",
          company: "碧桂园",
          fixtureNumber: "290",
          price: "235610",
        },
      ],
      cities: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
      ],
      value: "",
      value1: "",
      value2: "",
      activeName: "first",
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
body{
  min-width: 1000px;
}
::v-deep .el-main {
  background-color: #a71e4c !important;
}
.wrap {
  min-width: 1000px;
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
    & ::v-deep .el-tabs__item.is-top {
      font-weight: 700;
      font-size: 18px;
      margin-top: 30px;
    }
    & ::v-deep .el-tabs__item:hover {
      color: #fd84a2;
    }
    & ::v-deep .el-tabs__item.is-active {
      color: #fd84a2;
    }
    & ::v-deep .el-tabs__active-bar {
      background-color: #fd84a2;
    }
    & .block {
      position: absolute;
      right: 0px;
      top: 30px;
      & .demonstration {
        margin-right: 15px;
      }
    }
    & .content {
      background-color: #fff;
      min-height: 320px;
      padding: 10px 20px;
      overflow-y: auto;
      & .content_header{
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
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