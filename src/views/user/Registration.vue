<template>
  <div class="wrap">
      <div class="main">
        <div class="form-left">
          <div class="left-main">
            <img src="@/assets/images/login.png" alt="" srcset="">
          </div>
        </div>
        <div class="form_center"> 
          <div class="logo">
            <div class="logotext">
              registration
            </div>
          </div>
          <div class="form_item">
            <div class="form_item_input"><el-input v-model="form.username" placeholder="请设置账号名称"></el-input></div>
          </div>
          <div class="form_item">
            <div class="form_item_input"><el-input v-model="form.email" placeholder="请设置邮箱"></el-input></div>
          </div>
          <div class="form_item">
            <div class="form_item_input"><el-input v-model="form.phone" placeholder="请输入手机号码"></el-input></div>
          </div>
          
          <div class="form_item">
            <div class="form_item_input"><el-input v-model="form.password" placeholder="请设置登录密码" show-password></el-input></div>
          </div>
          <div class="form_item">
            <div class="form_selectbox">
              <input class="selectbox_input" type="checkbox" name="" id="agreementbtn">
              <label for="agreementbtn">已阅读并同意以下协议淘宝平台服务协议、隐私权政策、法律声明、支付宝及客户端服务协议、支付宝隐私权政策</label>
              <!-- <el-checkbox v-model="checked">已阅读并同意以下协议淘宝平台服务协议、隐私权政策、法律声明、支付宝及客户端服务协议、支付宝隐私权政策</el-checkbox> -->
            </div>
          </div>
          <div class="form_item">
            <div class="form_item_input">
              <el-button class="registrationbtn" type="primary">注 册</el-button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        username:"",
        email:"",
        phone:"",
        password:"",
      }
    }
  },
  created() {

  },
  methods: {
    verification(){
        if (!this.form.username.length) {
        this.$message({
          type: "warning",
          message: "用户名不能为空",
        });
      }else if(this.form.username.length < 6 || this.form.username.length > 15){
        this.$message({
          type:"warning",
          message:"用户名长度为6-15位"
        })
      }else if(this.form.password.length < 6 || this.form.password.length > 15){
        this.$message({
          type:"warning",
          message:"密码长度为6-15位"
        })
      }else if(/[^0-9a-zA-Z_-]+/.test(this.form.username)){
        this.$message({
          type:"warning",
          message:"用户名不符合规范"
        })
      }else if(this.form.password){
        this.$message({
          type:"warning",
          message:"密码不能为空"
        })
      }
      // else if(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.form.email)){
      //   this.$message({
      //     type:"warning",
      //     message:"邮箱格式不正确"
      //   })
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  height: 100vh;
  background-color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
  & .main{
    width: 55%;
    height: 495px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    & .form-left{
        width: 50%;
      height: 430px;
          display: flex;
        justify-content: center;
        align-items: center;
      & .left-main{
        width: 90%;
      }
    }
    & .form_center{
      width: 50%;
      height: 430px;
      & .form_item{
        width: 100%;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        & .form_item_input{
          width: 70%;
          height: 40px;
          font-size: 12px;
            & .registrationbtn{
              width: 100%;
              border-radius:30px; 
              background-color: #087aed;
            }
        }
        & .form_selectbox{
          width: 70%;
          height: 50px;
          font-size: 13px;
          display: flex;
          margin-top: 10px;
          color: #666;
          & .selectbox_input{
            width: 60px;
            margin-top: 2px;
          }
        }
      }
      & .logo{
        width: 100%;
        height: 80px;
        line-height: 50px;
        color: #087aed;
        font-size: 32px;
        display: flex;
          justify-content: center;
        & .logotext{
          width: 70%;
        }
      }
    }
  }
}
::v-deep .el-input__inner{
  border-radius: 30px;
  border: none;
  background-color: #f7f5fb;
}
::v-deep input::-webkit-input-placeholder{
  font-size: 12px;
  color: #79797a;
}
</style>