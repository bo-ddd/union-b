<template>
  <div class="wrap">
    <div class="header">
      <div class="header-left">
         <el-button  icon="el-icon-plus"  @click="openFormDialog" type="primary"
          >新增商品</el-button
        >
            <el-dialog :visible.sync="dialogFormVisible">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="文字" name="first">
              <div class="texttab">
                <div class="textleft">
                  <el-form :model="form">
                    <el-form-item
                      label="物流名称"
                      :label-width="formLabelWidth"
                    >
                      <div class="logistics">
                        <el-input
                          v-model="form.name"
                          autocomplete="off"
                          class="logisticsIpt"
                        ></el-input>
                        <span class="ml-10">最多可输入100个字符</span>
                      </div>
                    </el-form-item>
                    <el-form-item
                      label="文字内容"
                      :label-width="formLabelWidth"
                    >
                      <template>
                        <div ref="editor"></div>
                      </template>
                    </el-form-item>
                    <el-form-item
                      label="点击链接"
                      :label-width="formLabelWidth"
                    >
                      <div class="logistics">
                        <el-input
                          v-model="form.link"
                          autocomplete="off"
                        ></el-input>
                        <span class="ml-10">最多可输入1000个字符</span>
                      </div>
                    </el-form-item>

                    <el-form-item
                      label="目标窗口"
                      :label-width="formLabelWidth"
                    >
                      <el-radio v-model="radio" label="1">新窗口</el-radio>
                      <el-radio v-model="radio" label="2">原窗口</el-radio>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="textright">
                  <div class="preview">
                    <div class="previewtop">预览</div>
                    <div v-html="article" class="precontent"></div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="图片" name="second">
              <div class="texttab">
                <div class="textleft">
                  <el-form :model="form">
                    <el-form-item
                      label="物流名称"
                      :label-width="formLabelWidth"
                    >
                      <div class="logistics">
                        <el-input
                          v-model="form.name"
                          autocomplete="off"
                        ></el-input>
                        <span class="ml-10">最多可输入100个字符</span>
                      </div>
                    </el-form-item>
                    <el-form-item
                      label="图片文件"
                      :label-width="formLabelWidth"
                    >
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    
                    </el-form-item>
                    <el-form-item
                      label="图片描述"
                      :label-width="formLabelWidth"
                    >
                      <div class="imagedeBox">
                        <div class="imagede">
                          <span>宽度</span>
                          <el-input v-model="input1"></el-input>
                          <span class="ml-10">px</span>
                        </div>
                        <div class="imagede">
                          <span>高度</span>
                          <el-input v-model="input1"></el-input>
                          <span class="ml-10">px</span>
                        </div>
                      </div>
                    </el-form-item>
                    <el-form-item
                      label="图片描述"
                      :label-width="formLabelWidth"
                    >
                      <div class="logistics">
                        <el-input
                          v-model="form.region"
                          autocomplete="off"
                        ></el-input>
                        <span class="ml-10">最多可输入100个字符</span>
                      </div>
                    </el-form-item>
                    <el-form-item
                      label="点击链接"
                      :label-width="formLabelWidth"
                    >
                      <div class="logistics">
                        <el-input
                          v-model="form.link"
                          autocomplete="off"
                        ></el-input>
                        <span class="ml-10">最多可输入1000个字符</span>
                      </div>
                    </el-form-item>
                    <el-form-item
                      label="目标窗口"
                      :label-width="formLabelWidth"
                    >
                      <el-radio v-model="radio" label="1">新窗口</el-radio>
                      <el-radio v-model="radio" label="2">原窗口</el-radio>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="textright">
                  <div class="preview">
                    <div class="previewtop">预览</div>
                    <div v-html="article"></div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-dialog>
      </div>
      <div class="header-right">
        <div class="selectBox">
        <div class="select">
          <span class="mr-10">类型</span>
          <div class="select-suf">
          <el-select v-model="value" placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
        </div>
         <div class="select">
          <span class="mr-10">尺寸</span>
          <div class="select-suf">
          <el-select v-model="value" placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
         
        </div>
         <div class="select">
          <span class="mr-10">广告</span>
          <div class="select-suf">
          <el-select v-model="value" placeholder="请选择广告">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
        </div>
        </div>
            <el-input
          placeholder="请输入物料ID 物料名称或物料内容"
          prefix-icon="el-icon-search"
          v-model="input2"
          class="ipt"
        >
        </el-input>
      </div>
    </div>
    <div class="main">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="ID" width="180">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="广告物料名称"> </el-table-column>
        <el-table-column
          prop="address"
          label="广告物料预览"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="尺寸"
          show-overflow-tooltip
          width="220"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="类型"
          show-overflow-tooltip
          width="240"
        >
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip width="240">
          <template slot-scope="scope">
            <el-button  @click="handleEdit(scope.$index, scope.row)" type="primary"
              >修改</el-button
            >
            <el-button  @click="deleteRow(scope.$index, tableData)" type="primary"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
import {mapActions} from "vuex";
export default {
  data() {
    return {
       dialogImageUrl: '',
        dialogVisible: false,
      input2: "",
      input1: "",
      radio: "1",
      activeName: "first",
      cont:0,
      count:"",
      pageCount:"",
      rows:[],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
       
      ],
      multipleSelection: [],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      dialogFormVisible: false,
      form: {
        name: "",
        link: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      article: null,
    };
  },

  created() {
    this.getAds()
  },
  methods: {
    ...mapActions(["getAdvertList"]),
   async getAds(){
    let res=await this.getAdvertList();
    this.rows=res.data.rows;
    // console.log(this.rows);
    },
    
    handleEdit(index, row) {
      console.log(index, row);
    },
   deleteRow(index, rows) {
        rows.splice(index, 1);
      },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    //新增商品，富文本
    openFormDialog() {
      this.dialogFormVisible = true;
      this.initEditor();
    },
    initEditor() {
      this.cont++;
      if(this.cont!=1) return;
      this.$nextTick(() => {
        const editor = new E(this.$refs.editor);
        editor.config.onchange = (html) => {
          // 第二步，监控变化，同步更新到 textarea
          // $text1.val(html);
          this.article = html;
        };
        editor.create();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap{
  height: calc(100vh - 100px);
  overflow-y:auto;
  background: #fff;
}
.header {
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 10px;
  align-items: center;
  & .header-right{
    display: flex;
  justify-content: space-between;
  align-items: center;
  & .selectBox{
    display: flex;
  & .select{
          margin-right: 15px;
    display: flex;
    align-items: center;
   ::v-deep .el-input__inner{
      width: 120px;
    }
    & .mr-10{
      margin-right: 10px;
    }
    & .select-suf{
          display: inline-block;
    position: relative;
    }
    }
  }
    & .ipt{
      width: 350px;
      margin-right: 35px;
    }
  }
  }
  
::v-deep .el-button {
  border-radius: 0px;
}
::v-deep .el-input__inner {
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
}
::v-deep .el-input__icon {
  height: 30px;
}
.main {
  margin-top: 15px;
}

::v-deep .el-input__icon {
  height: 40px;
}
::v-deep .el-dialog {
  width: 60%;
}
::v-deep .w-e-text-container {
  height: 100px !important;
}
.texttab {
  display: flex;
  justify-content: space-around;
  & .textleft {
  width: 60%;
}
::v-deep .el-input{
  width: 60%;
}
& .ml-10{
  margin-left: 10px;
}
}
.preview {
  height: 320px;
  width: 280px;
  border: 1px solid #ccc;
  & .previewtop {
    background-color: #f6f7fb;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
  }
}
.imagedeBox{
  display:flex;
    & .imagede {
  display: flex;
  & > .el-input {
    width: 30% !important;
    margin-left: 5px;
  }
  &> .ml-10{
    margin-left: 10px;
  }
}
}

</style>