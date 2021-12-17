<template>
  <div>
    <div class="wrap">
      <div class="left"></div>
      <div class="right">
        <span class="add">文章内容添加</span>
      </div>
      <div class="center">
        <div class="center-content">
          <span class="content">文章标识</span>
          <el-input
            class="input"
            v-model="input"
            placeholder="请输入文章标识"
          ></el-input>
          <i class="el-icon-warning-outline"></i>
          <span class="tips">请输入8个字以内的英文字符</span>
        </div>
      </div>
      <div class="center">
        <div class="center-content">
          <span class="content">文章标题</span>
          <el-input
            class="input"
            v-model="input"
            placeholder="请输入文章标题"
          ></el-input>
          <i class="el-icon-warning-outline"></i>
          <span class="tips">请输入15个字以内的中文字符</span>
        </div>
      </div>
      <div class="center">
        <div class="center-content">
          <span class="content">文章类型</span>
          <el-radio class="option" v-model="radio" label="1">内容</el-radio>
          <el-radio class="option" v-model="radio" label="2">科普</el-radio>
          <!-- <el-input class="input" v-model="input" placeholder="请输入内容"></el-input> -->
          <i class="el-icon-warning-outline icon"></i>
          <span class="tips">请选择文章所属知识范围</span>
        </div>
      </div>
      <div class="center">
        <div class="center-content">
          <span class="content-img">文章照片</span>
          <div class="img"></div>
          <i class="el-icon-warning-outline icon-img"></i>
          <span class="tips-img"
            >请上传一张图片，格式jpg，尺寸640*384，大小在30k之内</span
          >
        </div>
      </div>
      <div class="center">
        <div class="center-content">
          <span class="content">类别名称</span>
          <el-select class="input" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <i class="el-icon-warning-outline icon-i"></i>
          <span class="tips">请选择一个广告所属</span>
        </div>
      </div>
      <div class="center">
        <div class="center-content">
          <span class="content">付费模式</span>
          <el-radio class="option" v-model="redio" label="1">付费</el-radio>
          <el-radio class="option" v-model="redio" label="2">免费</el-radio>
          <i class="el-icon-warning-outline pay"></i>
          <span class="tips">请选择文章是否需要支付费用</span>
        </div>
      </div>
      <div class="center">
        <div class="center-content">
          <span class="content">版权设置</span>
          <el-select class="input" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <i class="el-icon-warning-outline copyright"></i>
          <span class="tips">请选择文章版权</span>
        </div>
      </div>
      <div class="center">
        <div class="center-content">
          <span class="content">文章作者</span>
          <el-input
            class="input"
            v-model="input"
            placeholder="请输入文章作者"
          ></el-input>
          <i class="el-icon-warning-outline character"></i>
          <span class="tips">请输入15个字以内的中文字符</span>
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
            v-model="textarea"
          >
          </el-input>

          <i class="el-icon-warning-outline charactar"></i>
          <span class="tipes">请输入文章内容</span>
        </div>
      </div>
      <div class="center">
        <div class="center-content">
          <span class="content">排序数字</span>
          <el-input
            class="input"
            v-model="input"
            placeholder="请输入排序数字"
          ></el-input>
          <i class="el-icon-warning-outline"></i>
          <span class="tips">请输入排序数字</span>
        </div>
      </div>

      <div class="bottom">
        <div class="bottom-content">

          <el-button>返回</el-button>
          <el-button class="addArticle">添加</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      redio: "1",
    };
  },
};
</script>

<style>
.wrap {
  padding: 20px;
  /* background-color: hotpink; */
}
.left {
  width: 20px;
  height: 30px;
  background-color: #ff4070;
  float: left;
}
.add {
  color: rgb(140, 140, 140);
}
.right {
  width: 120px;
  height: 30px;
  margin-left: 20px;
  line-height: 30px;
  font-size: 14px;
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
  margin-top: 28px;
  margin-left: 15px;
  font-size: 14px;
  color: rgb(140, 140, 140);
}
.center-content {
  margin-top: 10px;
  display: flex;
}
.el-icon-warning-outline {
  margin-left: 10px;
  margin-top: 10px;
  color: #ff4070;
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
  width: 160px;
  height: 95px;
  background-color: #ff4070;
  margin-left: 10px;
}
.icon-img {
  margin-left: 151px;
  margin-top: 30px;
}
.icon-i {
  margin-left: 12px;
}
.copyright {
  margin-left: 13px;
}
.articleContent{
    width: 300px;
    height: 95px;
    margin-left: 10px;
}
.bottom{
  height: 40px;
}
.bottom-content{
  width: 300px;
  height: 70px;
  margin-left: 220px;
  margin-top: 20px;
}
.addArticle{
  background-color: #ff4070;
  color: #fff;
}
</style>