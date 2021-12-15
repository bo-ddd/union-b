<template>
  <div class="CommodityAttribute">
      <!-- CommodityAttribute -->
      <h1 class="h1">属性项信息</h1>
      <div class="message">
        <div class="main-top">
          <el-form ref="form" :model="form" label-width="90px">
  <el-form-item label="属性项名称:" class="top">
    <el-input v-model="form.name" class="el-input__inners"></el-input>
  </el-form-item>
  <el-form-item label="属性项多选:">
    <el-checkbox-group v-model="form.choice">
      <el-checkbox label="启用" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>

  <el-form-item label="属性项必选:">
    <el-checkbox-group v-model="form.required">
      <el-checkbox label="启用" name="type"></el-checkbox>
      <!-- <p class="span">该属性支持选择多个属性值，比如对一杯奶茶添加布丁，珍珠等多种配料。</p> -->
    </el-checkbox-group>
  </el-form-item>
</el-form>
        </div>
      </div>
      <h1 class="h1">属性值列表</h1>
      <div class="list">
        <el-button type="primary" class="button">新增属性值</el-button>
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column prop="id" label="id" width="290">
      </el-table-column>
      <el-table-column
        prop="name"
        label="属性值"
        width="250">
      </el-table-column>
      <el-table-column
        prop="money"
        label="加价(元)"
        width="250">
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        width="250">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        width="250">
      </el-table-column>
    </el-table>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          name: '',
          choice: '',
          required: '',
        },

        tableData: [{
            id: '2016-05-02',
            name: '王小虎',
            sort: '上海市普陀区金沙江路 1518 弄',
            money:'0'
          }, {
            id: '2016-05-04',
            name: '王小虎',
            sort: '上海市普陀区金沙江路 1517 弄',
            money:'0'
          }, {
            id: '2016-05-01',
            name: '王小虎',
            sort: '上海市普陀区金沙江路 1519 弄',
            money:'0'
          }, {
            id: '2016-05-03',
            name: '王小虎',
            sort: '上海市普陀区金沙江路 1516 弄',
            money:'0'
          }]
      }
    }
  }
</script>

<style lang="scss" scoped>
.CommodityAttribute{
  // margin: 30px 0 30px 0;
}
.message{
  width: 100%;
  height: 250px;
  border-top: 2px solid #e5e5e5;
  // border-bottom: 2px solid #e5e5e5;
}
.h1{
  margin-bottom: 10px;
}
.top{
  margin-top: 30px;
}
.el-input__inners {
  width: 200px;
}
.list{
  width: 100%;
  // height: 250px;
  border-top: 2px solid #e5e5e5;
  // border-bottom: 2px solid #e5e5e5;
}
.button{
  margin: 10px 0 10px 0;
}
</style>