<template>
  <div class="wrap">
    <div class="Company">
      <button>新增单位</button>
      <input type="text" name="" id="" placeholder="搜索">
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#f7f8fa'}">
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
            <img src="../../assets/images/zhiding.png" class="iconImg" @click="Topping(scope.row.Serial_number)">
            <img src="../../assets/images/xiangshang.png" class="iconImg" @click="raise(scope.row.Serial_number)">
            <img src="../../assets/images/xiangxia.png" class="iconImg" @click="Down(scope.row.Serial_number)">
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作">
             <el-link type="primary" @click="Disable">禁用</el-link>
        </el-table-column>
      </el-table>
       <div class="block">
        <el-pagination :current-page="currentPage4"
          :page-sizes="[20, 40, 60, 80]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="800">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
        return {
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4,
          tableData: [{
            Serial_number: '1',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '2',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '3',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '4',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '5',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '6',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '7',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '8',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '9',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '10',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '11',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '12',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '13',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '14',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '15',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '16',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '17',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '18',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '19',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '20',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          {
            Serial_number: '21',
            Unit_name: '件',
            Unit_type: '计数',
            Unit_source:'商家创建',
            sort:'',
            operation:'禁用'  
          }, 
          ]
        }
      },
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        Topping(id){
          console.log(id+'置顶');
        },
        raise(id){
          console.log(id+'上调');
          this.tableData.forEach(item=>{
            if(item.Serial_number == id){
              item.Serial_number = id-1;
              let superior = item.Serial_number
              superior
            }
          })
        },
        Down(id){
          console.log(id+'下调');
        },
        Disable(){
          console.log('禁用');
        }
      },
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: calc(100vh - 100px);
  & .Company{
    padding: 15px;
    display: flex;
    justify-content: space-between;
    & button{
      width: 6%;
      height: 30px;
      background-color: pink;
      color: white;
      cursor: pointer;
    }
    & input{
      border: 1px solid black;
      text-indent: 10px;
    }
  }
  & .table{
    width: 100%;
    & .iconImg{
      width: 15px;
      height: 15px;
      margin: 0 1%;
      cursor: pointer;
      color:#0080ff
    }
  }
  & .block{
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: center;
  }
}
</style>