<template>
  <div class="wrap">
    <div class="title">
      <div>消息总数:3</div>
      <div>
        <el-link type="primary" :underline="false" @click="markRead">全部标为已读</el-link>
        <el-button type="text" @click="clearMessage">清空所有消息</el-button>
      </div>
    </div>
    <div class="message" v-for="item in message" :key="item">
      <div class="message_title">
        <div><el-tag type="danger">系统</el-tag>{{ item.title }}</div>
        <div class="time">
          <span>{{ item.time }}</span
          ><img
            src="@/assets/images/iconfont-time.png"
            alt=""
            class="time_img ml-5"
          />
        </div>
      </div>
      <div class="message_content">{{ item.detail }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: [
        {
          title: "这是一条测试消息的title",
          time: "2021-12-12",
          detail: "这是测试消息的内容",
        },
        {
          title: "这是一条测试消息的title",
          time: "2021-12-12",
          detail: "这是测试消息的内容",
        },
        {
          title: "这是一条测试消息的title",
          time: "2021-12-12",
          detail: "这是测试消息的内容",
        },
      ],
    };
  },
  methods: {
    clearMessage() {
      this.$confirm("此操作将永久删除所有, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.message = '';
          this.$message.success('删除成功')
          //调用接口返回删除的数据;
        })
        .catch(() => {
          this.$message.info('已取消')
        });
    },
    markRead(){
      console.log('标记已读');
    }
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #ffffff;
  height: calc(100vh - 100px);
  & > .title {
    display: flex;
    justify-content: space-between;
    padding:10px;
  }
  & > .message {
    margin-top: 10px;
    & > div {
      margin: 10px 0;
      padding: 20px;
    }
    & > .message_title {
      display: flex;
      justify-content: space-between;
      & > .time {
        color: #66b1ff;
        font-size: 14px;
        & > .time_img {
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
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
::v-deep .el-link.el-link--primary {
  margin-right: 10px;
}
</style>