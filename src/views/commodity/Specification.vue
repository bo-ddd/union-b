<template>
  <div class="wrap">
    <div class="wrap_interior">
      <div class="tit">商品规格</div>
      <div class="addspebut">
        <el-button type="primary" size="small">添加规格</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        align="center"
        style="width: 100%"
        stripe
        header-align="center"
        @selection-change="handleSelectionChange"
        class="tablestyle"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="id" width="240">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column prop="name" label="规格名称" width="240">
        </el-table-column>
        <el-table-column
          prop="address"
          label="备注"
          show-overflow-tooltip
          width="240"
        >
        </el-table-column>
        <el-table-column
          prop="list"
          label="排列顺序"
          show-overflow-tooltip
          width="240"
        >
        <template>
          <input type="text" class="inp" placeholder="10">
        </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          show-overflow-tooltip
          width="240"
        >
          <template>
            <el-button type="primary" i class="el-icon-edit"></el-button>
            <el-button type="primary" i class="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="footer">
        <el-button type="primary" plain size="small">保存排序</el-button>
        <el-button plain class="batch_del_btn" size="small">批量删除</el-button>
        <div class="footer_page">
          <!-- <div>每页显示  条，然后按回车</div> 
          <div>共 6 条 </div>  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          name: "颜色",
          address: "服装",
          list: "",
          operation: "",
        },
        {
          id: "2",
          name: "尺寸",
          address: "服装",
          list: "",
          operation: "",
        },
        {
          id: "3",
          name: "颜色",
          address: "手机",
          list: "",
          operation: "",
        },
        {
          id: "4",
          name: "版本",
          address: "手机",
          list: "",
          operation: "",
        },
        {
          id: "5",
          name: "购买方式",
          address: "手机",
          list: "",
          operation: "",
        },
        {
          id: "6",
          name: "版本",
          address: "服装",
          list: "",
          operation: "",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  // height: 85vh;
  background-color: #fcfcfc;
  border: 1px solid #d4dde2;
}

.tit {
  background-color: #eceff1;
  padding: 20px;
  border-bottom: 1px solid #d4dde2;
}
.addspebut {
  padding: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #d4dde2;
}
.batch_del_btn {
  color: #c0c4cc;
}
.tablestyle {
  padding: 0px 20px;
}
.footer {
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
}
.footer_page {
  margin-left: 25px;
}
.el-table-column {
  text-align: center;
}
.inp{
  border: 1px solid #d8dce5;
  width: 80px;
  height: 32px;
  text-indent: 16px;
  border-radius: 5px;
}

</style>