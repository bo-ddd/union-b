<template>
  <div class="wrap">
     <div class="box">
       <div class="formbox">
       <div class="top_title">修改登录密码</div>
       <div class="main_inputbox">
          <el-input class="main_input" v-model="newpassword" placeholder="请输入新密码"></el-input>
       </div>
       <div class="main_inputbox">
          <el-input class="main_input" v-model="confirmpass" placeholder="请确认新密码"></el-input>
       </div>
       <div class="main_inputbox">
         <el-button class="confirmbtn" @click="verifyPassword" type="primary">确认修改</el-button>
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
      newpassword: '',
      confirmpass: '',  
    }
  },
  methods:{
    ...mapActions(["userUpdatePwd"]),

    async verifyPassword(){
      if(!this.newpassword.length){
        this.$message({
          type: "warning",
          message: "请输入要修改的新密码",
        });
      }else if(this.newpassword.length < 6 || this.newpassword.length > 15){
        this.$message({
          type:"warning",
          message:"密码长度为6-15位"
        })
      }else if(this.newpassword!==this.confirmpass){
        this.$message({
          type:"warning",
          message:"两次输入密码不一致"
        })
      }else{
        let res = await this.userUpdatePwd({
          password:this.newpassword
        })
        console.log(res)
        this.$message({
          type:"warning",
          message:`${res.msg}`
        })
      }
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
    width: 45%;
    height: 450px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    & .formbox{
      width: 100%;
      height: 350px;
    }
    & .top_title{
      font-size: 27px;
      font-weight: 700;
      height: 70px;
      line-height: 70px;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 30px;
    }
    & .main_inputbox{
      width: 50%;
      margin: 10px auto;
      display: flex;
      justify-content: center;
      & .main_input{
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
      }
      & .confirmbtn{
        width: 40%;
        margin-top: 10px;
        text-align: center;
      }
    }
  }
}
</style>