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
        style="width: 100%"
        stripe
      >
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column label="id" width="240" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="规格名称"
          width="240"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="备注"
          show-overflow-tooltip
          width="240"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="list"
          label="排列顺序"
          show-overflow-tooltip
          width="240"
          align="center"
        >
          <template>
            <input type="text" class="inp" v-model="input" />
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          show-overflow-tooltip
          width="240"
          align="center"
        >
          <template>
            <el-button type="primary" i class="el-icon-edit cell1"></el-button>
            <el-button
              type="primary"
              i
              class="el-icon-delete cell2"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="footer">
        <div class="footer_left">
          <el-button type="primary" plain size="small">保存排序</el-button>
          <el-button plain class="batch_del_btn" size="small"
            >批量删除</el-button
          >
        </div>
        <div class="footer_right">
          <div class="block">
            <el-pagination
              :current-page="currentPage4"
              :page-sizes="[6]"
              layout="sizes"
            >
            </el-pagination>
          </div>
          <div class="block2">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-size="100"
              :total="6"
              layout="total,prev, pager, next"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: 10,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fcfcfc;
  border: 1px solid #d4dde2;
  & .tit {
    background-color: #eceff1;
    padding: 20px;
    border-bottom: 1px solid #d4dde2;
  }
  & .addspebut {
    padding: 20px;
    background-color: #ffffff;
    border-bottom: 1px solid #d4dde2;
  }
  & .footer {
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    & .footer_left {
      & .batch_del_btn {
        color: #c0c4cc;
      }
    }
    & .footer_right {
      margin-left: 25px;
      display: flex;
      justify-content: center;
      width: 80%;
      justify-content: space-between;
    }
  }
}
.cell {
  text-align: center;
}
.inp {
  border: 1px solid #d8dce5;
  width: 80px;
  height: 32px;
  text-indent: 16px;
  border-radius: 5px;
}
.cell1 {
  background-color: #17d57e;
  padding: 10px 10px;
}
.cell2 {
  background-color: #ff8b53;
  padding: 10px 10px;
}
</style>