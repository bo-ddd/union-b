<template>
  <div class="box">
    <el-form label-position="left" inline class="demo-table-expand">
      <el-form-item label="商品名称">
        <span>{{ tableData.name }}</span>
        <span>{{ tableData.name }}</span>
        <span>{{ tableData.name }}</span>
      </el-form-item>
      <el-form-item label="所属店铺">
        <span>{{ tableData.shop }}</span>
      </el-form-item>
      <el-form-item label="商品 ID">
        <span>{{ tableData.id }}</span>
      </el-form-item>
      <el-form-item label="店铺 ID">
        <span>{{ tableData.shopId }}</span>
      </el-form-item>
      <el-form-item label="商品分类">
        <span>{{ tableData.category }}</span>
      </el-form-item>
      <el-form-item label="店铺地址">
        <span>{{ tableData.address }}</span>
      </el-form-item>
      <el-form-item label="商品描述">
        <span>{{ tableData.desc }}</span>
      </el-form-item>
    </el-form>
    <h3>确认订单详情</h3>
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
          {{item.name}}</span>
        <span class="te-r"> {{item.price}}</span>
        <span class="te-r"> {{item.num}}</span>
        <span class="te-r"> {{item.price*item.num}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        id: "12987122",
        name: "好滋好味鸡蛋仔",
        category: "江浙小吃、小吃零食",
        desc: "荷兰优质淡奶，奶香浓而不腻",
        address: "上海市普陀区真北路",
        shop: "王小虎夫妻店",
        shopId: "10333",
      },
      productdetails:[
        {
          name:'小米T恤',
          price:39,
          num:5,
          subtotal:0,
        },
        {
          name:'小米T恤',
          price:39,
          num:5,
          subtotal:0,
        },
        {
          name:'小米T恤',
          price:39,
          num:5,
          subtotal:0,
        },
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