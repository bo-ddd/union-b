<template>
  <div class="wrap">
    <div class="wrap_interior">
      <div class="tit">商品规格</div>
      <div class="addspebut">
        <el-button
          type="primary"
          @click="addspecification, (dialogaddFormVisible = true)"
          >添加规格</el-button
        >
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
            <!-- <el-form-item label="备注" :label-width="formLabelWidth">
              <el-input v-model="form1.name" autocomplete="off"></el-input>
            </el-form-item> -->
            <el-form-item label="类目id" :label-width="formLabelWidth">
              <el-input v-model="form1.cid" autocomplete="off"></el-input>
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
        @select="checkBoxData"
        :default-sort="{ prop: 'id', order: 'descending' }"
        stripe
      >
        <el-table-column
          type="selection"
          align="center"
          v-model="checked"
          @click="checkedclick()"
        >
        </el-table-column>
        <el-table-column label="id" align="center" prop="id" sortable>
        </el-table-column>
        <el-table-column
          label="规格名称"
          align="center"
          prop="title"
          show-overflow-tooltip
          sortable
        >
        </el-table-column>
        <el-table-column
          label="备注"
          prop="productCategory"
          show-overflow-tooltip
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
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
              @click="editListData, (dialogFormVisible = true)"
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
                <el-form-item label="备注" :label-width="formLabelWidth">
                  <el-input v-model="form.remark" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="排列顺序" :label-width="formLabelWidth">
                  <el-input
                    v-model="form.sortOrder"
                    autocomplete="off"
                  ></el-input>
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
              i
              class="el-icon-delete cell2"
              @click.native.prevent="deleteRow(scope.$index, arr)"
              type="text"
            >
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="footer">
        <div class="footer_left">
          <el-button type="primary">保存排序</el-button>
          <el-button
            type="primary"
            class="batch_del_btn"
            @click="MultipleRemove()"
            >批量删除</el-button
          >
        </div>
        <div class="footer_right">
          <div class="block">
            <el-pagination
              :current-page="currentPage4"
              :page-sizes="[6, 10, 15, 20]"
              layout="sizes"
            >
            </el-pagination>
            <div>输入按回车</div>
          </div>
          <div class="block2">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage3"
              :page-size="10"
              layout="total,size,prev, pager, next"
              :total="table.length"
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
      checked: false,
      value: "",
      input: "",
      input1: "",
      input2: "",
      input3: "",
      select: "",
      currentPage1: 1,
      currentPage2: 5,
      currentPage3: 3,
      currentPage4: 4,
      options: [
        {
          value: "选项1",
          label: "规格名称",
        },
        {
          value: "选项2",
          label: "备注",
        },
      ],
      pagination: true,
      id: "",
      title: "",
      productCategory: "",
      count: "", //所有条数
      // pageCount: "", //所有页数
      arr: [],
      deleteDataArr1: [],
      // deleteDataArr2: [],
      form: {
        serialId: "",
        speName: "",
        remark: "",
        sortOrder: "",
      },
      form1: {
        title: "",
        cid: "",
        name: "",
      },
      dialogFormVisible: false,
      dialogaddFormVisible: false,
      formLabelWidth: "120px",
      multipleSelection: [],
      currentPage: 1,
      pageSize: 43, //每页条数
      table: [],
      pageNum: "", //一共几页
      num: "",
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
     */
    ...mapActions(["getSpecificationList", "createSpecification"]),
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
    //添加规格
    async addspecification() {
      let res = await this.createSpecification({
        title: this.form1.title,
        cid: Number(this.form1.cid),
      });
      console.log(res);
      this.spelist();
    },
    //批量删除
    MultipleRemove() {
      this.deleteDataArr1.forEach((item) => {
        this.arr.splice(this.arr.indexOf(item), 1);
      });
    },
    checkBoxData: function (selection) {
      this.deleteDataArr1 = selection;
    },
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
    //获取所有类目规格
    async spelist() {
      let res = await this.getSpecificationList({
        pagination: false,
        pageSize: 43,
      });
      console.log(res);
      this.count = res.data.count;
      this.pageCount = res.data.pageCount;
      res.data.rows.forEach((item) => {
        this.id = item.id;
        this.title = item.title;
        this.productCategory = item.productCategory;
        this.arr.push(item);
      });
    },
    //批量删除（查看是否选中）
    // checkedclick() {
    //   //把符合条件的数据放到一个数组里，然后用splice删除
    //   if(this.checked == true){
    //     this.deleteDataArr2.push()
    //   }
    // },
    //分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.handleCurrentChange(1);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.pageNum = val;
      this.offSize();
    },
    offSize() {
      this.num = this.pageSize * (this.pageNum - 1);
      this.Num();
    },
    Num() {
      this.table = this.arr.slice(this.num, this.num + this.pageSize);
    },
  },
  async created() {
    this.spelist();
    this.table = this.arr;
    this.table.map((i) => {
      i.show = false;
      return i;
    });
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
</style>