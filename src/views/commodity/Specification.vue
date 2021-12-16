<template>
  <div class="wrap">
    <div class="wrap_interior">
      <div class="tit">商品规格</div>
      <div class="addspebut">
        <el-button type="primary" size="small" @click="addspecification()"
          >添加规格</el-button
        >
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 97%"
        :default-sort="{ prop: 'id', order: 'descending' }"
        stripe
      >
        <el-table-column type="selection" align="center"> </el-table-column>
        <el-table-column prop="id" label="id" align="center" sortable>
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="规格名称"
          align="center"
          show-overflow-tooltip
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="备注"
          show-overflow-tooltip
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="list"
          label="排列顺序"
          show-overflow-tooltip
          align="center"
          sortable
        >
          <template>
            <input type="text" class="inp" v-model="input" />
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          show-overflow-tooltip
          align="center"
          :formatter="formatter"
          sortable
        >
          <template slot-scope="scope">
            <el-button
              type="primary"
              i
              class="el-icon-edit cell1"
              @click="editListData"
            ></el-button>
            <el-button
              i
              class="el-icon-delete cell2"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
            >
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="footer">
        <div class="footer_left">
          <el-button type="primary" size="small">保存排序</el-button>
          <el-button
            plain
            class="batch_del_btn"
            size="small"
            @click="batchesDelete"
            >批量删除</el-button
          >
        </div>
        <div class="footer_right">
          <div class="block">
            <el-pagination
              :current-page="currentPage4"
              :page-sizes="[6, 10, 15, 20, 30, 50, 100]"
              layout="sizes"
            >
            </el-pagination>
            <div>输入按回车</div>
          </div>
          <div class="block2">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-size="100"
              :total="6"
              layout="total, prev, pager, next"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      input: 10,
      currentPage4: 4,
      pagination: true,
      pageNum: 10,
      pageSize: 1,
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
    ...mapActions(["getSpecificationList"]),
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
    //添加规格
    addspecification() {
      console.log("添加成功");
    },
    //批量删除
    batchesDelete() {},
    //单个修改
    editListData() {
      console.log("单个修改成功");
    },
    //单个删除
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    //保存排序
    formatter(row) {
      return row.address;
    },
  },
  async created() {
    let res = await this.getSpecificationList({});
    console.log(res);
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fcfcfc;
  border: 1px solid #d4dde2;
  overflow: hidden;
  & .wrap_interior {
    overflow-y: auto;
    height: 85vh;
  }
  & .tit {
    background-color: rgb(254, 249, 250);
    padding: 20px;
    border-bottom: 1px solid #d4dde2;
  }
  & .addspebut {
    padding: 20px;
    background-color: #ffffff;
    border-bottom: 1px solid #d4dde2;
  }
  & .el-table {
    // margin: 0px 20px 0px 20px;
    margin-left: 20px;
    margin-right: 20px;
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
      & .block {
        display: flex;
        align-items: center;
        color: #999999;
        font-size: 14px;
        & .el-pagination {
          padding: 5px 5px;
        }
      }
    }
  }
}
// ::v-deep.el-table th.el-table__cell > .cell {
//   padding-left: 0px;
// }
// ::deep.el-table .cell {
//   padding-left: 0px!important;
// }
// ::deep.el-table-column--selection .cell {
//   padding-left: 0!important;
// }
// ::deep.el-table-column--selection .cell {
//   padding-left: 0!important;
// }
// ::deep.el-table .cell{
//   padding-left: 0!important;
// }
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
  border: none;
}
.cell2 {
  background-color: #ff8b53;
  padding: 10px 10px;
  border: none;
  color: #ffffff;
}
</style>