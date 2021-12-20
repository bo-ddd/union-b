<template>
  <div class="warp">
    <div class="p-20">
    <el-descriptions title="特卖商品">
      <el-descriptions-item label="活动标题">cheshi</el-descriptions-item>
      <el-descriptions-item label="活动描述">123456</el-descriptions-item>
    </el-descriptions>
    <el-descriptions>
      <el-descriptions-item label="活动时间"
        >2021-8-21 10:00:12 - 2021-8-15 10:00:12</el-descriptions-item
      >
      <el-descriptions-item label="预热时间"
        >2021-7-19 15:43:30</el-descriptions-item
      >
    </el-descriptions>
    <el-descriptions>
      <el-descriptions-item label="优惠类型">活动价</el-descriptions-item>
    </el-descriptions>
    <el-descriptions>
      <el-descriptions-item label="订单取消时间">3分钟</el-descriptions-item>
    </el-descriptions>
    </div>
    <el-tabs type="border-card" class="switch" size='small'>
      <el-tab-pane label="参与活动商品" size='small'>
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input placeholder="商品id" size='small'></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="商品名称" size='small'></el-input>
          </el-form-item>
          <el-form-item label="类目">
            <el-select placeholder="请选择类目" size='small'>
              <el-option label="区域一"  size='small'></el-option>
              <el-option label="区域二"  size='small'></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size='small'>查询</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%" size='small'>
          <el-table-column prop="name" label="商品信息" width="180">
          </el-table-column>
          <el-table-column prop="date" label="价格" width="180">
          </el-table-column>
          <el-table-column prop="address" label="总库存"> </el-table-column>
          <el-table-column prop="address" label="操作">
            <el-link type="primary" :underline="false">下架活动</el-link>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="未参与活动商品" size='small'>
        <el-form :inline="true"  class="demo-form-inline">
          <el-form-item>
            <el-input placeholder="商品id" size='small'></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="商品名称" size='small'></el-input>
          </el-form-item>
          <el-form-item label="类目">
            <el-select placeholder="请选择类目" size='small'>
              <el-option label="区域一" ></el-option>
              <el-option label="区域二" ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size='small'>查询</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%" size='small'>
          <el-table-column prop="name" label="商品信息" width="180">
          </el-table-column>
          <el-table-column prop="date" label="价格" width="180">
          </el-table-column>
          <el-table-column prop="address" label="总库存"> </el-table-column>
          <el-table-column prop="address" label="操作">
            <el-link type="primary" :underline="false">上架活动</el-link>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "可乐",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "雪碧",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "百事",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "红牛",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.warp {
  height: calc(100vh - 125px);
  background-color: #fff;
}
.p-20{
  padding: 1%;
}
.switch {
  border: none;
  box-shadow: none;
}
</style>