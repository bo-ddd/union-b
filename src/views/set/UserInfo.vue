<template>
  <div class="wrap">
    <div class="userinfo">
      <h2 class="title">修改用户信息</h2>
      <el-row class="demo-avatar demo-basic">
        <el-col :span="12">
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar
                :size="100"
                :src="ruleForm.avatorImg"
              ></el-avatar>
            </div>
          </div>
          <el-link type="primary" :underline="false" @click="flag = true"
            >修改头像</el-link
          >
        </el-col>
      </el-row>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="修改用户名" prop="pass">
          <el-input
            v-model="ruleForm.avatorName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="修改手机号" prop="checkPass">
          <el-input
            v-model="ruleForm.phone"
            autocomplete="off"
            maxlength="11"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="modal" v-if="flag">
      <div class="message-box">
        <div
          v-for="(img, index) in img"
          :key="index"
          :class="img.active ? 'active' : ''"
        >
          <img :src="img.url" alt="" @click="selectAvatar(img.id)" />
        </div>
        <el-button type="primary" @click="flag = false">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
      var validatePass = (rule, value, callback) => {
        if (this.ruleForm.avatorName === '') {
          callback(new Error('用户名'));
        } else {
          if (this.ruleForm.avatorName !== '') {
            this.$refs.ruleForm.validateField('avatorName');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (this.ruleForm.phone === '' || this.ruleForm.phone.length !== 11) {
          callback(new Error('请输入11位手机号'));
        } else  {
           if (this.ruleForm.phone !== '') {
            this.$refs.ruleForm.validateField('phone');
          }
          callback();
        }
      };
    return {
      ruleForm: {
          avatorName: '',
          avatorImg: '',
          phone: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
      sizeList: ["large"],
      avatarId: "",
      userInfo: {
        avatorName: "",
        avatorImg: "",
        phone: "",
      },
      flag: false,
      img: [
        {
          id: 0,
          url: require(`@/assets/images/avator/0.png`),
          active: false,
        },
        {
          id: 1,
          active: false,
          url: require(`@/assets/images/avator/1.png`),
        },
        {
          id: 2,
          active: false,
          url: require(`@/assets/images/avator/2.png`),
        },
        {
          id: 3,
          active: false,
          url: require(`@/assets/images/avator/3.png`),
        },
        {
          id: 4,
          active: false,
          url: require(`@/assets/images/avator/4.png`),
        },
        {
          id: 5,
          active: false,
          url: require(`@/assets/images/avator/5.png`),
        },
        {
          id: 6,
          active: false,
          url: require(`@/assets/images/avator/6.png`),
        },
        {
          id: 7,
          active: false,
          url: require(`@/assets/images/avator/7.png`),
        },
        {
          id: 8,
          active: false,
          url: require(`@/assets/images/avator/8.png`),
        },
        {
          id: 9,
          active: false,
          url: require(`@/assets/images/avator/9.png`),
        },
        {
          id: 10,
          active: false,
          url: require(`@/assets/images/avator/10.png`),
        },
        {
          id: 11,
          active: false,
          url: require(`@/assets/images/avator/11.png`),
        },
        {
          id: 12,
          active: false,
          url: require(`@/assets/images/avator/12.png`),
        },
        {
          id: 13,
          active: false,
          url: require(`@/assets/images/avator/13.png`),
        },
        {
          id: 14,
          active: false,
          url: require(`@/assets/images/avator/14.png`),
        },
        {
          id: 15,
          active: false,
          url: require(`@/assets/images/avator/15.png`),
        },
        {
          id: 16,
          active: false,
          url: require(`@/assets/images/avator/16.png`),
        },
        {
          id: 17,
          active: false,
          url: require(`@/assets/images/avator/17.png`),
        },
        {
          id: 18,
          active: false,
          url: require(`@/assets/images/avator/18.png`),
        },
        {
          id: 19,
          active: false,
          url: require(`@/assets/images/avator/19.png`),
        },
        {
          id: 20,
          active: false,
          url: require(`@/assets/images/avator/20.png`),
        },
        {
          id: 21,
          active: false,
          url: require(`@/assets/images/avator/21.png`),
        },
        {
          id: 22,
          active: false,
          url: require(`@/assets/images/avator/22.png`),
        },
        {
          id: 23,
          active: false,
          url: require(`@/assets/images/avator/23.png`),
        },
        {
          id: 24,
          active: false,
          url: require(`@/assets/images/avator/24.png`),
        },
        {
          id: 25,
          active: false,
          url: require(`@/assets/images/avator/25.png`),
        },
        {
          id: 26,
          active: false,
          url: require(`@/assets/images/avator/26.png`),
        },
        {
          id: 27,
          active: false,
          url: require(`@/assets/images/avator/27.png`),
        },
        {
          id: 28,
          active: false,
          url: require(`@/assets/images/avator/28.png`),
        },
        {
          id: 29,
          active: false,
          url: require(`@/assets/images/avator/29.png`),
        },
        {
          id: 30,
          active: false,
          url: require(`@/assets/images/avator/30.png`),
        },
        {
          id: 31,
          active: false,
          url: require(`@/assets/images/avator/31.png`),
        },
        {
          id: 32,
          active: false,
          url: require(`@/assets/images/avator/32.png`),
        },
        {
          id: 33,
          active: false,
          url: require(`@/assets/images/avator/33.png`),
        },
        {
          id: 34,
          active: false,
          url: require(`@/assets/images/avator/34.png`),
        },
        {
          id: 35,
          active: false,
          url: require(`@/assets/images/avator/35.png`),
        },
        {
          id: 36,
          active: false,
          url: require(`@/assets/images/avator/36.png`),
        },
        {
          id: 37,
          active: false,
          url: require(`@/assets/images/avator/37.png`),
        },
        {
          id: 38,
          active: false,
          url: require(`@/assets/images/avator/38.png`),
        },
        {
          id: 39,
          active: false,
          url: require(`@/assets/images/avator/39.png`),
        },
      ],
    };
  },
  created() {
    this.getUserInfoData();
  },
  methods: {
    ...mapActions(["getUserInfo", "updateUserInfo"]),

    /**
     * @description 获取用户信息
     * **/
    async getUserInfoData() {
      let res = await this.getUserInfo({});
      if (res.status == 1) {
        this.ruleForm.avatorName = res.data[0].avatorName;
        this.ruleForm.avatorImg = require(`@/assets/images/avator/${res.data[0].avatorImg}.png`);
        this.ruleForm.phone = res.data[0].phone;
        this.userInfo.avatorName = res.data[0].avatorName;
        this.userInfo.avatorImg = require(`@/assets/images/avator/${res.data[0].avatorImg}.png`);
        this.userInfo.phone = res.data[0].phone;
      }
    },

    /**
     * @description 提交用户修改的信息
     * **/
    async updateUserInfoData() {
      let obj = {};
      for (const key in this.userInfo) {
        if (this.userInfo[key] != this.ruleForm[key]) {
          obj[key] = this.ruleForm[key];
        }
      }

      if (obj.avatorImg) obj.avatorImg = this.avatarId;
      if (!Object.keys(obj).length) {
        this.$message({
          type: "warning",
          message: "您没有修改任何用户信息！",
        });
        return;
      }
      let res = await this.updateUserInfo(obj);
      if (res.status == 1) {
        await this.getUserInfoData();
        this.$message({
          type: "warning",
          message: "修改成功！",
        });
        console.log(res);
      }
    },

    /**
     * @description 选择头像
     * **/
    selectAvatar(id) {
      this.avatarId = id;
      this.ruleForm.avatorImg = require(`@/assets/images/avator/${id}.png`);
      for (let i = 0; i < this.img.length; i++) {
        if (i == id) {
          this.img[i].active = !this.img[i].active;
        } else {
          this.img[i].active = false;
        }
      }
    },

    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.updateUserInfoData();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;

  & .userinfo {
    background: #fff;
    padding: 50px 100px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & ::v-deep .el-link.el-link--primary {
      width: 100px;
    }

    & ::v-deep .el-input__inner {
      width: 200px !important;
    }

    & .title {
      padding: 10px;
    }

    & ::v-deep .el-row {
      padding: 10px !important;
    }

    & .user {
      display: flex;
      align-items: center;
      padding: 10px;

      & span {
        font-size: 12px;
        display: inline-block;
        width: 100px;
      }
    }

    & .submit {
      margin: 10px;
    }
  }
  & .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background: #000;

    & .message-box {
      display: flex;
      flex-wrap: wrap;
      width: 620px;
      padding-bottom: 10px;
      border-radius: 4px;
      -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      margin: 100px auto;

      & .active {
        border: 2px solid white;
      }

      & img {
        width: 70px;
        height: 70px;
        padding: 5px;
      }
    }
  }
}
</style>