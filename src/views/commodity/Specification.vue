<template>
  <div class="wrap">
    <div class="wrap_interior">
      <div class="tit">商品规格</div>
      <div class="addspebut">
        <div class="footer_left">
          <el-button
            type="primary"
            @click="addspecification, (dialogaddFormVisible = true), submit"
            >添加规格</el-button
          >
          <!-- <el-button type="primary">保存排序</el-button> -->
          <el-button
            type="primary"
            class="batch_del_btn"
            @click="multipleRemove()"
            >批量删除</el-button
          >
        </div>
        <div class="">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-select
              v-model="value"
              filterable
              placeholder="请选择"
              slot="prepend"
              class="sel"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <el-dialog title="添加规格" :visible.sync="dialogaddFormVisible">
          <el-form :model="form1">
            <el-form-item label="规格名称" :label-width="formLabelWidth">
              <el-input v-model="form1.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品类目" :label-width="formLabelWidth">
              <el-input v-model="form1.cid" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品类目" prop="pid" class="classifya">
              <template>
                <div class="block">
                  <span class="demonstration"></span>
                  <el-cascader
                    :ref="cascader"
                    :options1="options1"
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
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogaddFormVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="addspecification(), (dialogaddFormVisible = false)"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>
      <el-table
        ref="multipleTable"
        tooltip-effect="dark"
        :data="table"
        style="width: 97%"
        :default-sort="{ prop: 'id', order: 'descending' }"
        stripe
      >
        <el-table-column
          :reserve-selection="true"
          type="selection"
          align="center"
          v-model="checked"
          @click="checkedclick()"
        >
        </el-table-column>
        <el-table-column label="id" align="center" prop="id"> </el-table-column>
        <el-table-column
          label="规格名称"
          align="center"
          prop="title"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          label="商品类目"
          prop="productCategory"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              i
              class="el-icon-edit cell1"
              @click="getCommodityDat(scope)"
            ></el-button>

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
                <el-form-item label="商品类目" :label-width="formLabelWidth">
                  <el-input v-model="form.remark" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false"
                  >确 定</el-button
                >
              </div>
            </el-dialog>

            <el-button
              type="text"
              @click="open(), deleteData(scope.row)"
              i
              class="el-icon-delete cell2"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
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
// import Task from "@/assets/js/Task";
export default {
  data() {
    return {
      checked: false,
      value: "",
      input: "",
      input1: "",
      input2: "",
      input3: "",
      select: "",
      currentPage1: 1,
      currentPage4: 1,
      pageSize1: 50,
      pageNum1: "",

      options1: [],
      tasks: [],
      options: [
        {
          value: "选项1",
          label: "规格名称",
        },
        {
          value: "选项2",
          label: "商品类目",
        },
      ],
      pagination: false,
      id: "",
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
      form1: {
        title: "",
        cid: "",
        name: "",
      },
      ruleForm: {
        name: "",
        pid: "",
      },
      dialogVisible: false,
      dialogFormVisible: false,
      dialogaddFormVisible: false,
      formLabelWidth: "120px",
      multipleSelection: [],
      currentPage: 1,
      table: [],
      pageSize: 10, //每页条数
      renderDynamic: [],
      cacheArr: [],
      arr4: [],
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
     */
    ...mapActions([
      "getSpecificationList",
      "createSpecification",
      "deleteSpecification",
      "getCategoryList",
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
    //添加规格
    async addspecification() {
      let res = await this.createSpecification({
        title: this.form1.title,
        // cid: Number(this.form1.cid),
        cid: this.option,
      });
      console.log("ccc");
      console.log(this.item);
      console.log(res);
      this.spelist();
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

    //批量删除
    multipleRemove() {
      for (let i = 0; i < this.renderDynamic.length; i++) {
        if (!this.cacheArr.includes(this.renderDynamic[i])) {
          this.cacheArr.push(this.renderDynamic[i]);
        } else {
          let temp = this.cacheArr.indexOf(this.renderDynamic[i]);
          this.cacheArr.splice(temp, 1);
        }
      }
      this.cacheArr.forEach((item) => {
        this.table.splice(this.table.indexOf(item), 1);
      });
    },
    checkBoxData: function (selection, row) {
      this.renderDynamic.push(row);
    },
    handleSelectionChange(val) {
      if (!val.length) {
        this.renderDynamic = [];
      } else {
        val.forEach((item) => {
          this.renderDynamic.push(item);
        });
      }
    },
    getRowKeys(row) {
      //记录每行的key值
      return row.id;
    },
    //单个修改
    getCommodityDat(data) {
      this.dialogFormVisible = true;
      this.form.serialId = data.row.id;
      this.form.speName = data.row.title;
      this.form.remark = data.row.productCategory;
      console.log(this.form);
      this.spelist();
    },
    /**
     * 获取所有类目规格
     * */
    async spelist() {
      let res = await this.getSpecificationList();
      console.log(res);
      this.renderDynamic = res.data.rows.slice();
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
    getId() {
      let res = this.$refs["cascader"].getCheckedNodes();
      this.ruleForm.pid = res[0].data.id;
    },
    async submit() {
      let res = await this.createSpecification({
        title: this.ruleForm.name,
        pid: this.ruleForm.pid == "" ? null : this.ruleForm.pid,
      });
      console.log(res);
    },
    async getClassifyInfo() {
      let res = await this.getCategoryList({});
      let data = res.data.rows.slice();
      this.arr = data;
      let target = this.format(data);
      this.options1 = target;
      console.log('aa');
      console.log(res);
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
    /**
     * 商品类目接口方法
     */
    // async categoryList() {
    //   let resource = await this.getCategoryList();
    //   console.log("aaasdadf");
    //   console.log(resource);
    //   resource.data.rows.forEach((item) => {
    // this.option.push(item.title);
    // this.option.label = item.title;
    // this.option.value = item.id;
    // });
    // console.log(this.option);
    // let resource = await this.getCategoryList();
    // console.log(resource);
    // console.log("aaa");
    // console.log(resource.data.rows);
    // let task = new Task(resource.data.rows);
    // this.tasks = task.data.rows;
    // console.log(this.tasks);
    // console.log(this.option);
    // },
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
  },
  async created() {
    this.spelist();
    this.getClassifyInfo();
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