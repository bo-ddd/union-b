<template>
  <div>
      <div class="wrap">
      <div class="title">
        <span>分类管理</span>
      </div>
      <div class="content">
        <div class="new-module">
          <div class="add-classification">
            <span>+ 新增分类</span>
          </div>
          <div class="batch-association">
            <span>批量关联</span>
          </div>
        </div>
          <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableDate:[]
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fcf9fa;
}
</style>