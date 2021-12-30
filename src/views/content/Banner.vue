<template>
  <div id="wrap">
    <el-button type="primary" @click="createBan">创建banner图</el-button>


    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width='200'>
      </el-table-column>
      <el-table-column width='200'>
          <template slot="header">
              <span>图片</span>
          </template>
          <template slot-scope="scope">
              <div class="img">
                <img :src="scope.row.imgUrl" alt="">
              </div>
          </template>
      </el-table-column>
      <el-table-column prop="imgDescription" label="姓名">
          <template slot="header">
              <span>图片信息</span>
          </template>
      </el-table-column>
      <el-table-column prop="route" label="路由">
      </el-table-column>
      <el-table-column width='200'>
          <template slot="header">
              <span>编辑</span>
          </template>
          <template slot-scope="scope">
              <el-link type="primary" @click="openLayer(scope)">编辑</el-link>
              <el-link type="primary" @click="open(scope)" class="ml-10">删除</el-link>
          </template>
      </el-table-column>

    </el-table>

    <el-dialog :visible.sync="dialogFormVisible">
        <div class="modifydata">
            <el-form :model="form">
                <el-form-item label="图片">
                    <el-upload
                        action=""
                        :file-list='arr'
                        list-type="picture-card"
                        ref="my-upload"
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
            <el-button @click="cancelUpload">取 消</el-button>
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
            tableData: [],
            dialogFormVisible: false,
            form : {
                name : '',
                describe : '',
            },
            imgUrl : '',
            id : '',
            arr:[]
        }
    },
    methods :{
        //                上传图片    创建banner    获取banner        更改banner        删除banner
        ...mapActions(["uploadImage","createBanner","getBannerList","updateBanner","deleteBanner"]),
        // 获取所有的banner图列表
        async getBanners(){
            let res = await this.getBannerList();
            this.tableData = res.data.rows
        },
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
        async modify(){
            // 没有id证明是要创建的  否则就是需要修改的
            if(!this.id){
                await this.createBanner({
                    imgUrl : this.imgUrl,
                    imgDescription : this.form.name,
                    route : this.form.describe,
                })
            }else{
                await this.updateBanner({
                    id : this.id,
                    imgUrl : this.imgUrl,
                    imgDescription : this.form.name,
                    route : this.form.describe,
                })
            }
            this.getBanners();
            this.dialogFormVisible = false;
        },
        // 模态框的取消事件
        cancelUpload(){
            this.$refs['my-upload'].clearFiles();
            this.dialogFormVisible = false;
        },
        // 创建banner的点击事件
        createBan(){
            this.id = '';
            this.dialogFormVisible = true;
            this.form.name = '';
            this.form.describe = '';
        },
        open(a) {
            console.log(a.row.id);
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(async () => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    await this.deleteBanner({
                        id : Number(a.row.id)
                    })
                    this.getBanners();
                 }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            }
        },
    async created(){
        this.getBanners();
    }
}
</script>

<style lang='scss' scoped>
.ml-10{
    margin-left: 10px;
}
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

    & img{
        width: 100%;
        height: 100%;
    }
}
</style>