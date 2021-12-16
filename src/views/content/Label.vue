<template>
  <div class="wrap">
    <div class="top">
      <div class="left">
        <el-row>
            <el-button class="query" icon="el-icon-plus" type="text" @click="dialogFormVisible = true">创建标签</el-button>
        </el-row>
         <el-dialog title="创建标签" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <div class="wen">
        <p>
        温馨提示：标签支持您按各种标准(如用途，所有者或项目) 对资源进行分类;
        </p>
        <p class="pp">每个标签包含键和值两部分;</p>
        <p class="p2">如果创建的是重复的标签，会自动去重处理</p>
    </div>

   
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false,aaa()">确 定</el-button>
  </div>
</el-dialog>

      </div>
      <div class="right">
        <div>
          <el-input
            placeholder="请输入标签值进行搜索"
            v-model="input3"
            class="input-with-select"
          >
            <el-select v-model="select" slot="prepend" placeholder="标签值">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="center"></div>
    </div>
    <div class="bottom">
      <div class="long">
        <span class="jian">></span>
        <b class="s">标签建：默认项目</b>
      </div>
    </div>
    <div class="third">

    </div>
  </div>
</template>
<style scoped lang='scss'>
.pp{
    margin-left: 80px;
}
.p2{
    margin-left: 80px;
    color: #ff4070;
}
.wen{
    width: 600px;
    height: 100px;
    margin-left: 55px;
    text-align: left;
    font-size: 16px;
    padding-left: 150px;
    background-color: aliceblue;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.wrap {
  /* height: 150px; */
  padding: 20px;
}
.top {
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 100px;
  height: 50px;
}
.query{
    background-color: #ff4070;
     font-size: 18px;
     border: none;
  color: #fff;
}

.right {
  width: 500px;
  height: 40px;
  margin-left: 1200px;
}
.center {
  width: 30px;
  height: 35px;
  border: 1px solid rgb(185, 183, 183);
}
.bottom {
  height: 70px;
  margin-top: 20px;
}
.long {
  height: 70px;
  border: 1px solid rgb(185, 183, 183);
  text-align: left;
  line-height: 70px;
  padding-left: 20px;
}
.jian {
  color: #ff4070;
}
.s {
  margin-left: 5px;
}

</style>
<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: "",
      dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          avatorName: '',
          age : '',
          sex: '0',
          avatorImg: '',
          classId: '',
          description: '',
          phone: '',
          
        },
        formLabelWidth: '200px'
    };
  },
};
</script>