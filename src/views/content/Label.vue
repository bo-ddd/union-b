<template>
  <div class="wrap">
    <div class="top">
      <div class="left">
        <el-row>
          <el-button
            class="query"
            icon="el-icon-plus"
            type="text"
            @click="dialogFormVisible = true"
            >创建标签</el-button
          >
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
                <el-input
                  class="input1"
                  placeholder="请选择已有或手动输入"
                  v-model="input3"
                >
                  <i slot="suffix" class="el-input__icon el-icon-date"></i>
                </el-input>
                值：
                <el-input
                  class="input1"
                  placeholder="请选择已有或手动输入"
                  v-model="input4"
                >
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <button class="bu">X</button>
              </div>
              <div class="demo-input-suffix">
                标签键：
                <el-input
                  class="input1"
                  placeholder="请选择已有或手动输入"
                  v-model="input3"
                >
                  <i slot="suffix" class="el-input__icon el-icon-date"></i>
                </el-input>
                值：
                <el-input
                  class="input1"
                  placeholder="请选择已有或手动输入"
                  v-model="input4"
                >
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <button class="bu">X</button>
              </div>
              <div class="demo-input-suffix">
                标签键：
                <el-input
                  class="input1"
                  placeholder="请选择已有或手动输入"
                  v-model="input3"
                >
                  <i slot="suffix" class="el-input__icon el-icon-date"></i>
                </el-input>
                值：
                <el-input
                  class="input1"
                  placeholder="请选择已有或手动输入"
                  v-model="input4"
                >
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <button class="bu">X</button>
              </div>
            </div>

            <div class="se">
              <el-row>
                <el-button
                  class="query1"
                  icon="el-icon-plus"
                  type="text"
                  @click="dialogFormVisible = true"
                  >添加标签</el-button
                >
              </el-row>

              <el-link> <i class="el-icon-link"></i> 帮助文档</el-link>
            </div>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button
              class="que"
              type="primary"
              @click="(dialogFormVisible = false), third-left()"
              >确 定</el-button
            >
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
      <div class="third-left">
        <div class="t-f">
          每页展示 &nbsp;
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
          <i class="el-icon-arrow-left"></i>
        <!-- <div class="rrr"></div> -->
        <el-input class="rrr" v-model="input"></el-input>
          <i class="el-icon-arrow-right"></i>
        <div>
        跳转至
        <el-input class="i" v-model="input"></el-input>
        <button class="go">GO</button>

        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.go{
    width: 40px;
    height: 40px;
    border: none;
    color: #ccc;
}
.i{
    width: 50px;
}
.third-left {
  width: 600px;
  height: 50px;
  float: right;
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
.el-link_inner{
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
  height: 50px;
  float: left;
  text-align: left;
}
.que {
  background-color: #ff4070;
  border: none;
}
.query1 {
  background-color: #ff4070;
  color: #fff;
}
.se {
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin-left: 150px;
  margin-top: 30px;
}
.bu {
  margin-left: 10px;
}
.demo-input-suffix {
  margin-top: 20px;
}
.input1 {
  width: 200px;
}
.f {
  margin: auto;
}
.pp {
  margin-left: 80px;
}
.p2 {
  margin-left: 80px;
  color: #ff4070;
}
.wen {
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
.query {
  background-color: #ff4070;
  font-size: 18px;
  border: none;
  color: #fff;
}

.right {
  width: 500px;
  height: 40px;
  margin-left: 1150px;
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
.third {
  height: 90px;
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
      form: {},
      formLabelWidth: "200px",
    };
  },
};
</script>