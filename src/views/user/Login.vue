<template>
  <div class="warp">
    <div class="main">
      <div class="main-left">
        <img src="@/assets/images/login.png" alt="" />
      </div>
      <div class="main-right">
        <div class="mainpack">
          <div class="main-top">
            <span class="login">Login</span>
            <span class="title">登录XXX管理系统</span>
          </div>
          <div class="main-con">
            <el-input
              v-model="form.username"
              class="inputa"
              placeholder="请输入用户名 / 账号"
              maxlength="15"
              clearable
            ></el-input>
            <el-input
              v-model="form.password"
              class="inputb"
              placeholder="请输入密码"
              maxlength="15"
              show-password
            ></el-input>
            <div class="input-bao">
              <div>
                <el-input
                  v-model="form.captcha"
                  class="inputc"
                  placeholder="请输入验证码"
                  maxlength="4"
                  clearable
                ></el-input>
              </div>
              <div class="captcha">
                <img
                  style="height: 43px"
                  :src="captchaSrc"
                  @click="generatorCaptcha"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div class="main-foot">
            <el-button type="primary" @click="submit" round>
              登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录
            </el-button>
          </div>
          <div class="glink">
            <el-link :underline="false" type="primary" @click="submitregist"
              >还没账号，去注册！</el-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        captcha: "",
      },
      captchaSrc: "",
    };
  },
  methods: {
    ...mapActions(["userLogin", "getCaptcha"]),

    async generatorCaptcha() {
      // 验证码接口
      this.captchaSrc = await this.getCaptcha();
    },

    // 对input框进行判断
    validate() {
      let flag = false;
      let { username, password, captcha } = this.form;
      //  对用户名框进行判断
      if (!username.length) {
        this.$message({
          type: "warning",
          message: "用户名不能为空！",
        });
      } else if (username.length < 6) {
        this.$message({
          type: "warning",
          message: "用户名长度应该在6-15位之间！",
        });
      } else {
        flag = true;
      }
      //   对密码框进行判断
      if (!password.length) {
        this.$message({
          type: "warning",
          message: "密码不能为空！",
        });
      } else if (password.length < 6) {
        this.$message({
          type: "warning",
          message: "密码的长度应该在6-15位之间！",
        });
      } else {
        flag = true;
      }
      //   对验证码框进行判断
      if (!captcha.length) {
        this.$message({
          type: "warning",
          message: "验证码不能为空！",
        });
      } else if (captcha.length != 4) {
        this.$message({
          type: "warning",
          message: "验证码格式不正确！",
        });
      } else {
        flag = true;
      }
      return flag;
    },

    // 登录点击事件
    async submit() {
      let valid = this.validate();
      if (!valid) {
        this.generatorCaptcha();
        return;
      }
      let { username, password, captcha } = this.form;
      //   登录接口
      let res = await this.userLogin({
        username,
        password,
        captcha,
      });
      console.log(res);
      if (res.status == 1) {
        sessionStorage.setItem("token", res.data);
        this.$router.push({
          path: "/",
        });
      } else {
        this.generatorCaptcha();
      }
      if (res.status == 0) {
        this.$message({
          type: "warning",
          message: res.msg,
        });
      }
    },
    // 跳转到注册页面
    submitregist() {
      this.$router.push({
        path: "/registration",
      });
    },
  },
  created() {
    // 进页面直接调用验证码
    this.generatorCaptcha();
  },
};
</script>

<style lang="scss" scoped>
.warp {
  height: 100vh;
  background-color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1300px;
  min-height: 780px;

  & .main {
    width: 55%;
    height: 65%;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    & .main-left {
      width: 55%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & .main-right {
      width: 45%;
      height: 100%;
      display: flex;
      align-items: center;

      & .mainpack {
        width: 100%;
        height: 70%;
        & .main-top {
          width: 100%;
          height: 30%;
          display: flex;
          // justify-content: start;
          flex-direction: column;

          & .login {
            font-size: 35px;
            font-weight: 550;
            color: #087aed;
            margin: 10px 0 0 0;
          }

          & .title {
            font-size: 20px;
            color: #087aed;
            margin: 10px 0 10px 0;
          }
        }

        & .main-con {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: center;
          flex-direction: column;

          & .el-input {
            width: 80%;
          }

          & ::v-deep .el-input__inner {
            width: 100%;
            height: 47px;
            border-radius: 25px !important;
            margin: 10px 0 10px 0;
            background-color: #f7f5fb;
          }

          & .input-bao {
            width: 75%;
            display: grid;
            grid-template-columns: 60% 40%;

            & .inputc {
              width: 90%;
            }

            & .captcha {
              width: 100%;
              height: 47px;
              background-color: #fff;
              margin: 10px 0 15px 0;
            }
          }
        }

        & .main-foot {
          width: 100%;
          height: 20%;
          display: flex;
          align-items: center;

          & .el-button {
            width: 80%;
            height: 47px;
            border-radius: 25px;
            background-color: rgb(8, 122, 237);
            color: #fff;
            font-size: 19px;
          }
        }
      }
    }
  }
}
::v-deep input::-webkit-input-placeholder {
  color: #717171;
}

.glink {
  float: right;
  position: relative;
  right: 78px;
}
</style>
