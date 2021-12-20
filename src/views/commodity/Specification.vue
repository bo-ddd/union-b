<template>
  <div class="wrap">
    <div class="wrap_interior">
      <div class="tit">商品规格</div>
      <div class="addspebut">
        <el-button
          type="primary"
          size="small"
          @click="addspecification, (dialogFormVisible = true)"
          >添加规格</el-button>
        <el-dialog title="添加规格" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="规格名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="备注" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="排列顺序" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>
      <el-table
        ref="multipleTable"
        tooltip-effect="dark"
        :data="tableData"
        size="small"
        style="width: 97%"
        :default-sort="{ prop: 'id', order: 'descending' }"
        stripe
      >
        <el-table-column :data="tableData" type="selection" align="center">
        </el-table-column>
        <el-table-column
          :data="tableData"
          label="id"
          align="center"
          prop="id"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="规格名称"
          align="center"
          prop="name"
          :data="tableData"
          show-overflow-tooltip
          sortable
        >
        </el-table-column>
        <el-table-column
          label="备注"
          :data="tableData"
          prop="remark"
          show-overflow-tooltip
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          label="排列顺序"
          :data="tableData"
          prop="id"
          show-overflow-tooltip
          align="center"
          sortable
        >
          <template>
            <input type="text" class="inp" v-model="input" />
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          :data="tableData"
          show-overflow-tooltip
          align="center"
          :formatter="formatter"
          sortable
        >
          <template>
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
              :page-sizes="[6, 15, 20, 30, 50, 100]"
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
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      input: 10,
      currentPage4: 4,
      pagination: true,
      pageNum: 10,
      pageSize: 1,
      // id: "",
      // title: "",
      // productCategory: "",
      tableData: [
        {
          id: "1",
          name: "颜色",
          remark: "服装",
          list: "",
          operation: "",
        },
        {
          id: "2",
          name: "尺寸",
          remark: "服装",
          list: "",
          operation: "",
        },
        {
          id: "3",
          name: "颜色",
          remark: "手机",
          list: "",
          operation: "",
        },
        {
          id: "4",
          name: "版本",
          remark: "手机",
          list: "",
          operation: "",
        },
        {
          id: "5",
          name: "购买方式",
          remark: "手机",
          list: "",
          operation: "",
        },
        {
          id: "6",
          name: "版本",
          remark: "服装",
          list: "",
          operation: "",
        },
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      multipleSelection: [],
    };
  },
  methods: {
    // ...mapActions(["getSpecificationList"]),
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
  // async created() {
  //   let res = await this.getSpecificationList({});
  //   console.log(res);
  //   this.id = res.data.id;
  //   this.title = res.data.title;
  //   this.productCategory = res.data.productCategory;
  // },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fcfcfc;
  border: 1px solid #d4dde2;
  overflow: hidden;
  & .wrap_interior {
    height: calc(100vh - 120px);
    overflow-y: auto;
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