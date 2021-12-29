<template>
  <div id="wrap">
    <el-button type="primary" @click="createData">创建推荐内容</el-button>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label='id' width='200'>
      </el-table-column>

      <el-table-column prop="date"  width='200' label='图片'>
        <template>
            <div class="img">

            </div>
        </template>
      </el-table-column>

      <el-table-column prop="name" label="图片名字">
      </el-table-column>

      <el-table-column prop="describe" label="图片描述">
      </el-table-column>

      <el-table-column prop="address" label="供应商">
      </el-table-column>

      <el-table-column width='200' label='详情'>
        <template slot-scope="scope">
            <el-link type="primary" @click="openLayer(scope.row)">编辑</el-link>
            <el-link type="primary" @click="deleteRow(scope.row)" class="ml-10">删除</el-link>
        </template>
      </el-table-column>

    </el-table>

    <!-- 编辑的模态框 -->
    <el-dialog :visible.sync="dialogFormVisible">
        <div class="modifydata">
            <el-form :model="form">
                <el-form-item label="活动名称">
                    <el-upload
                        action=""
                        ref="my-upload"
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
                <el-form-item label="供应商" v-show="flag">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                            v-for="item in suppliers"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary"  @click="submit">确 定</el-button>
        </div>
    </el-dialog>

  </div>
</template>

<script>
import { mapActions } from "vuex";
import upload from '../../../public/lib/uploud';
export default {
    data(){
        return{
            tableData: [],
            dialogFormVisible: false,    // 模态框状态  flase 不显示 true显示
            dialogImageUrl: '',
            dialogVisible: false,
            form : {
                name : '',
                describe: '',
                imgUrl : '',
                supplier : '',   // 供应商
            },
            flag : false,
            suppliers : [],    // 供应商的id和名字
        }
    },
    methods :{
//                       图片接口     增加推荐接口   删除推荐接口  修改推荐接口   获取推荐列表
        ...mapActions(["uploadImage","createHome","deleteHome","updateHome","getHomeList"]),
        // 获取首页推荐的列表
        async getData(){
            let res = await this.getHomeList();
            this.tableData = res.data;
        },
        // 创建按钮的点击事件
        createData(){
            this.flag = true;
            this.dialogFormVisible = true;
        },
        // 修改本行的事件
        openLayer (a) {
            console.log(a);
            this.dialogFormVisible = true;
            this.flag = false;
        },
        // 删除本行的点击事件
        deleteRow(a){
            console.log(a.id);
        },
        // 上传的http事件
        async uploadimg (a) {
            let res = upload(a.file,5);
            let b = await this.uploadImage(res);
            this.form.imgUrl = b.data;
        },
        // 模态框中的确定事件
        submit(){
            this.$refs['my-upload'].clearFiles();
            this.dialogFormVisible = false;
            if(this.flag){
                console.log(this.form.imgUrl);
                console.log(this.form.name);
                console.log(this.form.describe);
            }else{  
                console.log('修改本行数据');
            }
        },
        // 模态框的取消事件
        cancel(){
            this.$refs['my-upload'].clearFiles();
            this.dialogFormVisible = false;
        },
    },
     created(){
        // this.getData();
    }


}
</script>

<style lang='scss' scoped>
::v-deep .el-input__inner{
    width: 170px;
    margin-left: 10px;
}
.ml-10{
    margin-left: 10px;
}
::v-deep .el-form-item{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
.ml-20{
    margin-left: 20px;
}
// 模态框最外面的div
::v-deep .el-dialog{
    width: 30%;
}
.modifydata{
    width: 100%;
    height: 100%;
    margin: 0 auto;
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