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
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <div class="question2">描述您的问题(300字以内)</div>
          <div>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入内容"
              v-model="form.desc"
              maxlength="300"
              show-word-limit
            >
            </el-input>
          </div>
        </el-form>
        <div class="main-pack">
          <span class="annex">上传图片附件</span>
          <div class="img-pack">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </div>
        </div>
      </div>
      <div class="footer">
        <el-button round>取消</el-button>
        <el-button type="warning" @click="onSubmit" round>提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        region: "",
        type: [],
        desc: "",
      },
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    // 提交点击事件
    onSubmit() {
      console.log("submit!");
    },

    // 上传图片
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
    // align-items: start;
    align-items: baseline;
    flex-direction: column;
    margin-left: 20px;

    & .question1 {
      font-size: 18px;
      margin: 20px 0 10px 0;
    }

    & ::v-deep .el-input__inner {
      width: 400px;
      height: 50px;
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    & .question2 {
      font-size: 18px;
      margin: 20px 0 10px 0;
    }

    & ::v-deep .el-textarea__inner {
      max-height: 150px;
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    & .main-pack {
      width: 80%;
      margin-top: 30px;

      & .annex {
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
</style>