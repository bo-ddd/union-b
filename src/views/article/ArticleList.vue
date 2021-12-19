<template>
  <div class="wrap">
       <el-table
    :data="tableData"
    style="width: 100%"
    max-height="450">
    <el-table-column
      fixed
      prop="date"
      label="阅读/点赞数"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="文章标题"
      width="300">
    </el-table-column>
    <el-table-column
      prop="province"
      label="类别名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="city"
      label="付费模式"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="创建时间"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="版权内容"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="排序"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300">
      <template slot-scope="scope">
        <el-button class="button"
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button class="button"
          @click.native.prevent=""
          type="text"
          size="small">
          查看
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>

<style>
.wrap{
    padding: 20px;
}
.button{
    color: #ff4070;

}
.button:hover{
    color: #ff4070;
}
</style>