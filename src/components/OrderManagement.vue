<template>
  <div class="wrap">
    <div class="top">
      <div class="top-l">
        <div class="select">
          <span class="mr-10" @click="updateOrderStatus">订单状态</span>
          <el-select
            size="small"
            v-model="orderStatusSelect"
            placeholder="请选择"
          >
            <el-option
              size="small"
              v-for="item in orderStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            >
            </el-option>
          </el-select>
        </div>
        <div class="select">
          <span class="mr-10">支付状态</span>
          <el-select
            size="small"
            v-model="paymentStatusSelect"
            placeholder="请选择"
          >
            <el-option
              size="small"
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
          <el-select
            size="small"
            v-model="orderTypeSelect"
            placeholder="请选择"
          >
            <el-option
              size="small"
              v-for="item in orderType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="select">
          <el-select
            size="small"
            v-model="orderNoSelect"
            class="order"
            placeholder="请选择"
          >
            <el-option
              v-for="item in orderNo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-input v-model="input" placeholder="请输入"></el-input>
        </div>
      </div>
      <div class="top-r">
        <el-button type="primary" @click="querySelectOrderStatus"
          >查询</el-button
        >
        <el-button type="primary" @click="resetOrderStatus">重置</el-button>
        <el-button type="primary" @click="exportExcel">导出</el-button>
      </div>
    </div>
    <div class="bottom">
      <el-table
        :data="table"
        ref="checkTable"
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
        id="out-table"
      >
        <el-table-column type="selection" width="45"> </el-table-column>
        <el-table-column fixed prop="orderId" label="订单编号" align="center">
        </el-table-column>
        <el-table-column prop="totalPrice" label="实付金额" align="center">
        </el-table-column>
        <el-table-column prop="expressName" label="快递公司" align="center">
        </el-table-column>
        <el-table-column prop="storeTitle" label="供应商" align="center">
        </el-table-column>
        <el-table-column prop="avatorName" label="采购商" align="center">
        </el-table-column>
        <el-table-column prop="consignee" label="收货人" align="center">
        </el-table-column>
        <el-table-column prop="paymentName" label="支付方式" align="center">
        </el-table-column>
        <el-table-column prop="orderStatus" label="订单状态" align="center">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template>
            <el-button type="text" @click="seeDetails"> 查看 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage4"
          :page-sizes="[10, 20, 30, 40, 50]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="
            $route.meta.title == '全部订单'
              ? tableData.length
              : tableData1.length
          "
          background
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapActions } from 'vuex';
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  updated() {
    this.$nextTick(() => {
      if (this.cacheExport.length > 0) {
        this.cacheExport.find((item) => {
          this.$refs.checkTable.toggleRowSelection(item, true);
        });
      }
    });
  },
  created() {
    this.updateOrderStatus();
    this.handleCurrentChange(1);
  },
  methods: {
    // ...mapActions(["getOrderList"]),
    // /**
    //  * @description 获取所有订单数据
    //  * **/
    // async getOrderListData(){
    //   let res = await this.getOrderList({});
    //   console.log(res);
    // },

    exportExcel() {
      /* 从表生成工作簿对象 */
      let wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
      console.log(wb);
      /* 获取二进制字符串作为输出 */
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array",
      });
      try {
        FileSaver.saveAs(
          //Blob 对象表示一个不可变、原始数据的类文件对象。
          //Blob 表示的不一定是JavaScript原生格式的数据。
          //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
          //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
          new Blob([wbout], { type: "application/octet-stream" }),
          //设置导出文件名称
          "sheet.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    /**
     * @description 重置所有选择
     * **/
    resetOrderStatus() {
      this.orderStatusSelect = "全部";
      this.paymentStatusSelect = "全部";
      this.orderTypeSelect = "全部";
      this.orderNoSelect = "订单编号";
      this.input = "";
    },

    /**
     * @description 查询所有选中的状态
     * **/
    querySelectOrderStatus() {
      console.log(this.orderStatusSelect);
      console.log(this.paymentStatusSelect);
      console.log(this.orderTypeSelect);
      console.log(this.orderNoSelect);
      console.log(this.input);
    },

    /**
     * @description 订单状态选择
     *
     * **/
    updateOrderStatus() {
      console.log(this.orderStatus);
      let val = "";
      for (let i = 0; i < this.orderStatus.length; i++) {
        if (this.$route.meta.title != "全部订单") {
          if (this.$route.meta.title != this.orderStatus[i].label) {
            this.orderStatus[i].disabled = true;
          } else {
            this.orderStatusSelect = this.orderStatus[i].label;
            val = this.orderStatus[i].value;
          }
        }
      }
      this.tableData.forEach((item) => {
        if (item.orderStatus == val) {
          this.tableData1.push(item);
        } else if (val == "全部订单") this.tableData1.push(item);
      });
    },

    /**
     * @description 分页每页有多少条
     * **/
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleCurrentChange(1);
      console.log(`每页 ${val} 条`);
    },

    /**
     * @description 分页的当前页有多少条
     * **/
    handleCurrentChange(val) {
      this.cacheExport = this.multipleSelection;

      let arr = [];
      let arr1 = [];
      for (
        let i = val * this.pageSize - this.pageSize;
        i < val * this.pageSize;
        i++
      ) {
        if (this.tableData1[i] != undefined) arr.push(this.tableData1[i]);
        if (this.tableData[i] != undefined) arr1.push(this.tableData[i]);
      }

      this.table = this.$route.meta.title == "全部订单" ? arr1 : arr;
      console.log(this.table);
      console.log(`当前页: ${val}`);
    },

    /**
     * @description 移除当前行的数据
     * **/
    removeOrder(row) {
      this.tableData.forEach((item, index) => {
        if (item == row) {
          this.tableData.splice(index, 1);
        }
      });
    },

    /**
     * @description 跳转查看详情
     * **/
    seeDetails() {
      this.$router.push({
        name: "OrderDetails",
      });
    },
  },
  data() {
    return {
      cacheExport: [],
      multipleSelection: [],
      table: [],
      pageSize: 10,

      orderStatus: [
        {
          value: "待审核",
          label: "待审核订单",
          disabled: false,
        },
        {
          value: "待支付",
          label: "待支付订单",
          disabled: false,
        },
        {
          value: "待发货",
          label: "待发货订单",
          disabled: false,
        },
        {
          value: "待收货",
          label: "待收货订单",
          disabled: false,
        },
        {
          value: "已完成",
          label: "已完成订单",
          disabled: false,
        },
        {
          value: "已取消",
          label: "已取消订单",
          disabled: false,
        },
        {
          value: "发货",
          label: "发货管理",
          disabled: false,
        },
        {
          value: "异常",
          label: "异常订单",
          disabled: false,
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
      currentPage4: 1,
      input: "",
      orderStatusSelect: "全部",
      paymentStatusSelect: "全部",
      orderTypeSelect: "全部",
      orderNoSelect: "订单编号",
      tableData: [
        {
          id: 1,
          orderId: "11111111111112",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待发货",
        },
        {
          id: 1,
          orderId: "1111111111111",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待审核",
        },
        {
          id: 1,
          orderId: "1111111111111",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待审核",
        },
        {
          id: 1,
          orderId: "11111111111112",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待发货",
        },
        {
          id: 1,
          orderId: "1111111111111",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待审核",
        },
        {
          id: 1,
          orderId: "1111111111111",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待审核",
        },
        {
          id: 1,
          orderId: "11111111111112",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待发货",
        },
        {
          id: 1,
          orderId: "1111111111111",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待审核",
        },
        {
          id: 1,
          orderId: "1111111111111",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待审核",
        },
        {
          id: 1,
          orderId: "11111111111112",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待发货",
        },
        {
          id: 1,
          orderId: "1111111111111",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待审核",
        },
        {
          id: 1,
          orderId: "1111111111111",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待审核",
        },
        {
          id: 1,
          orderId: "11111111111112",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待发货",
        },
        {
          id: 1,
          orderId: "1111111111111",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待审核",
        },
        {
          id: 1,
          orderId: "1111111111111",
          totalPrice: "100",
          expressName: "韵达",
          storeTitle: "老王",
          avatorName: "老李",
          consignee: "小王",
          paymentName: "支付宝",
          orderStatus: "待审核",
        },
      ],
      tableData1: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  height: calc(100vh - 100px);
  background: #fff;
  overflow-y: auto;

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
      font-size: 13px;
      // height: 25px !important;
      width: 8vw;
      padding: 6px;
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
        width: 8vw;
        // height: 24.8px;
        text-align: center;
        line-height: 3px;
        padding: 3px;
      }
    }
  }

  & .bottom {
    // margin: 15px;
    padding: 15px;
    & ::v-deep .el-table .cell {
      font-size: 13px !important;
    }

    & .el-table__fixed-right {
      box-shadow: -2px 0 3px -1px #ccc !important;
    }

    & ::v-deep .el-table .el-table__cell {
      padding: 0px !important;
    }

    & .block {
      padding: 20px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
