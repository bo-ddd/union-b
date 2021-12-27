<template>
  <div id="wrap">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id"  width='200'>
        <template slot="header">
            <span>id</span>
        </template>
      </el-table-column>

      <el-table-column prop="date"  width='200' label='图片'>
        <template>
            <div class="img">

            </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="describe" label="描述">
      </el-table-column>
      <el-table-column prop="address" label="供应商">
      </el-table-column>
      <el-table-column width='200'>
        <template slot="header">
            <span>详情</span>
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
                <el-form-item label="活动区域">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
// import upload from '../../../public/lib/uploud';
export default {
    data(){
        return{
            tableData: [{
                id : 1,
                date: '2016-05-02',
                name: 'oppo',
                describe : '红色',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id : 2,
                date: '2016-05-04',
                name: 'vivo',
                describe : '白色',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                id : 3,
                date: '2016-05-01',
                name: '华为',
                describe : '黑色',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                id : 4,
                date: '2016-05-03',
                name: '小米',
                describe : '红色',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            dialogFormVisible: false,
            form : {
                name : '',
            },
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods :{
        openLayer (a) {
            this.dialogFormVisible = true;
            this.dialogImageUrl = '';
            console.log(a);
        },
        uploadimg (a) {
            // let res = upload(a.file,1);
            console.log(a);
        }
    }
}
</script>

<style lang='scss' scoped>
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