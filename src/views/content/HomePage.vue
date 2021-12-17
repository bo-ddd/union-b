<template>
  <div id="wrap">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date"  width='200'>
          <template slot="header">
              <span>图片</span>
          </template>
          <template>
              <div class="img">

              </div>
          </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名">
          <template slot="header">
              <span>图片信息</span>
          </template>
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column width='200'>
          <template slot="header">
              <span>编辑</span>
          </template>
          <template slot-scope="scope">
              <el-link type="primary" @click="openLayer(scope)">编辑</el-link>
          </template>
      </el-table-column>

    </el-table>

    <el-dialog :visible.sync="dialogFormVisible">
            <div class="flex">
                <span>打开方式</span>
                <el-radio v-model="radio" label="1" class="ml-20">当前标签页打开</el-radio>
                <el-radio v-model="radio" label="2">新开标签页打开</el-radio>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return{
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            dialogFormVisible: false,
            form : {
                name : '',
            },
            radio: '1',
        }
    },
    methods :{
        openLayer (a) {
            this.dialogFormVisible = true;
            console.log(a);
        }
    }
}
</script>

<style lang='scss' scoped>
.ml-20{
    margin-left: 20px;
}
// 模态框最外面的div
::v-deep .el-dialog{
    width: 30%;
}
.flex{
    display: flex;
    align-items: center;
    justify-content: center;
}
// 表格内容居中
::v-deep .is-leaf , ::v-deep .el-table__cell{
    text-align: center;
}
#wrap{
    padding: 20px 20px;
}
.img{
    width: 100px;
    height: 60px;
    border: 1px solid #ccc;
    margin: 0 auto;
}
</style>