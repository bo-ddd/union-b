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
      <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#f7f8fa'}">
        <el-table-column prop="Serial_number" label="序号" width="200">
        </el-table-column>
        <el-table-column prop="Unit_name" label="单位名称" width="200">
        </el-table-column>
        <el-table-column prop="Unit_type" label="单位类型" width="200"> 
        </el-table-column>
        <el-table-column prop="Unit_source" label="单位来源" width="200"> 
        </el-table-column>
        <el-table-column prop="sort" label="排序" width="200">
        </el-table-column>
        <el-table-column prop="operation" label="操作">
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
            Serial_number: '1',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '1',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '1',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '1',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '1',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '1',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '1',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '1',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
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