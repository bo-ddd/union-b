<template>
  <div class="CommodityAttribute">
    <div class="main">
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
        <template>
          <input type="text" class="property" v-model="name">
        </template>
      </el-table-column>
      <el-table-column label="加价(元)" width="200">
        <template>
          <input type="text" class="inp" v-model="input">
        </template>
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        width="250">
        <template>
          <i class=" el-icon-top"></i>
          <i class=" el-icon-bottom"></i>
          <i class=" el-icon-zhiding"></i>
        </template>
      </el-table-column>
      <el-table-column
        prop="operate"
        label="操作"
        width="250">
        <template>
          <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        input:10,
        name:'微辣',
        form: {
          name: '',
          choice: '',
          required: '',
        },
        tableData: [{
            id: '2016-05-02',
            name: '王小虎',
            sort: '上海市普陀区金沙江路 1518 弄',
          }, {
            id: '2016-05-04',
            name: '王小虎',
            sort: '上海市普陀区金沙江路 1517 弄',
          }, {
            id: '2016-05-01',
            name: '王小虎',
            sort: '上海市普陀区金沙江路 1519 弄',
          }, {
            id: '2016-05-03',
            name: '王小虎',
            sort: '上海市普陀区金沙江路 1516 弄',
          }]
      }
    },
    methods: {
      handleDelete(index, row) {
        console.log(index, row);
      }
  }
}
</script>

<style lang="scss" scoped>
.CommodityAttribute{
  // margin: 30px 0 30px 0;
  background: #ffffff;
}
.main{
  margin: 0 10px 0 10px;
}
.message{
  width: 100%;
  // height: 250px;
  border-top: 2px solid #e5e5e5;
  // border-bottom: 2px solid #e5e5e5;
}
.h1{
  padding: 5px 0;
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
.inp{
  border: 1px solid #d8dce5;
  width: 50px;
  height: 32px;
  // text-indent: 16px;
  border-radius: 5px;
  text-align: center;
}
.property{
  border: 1px solid #d8dce5;
  width: 130px;
  height: 32px;
  text-indent: 15px;
  border-radius: 5px;
}
</style>