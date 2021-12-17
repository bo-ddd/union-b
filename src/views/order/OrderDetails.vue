<template>
  <div class="box">
    <el-form label-position="left" inline class="demo-table-expand">
      <el-form-item label="商品名称">
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
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding:15px;
  background: #fff;
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
}
</style>