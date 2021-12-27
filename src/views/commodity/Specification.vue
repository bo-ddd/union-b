<template>
  <div class="wrap">
    <div class="wrap_interior">
      <div class="tit">商品规格</div>
      <div class="addspebut">
        <div class="footer_left">
          <el-button
            type="primary"
            @click="addspecification, (dialogaddFormVisible = true)"
            >添加规格</el-button
          >
          <el-button type="primary">保存排序</el-button>
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
        <el-table-column label="id" align="center" prop="id"> </el-table-column>
        <el-table-column
          label="规格名称"
          align="center"
          prop="title"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          label="备注"
          prop="productCategory"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
        <el-table-column label="排序" show-overflow-tooltip align="center">
          <template>
            <i class="el-icon-sort-up"></i>
            <i class="el-icon-sort-down"></i>
          </template>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip align="center">
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
              @click="deleteData(scope.row)"
              type="text"
            >
            </el-button>
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
      pageSize1: 45,
      pageNum1: "",
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
      table: [],
      pageSize: 10, //每页条数
      renderDynamic: [],
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
     */
    ...mapActions([
      "getSpecificationList",
      "createSpecification",
      "deleteSpecification",
    ]),
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
    multipleRemove() {
      this.deleteDataArr = [...new Set(this.deleteDataArr)];
    },
    checkBoxData: function (selection) {
      console.log(selection);
    },
    //单个修改
    editListData() {
      console.log("单个修改成功");
    },
    /**
     * 删除当前行
     */
    deleteData() {
      // for (var i = 0; i < this.renderDynamic.length; i++) {
      //   let el = this.renderDynamic[i];
      //   if (row.ord == el.ord) {
      //     this.renderDynamic.splice(i, 1);
      //   } else {
      //     for (var j = 0; j < el.child.length; j++) {
      //       if (row.ord == el.child[j].ord) {
      //         el.child.splice(j, 1);
      //       }
      //     }
      //   }
      // }
      // this.ordSort(this.renderDynamic);
    },

    //保存排序
    // formatter(row) {
    //   return row.address;
    // },

    /**
     * 升序
     */
    // async ascendingOrder(row) {
    //   console.log(row);
    //   let res = {};
    //   var formatData = (row) => {
    //     for (let i = 0; i < this.renderDynamic.length; i++) {
    //       let item = this.renderDynamic[i];
    //       if (item.id == row.id) {
    //         // console.log(item);
    //         res.i = i;
    //         res.currentData = item; //当前的数据；
    //         res.preData = this.renderDynamic[i - 1]; //上一个数据；
    //         break;
    //       }
    //     }
    //     console.log(formatData)
    //     return res;
    //   };
    // },

    //获取所有类目规格
    async spelist() {
      let res = await this.getSpecificationList({
        pagination: false,
        pageNum: 1,
        pageSize: this.pageSize1,
      });
      console.log(res);
      // this.pageSize1 = res.data.count.slice();
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
  },
  async created() {
    this.spelist();
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
</style>