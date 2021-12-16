<template>
  <div class="wrap">
    <div class="top">
      <div class="top-l">
        <div class="select">
          <span class="mr-10" @click="updateOrderStatus">订单状态</span>
          <el-select
            v-model="orderStatusSelect"
            placeholder="请选择"
          >
            <el-option
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
        <el-button type="danger" @click="querySelectOrderStatus">查询</el-button>
        <el-button @click="resetOrderStatus">重置</el-button>
        <el-button>导出</el-button>
      </div>
    </div>
    <div class="bottom">
      <el-table :data="table" stripe style="width: 100%" class="tableBox">
        <el-table-column type="selection" width="45"> </el-table-column>
        <el-table-column fixed prop="num" label="订单编号" width="170">
        </el-table-column>
        <el-table-column prop="price" label="实付金额" width="100">
        </el-table-column>
        <el-table-column prop="kdprice" label="快递费" width="100">
        </el-table-column>
        <el-table-column prop="gys" label="供应商" width="230">
        </el-table-column>
        <el-table-column prop="cgs" label="采购商" width="230">
        </el-table-column>
        <el-table-column prop="shr" label="收货人" width="100">
        </el-table-column>
        <el-table-column prop="zffs" label="支付方式" width="100">
        </el-table-column>
        <el-table-column prop="ddzt" label="订单状态" width="100">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="(dialogVisible = true), (removeOrderData = scope.row)"
            >
              移除
            </el-button>
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
          :total="tableData.length"
          background
        >
        </el-pagination>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>确定删除这条订单吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="(dialogVisible = false), removeOrder(removeOrderData)"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  created() {
    this.updateOrderStatus();
    this.handleCurrentChange(1);
  },
  methods: {
    /**
     * @description 重置所有选择
     * **/ 
    resetOrderStatus(){
      this.orderStatusSelect = "全部";
      this.paymentStatusSelect = "全部";
      this.orderTypeSelect = "全部";
      this.orderNoSelect = "订单编号";
      this.input = "";
    },

    /**
     * @description 查询所有选中的状态
     * **/ 
    querySelectOrderStatus(){
      console.log(this.orderStatusSelect)
      console.log(this.paymentStatusSelect)
      console.log(this.orderTypeSelect)
      console.log(this.orderNoSelect)
      console.log(this.input)
    },

    /**
     * @description 订单状态选择
     *
     * **/
    updateOrderStatus() {
      console.log(this.orderStatus);
      for(let i=0;i<this.orderStatus.length;i++){
        if(this.$route.meta.title != "全部订单"){
          if(this.$route.meta.title != this.orderStatus[i].label){
             this.orderStatus[i].disabled = true;
          }else{
            this.orderStatusSelect = this.orderStatus[i].label;
          }
        }
      }
      console.log(this.orderStatus)
      // if (this.$route.meta.title != "全部订单") this.orderStatusFlag = false;
    },

    /**
     * @description 移除的模态框是否确认关闭
     * **/
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
          console.log(_);
        })
        .catch((_) => {
          console.log(_);
        });
    },

    /**
     * @description 分页每页有多少条
     * **/
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleCurrentChange(1);
      // console.log(this.tableData);
      console.log(`每页 ${val} 条`);
    },

    /**
     * @description 分页的当前页有多少条
     * **/
    handleCurrentChange(val) {
      let arr = [];
      for(let i=val*this.pageSize-this.pageSize;i<val*this.pageSize;i++){
        if(this.tableData[i]!=undefined) arr.push(this.tableData[i]);
      }
      this.table = arr;
      console.log(this.table)
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
  },
  data() {
    return {
      table:[],
      pageSize:10,
      dialogVisible: false,
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
      removeOrderData: {},
      tableData: [
        {
          num: "1111111111111",
          price: "100",
          kdprice: "10",
          gys: "老王",
          cgs: "老李",
          shr: "小王",
          zffs: "支付宝",
          ddzt: "待审核",
        },
        {
          num: "1111111111112",
          price: "1002",
          kdprice: "102",
          gys: "老王2",
          cgs: "老李2",
          shr: "小王2",
          zffs: "微信支付",
          ddzt: "待支付",
        },
        {
          num: "11111111111113",
          price: "1003",
          kdprice: "103",
          gys: "老王3",
          cgs: "老李3",
          shr: "小王3",
          zffs: "银行转账",
          ddzt: "待发货",
        },
        {
          num: "11111111111114",
          price: "1004",
          kdprice: "104",
          gys: "老王4",
          cgs: "老李4",
          shr: "小王4",
          zffs: "支付宝",
          ddzt: "待收货",
        },
        {
          num: "11111111111115",
          price: "1005",
          kdprice: "105",
          gys: "老王5",
          cgs: "老李5",
          shr: "小王5",
          zffs: "微信支付",
          ddzt: "已完成",
        },
        {
          num: "11111111111116",
          price: "1006",
          kdprice: "106",
          gys: "老王6",
          cgs: "老李6",
          shr: "小王6",
          zffs: "支付宝",
          ddzt: "已取消",
        },
        {
          num: "11111111111117",
          price: "100",
          kdprice: "10",
          gys: "老王",
          cgs: "老李",
          shr: "小王",
          zffs: "支付宝",
          ddzt: "发货",
        },
        {
          num: "11111111111118",
          price: "100",
          kdprice: "10",
          gys: "老王",
          cgs: "老李",
          shr: "小王",
          zffs: "支付宝",
          ddzt: "异常",
        },
        {
          num: "11111111111119",
          price: "100",
          kdprice: "10",
          gys: "老王",
          cgs: "老李",
          shr: "小王",
          zffs: "支付宝",
          ddzt: "已支付",
        },
        {
          num: "11111111111110",
          price: "100",
          kdprice: "10",
          gys: "老王",
          cgs: "老李",
          shr: "小王",
          zffs: "支付宝",
          ddzt: "未支付",
        },
        {
          num: "111111111111101",
          price: "100",
          kdprice: "10",
          gys: "老王",
          cgs: "老李",
          shr: "小王",
          zffs: "微信支付",
          ddzt: "待支付",
        },
        {
          num: "111111111111102",
          price: "100",
          kdprice: "10",
          gys: "老王",
          cgs: "老李",
          shr: "小王",
          zffs: "微信支付",
          ddzt: "已完成",
        },
        {
          num: "111111111111103",
          price: "100",
          kdprice: "10",
          gys: "老王",
          cgs: "老李",
          shr: "小王",
          zffs: "微信支付",
          ddzt: "待发货",
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
    padding:15px;
    & ::v-deep .el-table .cell{
      font-size:13px !important;
    }

    & ::v-deep .tableBox{
      & th{
        height:20px !important;
      }

      & td{
        height:20px !important;
      }
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
