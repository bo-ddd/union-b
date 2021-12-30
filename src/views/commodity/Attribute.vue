<template>
  <div>
    <!-- ProductParameters商品属性 -->
    <div class="main">
      <div class="mains">
        <h1 class="h1">属性值列表</h1>
        <div class="list">
          <el-button
            type="primary"
            @click="dialogFormVisible = true"
            class="button"
            >新增属性</el-button
          >
          <el-dialog title="新增属性" :visible.sync="dialogFormVisible">
            <el-form :model="forms">
              <el-form-item label="属性名称" :label-width="formLabelWidth">
                <el-input v-model="forms.name" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item
                label="类型"
                :label-width="formLabelWidth"
                class="form-money"
              >
                <el-select v-model="values" clearable placeholder="请选择">
                  <el-option
                    v-for="item in option"
                    :key="item"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item
                label="商品名"
                prop="pid"
                :label-width="formLabelWidth"
                class="form-money"
              >
                <el-select v-model="value"  placeholder="请选择">
                  <el-option
                    v-for="item in productList"
                    :key="item"
                    :label="item.title"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="confirm">确 定</el-button>
            </div>
          </el-dialog>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="id" width="100" align="center">
            </el-table-column>
            <el-table-column prop="value" label="属性名" align="center">
            </el-table-column>
            <el-table-column prop="productTitle" label="商品名" align="center">
            </el-table-column>
            <el-table-column prop="sort" label="排序" align="center">
              <template slot-scope="scope">
                <el-button size="mini" @click="delData(scope.row)"
                  >置顶</el-button
                >
                <el-button size="mini" @click="ascendingOrder(scope.row)"
                  >向上</el-button
                >
                <el-button size="mini" @click="sescendingOrder(scope.row)"
                  >向下</el-button
                >
              </template>
            </el-table-column>
            <el-table-column prop="operate" label="操作" align="center">
              <template slot-scope="scope">
                <el-button size="mini" @click="dialogFormVisibles = true"
                  >编辑</el-button
                >

                <el-dialog title="修改信息" :visible.sync="dialogFormVisibles">
                  <el-form :model="form">
                    <el-form-item
                      label="属性名"
                      :label-width="formLabelWidth"
                      class="form-money"
                    >
                      <el-input
                        v-model="form.name"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="商品名"
                      :label-width="formLabelWidth"
                      class="form-money"
                    >
                      <el-input
                        v-model="form.name"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisibles = false"
                      >取 消</el-button
                    >
                    <el-button
                      type="primary"
                      @click="dialogFormVisibles = false"
                      >确 定</el-button
                    >
                  </div>
                </el-dialog>

                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteData(scope.row)"
                  >删除</el-button
                >
                <!-- <el-button size="mini" type="danger" @click="open">删除</el-button> -->
              </template>
            </el-table-column>
          </el-table>
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
      valueimg: "",
      productList: [],
      option: [
        {
          value: 1,
          label: "属性",
        },
        {
          value: 2,
          label: "参数",
        },
      ],
      options: [],
      value:null,
      values:null,
      dialogFormVisible: false,
      dialogFormVisibles: false,
      formLabelWidth: "120px",
      forms: {
        name: "",
        pid: "",
      },
      tableData: [],
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
    };
  },
  methods: {
    ...mapActions(["createAttribute","getAttributeList","attributeOrders","deleteAttribute","getProductList","attributeStick","getCategoryList",]),
    open() {},
    // async getadd(){
    //   let res = await this.getProductList();
    //   console.log(res);
    // },

    async getClassifyInfo() {
      let res = await this.getProductList({});
      this.productList = res.data.rows;
    },
    async apply() {
      let res = await this.getAttributeList();
      this.tableData = res.data.rows;
    },
    async ascendingOrder(row) {
      //获取当前层所有额数据；
      var formatData = (row) => {
        let res = {};
        for (let i = 0; i < this.tableData.length; i++) {
          let item = this.tableData[i];
          if (item.id == row.id) {
            res.i = i;
            res.currentData = item; //当前的数据；
            res.preData = this.tableData[i - 1]; //上一个数据；
            break;
          }
        }
        return res;
      };
      let obj = formatData(row);
      console.log(obj);
      if (obj.i) {
        let ord = obj.currentData.ord;
        obj.currentData.ord = obj.preData.ord;
        obj.preData.ord = ord;
        let res = await this.attributeOrders([
          obj.currentData.id,
          obj.preData.id,
        ]);
        console.log(res);
      } else {
        this.$message("处于顶端，不能继续上移");
      }
      this.apply();
    },

    async sescendingOrder(row) {
      //获取当前层所有额数据；
      var formatData = (row) => {
        let res = {};
        for (let i = 0; i < this.tableData.length; i++) {
          let item = this.tableData[i];
          if (item.id == row.id) {
            res.i = i;
            res.currentData = item; //当前的数据；
            res.preData = this.tableData[i + 1]; //上一个数据；
            break;
          }
        }
        return res;
      };
      let obj = formatData(row);
      console.log(obj);
        let ord = obj.currentData.ord;
        obj.currentData.ord = obj.preData.ord;
        obj.preData.ord = ord;
        let res = await this.attributeOrders([
          obj.currentData.id,
          obj.preData.id,
        ]);
        console.log(res);
      this.apply();
    },

    async deleteData(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await this.deleteAttribute({
            id: [row.id],
          });
          console.log(res);
          this.apply();
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

    async confirm() {
      this.dialogFormVisible = false;
      let res = await this.createAttribute({
        value: this.forms.name,
        type: this.values,
        productId: this.value,
      });
      console.log(res);
      this.apply();
    },

    async delData(ord) {
      var num = ord.id;
      if (ord.index == 1) {
        this.$message("已经是第一个");
        return;
      }
      console.log(num);
      let res = await this.attributeStick({
        id: num,
      });
      console.log(res);
      this.apply();
    },
  },
  async created() {
    // this.getadd();
    this.getClassifyInfo();
    this.apply();
    // this.getList();
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 100px);
  overflow-y: auto;
  min-height: 77vh;
  background: #ffffff;
}
.mains {
  margin: 0 20px;
}
.message {
  width: 100%;
  border-top: 2px solid #e5e5e5;
}
.h1 {
  margin: 20px 0;
}
.top {
  margin-top: 20px;
}
.el-input__inners {
  width: 200px;
}
.list {
  width: 100%;
  border-top: 2px solid #e5e5e5;
}
.button {
  margin: 10px 0;
}
.inp {
  border: 1px solid #d8dce5;
  width: 50px;
  height: 32px;
  border-radius: 5px;
  text-align: center;
}
.property {
  border: 1px solid #d8dce5;
  width: 130px;
  height: 32px;
  text-indent: 15px;
  border-radius: 5px;
}
.iconimg {
  width: 15px;
  height: 15px;
  margin: 5px;
}
.el-form-item {
  margin-bottom: 0px;
}
.middle {
  margin-top: 20px;
}
::v-deep .el-table__header-wrapper {
  font-size: 17px;
}
.form-money {
  margin: 20px 0;
}
</style>