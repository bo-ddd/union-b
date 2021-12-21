<template>
  <div class="wrap">
    <div class="Company">
       <el-button type="primary" @click="dialogFormVisible = true">新增单位</el-button>
      <div>
          <el-select v-model="value" filterable placeholder="请选择" size='small'> 
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>  
          <el-input v-model="input"  size='small' placeholder="请输入内容"  suffix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#f7f8fa'}" size='small'>
        <el-table-column prop="ord" label="序号">
        </el-table-column>
        <el-table-column prop="title" label="单位名称">
        </el-table-column>
        <el-table-column prop="cid" label="类目">
        </el-table-column>
        <el-table-column prop="storeId" label="店铺">
        </el-table-column>
        <el-table-column  label="排序">
          <template slot-scope="scope">
             <el-link type="primary" class="link" @click="Topping(scope.$index)" size='small'>置顶</el-link>
             <el-link type="primary" class="link" @click="raise(scope.row.Serial_number)" size='small'>升序</el-link>
             <el-link type="primary" class="link" @click="Down(scope.row.Serial_number)" size='small'>降序</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <el-link type="primary" @click="Disable(scope.row)">禁用</el-link>
          </template>
        </el-table-column>
      </el-table>
       <div class="block">
        <el-pagination :current-page="currentPage"  @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :page-sizes="[10, 15, 20, 25]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="新增单位" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="单位名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="单位类型" :label-width="formLabelWidth">
          <el-input v-model="form.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="单位来源" :label-width="formLabelWidth">
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
          currentPage: 1,
          cacheExport: [],
          multipleSelection: [],
          table: [],
          input:'',
          dialogFormVisible: false,
          formLabelWidth: '120px',
          form: {
            name: '',
            type:'',
            source:''
          },
          tableData: [],
           options: [{
          value: '选项1',
          label: '序号'
        }, {
          value: '选项2',
          label: '单位名称'
        }, {
          value: '选项3',
          label: '单位来源'
        }],
        value: ''
        }
      },
      methods: {
         ...mapActions(["createUnitlibrary","getUnitlibraryList"]),
        //置顶
        Topping(index){
          var arr = this.table.splice(index,1);
          this.table.unshift(arr);
          this.mySort(this.table);
        },
        //上调
        raise(Serial_number){
          if (Serial_number == 1) return;
          this.tableData.forEach(item=>{
            if(item.id == Serial_number-1){
              item.id = Serial_number;
              return;
            }
            if(item.id == Serial_number){
              item.id = Serial_number-1;
            }
          })
          this.mySort(this.table);
        },
        //下调
        Down(Serial_number){
          this.tableData.forEach(item=>{
            if (item.id == Number(Serial_number)+1) {
                item.id = Serial_number;
                return;
            }
            if (item.id == Serial_number) {
                item.id = Number(Serial_number)+1;
            }
          })
           this.mySort(this.table);
        },
        //禁用
        Disable(item){
          item.Unit_name = '';
        },
        //排序
        mySort(tableData){
            tableData.sort((a,b)=>{
            var num1 = a.id;
            var num2 = b.id;
            return num1-num2;
          })
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
              console.log(_);
            })
            .catch(_ => {console.log(_);});
        },
        handleSizeChange(val) {
          this.pageSize = val;
          this.handleCurrentChange(1);
        },
        /**
         * @description 分页的当前页有多少条
         * **/
        handleCurrentChange(val) {
          this.cacheExport = this.multipleSelection;
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
        async submit(){
          this.dialogFormVisible = false;
          let res = await this.createUnitlibrary({
            title:this.form.name,
            cid:Number(this.form.type),
            storeId:Number(this.form.source)
          });
          console.log(res);
          this.List();
        },
        async List(){
          let res = await this.getUnitlibraryList({
            pagination:true,
          })
          console.log(res);
          this.tableData = res.data.rows;
          console.log(this.tableData);
        }
      },
      created(){
        this.handleSizeChange(10);
        this.List();
      }
}
</script>

<style lang="scss" scoped>
::v-deep .is-leaf{
  text-align: center;
}
::v-deep .cell{
  text-align: center;
}
.wrap{
  height: calc(100vh - 100px);
  overflow-y:auto;
  & .Company{
    padding: 15px;
    display: flex;
    justify-content: space-between;
    & .el-input{
      text-indent: 10px;
      width: 200px;
    }
  }
  & .table{
    width: 100%;
    & .link{
      margin: 0 1%;
      cursor: pointer;
    }
  }
  & .block{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
}
</style>