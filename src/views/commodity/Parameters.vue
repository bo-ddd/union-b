<template>
  <div>
      <!-- ProductParameters商品参数 -->
      <div class="main">
        <div class="mains">
      <h1 class="h1">参数项信息</h1>
      <div class="message">
        <div class="main-top">
          <el-form ref="form" :model="form" label-width="90px">
  <el-form-item label="参数项名称:" class="top">
    <el-input v-model="form.name" class="el-input__inners"></el-input>
  </el-form-item>
  <el-form-item label="参数项多选:">
    <el-checkbox-group v-model="form.choice">
      <el-checkbox label="启用" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>

  <el-form-item label="参数项必选:">
    <el-checkbox-group v-model="form.required">
      <el-checkbox label="启用" name="type"></el-checkbox>
      <!-- <p class="span">该属性支持选择多个属性值，比如对一杯奶茶添加布丁，珍珠等多种配料。</p> -->
    </el-checkbox-group>
  </el-form-item>
</el-form>
        </div>
      </div>
      <h1 class="h1">参数值列表</h1>
      <div class="list">
        <el-button type="primary" class="button">新增参数值</el-button>
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column prop="id" label="id" width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="参数值"
        >
        <template>
          <input type="text" class="property" v-model="name">
        </template>
      </el-table-column>
      <el-table-column label="加价(元)" >
        <template>
          <input type="text" class="inp" v-model="input">
        </template>
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        >
        <template>
          <img src="../../assets/images/zhiding.png" class="iconimg">
          <img src="../../assets/images/xiangshang.png" class="iconimg">
          <img src="../../assets/images/xiangxia.png" class="iconimg">
        </template>
      </el-table-column>
      <el-table-column
        prop="operate"
        label="操作"
        align="center">
        <template>
          <el-button
          size="mini"
          type="danger"
         >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
      </div>
      <el-footer><el-button type="primary">保存</el-button></el-footer>
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
            id: '1',
          }, {
            id: '2',
          }, {
            id: '3',
          }, {
            id: '4',
          }]
      }
    },
    methods: {

  }
}
</script>

<style lang="scss" scoped>
.main{
  background: #ffffff;
}
.mains{
  margin: 0 10px;
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
.iconimg{
  width: 15px;
  height: 15px;
}
.el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>