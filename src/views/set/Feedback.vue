<template>
  <div>
    <span class="fill">填写信息</span>
    <div class="warp">
      <div class="header">
        <span class="title">感谢您提供宝贵的产品建议</span>
      </div>
      <div class="main">
        <div class="question1">您在哪个商铺遇到了问题？</div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-input placeholder="请输入内容" v-model="form.title" clearable>
          </el-input>
          <div class="question2">描述您的问题(300字以内)</div>
          <div>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入内容"
              v-model="form.content"
              maxlength="300"
              show-word-limit
            >
            </el-input>
          </div>
        </el-form>
        <div class="main-pack">
          <span class="annex">上传图片附件</span>
          <i class="el-icon-warning-outline icon-img"></i>
          <span class="tips-img">可不上传或可传一张图</span>
          <div class="img-pack">
            <el-upload
              action=""
              list-type="picture-card"
              :http-request="sss"
              :limit="1"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" ref="file">
              <img width="100%" :src="form.imgUrl" value="10" alt="" />
            </el-dialog>
          </div>
        </div>
      </div>
      <div class="footer">
        <el-button round @click="Cancel">取消</el-button>
        <el-button type="primary" @click="onSubmit" round>提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import lout from "../../assets/lib/uploud";
export default {
  data() {
    return {
      form: {
        title: "",
        content: "",
        imgUrl: [],
      },
      dialogVisible: false,
    };
  },
  methods: {
    ...mapActions(["createOpinion", "getOpinionList", "uploadImage"]),

    async createop() {
      let res = await this.createOpinion(this.form);
      console.log(res);
      // let res1 = await this.getOpinionList({});
      // console.log(res1);
    },
    // 接口上传图片
    async sss(val) {
      let a = lout(val.file, 2);
      // console.log(a.get("file"));
      let res = await this.uploadImage(a);
      this.form.imgUrl.push(res.data);
      console.log(res.data);
    },

    // 取消点击事件
    Cancel() {
      this.form.title = "";
      this.form.content = "";
    },

    // 提交点击事件
    onSubmit() {
      this.createop();
    },
  },
};
</script>

<style lang="scss" scoped>
.fill {
  font-size: 20px;
  font-weight: 600;
}

.warp {
  width: 100%;
  height: 80vh;
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 10px;

  & .header {
    width: 80%;
    height: 10%;
    display: flex;
    align-items: center;
    margin-left: 20px;

    & .title {
      font-size: 19px;
      font-weight: 600;
    }
  }

  & .main {
    width: 98%;
    height: 75%;
    display: flex;
    align-items: baseline;
    flex-direction: column;
    margin-left: 20px;

    & .question1 {
      font-size: 18px;
      margin: 20px 0 10px 0;
    }

    & ::v-deep .el-input__inner {
      width: 400px;
      border-radius: 10px;
    }

    & .question2 {
      font-size: 18px;
      margin: 20px 0 10px 0;
    }

    & ::v-deep .el-textarea__inner {
      max-height: 150px;
      border-radius: 10px;
    }

    & .main-pack {
      width: 80%;
      margin-top: 30px;

      & .annex {
        margin-right: 15px;
        font-size: 18px;
      }

      & .img-pack {
        height: 148px;
        margin-top: 10px;
        display: flex;
        align-items: center;
      }
    }
  }

  & .footer {
    width: 98%;
    height: 15%;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    & .el-button {
      width: 130px;
    }
  }
}
.tips-img {
  margin-top: 28px;
  margin-left: 10px;
  font-size: 14px;
  color: rgb(140, 140, 140);
}
</style>