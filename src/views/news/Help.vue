<template>
  <div class="wrap">
    <el-container class="home">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="400px">
          <el-header
            ><el-input v-model="input" placeholder="请输入内容"
              ><i
                slot="prefix"
                class="el-input__icon el-icon-search"
              ></i></el-input
          ></el-header>
          <el-aside
            ><el-tabs v-model="activeName" type="card" @tab-click="handleClick" :stretch="true">
              <el-tab-pane label="当前对话列表" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="48小时粉丝对话列表" name="second">配置管理</el-tab-pane>
            </el-tabs></el-aside
          >
        </el-aside>
        <el-container>
          <el-main>
            <el-header>Header</el-header>
            <el-main>main </el-main>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
::v-deep .el-header{
  padding: 0;
}
::v-deep .el-aside{
  overflow: auto;
}
::v-deep .el-tabs{
  width: 400px;
}
.wrap {
  & > .home {
    padding: 20px;
    height: calc(100vh - 100px);
    width: calc(100vw - 260px);
  }
}
</style>