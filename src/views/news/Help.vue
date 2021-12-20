<template>
  <div class="wrap">
    <el-container class="home">
      <el-header class="header">客服中心</el-header>
      <el-container class="main">
        <el-container class="main_wrap">
          <el-main class="content">
            <div class="msg">
              <!-- <span class="left"></span><span class="right"></span> -->
            </div>
          </el-main>
          <el-footer class="footer"
            ><el-input placeholder="请输入内容" v-model="message" class="ipt">
            </el-input>
            <el-button class="btn" @click="submit">发送</el-button>
          </el-footer>
        </el-container>
        <el-aside width="200px" class="aside"
          ><span>自助服务</span><span>问卷调查</span></el-aside
        >
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    submit() {
      this.render();
    },
    render() {
      let oDiv = document.querySelector(".msg");
      let right = document.createElement("div");
      right.innerHTML = this.message;
      right.className = "right_msg";
      right.style.cssText = `
        background-color:#e7536b,
        text-align:right,`;
      this.message = "";
      oDiv.appendChild(right);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  height: calc(100vh - 100px);
  & > .home {
    height: 100%;
    & > .header {
      background-color: #e7536b;
      color: white;
      display: flex;
      align-items: center;
    }
    & > .main {
      background-color: #ffffffec;
      & > .main_wrap {
        & > .content {
          & > .msg {
            font-size: 20px;
            & > .right_msg {
              text-align: right;
              margin-top: 10px;
              background-color: #e7536b;
              padding: 10px;
            }
            & > .left_msg {
              text-align: left;
              margin-top: 10px;
              background-color: #e7536b;
              padding: 10px;
            }
          }
        }
        & > .footer {
          padding: 0;
          display: flex;
          justify-content: space-between;
        }
      }
      & > .aside {
        display: flex;
        flex-flow: column;
        box-shadow: -2px 0 2px rgba(0, 0, 0, 0.2);
        text-align: center;
        & > span {
          margin-top: 20px;
          cursor: pointer;
        }
      }
    }
  }
}
::v-deep .el-input__inner {
  height: 60px;
  padding-left: 5px;
}
</style>