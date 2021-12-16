<template>
  <div class="wrap">
      <div class="main">
        <div class="form-left">
          <div class="left-main">

          </div>
        </div>
        <div class="form_center"> 
          <div class="logo">
            <div class="logotext">
              registration
            </div>
          </div>
          <div class="form_item">
            <div class="form_item_input"><el-input class="item-input" v-model="username" placeholder="请设置账号名称"></el-input></div>
          </div>
          <div class="form_item">
            <div class="form_item_input"><el-input v-model="email" placeholder="请设置邮箱作为登录名"></el-input></div>
          </div>
          <div class="form_item">
            <div class="form_item_input"><el-input v-model="phone" placeholder="请输入手机号码"></el-input></div>
          </div>
          
          <div class="form_item">
            <div class="form_item_input"><el-input v-model="password" placeholder="请设置登录密码" show-password></el-input></div>
          </div>
          <div class="form_item">
            <div class="form_selectbox">
              <input class="selectbox_input" type="checkbox" name="" id="agreementbtn">
              <label for="agreementbtn">已阅读并同意以下协议淘宝平台服务协议、隐私权政策、法律声明、支付宝及客户端服务协议、支付宝隐私权政策</label>
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
      password:"",
      phone:"",
      email:"",
      username:"",
      input: '',
      checked:false,
      check:false,
        value: ''
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
      height: 360px;
      & .left-main{
        width: 90%;
      }
    }
    & .form_center{
      width: 50%;
      height: 410px;
      & .form_item{
        width: 100%;
        margin-bottom: 16px;
        display: flex;
          justify-content: center;
        & .form_checkbox{
          width: 20%;
          height: 40px;
          line-height: 40px;
          font-size:13px;
          text-align: right;
        }
        & .form_item_label{
          width: 20%;
          height: 40px;
          line-height: 40px;
          font-size:13px;
          text-align: right;
          & .form_item_label>span{
            color: #666;
          }
        }
        & .form_item_select{
          width: 125px;
        }
        & .form_item_selectinput{
          width: 155px;
        }
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
        & .form_item_label::before{
            display: inline-block;
            margin-right: 4px;
            content: "*";
            font-family: SimSun;
            color: red;
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