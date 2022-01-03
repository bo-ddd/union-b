<template>
  <div class="wrap">
    <div class="wrap_interior">
      <div class="tit">商品规格</div>
      <!-- header -->
      <div class="addspebut">
        <!-- 俩个按钮 添加按钮和批量删除按钮 -->
        <div class="footer_left">
          <el-button
            type="primary"
            @click="submit, (dialogaddFormVisible = true)"
            >添加规格</el-button
          >
          <el-button @click="multipleRemove()" type="primary"
            >批量删除</el-button
          >
        </div>
        <!-- 模糊查询 -->
        <div class="">
          <el-input
            placeholder="请输入商品类目"
            v-model="salesType"
            class="input-with-select"
          >                   
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="fuzzyselect"
            ></el-button>
          </el-input>
        </div>
        <!-- 添加按钮模态框 -->
        <el-dialog title="添加规格" :visible.sync="dialogaddFormVisible">
          <el-form :model="ruleForm">
            <el-form-item label="规格名称" :label-width="formLabelWidth">
              <el-input v-model="ruleForm.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品类目" :label-width="formLabelWidth">
              <el-input v-model="ruleForm.cid" autocomplete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item
              label="商品类目"
              prop="pid"
              :label-width="formLabelWidth"
            >
              <template>
                <div class="block">
                  <span class="demonstration"></span>
                  <el-cascader
                    @click="submit"
                    :ref="cascader"
                    :options="options"
                    @change="getId()"
                    :props="{
                      checkStrictly: true,
                      label: 'title',
                      children: 'child',
                      value: 'title',
                    }"
                    clearable
                  ></el-cascader>
                </div>
              </template>
            </el-form-item>-->
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogaddFormVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="submit(), (dialogaddFormVisible = false)"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>
      <!-- 表格 center -->
      <el-table
        ref="multipleTable"
        tooltip-effect="dark"
        :data="table"
        style="width: 97%"
        :default-sort="{ prop: 'id', order: 'descending' }"
        stripe
        @selection-change="handleSelectionChange"
      >
        <!-- 多选框 -->
        <el-table-column
          :reserve-selection="true"
          type="selection"
          align="center"
          v-model="checked"
          @click="checkedclick()"
        >
        </el-table-column>
        <!-- 规格名称 -->
        <el-table-column label="id" align="center" prop="id"> </el-table-column>
        <el-table-column
          label="规格名称"
          align="center"
          prop="title"
          show-overflow-tooltip
        >
        </el-table-column>
        <!-- 商品类目 -->
        <el-table-column
          label="商品类目"
          prop="productCategory"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <!--操作   俩个按钮  修改按钮和删除按钮 -->
        <el-table-column label="操作" show-overflow-tooltip align="center">
          <!-- 修改按钮 -->
          <template slot-scope="scope">
            <el-button
              type="primary"
              i
              class="el-icon-edit cell1"
              @click="show(scope.row)"
            ></el-button>
            <!-- 修改按钮的模态框 -->
            <el-dialog title="修改此行数据" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="id" :label-width="formLabelWidth">
                  <el-input
                    v-model="form.serialId"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="规格名称" :label-width="formLabelWidth">
                  <el-input
                    v-model="form.speName"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button
                  type="primary"
                  @click="getCommodityDat(scope), (dialogFormVisible = false)"
                  >确 定</el-button
                >
              </div>
            </el-dialog>
            <!-- 删除按钮 以及他的模态框-->
            <el-button
              type="text"
              @click="open(), deleteData(scope.row)"
              i
              class="el-icon-delete cell2"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 footer -->
      <div class="footer">
        <div class="footer_right">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="[10, 20, 30, 40, 50]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="renderDynamic.length"
            background
          >
          </el-pagination>
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
      checked: false,
      value: "",
      input: "",
      select: "",  
      pageSize1: 50,
      pageNum1: "",
      options: [],
      pagination: false,
      id: null,
      title: "",
      productCategory: "",
      count: "", //所有条数
      arr: [],
      deleteDataArr1: [],
      form: {
        serialId: "",
        speName: "",
        remark: "",
      },
      ruleForm: {
        title: "",
        cid: "",
      },
      fuzzyQuery: [],//模糊查询     把选中的行的id放到此数组里
      dialogVisible: false,
      dialogFormVisible: false,
      dialogaddFormVisible: false,
      formLabelWidth: "120px",
      multipleSelection: [],//批量删除  multiple多个
      currentPage: 1,//当前页
      table: [], //商品列表
      pageSize: 10, //每页条数
      renderDynamic: [],//存放所有的规格数据
      salesTypeValue: "",
      salesType: [],
      flag: false,
      flag1: true,
    };
  },
  watch: {
    table: {
      handler(newVal, oldVal) {
        if (newVal != oldVal) {
          this.table = newVal;
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    /**
     * getSpecificationList获取所有的类目接口
     * createSpecification 添加规格接口
     * deleteSpecification 删除规格接口
     * getCategoryList商品类目接口
     * updateSpecification规格管理更改
     * specificationFuzzySearch类目规格模糊查询接口
     */
    ...mapActions([
      "getSpecificationList",
      "createSpecification",
      "deleteSpecification",
      "getCategoryList",
      "updateSpecification",
      "specificationFuzzySearch",
    ]),
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
          console.log(_);
        })
        .catch((_) => {
          console.log(_);
        });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    /**
     * @description 删除当前行
     */
    async deleteData(row) {
      for (var i = 0; i < this.renderDynamic.length; i++) {
        let el = this.renderDynamic[i];
        if (row.id == el.id) {
          //从第I个开始删除一个
          this.renderDynamic.splice(i, 1);
        }
      }
      //重新渲染页面
      this.spelist();
      let del = await this.deleteSpecification({
        id: [row.id],
      });
      console.log(del);
    },
    /**
     * 批量删除
     * */
    async multipleRemove() {
      let deleteArr = [];
      this.multipleSelection.forEach((specification) => {
        deleteArr.push(specification.id);
      });
      console.log(deleteArr);
      let batchDelete = await this.deleteSpecification({
        id: deleteArr,
      });
      console.log(batchDelete);
      this.spelist();
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    //记录每行的key值
    getRowKeys(row) {
      return row.id;
    },
    show(val) {
      console.log(val);
      this.form.serialId = val.id;
      this.form.speName = val.title;
      this.dialogFormVisible = true;
    },
    //单个修改
    async getCommodityDat() {
      this.dialogFormVisible = true;
      let speUpdata = await this.updateSpecification({
        id: Number(this.form.serialId),
        title: this.form.speName,
      });
      console.log("cccc");
      console.log(speUpdata);
      if (speUpdata.status == 1) {
        this.spelist();
      }
    },
    /**
     * 获取所有类目规格
     * */
    async spelist() {
      let res = await this.getSpecificationList();
      console.log("asdfdasdf");
      console.log(res);
      this.renderDynamic = res.data.rows.slice();
      this.fuzzyQuery = this.renderDynamic;
      this.handleSizeChange(10);
    },
    //分页
    //分页有多少条
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleCurrentChange(1);
    },
    //分页的当前页有多少条
    handleCurrentChange(val) {
      let arr = [];
      for (
        let i = val * this.pageSize - this.pageSize;
        i < val * this.pageSize;
        i++
      ) {
        if (this.renderDynamic[i] != undefined) arr.push(this.renderDynamic[i]);
      }
      this.table = arr;
    },
    /**
     * 添加规格
     */
    async submit() {
      let res = await this.createSpecification({
        title: this.ruleForm.title,
        cid: Number(this.ruleForm.cid == "" ? null : this.ruleForm.cid),
      });
      console.log(res);
      this.spelist();
    },
    /**
     * 获取所有商品类目
     */
    async getShopList() {
      let res = await this.getCategoryList({});
      let data = res.data.rows.slice();
      this.arr = data;
      let target = this.format(data);
      this.options = target;
    },
    format(target) {
      let res = target.slice();
      res.forEach((item) => {
        let p = res.find((type) => item.pid == type.id);
        if (item.pid && p) {
          p.child = p.child || [];
          p.child.push(item);
        }
        item.category = p ? p.category + "=>" + item.title : item.title;
      });
      return res.filter((type) => type.pid === null);
    },
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
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
    /**
     * 模糊查询
     */
    query(flag) {
      if (!this.salesTypeValue) {
        this.fuzzyQuery = this.renderDynamic;
        console.log(this.fuzzyQuery);
        this.flag = true;
      } else {
        this.fuzzyQuery = this.renderDynamic.filter((item) => {
          return item.categoryTitle == this.salesTypeValue;
        });
      }
      if (flag) {
        this.flag1 = false;
      } else {
        return this.fuzzyQuery;
      }
    },
    async fuzzyselect() {
      let queryhhh = await this.specificationFuzzySearch({
        title: this.form.speName,
        // title:'dfas',
      });
      console.log("zzzzz");
      console.log(queryhhh);
    },
  },
  async created() {
    this.spelist();
    this.getShopList();
    this.query(this.flag1);
  },
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
    display: flex;
    justify-content: space-between;
    & .findshop {
      width: 300px;
    }
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
    & .footer_right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
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
.sel {
  width: 120px;
}
.cell1 {
  background-color: #17d57e;
  padding: 10px 10px;
  border: none;
}
.cell2 {
  background-color: #ff8b53;
  padding: 10px 10px;
  margin-left: 10px;
  border: none;
  color: #ffffff;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.ml-10 {
  margin-left: 10px;
}
</style>