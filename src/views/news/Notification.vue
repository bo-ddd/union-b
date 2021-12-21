<template>
  <div class="wrap">
    <div class="title">
      <div>消息总数:{{ message.length }}</div>
      <div>
        <el-link type="primary" :underline="false" @click="markRead"
          >全部标为已读</el-link
        >
        <el-button type="text" @click="clearMessage" 
          >清空所有消息</el-button
        >
      </div>
    </div>
    <div class="message" v-for="(item, index) in message" :key="index">
      <div class="message_title">
        <div>
          <el-tag type="danger">系统</el-tag
          ><span class="title_text">{{ item.title }}</span>
        </div>
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
      <div class="msg_footer">
        <el-button :type="buttonType" round>{{
          articleStatus
        }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonType: "primary",
      articleStatus: "未读",
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
          this.message = "";
          this.$message.success("删除成功");
          //调用接口返回删除的数据;
        })
        .catch(() => {
          this.$message.info("已取消");
        });
    },
    markRead() {
      this.buttonType = "info";
      this.articleStatus = "已读";
      console.log("标记已读");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #ffffff;
  height: calc(100vh - 110px);
  & > .title {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #f0f2f7;
  }
  & > .message {
    background-color: #ffffff;
    border-bottom: 1px solid #f0f2f7;
    margin-top: 10px;
    & > div {
      padding: 20px;
    }
    & > .message_title {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      & > div{
        display: flex;
        align-items: center;
        & > .title_text {
        font-weight: bolder;
        font-size: 20px;
        margin-left: 5px;
      }
      }
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