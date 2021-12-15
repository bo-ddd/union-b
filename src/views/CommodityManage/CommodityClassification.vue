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
          stripe
           row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="分类名称" width="300">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="关联" width="200">
          </el-table-column>
          <el-table-column
            prop="address"
            label="创建日期"
            sortable
            width="200"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column prop="address" label="数量" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="address" label="操作" show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fcf9fa;
  & .title {
    padding: 20px;
    font-weight: 800;
  }
  & .content {
    padding: 20px;
    background-color: #ffffff;
    & .new-module {
      display: flex;
      align-items: center;
      & .add-classification {
        padding: 5px 10px;
        background-color: #ff4070;
        color: #ffccd8;
        margin-top: 15px;
        margin-left: 15px;
        margin-bottom: 15px;
        border: 1px solid #ffc7d5;
        border-radius: 5px;
        font-size: 12px;
      }
      & .batch-association {
        padding: 5px 10px;
        background-color: #ffffff;
        color: #686868;
         margin-top: 15px;
         border: 1px solid #f2f2f2;
         border-radius: 5px;
         margin-left: 10px;
           font-size: 12px;
            margin-bottom: 15px;
      }
    }
    ::v-deep & .el-table tr {
      background-color: #fcfafb;
    }
   
  }
}

</style>