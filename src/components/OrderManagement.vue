<template>
  <div class="wrap">
    <div class="top">
      <div class="top-l">
        <!-- 订单状态 -->
        <div class="select">
          <span class="mr-10" @click="updateOrderStatus">订单状态</span>
          <el-select
            size="small"
            v-model="orderStatusSelect"
            @change="getOrderStatusId(orderStatusSelect)"
            placeholder="请选择"
          >
            <el-option
              size="small"
              v-for="item in orderStatus"
              :key="item.status"
              :label="item.status"
              :value="item.status"
              :disabled="item.disabled"
            >
            </el-option>
          </el-select>
        </div>

        <!-- 快递公司 -->
        <div class="select">
          <span class="mr-10" >快递公司</span>
          <el-select
            size="small"
            v-model="expressSelect"
            @change="getExpressId(expressSelect)"
            placeholder="请选择"
          >
            <el-option
              size="small"
              v-for="item in express"
              :key="item.expressName"
              :label="item.expressName"
              :value="item.expressName"
              :disabled="item.disabled"
            >
            </el-option>
          </el-select>
        </div>

        <!-- 供应商 -->
       <div class="select">
          <span class="mr-10">供应商</span>
          <el-input v-model="storeTitle" placeholder="请输入"></el-input>
        </div>

        <!-- 采购商 -->
        <div class="select">
         <span class="mr-10">采购商</span>
          <el-input v-model="avatorName" placeholder="请输入"></el-input>
        </div>

        <!-- 收货人 -->
        <div class="select">
         <span class="mr-10">收货人</span>
          <el-input v-model="consigneeVal" placeholder="请输入"></el-input>
        </div>

        <!-- 支付方式 -->
        <div class="select">
          <span class="mr-10">支付方式</span>
          <el-select
            size="small"
            v-model="paymentStatusSelect"
             @change="getPaymentStatusId(paymentStatusSelect)"
            placeholder="请选择"
          >
            <el-option
              size="small"
              v-for="item in paymentStatus"
              :key="item.paymentName"
              :label="item.paymentName"
              :value="item.paymentName"
            >
            </el-option>
          </el-select>
        </div>
        <!-- <div class="select">
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
        </div> -->
       
       <!-- 订单编号 -->
        <div class="select">
          <span class="mr-10">订单编号</span>
          <el-input v-model="orderId" placeholder="请输入"></el-input>
        </div>
      </div>
      <div class="top-r">
        <el-button type="primary" @click="querySelectOrderStatus(),queryOrder()"
          >查询</el-button
        >
        <el-button type="primary" @click="resetOrderStatus">重置</el-button>
        <el-button type="primary" @click="exportExcel">导出</el-button>
      </div>
    </div>
    <div class="bottom">
      <el-table
        :data="allOrderList"
        ref="checkTable"
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="45"> </el-table-column>
        <el-table-column prop="orderId" label="订单编号" align="center">
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
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="
                seeDetails(scope.row.orderId),
                  getOrderDetailData(scope.row.orderId)
              "
            >
              查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-table
        :data="cacheExport"
        ref="checkTable"
        stripe
        style="width: 100%"
        id="out-table"
        class="hide"
      >
        <el-table-column type="selection" width="45"> </el-table-column>
        <el-table-column prop="orderId" label="订单编号" align="center">
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
        <el-table-column label="操作" align="center">
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
              ? allOrder.length
              : order.length
          "
          background
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
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
  async created() {
    await this.getOrderListData();
    await this.getOrderStatusListData();
    await this.getPaymentListData();
    await this.getExpressListData();
    this.updateOrderStatus();
    this.handleCurrentChange(1);
  },
  methods: {
    ...mapActions([
      "getOrderList",
      "getOrderDetail",
      "getOrderStatusList",
      "getPaymentList",
      "getPaymentList",
      "getExpressList"
    ]),

    /**
     * @description 获取快递
     * **/ 
    async getExpressListData(){
      let res = await this.getExpressList();
      if(res.status == 1){
        this.express = res.data.rows;
      }
      console.log(res);
    },

    /**
     * @description 拿到订单状态ID
     * **/
    getOrderStatusId(value) {
      this.orderStatus.forEach((item) => {
        if (item.status == value) {
          this.orderStatusId = item.id;
        }
      });
    },

    /**
     * @description 拿到快递公司ID
     * **/
    getExpressId(value) {
      this.express.forEach((item) => {
        if (item.expressName == value) {
          this.expressId = item.id;
        }
      });
    },

    /**
     * @description 拿到支付方式的ID
     * **/ 
    getPaymentStatusId(value){
      this.paymentStatus.forEach(item=>{
        if(item.paymentName == value){
          this.paymentStatusId = item.id;
        }
      })
    },

    /**
     * @description 根据条件查询
     * **/ 
    async queryOrder(){
      let obj = {};
      if(this.paymentStatusId) obj.paymentId = parseInt(this.paymentStatusId);
      if(this.orderStatusId) obj.orderStatus = parseInt(this.orderStatusId);
      if(this.orderId) obj.orderId = parseInt(this.orderId);
      if(this.expressId) obj.expressId = parseInt(this.expressId);
      if(this.storeTitle) obj.storeTitle = this.storeTitle;
      if(this.avatorName) obj.avatorName = this.avatorName;
      if(this.consigneeVal) obj.consignee = this.consigneeVal;
      let res = await this.getOrderList(obj);
      console.log(obj)
      if(res.status == 1){
        this.allOrderList = res.data.rows;
      }
      console.log(res)
    },

    /**
     * @description 订单状态
     * **/
    async getOrderStatusListData() {
      let res = await this.getOrderStatusList();
      if (res.status == 1) {
        this.orderStatus = res.data.rows;
        for (let i = 0; i < this.orderStatus.length; i++) {
          this.orderStatus[i].disabled = false;
        }
      }
      console.log(res);
    },

    /**
     * @description 获取支付方式
     * **/
    async getPaymentListData() {
      let res = await this.getPaymentList();
      if (res.status == 1) {
        this.paymentStatus = res.data.rows;
      }
    },

    /**
     * @description 订单详情页
     * **/
    async getOrderDetailData(id) {
      let res = await this.getOrderDetail({ id });
      console.log(res);
    },

    /**
     * @description 获取所有订单数据
     * **/
    async getOrderListData() {
      let res = await this.getOrderList();
      if (res.status == 1) {
        this.allOrder = res.data.rows;
        console.log(this.allOrder);
        console.log(res);
      }
    },

    exportExcel() {
      /* 从表生成工作簿对象 */
      console.log(this.cacheExport);
      var xlsxParam = { raw: true };
      let wb = XLSX.utils.table_to_book(
        document.querySelector("#out-table"),
        xlsxParam
      );
      /* 获取二进制字符串作为输出 */
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array",
      });
      console.log(wbout);
      try {
        FileSaver.saveAs(
          //Blob 对象表示一个不可变、原始数据的类文件对象。
          //Blob 表示的不一定是JavaScript原生格式的数据。
          //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
          //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
          new Blob([wbout], { type: "application/octet-stream" }),
          //设置导出文件名称
          "订单列表.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.cacheExport = this.multipleSelection;
    },

    /**
     * @description 重置所有选择
     * **/
    resetOrderStatus() {
      this.orderStatusSelect = "全部";
      this.paymentStatusSelect = "全部";
      this.orderTypeSelect = "全部";
      this.orderNoSelect = "订单编号";
      this.orderId = "";
    },

    /**
     * @description 查询所有选中的状态
     * **/
    querySelectOrderStatus() {
      console.log(this.orderStatus);
      console.log(this.orderStatusSelect);
      console.log(this.paymentStatusSelect);
      console.log(this.orderTypeSelect);
      console.log(this.orderNoSelect);
      console.log(this.orderId);
    },

    /**
     * @description 订单状态选择
     *
     * **/
    updateOrderStatus() {
      let val = "";
      for (let i = 0; i < this.orderStatus.length; i++) {
        if (this.$route.meta.title != "全部订单") {
          if (!this.$route.meta.title.includes(this.orderStatus[i].status)) {
            this.orderStatus[i].disabled = true;
          } else {
            this.orderStatusSelect = this.orderStatus[i].status;
            val = this.orderStatus[i].status;
          }
        }
      }

      this.allOrder.forEach((item) => {
        if (item.orderStatus == val) {
          this.order.push(item);
        } else if (val == "全部订单") this.order.push(item);
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
        if (this.order[i] != undefined) arr.push(this.order[i]);
        if (this.allOrder[i] != undefined) arr1.push(this.allOrder[i]);
      }
      this.allOrderList = this.$route.meta.title == "全部订单" ? arr1 : arr;
      console.log(`当前页: ${val}`);
    },

    /**
     * @description 跳转查看详情
     * **/
    seeDetails(id) {
      this.$router.push({
        query: { id: id },
        name: "OrderDetails",
      });
    },
  },
  data() {
    return {
      orderStatusId: 0,
      paymentStatusId:0,
      expressId:0,
      storeTitle:"",
      avatorName:"",
      orderId: "",
      consigneeVal:"",
      cacheExport: [],
      multipleSelection: [],
      allOrderList: [],
      pageSize: 10,

      orderStatus: [],
      paymentStatus: [],
      orderType: [],
      express:[],
      orderNo: [
        {
          value: "选项1",
          label: "订单编号",
        },
      ],
      supplier: [
        {
          value: "选项1",
          label: "供应商",
        },
      ],
      purchaser: [
        {
          value: "选项1",
          label: "采购商",
        },
      ],
      consignee: [
        {
          value: "选项1",
          label: "收货人",
        },
      ],
      currentPage4: 1,
      orderStatusSelect: "全部",
      paymentStatusSelect: "全部",
      orderTypeSelect: "全部",
      orderNoSelect: "全部",
      expressSelect:"全部",
      allOrder: [],
      order: [],
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
    // display: grid;
    // grid-template-columns: 80% 20%;
    display: flex;


    & .el-icon-arrow-down:before {
      padding-left: 15px !important;
    }

    & ::v-deep .el-input{
      font-size:20px !important;
      // width:0% !important;
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
      flex-wrap: wrap;

      & ::v-deep .order {
        border-right: none !important;
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
      }

      & .select {
        margin-right: 15px;
        margin-bottom: 15px;
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

    & ::v-deep .hide {
      display: none;
    }

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
