<template>
  <div class="wrap">
    <div class="title">
      <span>单位管理</span>
    </div>
    <div class="Company">
      <button>新增单位</button>
      <input type="text" name="" id="" placeholder="搜索">
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="单位名称" width="180">
        </el-table-column>
        <el-table-column prop="name" label="单位类型" width="180">
        </el-table-column>
        <el-table-column prop="name" label="单位来源" width="180">
        </el-table-column>
        <el-table-column prop="name" label="排序" width="180">
        </el-table-column>
        <el-table-column prop="address" label="操作">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
   data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, 
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          ]
        }
      }
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: calc(100vh - 100px);
  & .title{
    padding: 15px;
    font-weight: 800;
  }
  & .Company{
    padding: 15px;
    display: flex;
    justify-content: space-between;
    & button{
      width: 6%;
      height: 30px;
      background-color: pink;
      color: white;
    }
    & input{
      border: 1px solid black;
      text-indent: 10px;
    }
  }
  & .table{
    width: 100%;
  }
}
</style>