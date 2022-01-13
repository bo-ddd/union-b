<template>
  <div id="wrap">
    <el-button type="primary" @click="dialogTableVisible = true">推荐供应商</el-button>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label='供应商名称' >
      </el-table-column>

      <el-table-column prop="name" label='角色归属'>
      </el-table-column>

      <el-table-column prop="time" label="加盟时间">
      </el-table-column>

    </el-table>

    <!-- 编辑的模态框 -->
    <el-dialog :visible.sync="dialogTableVisible">
        <el-table :data="gridData">
            <el-table-column property="id" label="供应商名称"></el-table-column>
            <el-table-column property="name" label="角色归属"></el-table-column>
            <el-table-column property="name" label="加盟时间"></el-table-column>
            <el-table-column label="编辑">
                <template slot-scope="scope">
                    <el-link type="primary" @click="recommend(scope.row)">推荐</el-link>
                </template>
            </el-table-column>
        </el-table>
    </el-dialog>

  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data(){
        return{
            tableData: [
                {
                    id : 1,
                    name : '张三',
                    time : '1.1'
                },
                {
                    id : 2,
                    name : '李四',
                    time : '1.1'
                },
                {
                    id : 3,
                    name : '王五',
                    time : '1.1'
                },
            ],
            dialogTableVisible: false,    // 模态框状态  flase 不显示 true显示
            gridData : [
                {
                    id : 1,
                    name : '张三',
                    time : '1.1'
                },
                {
                    id : 2,
                    name : '李四',
                    time : '1.1'
                },
                {
                    id : 3,
                    name : '王五',
                    time : '1.1'
                },
            ],
        }
    },
    methods :{
//                       获取推荐列表  
        ...mapActions(["getHomeList"]),
        // 获取首页推荐的列表
        async getData(){
            let res = await this.getHomeList();
            this.gridData = res.data.rows;
        },
        // 推荐的按钮
        recommend(a){
            console.log(a);
        }
    },
     created(){
        // this.getData();
    }


}
</script>

<style lang='scss' scoped>
::v-deep .el-button{
    margin-bottom: 20px;
}
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
    width: 40%;
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
    padding: 20px;
    height: 90%;
    background-color: white;
}
</style>