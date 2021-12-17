<template>
  <div class="wrap">
    <div class="title">编辑角色</div>
    <div class="information">
      <div class="information-title">基本信息</div>
      <div class="information-content">
     <el-form  >
          <el-form-item label="活动名称"     :rules="[]">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item label="活动名称" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item label="活动名称" hide-required-asterisk>
            <el-input ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrap{
    height: calc(100vh - 100px);
    overflow-y:auto;
    & .title{
      margin: 0 0 20px 10px;
      font-weight: 800;
    }
    & .information{
      width: 100%;
      height: 40%;
      background-color: white;
      & .information-title{
        padding: 20px;
        font-weight: 500;
      }
      & .information-content{
        background-color: #bbeff7;
        width: 83%;
        padding: 30px;
        display: flex;
        margin: 0 auto;
      }
    }
  }
</style>