<template>
  <div class="wrap">
    <el-container class="home">
      <el-header class="header">客服中心</el-header>
      <el-container class="main">
        <el-container class="main_wrap">
          <el-main class="content">Main</el-main>
          <el-footer class="footer"
            ><el-input placeholder="请输入内容" v-model="input4" class="ipt">
              <el-button slot="suffix">发送</el-button>
            </el-input>
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
      input4: "",
    };
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
      & > .main_wrap {
        & > .content {
          background-color: #ffffff;
        }
      }
      & > .aside {
        display: flex;
        flex-flow: column;
        box-shadow: -2px 0 2px rgba(0, 0, 0, 0.2);
        text-align: center;
        & > span {
          margin-top: 20px;
        }
      }
    }
  }
}
::v-deep .el-input__inner{
  height: 60px;
}
</style>