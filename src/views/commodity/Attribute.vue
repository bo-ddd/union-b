<template>
  <div>
    <!-- ProductParameters商品属性 -->
    <div class="main">
      <div class="mains">
      <h1 class="h1">属性项信息</h1>
      <div class="message">
        <div class="main-top">
          <el-form ref="form" :model="form" label-width="90px">
  <el-form-item label="属性项名称:" class="top">
    <el-input v-model="form.name" class="el-input__inners"></el-input>
  </el-form-item>
  <el-form-item label="属性项多选:" class="middle">
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
        <!-- <el-button type="danger" class="button">新增属性值</el-button> -->
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="index" label="id" width="100" align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="属性值"
        align="center"
        >
        <template>
          <input type="text" class="property" v-model="name">
        </template>
      </el-table-column>
      <el-table-column label="加价(元)"  align="center">
        <template>
          <input type="text" class="inp" v-model="input">
        </template>
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        align="center"
        >
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">置顶</el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">向上</el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">向下</el-button>
      </template>
      </el-table-column>
      <el-table-column
        prop="operate"
        label="操作"
        align="center"
        >
        <template slot-scope="scope">
          <el-button
          size="mini"
          type="danger" @click="remove(scope)">{{scope.row.delete}}</el-button>
        </template>
      </el-table-column>
    </el-table>
      </div>
      </div>
      <el-footer><el-button type="primary">保存</el-button></el-footer>
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
            delete:'删除'
          }, {
           
            delete:'删除'
          }, {
           
            delete:'删除'
          }, {
            
            delete:'删除'
          },
          {
           
            delete:'删除'
          },
          {
            
            delete:'删除'
          }
          ]
      }
    },
    methods: {
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      remove(data){
        console.log(data.$index);
       this.tableData.splice(data.$index,1) 
      }
  }
}
</script>

<style lang="scss" scoped>
.main{
  height: calc(100vh - 100px);
  overflow-y: auto;
  min-height: 77vh;
  background: #ffffff;
}
.mains{
  margin: 0 20px;
}
.message{
  width: 100%;
  border-top: 2px solid #e5e5e5;
}
.h1{
  margin: 20px 0;
  // display: flex;
  // align-items: center;
}
.top{
  margin-top: 20px;
}
.el-input__inners {
  width: 200px;
}
.list{
  width: 100%;
  border-top: 2px solid #e5e5e5;
}
.button{
  margin: 10px 0;
}
.inp{
  border: 1px solid #d8dce5;
  width: 50px;
  height: 32px;
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
  margin: 5px;
}
.el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-form-item {
    // margin-top: 20px;
    margin-bottom: 0px;
}
.middle{
  margin-top: 20px;
}
::v-deep .el-table__header-wrapper{
  font-size: 17px;
}
</style>