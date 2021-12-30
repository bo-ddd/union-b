<template>
  <div class="main">
    <div class="m_main">
      <div class="m_m_center">
        <div class="m_m_c_top">
          <div class="mains">
            <el-form
              :inline="true"
              :model="formInline"
              class="demo-form-inline"
            >
              <el-form-item label="商品状态">
                <el-select
                  v-model="commodityStatusValue"
                  filterable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in commodityStatus"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品类型">
                <el-select
                  v-model="salesTypeValue"
                  filterable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in salesType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <!-- <el-form-item>
                <el-input placeholder="请输入内容" v-model="input1">
                  <el-select
                    v-model="value"
                    filterable
                    placeholder="请选择"
                    slot="prepend"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-input>
              </el-form-item> -->
            </el-form>
          </div>
          <div class="query">
            <el-button type="primary" @click="query(flag1)">查询</el-button>
            <el-button type="primary" @click="reset">重置</el-button>
          </div>
        </div>
        <div class="commodity_operation">
          <el-button type="primary" @click="skip">+ 新增商品</el-button>
          <!-- <el-button type="primary">批量下架</el-button>
          <el-button type="primary">批量上架</el-button> -->
          <el-button @click="multipleRemove()" type="primary"
            >批量删除</el-button
          >
        </div>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="table"
          tooltip-effect="dark"
          style="width: 100%"
          stripe
          row-key="getRowKey"
          @select="checkBoxData"
          @select-all="handleSelectionChange"
          :header-cell-style="{ background: '#fcfafb' }"
        >
          <el-table-column
            type="selection"
            width="55"
            :reserve-selection="true"
          ></el-table-column>
          <el-table-column label="条码" width="180">
            <template slot-scope="scope">{{ scope.row.proNo }}</template>
          </el-table-column>
          <el-table-column label="商品名称" width="180">
            <template slot-scope="scope">{{ scope.row.title }}</template>
          </el-table-column>
          <el-table-column label="商品分类" sortable show-overflow-tooltip>
            <template slot-scope="scope">{{
              scope.row.categoryTitle
            }}</template>
          </el-table-column>
          <el-table-column label="售价" sortable show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.realPrice }}</template>
          </el-table-column>
          <el-table-column label="销量" sortable show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.pv }}</template>
          </el-table-column>
          <el-table-column label="状态" show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.status }}</template>
          </el-table-column>
          <el-table-column label="创建日期" show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.createdAt }}</template>
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip align="center">
            <template slot-scope="scope">
              <el-link
                type="primary"
                class="edit"
                @click="getCommodityDat(scope)"
                >编辑</el-link
              >
              <!-- <el-link type="warning" class="off_the_shelf">下架</el-link> -->
              <el-link type="danger" class="delete" @click="remove([scope])"
                >删除</el-link
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="m_footer">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="page"
            :page-sizes="[10, 20, 30]"
            :page-size="limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tablelength"
            class="page"
          >
          </el-pagination>
        </div>
      </div>
      <el-dialog
        title="编辑商品"
        :visible.sync="dialogFormVisible"
        class="modify_information"
      >
        <el-form :model="form">
          <el-form-item label="商品名称" :label-width="formLabelWidth">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品分类" :label-width="formLabelWidth">
            <div class="block">
              <el-cascader
                placeholder="请选择分类"
                :options="form.classificationList"
                filterable
                class="classification"
              ></el-cascader>
            </div>
          </el-form-item>
          <el-form-item label="售价" :label-width="formLabelWidth">
            <el-input v-model="form.realPrice" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false" type="primary"
            >取 消</el-button
          >
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  /**
   * author: syh
   */
  data() {
    return {
      checked: false,
      commodityStatusValue: "",
      commodityStatus: [],
      salesTypeValue: "",
      salesType: [],
      value: "",
      options: [
        {
          value: "选项一",
          label: "0000",
        },
      ],
      input1: "",
      input2: "",
      input3: "",
      select: "",
      formInline: {
        user: "",
        region: "",
      },

      tableData: [],
      deleteDataArr: [],
      arr4: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        title: "",
        realPrice: "",
        inventory: "",
        classificationList: [],
      },
      formLabelWidth: "120px",
      page: 1,
      limit: 10,
      table: [],
      pageNum: "",
      num: "",
      cacheArr: [],
      tablelength: 0,
      flag: false,
      flag1: true,
    };
  },

  methods: {
    ...mapActions(["getProductList", "deleteProduct"]),
    async salesInformation() {
      let res = await this.getProductList({});
      this.tableData = res.data.rows.slice();
      this.tableData.forEach((item) => {
        if (item.status == 0) {
          item.status = "已删除";
        } else if (item.status == 1) {
          item.status = "已下架";
        } else if (item.status == 2) {
          item.status = "已上架";
        }
        if (item.status && item.categoryTitle) {
          this.commodityStatus.push({
            label: item.status,
            value: item.status,
          });
          this.salesType.push({
            label: item.categoryTitle,
            value: item.categoryTitle,
          });
        }
        item.createdAt = this.time(item.createdAt);
      });
      this.commodityStatus = [...new Set(this.commodityStatus)];

      // console.log(this.tableData);
      this.pageList();
    },
    time(time) {
      let d = new Date(time);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let date = d.getDate();
      date = date > 9 ? date : "0" + date;

      return year + "-" + month + "-" + date + " ";
    },
    pageList() {
      this.getList(this.query());
    },
    getList(arr) {
      // console.log(arr);
      this.flag1 = true;
      if (this.flag) {
        // console.log(this.table);
        this.table = arr.filter(
          (item, index) =>
            index < this.page * this.limit &&
            index >= this.limit * (this.page - 1)
        ); //根据页数显示相应的内容
        this.tablelength = arr.length;
      } else {
        var list = this.tableData.filter((item) =>
          arr.forEach((element) => {
            item.name.includes(element);
          })
        );
        // 搜索符号条件的内容
        // console.log(list);
        this.table = list.filter(
          (item, index) =>
            index < this.page * this.limit &&
            index >= this.limit * (this.page - 1)
        ); //根据页数显示相应的内容
        this.tablelength = list.length;
      }
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.limit = val;
      this.getList(this.query());
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      this.getList(this.query());
    },
    query(flag) {
      let arr = [];
      //   console.log(this.commodityStatusValue);
      if (!this.commodityStatusValue && !this.salesTypeValue) {
        arr = this.tableData;
        // console.log(this.tableData);
        this.flag = true;
      } else if (this.commodityStatusValue && !this.salesTypeValue) {
        arr = this.tableData.filter((item) => {
          return item.status == this.commodityStatusValue;
        });
      } else if (!this.commodityStatusValue && this.salesTypeValue) {
        arr = this.tableData.filter((item) => {
          return item.categoryTitle == this.salesTypeValue;
        });
      } else {
        arr = this.tableData.filter((item) => {
          return (
            item.categoryTitle == this.salesTypeValue &&
            item.status == this.commodityStatusValue
          );
        });
      }
      if (flag) {
        this.flag1 = false;
        return this.pageList();
      } else {
        return arr;
      }
    },
    reset() {
      this.commodityStatusValue = "";
      this.salesTypeValue = "";
      this.flag1 = true;
      this.getList(this.query());
    },
    skip() {
      this.$router.push({
        name: "AddGoods",
      });
    },
    getCommodityDat(data) {
      this.dialogFormVisible = true;
      // console.log(data);
      this.form = data.row;
    },
    remove(indexArr) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.delete(indexArr);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    async delete(indexArr) {
      this.tableData.splice(this.tableData.indexOf(indexArr[0].row), 1);
      this.table.splice(this.table.indexOf(indexArr[0].row), 1);
      this.getList(this.query());
      let res = await this.deleteProduct({
        id: [indexArr[0].row.id],
      });
      console.log(res);
    },
    multipleRemove() {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.multipleDelete();
          if (!this.cacheArr.length) {
            this.$message("您未选中任何要删除的数据");
            return;
          }
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    async multipleDelete() {
      let arr = [];
      for (let i = 0; i < this.arr4.length; i++) {
        if (!this.cacheArr.includes(this.arr4[i])) {
          this.cacheArr.push(this.arr4[i]);
        } else {
          let temp = this.cacheArr.indexOf(this.arr4[i]);
          this.cacheArr.splice(temp, 1);
        }
      }
      this.cacheArr.forEach((item) => {
        this.tableData.splice(this.tableData.indexOf(item), 1);
        this.table.splice(this.table.indexOf(item), 1);
        arr.push(item.id);
      });
      this.getList(this.query());
      // console.log(this.cacheArr);
      this.$refs.multipleTable.clearSelection();
      let res = await this.deleteProduct({
        id: arr,
      });
      console.log(res);
      console.log(arr);
    },
    checkBoxData: function (selection, row) {
      this.arr4.push(row);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      if (!val.length) {
        this.arr4 = [];
      } else {
        val.forEach((item) => {
          this.arr4.push(item);
        });
      }
    },
    getRowKey(row) {
      return row.id;
    },
  },
  async created() {
    this.salesInformation();
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  overflow-y: auto;
  min-height: 77vh;
  & > .m_main {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    & > .m_m_center {
      display: grid;
      width: 100%;
      & > .m_m_c_top {
        display: grid;
        grid-template-columns: 85% 15%;
        row-gap: 20px;
        & > div:nth-of-type(1) {
          display: flex;
          flex-direction: row;
          & > .commodity_status,
          & > .commodity_type,
          & > .trade_name {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            & span {
              margin-right: 10px;
            }
            & .search {
              height: 32px;
              line-height: 32px;
              border: 1px solid #dcdfe6;
              border-radius: 5px;
              text-indent: 10px;
              color: #c0c4cc;
            }
          }
        }
        & > div:nth-of-type(2) {
          display: flex;
          align-items: center;
          // margin-bottom: 3px;
          & > div {
            height: 32px;
            width: 60px;
            border-radius: 5px;
            border: 1px solid #c0c4cc;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
          }
          & > div:nth-of-type(1) {
            background: #ff4370;
            color: #ffc6d3;
            margin-right: 10px;
          }
        }
      }
      & > .commodity_operation {
        padding-top: 20px;
        display: flex;
        & .el-button {
          padding: 9px 10px;
        }
        & > div {
          height: 32px;
          width: 80px;
          border: 1px solid #c0c4cc;
          border-radius: 5px;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        & > div:nth-of-type(1) {
          background: #ff4370;
        }
      }
    }
    & > div:nth-of-type(2) {
      padding: 20px 0px;
    }
  }
  & > .m_footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.edit,
.off_the_shelf {
  margin-right: 10px;
  & a:hover {
    text-decoration: none;
  }
}

.mains {
  width: 100%;
  & > form {
    width: 100%;
    & > .el-form-item {
      margin-bottom: 0px;
    }
    & > .el-form-item:nth-of-type(1) {
      margin-right: 15px;
    }
    & > .el-form-item:nth-of-type(2) {
      margin-right: 15px;
    }
  }
}
.query .el-button {
  padding: 9px 10px;
}
::v-deep .modify_information .el-dialog {
  width: 30%;
  & > .el-dialog__body {
    & > .el-form {
      & > .el-form-item:nth-of-type(2) {
        & > .el-form-item__content {
          display: flex;
        }
      }
    }
  }
}
::v-deep
  .mains
  > form
  > .el-form-item:nth-of-type(3)
  > .el-form-item__content
  > .el-input
  > .el-input__inner {
  width: 280px;
}
.delete {
  text-decoration: none;
}
input::-webkit-input-placeholder {
  color: #c0c4cc;
  font-weight: 700;
}
input::-moz-placeholder {
  color: #c0c4cc;
  font-weight: 700;
}
input:-moz-placeholder {
  font-weight: 700;
  color: #c0c4cc;
}
input:-ms-input-placeholder {
  color: #c0c4cc;
  font-weight: 700;
}
::v-deep .mains .el-input:nth-of-type(1),
::v-deep .mains .el-input:nth-of-type(2) {
  width: 120px;
}
.el-form--inline .el-form-item {
  margin-right: -90px;
}
.el-select .el-input {
  width: 130px;
}
.inputs {
  margin-left: 20px;
}

.block {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>