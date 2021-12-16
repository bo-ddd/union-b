<template>
  <div class="wrap">
    <div class="title">
      <div>消息总数:3</div>
      <div>
        <el-link type="primary" :underline="false">全部标为已读</el-link>
        <el-link type="primary" :underline="false">清空所有消息</el-link>
      </div>
    </div>
    <div class="message" v-for="item in 3" :key="item">
      <div class="message_title">
        <div><el-tag type="danger">系统</el-tag>这是一条测试消息</div>
        <div class="time">2021-12-12<i></i></div>
      </div>
      <div class="message_content">第一个用测试发的内容</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
  & > .title {
    display: flex;
    justify-content: space-between;
  }
  & > .message {
    margin-top: 10px;
    & > div {
      margin: 10px 0;
      padding: 10px;
    }
    & > .message_title {
      display: flex;
      justify-content: space-between;
      & > .time{
        color: #66b1ff;
        font-size: 12px;
      }
    }
    & > .message_content {
      background-color: #f7f7f7;
    }
  }
}
::v-deep .el-tag {
  height: auto;
  padding: 0;
  line-height: normal;
}
::v-deep .el-link.el-link--primary{
  margin-left: 10px;
}
</style>