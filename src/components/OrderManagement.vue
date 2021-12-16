<template>
  <div class="wrap">
    <div class="top">
      <div class="top-l">
        <div class="select">
          <span class="mr-10">订单状态</span>
          <el-select v-model="orderStatusSelect" placeholder="请选择">
            <el-option
              v-for="item in orderStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="select">
          <span class="mr-10">支付状态</span>
          <el-select v-model="paymentStatusSelect" placeholder="请选择">
            <el-option
              v-for="item in paymentStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="select">
          <span class="mr-10">订单类型</span>
          <el-select v-model="orderTypeSelect" placeholder="请选择">
            <el-option
              v-for="item in orderType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="select">
          <el-select v-model="orderNoSelect" class="order" placeholder="请选择">
            <el-option
              v-for="item in orderNo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <input
            class="input"
            v-model="input"
            type="text"
            placeholder="请输入"
          />
        </div>
      </div>
      <div class="top-r">
        <el-button type="danger" class="">查询</el-button>
        <el-button>重置</el-button>
        <el-button>导出</el-button>
      </div>
    </div>
    <div class="bottom">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column
      type="selection"
      width="45">
    </el-table-column>
        <el-table-column fixed prop="date" label="订单编号" width="170">
        </el-table-column>
        <el-table-column prop="name" label="实付金额" width="100">
        </el-table-column>
        <el-table-column prop="province" label="快递费" width="100">
        </el-table-column>
        <el-table-column prop="city" label="供应商" width="230">
        </el-table-column>
        <el-table-column prop="address" label="采购商" width="230">
        </el-table-column>
        <el-table-column prop="zip" label="收货人" width="100">
        </el-table-column>
        <el-table-column prop="zip" label="支付方式" width="100">
        </el-table-column>
        <el-table-column prop="zip" label="订单状态" width="100">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template>
            <el-button type="text"> 移除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40, 50]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          background
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  data() {
    return {
      orderStatus: [
        {
          value: "选项1",
          label: "待审核订单",
        },
        {
          value: "选项2",
          label: "待支付订单",
        },
        {
          value: "选项3",
          label: "待发货订单",
        },
        {
          value: "选项4",
          label: "待收货订单",
        },
        {
          value: "选项5",
          label: "已完成订单",
        },
        {
          value: "选项6",
          label: "已取消订单",
        },
        {
          value: "选项7",
          label: "发货管理",
        },
        {
          value: "选项8",
          label: "异常订单",
        },
      ],
      paymentStatus: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      orderType: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      orderNo: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      currentPage4: 4,
      input: "",
      orderStatusSelect: "全部",
      paymentStatusSelect: "全部",
      orderTypeSelect: "全部",
      orderNoSelect: "订单编号",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江 1518 弄",
          zip: 200333,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #fff;
  & .mr-10 {
    margin-right: 10px;
  }
  & .top {
    padding: 15px;
    display: grid;
    grid-template-columns: 80% 20%;

    & .el-icon-arrow-down:before {
      padding-left: 15px !important;
    }

    & ::v-deep .el-input__inner {
      // width: 80px;
      font-size: 13px;
      height: 25px !important;
      padding: 3px;
    }

    & ::v-deep .el-input__icon {
      line-height: 0px;
    }

    & .top-l {
      display: flex;

      & ::v-deep .order {
        border-right: none !important;
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
      }

      & .input {
        outline: none;
        border: 1px solid #dcdfe6;
        width: 150px;
        height: 22.8px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }

      & .select {
        margin-right: 15px;
        display: flex;
        align-items: center;
      }

      & span {
        display: inline-block;
        font-size: 13px;
        color: rgb(129, 129, 129);
      }

      & .el-dropdown {
        font-size: 13px;
        border: 1px solid #ccc;
        padding: 3px;
        margin-left: 10px;
        border-radius: 4px;
      }
    }

    & .top-r {
      display: flex;
      justify-content: flex-end;

      & ::v-deep .el-button {
        width: 50px;
        height: 24.8px;
        text-align: center;
        line-height: 3px;
        padding: 3px;
      }
    }
  }

  & .bottom {
    // margin: 15px;

    & .el-table__fixed-right {
      box-shadow: -2px 0 3px -1px #ccc !important;
    }

    & ::v-deep .el-table .el-table__cell {
      padding: 8px !important;
    }

    & .block {
      padding: 15px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
