<template>
  <div class="body">
    <div class="wrap">
      <div class="center">
        <div class="center-content">
          <span class="content">文章标题</span>
          <el-input
            class="input"
            v-model="articleTitle"
            placeholder="请输入文章标题"
          ></el-input>
          <i type="primary" class="el-icon-warning-outline"></i>
          <span class="tips">请输入15个字以内的中文字符</span>
        </div>
      </div>
      <div class="center">
        <div class="center-content">
          <span class="content-img">文章照片</span>
          <div class="chuan">
          <!-- <input class="content-img" type="file" name="file" ref="file" />
          <button class="button-img" @click="upload2">上传</button> -->
          <el-upload class="photoWall"
  action=""
  :http-request="imgAdd"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
          </div>
          <i class="el-icon-warning-outline icon-img"></i>
          <span class="tips-img"
            >请上传一张图片，格式jpg，尺寸640*384，大小在30k之内</span
          >
        </div>
      </div>
      <div class="center">
        <div class="center-content">
          <span class="content-imges">文章内容</span>
          <el-input
            class="articleContent"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="articleContent"
          >
          </el-input>
          <i type="primary" class="el-icon-warning-outline charactar"></i>
          <span class="tipes">请输入文章内容</span>
        </div>
      </div>

      <div class="bottom">
        <div class="bottom-content">
          <el-button>返回</el-button>
          <el-button type="primary" class="addArticle">添加</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import addImg from '../../../public/lib/uploud'
export default {
  data() {
    return {
      authorId: "",
      articleTitle: "",
      articleImg: "",
      articleContent: "",
      dialogImageUrl: "",
      dialogVisible: false,
      options: "",
      item: {},
    };
  },
  async created() {
    let id = await this.getUserInfo();
    this.authorId = id.data.id;
  },
  methods: {
    ...mapActions(["createArticle", "getUserInfo","uploadImage"]), 
    imgAdd(){},
    // async upload2(){
    //         let formData = new FormData();
    //         formData.append('file',this.$refs.file.files[0]);
    //         formData.append('type',2); 
    //         let res  =  await this.uploadImage(formData);
    //         console.log(res);                                
    //     },
    async addArticl(){
      let add = await this.createArticle({
        articleTitle: this.articleTitle,
        articleImg: this.articleImg,
        articleContent: this.articleContent,
        authorId: this.authorId,
      });
      console.log(add);
      // console.log(this.articleTitle);
      // console.log(this.articleImg);
      // console.log(this.articleContent);
      // console.log(this.authorId);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped lang='scss'>
.photoWall{
  margin: 20px 79px;
}

.button-img{
 width: 40px;
 height: 20px;
 margin-top: 31px;
}
.body {
  height: calc(100vh - 100px);
  overflow-y: auto;
}
.wrap {
  padding: 20px;
}

.add {
  color: rgb(140, 140, 140);
}

.center {
  display: flex;
  margin-top: 20px;
}

.input {
  width: 300px;
  margin-left: 10px;
}
.content {
  margin-top: 10px;
  margin-left: 80px;
  font-size: 14px;
  color: rgb(140, 140, 140);
}
.content-img {
  margin-top: 30px;
  margin-left: 80px;
  margin-right: -69px;
  font-size: 14px;
  color: rgb(140, 140, 140);
}
.content-imges {
  margin-top: 20px;
  margin-left: 80px;
  font-size: 14px;
  color: rgb(140, 140, 140);
}
.tips {
  margin-top: 10px;
  margin-left: 15px;
  font-size: 14px;
  color: rgb(140, 140, 140);
}
.tipes {
  margin-top: 19px;
  margin-left: 15px;
  font-size: 14px;
  color: rgb(140, 140, 140);
}
.tips-img {
  margin-top: 30px;
  margin-left: 15px;
  font-size: 14px;
  color: rgb(140, 140, 140);
}
.center-content {
  margin-top: 10px;
  display: flex;
}
.center-contents {
  margin-top: 36px;
  display: flex;
}
.el-icon-warning-outline {
  margin-left: 10px;
  margin-top: 10px;
}
.character {
  margin-left: 14px;
}
.charactar {
  margin-top: 20px;
  margin-left: 15px;
}
.option {
  margin-left: 30px;
  margin-top: 12px;
  /* color: #ff4070; */
}
.icon {
  margin-left: 96px;
}
.pay {
  margin-left: 98px;
}
.img {
  /* width: 160px;
  height: 95px; */
  /* background-color: #ff4070; */
  margin-left: 10px;
}
.icon-img {
  margin-left: 60px;
  margin-top: 33px;
}
.icon-i {
  margin-left: 12px;
}
.copyright {
  margin-left: 13px;
}
.articleContent {
  width: 300px;
  height: 95px;
  margin-left: 10px;
}
.bottom {
  height: 40px;
}
.bottom-content {
  width: 300px;
  height: 70px;
  margin-left: 220px;
  margin-top: 20px;
}
.addArticle {
  color: #fff;
}
</style>