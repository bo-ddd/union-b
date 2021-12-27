<template>
  <div class="wrap">
    <div class="Company">
      <el-button type="primary" @click="dialogFormVisible = true">新增单位</el-button>
      <div>
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" aria-selected="selected"></el-option>
        </el-select>
        <el-input v-model="Interludes" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
        <el-button type="primary" @click="Interlude">查询</el-button>
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
            <el-link type="primary" v-if="scope.row.disable" @click="Disable(scope.row)">启用</el-link>
            <el-link type="danger" v-else @click="Disable(scope.row)">禁用</el-link>
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
        :total="aaa">
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
      aaa:'',
      type:'',
      types:'',
      currentPage: 1,
      pageSize:'',
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
          label: "单位名称",
        }],
      value: "选项1",
      Interludes:''
    };
  },
  methods: {
    ...mapActions(["createUnitlibrary", "getUnitlibraryList","unitlibraryOrders","unitlibraryStick","disableUnitlibrary","unitlibraryFuzzySearch"]),
    /**
     * @description 置顶的方法
     */
    async Topping(ord) {
      var num = ord.id;
      if(ord.index == 1){
        this.$message('已经是第一个')
        return  
      }
      console.log(num);
      let res = await this.unitlibraryStick({
        id:num
      })
      console.log(res);
      this.List();
    },
    /**
     * @description 升序的方法
     */
    async raise(row) {
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
      if(obj.i){
          let ord = obj.currentData.ord;
          obj.currentData.ord = obj.preData.ord;
          obj.preData.ord = ord;
        this.ordSort(this.tableData);
        let res = await this.unitlibraryOrders([
            obj.currentData.id,
            obj.preData.id,
        ]);
        console.log(res)
      }else{
        this.$message("已经是第一个了不能再升序了")
      }
    },
    /**
     * @description 根据ord进行排序完成后 重新渲染页面
     */
    ordSort(arr) {
      arr.sort((a, b) => {
        let num1 = a.ord;
        let num2 = b.ord;
        return num2 - num1;
      });
        this.tableData.forEach((item,index)=>{
          item.index = index+1;
        })
      this.table = arr;
      this.handleSizeChange(10);
    },
    /**
     * @description 降序的方法
     */
    async Down(row) {
      if(row.index == this.tableData.length){
        this.$message("已经是最后一个")
        return
      }
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
        this.ordSort(this.tableData);
          let res = await this.unitlibraryOrders([
           obj.currentData.id,
           obj.preData.id,
          ]);
        console.log(res)
    },
    /**
     * @description 禁用的方法
     */
    async Disable(ord) {
      let num = ord.id
      let disable = ord.disable ? 0 : 1 ;
      let res = await this.disableUnitlibrary({
        id : num,
        disable : disable
      });
      console.log(res);
      if(res.status){
        ord.disable  == 1 ? ord.disable = 0 : ord.disable = 1
      }
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
      console.log(res)
      this.tableData = res.data.rows;
      this.aaa = this.tableData.length;
      this.tableData.forEach((item,index)=>{
        item.index = index+1;
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
    /**
     *  @description 查询
     */
    async Interlude(){
      console.log(this.Interludes);
      let res = await this.unitlibraryFuzzySearch({
        title : this.Interludes
      })
      if(this.Interludes){
        var num = res.data.rows;
        num.index = ''
        num.forEach((item,index)=>{
          item.index = index + 1;
        })
        this.table = num;
        this.aaa = this.table.length;
        console.log(num);
        this.Interludes = null
      }else{
        this.table = this.tableData
        this.aaa = this.table.length;
        this.handleCurrentChange(1)
      }
    }
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
      width: 200px;
      margin: 0 20px;
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