<template>
  <div class="wrap">
    <div class="top">
      <div class="left">
        <el-row>
          <el-button
            class="query"
            icon="el-icon-plus"
            type="primary"
            @click="dialogFormVisible = true"
            >创建标签</el-button>
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
              </div>
              <!-- <div class="demo-input-suffix">
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
              </div> -->
              <!-- <div class="demo-input-suffix">
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
              </div> -->
            </div>

            <div class="se">
              <el-row>
                <el-button
                  class="query1"
                  icon="el-icon-plus"
                  type="primary"
                  @click="addArticle = true"
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
              @click="(dialogFormVisible = false)"
              >确 定</el-button
            >
            <!-- , third - left() -->
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
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="long">
        <span>></span>
        <b class="s">标签建：默认项目</b>
      </div>
    </div>
    <div class="third">
      <div class="third-top">
        <el-table
    :data="tableData"
    style="width: 100%"
   >
    <el-table-column
      prop="date"
      label="标签列表"
      width="250">
    </el-table-column>
  </el-table>
      </div>
      <div class="third-left">
        <!-- <div class="t-f">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :to5tal="1000">
    </el-pagination>
         
        </div> -->

        <div>
          <!-- <el-pagination class="paging" small layout="prev, pager, next" :total="20">
          </el-pagination> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>

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
  height: 50px;
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
  height: 50px;
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
  height: 100px;
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
  border: none;
  color: #fff;
  padding: 10px;
}

.right {
  width: 500px;
  height: 40px;
  // margin-left: 1150px;
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
  text-align: left;
  line-height: 70px;
  padding-left: 20px;
}

.s {
  margin-left: 5px;
}
.third {
  height: 90px;
}
</style>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      lableName:"",
      tableData:[],
      value : "",
      input3: "",
      input4: "",
      select: "",
      options:"",
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisibles: false,
      form: {},
      formLabelWidth: "200px",
    };
  },
  async created(){
    this.list();
    // this.lableAll();
  },
  methods:{
      ...mapActions(["getLableList","createLable"]),
      async list(){
        let listAll = await this.getLableList();
        console.log(listAll);
      },
      
      async addArticle(){
        let newLable = [];
        if(lableAll.content == newLable.content){
          console.log('该标签已创建');
        }else{
          console.log('该标签创建成功');
        }
        let lableAll = await this.createLable({
          lableName:this.lableName,
        });
        console.log(lableAll);
      }
  }
};
</script>