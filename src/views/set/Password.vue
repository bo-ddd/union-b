<template>
  <div class="wrap">
     <div class="box">
       <div class="top_title">修改登录密码</div>
       <div class="main_inputbox">
          <el-input class="main_input" v-model="oldpassword" placeholder="请输入旧密码"></el-input>
       </div>
       <div class="main_inputbox">
          <el-input class="main_input" v-model="newpassword" placeholder="请输入新密码"></el-input>
       </div>
       <div class="main_inputbox">
          <el-input class="main_input" v-model="confirmpass" placeholder="请确认新密码"></el-input>
       </div>
       <div class="main_inputbox">
         <el-button class="confirmbtn" type="primary">确认修改</el-button>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldpassword: '',
      confirmpass: '',
      newpassword: ''
    }
  }
}

</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & .box{
    width: 70%;
    height: 400px;
    box-shadow:5px 4px 10px #cecece;
    & .top_title{
      font-size: 25px;
      font-weight: 700;
      height: 70px;
      line-height: 70px;
      text-align: center;
      margin-top: 2%;
    }
    & .main_inputbox{
      width: 40%;
      margin: 10px auto;
      display: flex;
      justify-content: center;
      & .main_input{
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
      }
      & .confirmbtn{
        width: 80%;
      }
    }
  }
}
</style>