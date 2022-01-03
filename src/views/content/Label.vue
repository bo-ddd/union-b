<template>
  <div class="wrap">
    <div class="top">
      <div class="left">
        <el-row>
          <el-button class="query"  icon="el-icon-plus" type="primary" @click="dialogFormVisible = true">创建标签</el-button>
        </el-row>
        <el-dialog title="创建标签" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <div class="wen">
              <p>
                温馨提示：标签支持您按各种标准(如用途，所有者或项目)
                对资源进行分类;
              </p>
              <p class="pp">每个标签包含键和值两部分;</p>
              <p class="p2">如果创建的是重复的标签，会自动去重处理</p>
            </div>
            <div class="f">
              <div class="demo-input-suffix">
                标签键：
                <el-input class="input1" placeholder="请选择已有或手动输入" v-model="lableName">
                  <i slot="suffix" class="el-input__icon el-icon-date"></i>
                </el-input>
              </div>
            </div>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button class="que" type="primary" @click="(dialogFormVisible = false),addLabel()" >确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="right">
        <div>
          <el-input placeholder="请输入标签值进行搜索" v-model="input2" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="find">搜索</el-button>
          </el-input>
        </div>
      </div>
    </div>
    <div class="third">
    <div class="third-top">
    <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id"></el-table-column>
    <el-table-column prop="lableName" label="标签列表"></el-table-column>
     <el-table-column fixed="right" label="操作" width="230">
        <template slot-scope="scope">
          <el-button class="button" @click="remove(scope.row)" type="text">移除</el-button>
          <el-button class="button" @click="update(scope.row)" type="text">更改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog  :visible.sync="dialogFormVisibles">
      <el-form :model="form">
        <el-form-item label="标签名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibles = false">取 消</el-button>
        <el-button type="primary" @click="modify">确 定</el-button>
      </div>
    </el-dialog>
    </div>

    </div>

    <div class="block">
      <el-pagination layout="prev, pager, next" :total="num" @current-change='aaa'>
      </el-pagination>
    </div>
  </div>
</template>
<style scoped lang='scss'>
::v-deep .el-pagination{
  margin-left: 480px;
}
.paging{
  margin-top: 10px;
}
.go {
  width: 40px;
  height: 40px;
  border: none;
  color: #ccc;
}
.i {
  width: 50px;
}
.third-left {
  width: 600px;
  float: left;
  margin-top: 20px;
}
.el-icon-arrow-left {
  margin-top: 10px;
  float: left;
  margin-left: 30px;
}
.el-icon-arrow-right {
  margin-top: 10px;
  float: left;
}
.rrr {
  width: 40px;
  height: 40px;
  float: left;
  border: none;
}
.el-link_inner {
  border: none;
}
.kkk {
  width: 30px;
  height: 30px;
  float: left;
  margin-left: 30px;
}
.t-f {
  width: 300px;
  float: left;
  text-align: left;
}
.que {
  border: none;
}
.query1 {
  padding: 10px;
  color: #fff;
}
.se {
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin-left: 200px;
  margin-top: 40px;
}

.demo-input-suffix {
  margin-top: 20px;
  margin-left: 112px;
}
.input1 {
  width: 400px;
}
.f {
  margin: auto;
}
.pp {
  margin-left: 80px;
}
.p2 {
  margin-left: 80px;
}
.wen {
  position: relative;
  right: 40px;
  text-align: left;
  font-size: 16px;
  padding-left: 150px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.wrap {
  padding: 20px;
}
.top {
  display: flex;
  justify-content: space-between;
}
.left {
  width: 100px;
}
.query {
  border: none;
  color: #fff;
  padding: 10px;
}
.right {
  width: 500px;
}
.center {
  width: 30px;
  border: 1px solid rgb(185, 183, 183);
}
.bottom {
  margin-top: 20px;
}
.long {
  text-align: left;
  line-height: 70px;
  padding-left: 20px;
}
.s {
  margin-left: 5px;
}

</style>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      id: "",
      lableName:'',
      tableData:[],
      input3: "",
      input2: "",
      select: "",
      dialogFormVisible: false,
      dialogFormVisibles:false,
      form: {
        title : '',
      },
      formLabelWidth: "200px",
      num : 0,
    };
  },
  
  methods:{
      ...mapActions(["getLableList","createLable","deleteLable","updateLable"]),
      async list(){
        let listAll = await this.getLableList({
          pagination : true,
          pageNum : 5
        });
        this.num = listAll.data.rows.length;
        console.log(listAll.data.rows);
        this.tableData = listAll.data.rows;
      },
      async addLabel(){
        await this.createLable({lableName:this.lableName});
        this.list();
      },
      async remove(a){
        await this.deleteLable({ id: a.id });
        this.list();
      },
       async update(a) {
      this.id = a.id
      this.dialogFormVisibles = true;
      },
      async aaa(a){
        let res = await this.getLableList({
          pagination : true,
          pageNum : 10,
          pageSize : a,
        })
        this.tableData = res.data.rows;
      },
      async modify(){
      this.dialogFormVisible = false;
      let res = await this.updateLable({
        id : this.id,
        lableName : this.form.title,
      });
      console.log(res);
      this.list();
      },
      async find(){
        console.log("查找")
      }
  },
  created(){
    this.list();
  },
};
</script>