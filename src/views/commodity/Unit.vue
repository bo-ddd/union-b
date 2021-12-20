<template>
  <div class="wrap">
    <div class="Company">
       <el-button type="primary">新增单位</el-button>
      <div>
          <el-select v-model="value" filterable placeholder="请选择" size='small'> 
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>  
          <el-input  size='small' placeholder="请输入内容"  suffix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div class="table">
      <el-table :data="table" style="width: 100%" :header-cell-style="{background:'#f7f8fa'}" size='small'>
        <el-table-column prop="Serial_number" label="序号">
        </el-table-column>
        <el-table-column prop="Unit_name" label="单位名称">
        </el-table-column>
        <el-table-column prop="Unit_type" label="单位类型">
        </el-table-column>
        <el-table-column prop="Unit_source" label="单位来源">
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
  </div>
</template>

<script>
export default {
   data() {
        return {
          currentPage: 1,
          cacheExport: [],
          multipleSelection: [],
          table: [],
          tableData: [{
            Serial_number: '1',
            Unit_name: '1件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '2',
            Unit_name: '2件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '3',
            Unit_name: '3件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '4',
            Unit_name: '4件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '5',
            Unit_name: '5件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '6',
            Unit_name: '6件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '7',
            Unit_name: '7件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '8',
            Unit_name: '8件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '9',
            Unit_name: '9件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '10',
            Unit_name: '10件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '11',
            Unit_name: '11件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '12',
            Unit_name: '12件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '13',
            Unit_name: '13件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '14',
            Unit_name: '14件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '15',
            Unit_name: '15件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '16',
            Unit_name: '16件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '17',
            Unit_name: '17件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '18',
            Unit_name: '18件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '19',
            Unit_name: '19件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '20',
            Unit_name: '20件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '21',
            Unit_name: '21件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'
          }, 
          ],
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
        //置顶
        Topping(index){
          var arr = this.table.splice(index,1);
          this.table.unshift(arr);
          this.mySort(this.table);
        },
        //上调
        raise(id){
          if (id == 1) return;
          this.tableData.forEach(item=>{
            if(item.Serial_number == id-1){
              item.Serial_number = id;
              return;
            }
            if(item.Serial_number == id){
              item.Serial_number = id-1;
            }
          })
          this.mySort(this.table);
        },
        //下调
        Down(id){
          this.tableData.forEach(item=>{
            if (item.Serial_number == Number(id)+1) {
                item.Serial_number = id;
                return;
            }
            if (item.Serial_number == id) {
                item.Serial_number = Number(id)+1;
            }
          })
           this.mySort(this.table);
        },
        //禁用
        Disable(item){
          item.Unit_name = '';
        },
        mySort(tableData){
            tableData.sort((a,b)=>{
            var num1 = a.Serial_number;
            var num2 = b.Serial_number;
            return num1-num2;
          })
        },
        search(){
          let _search = this.jobNo.toLowerCase();
          let newListData = [];
          if (_search) {
            this.xmgcqkJsonsData.filter(item => {
                if (item.code.toLowerCase().indexOf(_search) !== -1) {
                  newListData.push(item);
              }
            }) 
          }
          this.xmgcqkJsonsData = newListData;
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
      },
      created(){
        this.handleSizeChange(10);
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