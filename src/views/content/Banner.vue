<template>
  <div id="wrap">
    <el-button type="primary" @click="createBan">创建banner图</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width='200'>
      </el-table-column>
      <el-table-column prop="date" width='200'>
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
      <el-table-column prop="address" label="路由">
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
                <el-form-item label="图片">
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
                <el-form-item label="图片信息">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="图片路由">
                    <el-input v-model="form.describe" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button type="primary"  @click="modify">确 定</el-button>
        </div>
    </el-dialog>

  </div>
</template>

<script>
import uploadImg from '../../../public/lib/uploud';
import { mapActions } from "vuex";
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
                describe : '',
            },
            imgUrl : '',
            id : '',
        }
    },
    methods :{
        //                上传图片      创建banner图
        ...mapActions(["uploadImage","createBanner"]),
        // 编辑的点击事件
        openLayer (a) {
            this.dialogFormVisible = true;
            this.form.name=a.row.name;
            this.form.describe = a.row.address;
            this.id = a.row.id;
        },
        // 上传的http事件
        async uploadimg(a){
            let b = uploadImg(a.file,1);
            let c = await this.uploadImage(b);
            this.imgUrl = c.data;
        },
        // 模态框中的确定事件
        modify(){
            this.dialogFormVisible = false;
        },
        createBan(){
            this.dialogFormVisible = true;
            this.form.name = '';
            this.form.describe = '';
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

