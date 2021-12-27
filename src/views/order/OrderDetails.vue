<template>
  <div class="box">
    <el-form label-position="left" inline class="demo-table-expand">
      <el-form-item label="订单id：">
        <span>{{ tableData.orderId  }}</span>
      </el-form-item>
      <el-form-item label="订单总价：">
        <span>{{ tableData.totalPrice  }}</span>
      </el-form-item>
      <el-form-item label="快递公司名称：">
        <span>{{ tableData.expressName  }}</span>
      </el-form-item>
      <el-form-item label="店铺名称：">
        <span>{{ tableData.storeTitle }}</span>
      </el-form-item>
      <el-form-item label="用户名称：">
        <span>{{ tableData.avatorName  }}</span>
      </el-form-item>
      <el-form-item label="用户电话：">
        <span>{{ tableData.userPhone }}</span>
      </el-form-item>
      <el-form-item label="支付方式：">
        <span>{{ tableData.paymentName }}</span>
      </el-form-item>
      <el-form-item label="下单时间：">
        <span>{{ tableData.createdAt }}</span>
      </el-form-item>
      <el-form-item label="收货人：">
        <span>{{ tableData.consignee }}</span>
      </el-form-item>
      <el-form-item label="国家：">
        <span>{{ tableData.country }}</span>
      </el-form-item>
      <el-form-item label="省份：">
        <span>{{ tableData.province }}</span>
      </el-form-item>
      <el-form-item label="市：">
        <span>{{ tableData.city }}</span>
      </el-form-item>
      <el-form-item label="县/区：">
        <span>{{ tableData.area }}</span>
      </el-form-item>
      <el-form-item label="详情地址：">
        <span>{{ tableData.address }}</span>
      </el-form-item>
      <el-form-item label="邮政编码：">
        <span>{{ tableData.zipcode }}</span>
      </el-form-item>
      <el-form-item label="状态：">
        <span>{{ tableData.orderStatus }}</span>
      </el-form-item>
    </el-form>
    <h3 class="pl-15">确认订单详情</h3>
    <div class="productdetails">
      <div class="details-title">
        <span>商品名称</span>
        <span class="te-r">购买价格</span>
        <span class="te-r">购买数量</span>
        <span class="te-r">小计（元）</span>
      </div>
      <div class="details-data" v-for="(item,index) in productdetails" :key="index">
        <span>
          <img src="" alt="">
          {{item.productTitle}}</span>
        <span class="te-r"> {{item.singlePrice}}</span>
        <span class="te-r"> {{item.count}}</span>
        <span class="te-r"> {{item.singlePrice*100*item.count/100}}</span>
      </div>
    </div>
    <el-form label-position="left"  inline class="demo-table-expand tx-r ">
      <el-form-item label="订单id：">
        <span>{{ tableData.orderId  }}</span>
      </el-form-item>
      <el-form-item label="订单总价：">
        <span>{{ tableData.totalPrice  }}</span>
      </el-form-item>
      <el-form-item label="快递公司名称：">
        <span>{{ tableData.expressName  }}</span>
      </el-form-item>
      <el-form-item label="店铺名称：">
        <span>{{ tableData.storeTitle }}</span>
      </el-form-item>
      <el-form-item label="应付总额：">
        <span class="c-red fs-20">{{ tableData.storeTitle }}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created(){
    this.getOrderDetailData();
  },
  methods:{
    ...mapActions(["getOrderDetail"]),
    /**
     * @description 订单详情页
     * **/ 
    async getOrderDetailData(){
      let id = this.$route.query.id;
      let res = await this.getOrderDetail({id});
      this.tableData = res.data[0];
      this.productdetails = res.data[0].detail;
      console.log(res)
    },
  },
  data() {
    return {
      tableData:{},
      productdetails:[
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: calc(100vh - 130px);
  overflow-y: auto;
  // padding: 15px;
  background: #fff;

  & .pl-15{
    padding-left: 15px;
  }

  & .tx-r{
    text-align: right;
  }

  & ::v-deep .el-form--inline .el-form-item__label{
    font-size: 14px !important;
  }

  & ::v-deep .el-form-item__content{
    font-size:13px !important;
    width:230px;
  }

  & .c-red{
    color:red;
  }

  & .fs-20{
    font-size: 20px;
  }

  & .el-form {
    padding:15px;
  }

  & .te-r{
    text-align: right;
  }

  & .demo-table-expand {
    font-size: 0;
  }
  & .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  & .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }

  & .productdetails{
    padding:15px;

    & .details-title{
      display: grid;
      padding:10px;
      grid-template-columns: 70% 10% 10% 10%;
      background:rgb(244,244,244);
      font-size:12px;
    }

    & .details-data{
      display: grid;
      padding:15px;
      grid-template-columns: 70% 10% 10% 10%;
      font-size: 13px;
    }
  }
}
</style>