<template>
  <div class="wrap">
    <div class="header">
      <div class="header-left">
         <el-button  icon="el-icon-plus"  @click="openFormDialog" type="primary"
          >新增广告</el-button
        >
            <el-dialog :visible.sync="dialogFormVisible">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="文字" name="first">
              <div class="texttab">
                <div class="textleft">
                  <el-form :model="form">
                    <el-form-item
                      label="广告名称"
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
                    <div v-html="article" class="precontent" >
                    </div>
                  </div>
                   <el-button type="primary" class="mt-10" @click="release">发布</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="图片" name="second">
              <div class="texttab">
                <div class="textleft">
                  <el-form :model="form">
                    <el-form-item
                      label="广告名称"
                      :label-width="formLabelWidth"
                    >
                      <div class="logistics">
                        <el-input
                          v-model="title"
                          autocomplete="off"
                        ></el-input>
                        <span class="ml-10">最多可输入100个字符</span>
                      </div>
                    </el-form-item>
                    <el-form-item
                      label="图片文件"
                      :label-width="formLabelWidth"
                    >
                    <!--上传图片-->
                    <el-upload
                      action=""
                      :http-request="uploadImg"
                      :on-change="fileChange"
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
                          v-model="imgUrl"
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
                      <img width="100%" :src="preview" alt="">
                  </div>
                     <el-button type="primary" class="mt-10" @click="release">发布</el-button>
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
        <div>
        <el-input
          placeholder="请输入广告ID 或广告类型"
          prefix-icon="el-icon-search"
          v-model="id"
          class="ipt"
        >
        </el-input>
        <el-button type="primary" @click="queryAdver">查询</el-button>

        </div>
      </div>
    </div>
    <div class="main">
      <el-table
        ref="multipleTable"
        :data="rows"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="ID" width="180" prop="id">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="title" label="广告物料名称"> </el-table-column>
        <el-table-column label="广告物料预览" show-overflow-tooltip>
          <template slot-scope="scope">
            <img :src="scope.row.imgUrl" alt="" class="imgSize">
            <!-- {{scope.row.imgUrl}} -->
          </template>
        </el-table-column>
        <el-table-column
          prop="size"
          label="尺寸"
          show-overflow-tooltip
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          show-overflow-tooltip
          width="200"
        >
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip width="240">
          <template slot-scope="scope">
            <el-button   @click="handleEdit(scope.row)" type="primary"
              >修改</el-button
            >
            <el-button  @click="deleteRow(scope.row)" type="primary"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  <!--修改信息-->
    <el-dialog title="修改" :visible.sync="dialogFormVisiblefix">
  <el-form :model="form">
    <el-form-item label="广告名称" :label-width="formLabelWidth">
      <el-input v-model="title" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="图片路径" :label-width="formLabelWidth">
      <el-input v-model="imgUrl" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="尺寸" :label-width="formLabelWidth">
      <el-input v-model="form.region" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisiblefix = false">取 消</el-button>
    <el-button type="primary" @click="confirmRevise">确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
import E from "wangeditor";
import {mapActions} from "vuex";
import uploadMap from "../../../public/lib/uploud";
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      input1: "",
      radio: "1",
      activeName: "first",
      cont:0,
      count:"",
      pageCount:"",
      rows:[],
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
      preview : '',    // 预览时的照片路径
      dialogFormVisible: false,
      dialogFormVisiblefix:false,
      form: {
        name: "",
        link: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        resource: "",
        desc: "",
      },
       title:"",//广告标题
        imgUrl:"",//图片路径
        type: [],//图片类型
        id:"",
      formLabelWidth: "120px",
      article: null,
    };
  },

  created() {
    this.getAds()
  },
  methods: {
    ...mapActions(["getAdvertList","uploadImage","createAdvert","updateAdvert","findIdAdvert","deleteAdvert"]),
   async getAds(){
    let res=await this.getAdvertList();
    this.rows=res.data.rows;

    },
    //新增广告管理信息
  async release(){
    let newAdvertising =await this.createAdvert({
       title: this.title,
       imgUrl:this.imgUrl,
    });
    console.log(newAdvertising);
    this.getAds();
    },
    //修改广告管理信息
    handleEdit(a) {
      this.dialogFormVisiblefix = true;
      this.title=a.title;
      this.imgUrl=a.imgUrl;
      this.id = a.id;
    },
   async confirmRevise(){
      let modifyAdvert = await this.updateAdvert({
        id:this.id,
        title:this.title,
        imgUrl:this.imgUrl,
    });
    console.log(modifyAdvert);
    this.dialogFormVisiblefix = false;
      this.getAds();
    },
    //查询广告管理信息
   async  queryAdver(){
    let queryAdvertion=await this.findIdAdvert({
      id:this.id
    });
    this.rows = [queryAdvertion.data]
    console.log(this.rows);
    },
    //删除广告管理信息
   async deleteRow(rows) {
     console.log(rows);
   let updateImg=await this.deleteAdvert({
        id:rows.id
      })
      console.log(updateImg);
      this.getAds();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.preview = '';
    },
    //上传图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.preview = file.url
      this.dialogVisible = true;
    },
    async uploadImg(file){
      let name =file.file.name.substring(0,file.file.name.indexOf('.'));
      console.log(name);
      let formdata=uploadMap(file.file,1);
    let res=  await this.uploadImage(formdata);
    this.imgUrl=res.data;
     
    },
    //文件状态改变时，(上传文件或失败都会调用)
    fileChange(a){
      // console.log(a.url);
      this.preview = a.url;
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
  & .mt-10{
  margin-left: 10px;
  margin-top: 20px;
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
.imgSize{
  height: 50px;
  width: 100px;
}
</style>