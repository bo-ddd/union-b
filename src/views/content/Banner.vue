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
        <div class="modifydata">
            <el-form :model="form">
                <el-form-item label="活动名称">
                    <!-- <el-input v-model="form.name" autocomplete="off"></el-input> -->
                    <el-upload
                        action=""
                        list-type="picture-card"
                        :http-request='uploadimg'
                        >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item label="图片名字">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="图片描述">
                    <el-input v-model="form.describe" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary"  @click="submit">确 定</el-button>
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
        }
    },
    methods :{
        openLayer (a) {
            this.dialogFormVisible = true;
            console.log(a);
        },
        uploadimg(a){
            console.log(a);
        }
    }
}
</script>

<style lang='scss' scoped>
.modifydata{
    width: 100%;
    height: 100%;
    margin: 0 auto;

    & div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.ml-20{
    margin-left: 20px;
}
// 模态框最外面的div
::v-deep .el-dialog{
    width: 25%;
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

