<template>
  <div class="wrap">
    <div class="Company">
      <el-button type="primary" @click="dialogFormVisible = true">新增单位</el-button>
      <div>
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div class="table">
      <el-table :data="table" style="width: 100%" :header-cell-style="{ background: '#f7f8fa' }">
        <el-table-column prop="index" label="序号"> </el-table-column>
        <el-table-column prop="title" label="单位名称"> </el-table-column>
        <el-table-column prop="categoryTitle" label="类目"> </el-table-column>
        <el-table-column prop="storeTitle" label="店铺"> </el-table-column>
        <el-table-column label="排序">
          <template slot-scope="scope">
            <el-link type="primary" class="link" @click="Topping(scope.row)">置顶</el-link>
            <el-link type="primary" class="link" @click="raise(scope.row)">升序</el-link>
            <el-link type="primary" class="link" @click="Down(scope.row)">降序</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <el-link :type="type" class="operation">{{scope.row.disable ? '已启用' : '已禁用'}}</el-link>
            <el-link :type="types" class="operation" @click="Disable(scope.row.ord)">{{scope.row.disable ? '禁用' : '启用'}}</el-link>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination 
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage" 
        :page-sizes="[10, 15, 20, 25]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="新增单位" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="单位名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类目" :label-width="formLabelWidth">
          <el-input v-model="form.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺" :label-width="formLabelWidth">
          <el-input v-model="form.source" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      type:'',
      types:'',
      currentPage: 1,
      pageSize:'',
      input: "",
      table:[],
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        name: "",
        type: "",
        source: "",
      },
      tableData: [],
      options: [{
          value: "选项1",
          label: "序号",
        },
        {
          value: "选项2",
          label: "单位名称",
        },
        {
          value: "选项3",
          label: "类目",
        }],
      value: "",
    };
  },
  methods: {
    ...mapActions(["createUnitlibrary", "getUnitlibraryList","unitlibraryOrders","unitlibraryStick"]),
    /**
     * @description 置顶的方法
     */
    async Topping(ord) {
      var num = ord.ord;
      let res = await this.unitlibraryStick({
        ord:num
      })
      console.log(res);
      this.List();
    },
    /**
     * @description 升序的方法
     */
    async raise(ord) {
      let num = this.tableData[ord.index-2].ord;
        let res = await this.unitlibraryOrders({
          currentDataord:ord.ord,
          preDataord:num
        })
        console.log(res);
        this.List();
    },
    /**
     * @description 降序的方法
     */
    async Down(ord) {
      let num = this.tableData[ord.index].ord;
      let res = await this.unitlibraryOrders({
        currentDataord:ord.ord,
        preDataord:num
    //  * currentDataord     [nmber] 当前的类目
    //  * preDataord            [number]要跟交换的类目
      })
      console.log(res);
      this.List();
    },
    /**
     * @description 禁用的方法
     */
    Disable(ord) {
      console.log(ord);
      this.List();
    },
    /**
     * @description 排序的方法
     */
    mySort(tableData) {
      tableData.sort((a, b) => {
        var num1 = a.ord;
        var num2 = b.ord;
        return num1 - num2;
      });
    },
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
    /**
     *  @description 新增单位
     */
    async submit() {
      this.dialogFormVisible = false;
      let res = await this.createUnitlibrary({
        title: this.form.name,
        cid: Number(this.form.type),
        storeId: Number(this.form.source),
      });
      console.log(res);
      this.form = [];
      this.List();
    },
    /**
     *  @description 渲染数据
     */
    async List() {
      let res = await this.getUnitlibraryList({
        pagination: true,
        pageNum:1,
        pageSize:100,
        //  * pageNum   [number]    每页多少条数据  默认是10条
        //  * pageSize  [number]    这是第几页      默认是第1页
      });
      console.log(res.data);
      this.tableData = res.data.rows;
      this.tableData.forEach((item,index)=>{
        item.index = index+1;
        this.type = item.disable ? 'primary' : 'danger'
        this.types = item.disable ? 'danger' : 'primary'
      })
      this.handleSizeChange(10);
    },
    /**
     * @description 分页每页有多少条
     * **/
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleCurrentChange(1);
    },

    /**
     * @description 分页的当前页有多少条
     * **/
    handleCurrentChange(val) {
      let arr = [];
      for (
        let i = val * this.pageSize - this.pageSize;
        i < val * this.pageSize;
        i++
      ) {
        if (this.tableData[i] != undefined) arr.push(this.tableData[i]);
      }
      this.table = arr;
    },

  },
  created() {
    this.List();
  },
};
</script>

<style lang="scss" scoped>
::v-deep .is-leaf {
  text-align: center;
}
::v-deep .cell {
  text-align: center;
}
.wrap {
  height: calc(100vh - 100px);
  overflow-y: auto;
  & .Company {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    & .el-input {
      text-indent: 10px;
      width: 200px;
    }
  }
  & .table {
    width: 100%;
    & .link {
      margin: 0 1%;
      cursor: pointer;
    }
  }
  & .block {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
}
</style>