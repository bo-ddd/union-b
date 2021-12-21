<template>
  <div>
     <div class="wrap">
       <div class="main-classify">
       <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="分类名称" prop="name">
    <el-input  size="small" v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="上级分类" prop="pid">
<el-popover
  placement="bottom"
  width="400"
  trigger="click">
  <div class="superior-classify" style="height:200px">
 <el-input
    placeholder="请输入内容"
     size="small"
    style="width:80%">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
<div class="block" style="margin-top:10px">
  <span class="demonstration"></span>
  <el-cascader
  size="small"
    v-model="value"
    :options="options"
    @change="handleChange"></el-cascader>
</div>
  </div>
   <el-select slot="reference" v-model="value"  size="small" style="width:100%">
     
   </el-select>
</el-popover>
  </el-form-item>
 <!-- <el-form-item label="商品模板" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
 <el-form-item label="排序号" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
 <el-form-item label="订单推荐分类" prop="name">
     <el-radio v-model="radio1" label="1">是</el-radio>
  <el-radio v-model="radio1" label="0">否</el-radio>
  </el-form-item>
 <el-form-item label="商城前端显示" prop="name">
     <el-radio v-model="radio2" label="1">是</el-radio>
  <el-radio v-model="radio2" label="0">否</el-radio>
  </el-form-item>
   <el-form-item label="页面标题" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="分享说明" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item> -->
   <el-form-item class="classify-img" label="分类图片" prop="name">
      <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>

</el-form>
       </div>
          <div class="minor-classify">
                  <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <!-- <el-form-item label="分类编码" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="商家编码" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="管理分类" prop="name">
<el-popover
  placement="bottom"
  width="400"
  trigger="click">
  <div class="superior-classify" style="height:200px">
 <el-input
    placeholder="请输入内容"
    style="width:80%">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
<div class="block" style="margin-top:10px">
  <span class="demonstration"></span>
  <el-cascader
    v-model="value"
    :options="options"
    @change="handleChanges"></el-cascader>
</div>
  </div>
   <el-select slot="reference" v-model="value"  style="width:100%">
     
   </el-select>
</el-popover>
  </el-form-item>
 <el-form-item label="商城推荐分类" prop="name">
     <el-radio v-model="radio3" label="1">是</el-radio>
  <el-radio v-model="radio3" label="0">否</el-radio>
  </el-form-item>
 <el-form-item label="订货前端显示" prop="name">
     <el-radio v-model="radio4" label="1">是</el-radio>
  <el-radio v-model="radio4" label="0">否</el-radio>
  </el-form-item>
 <el-form-item label="触屏端开单显示" prop="name">
     <el-radio v-model="radio5" label="1">是</el-radio>
  <el-radio v-model="radio5" label="0">否</el-radio>
  </el-form-item>
   <el-form-item label="SEO关键字" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="SEO描述" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item> -->
   <el-form-item class="poster-classify" label="广告图片" prop="name">
   <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>

</el-form>
        </div>
        <div class="footer">
            <el-button type="danger" class="submit" size="small" @click="submit">确定</el-button>
        </div>
     </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
 data() {
      return {
         dialogImageUrl: '',
        dialogVisible: false,
        radio1:'1',
          radio2:'1',
        radio3:'1',
          radio4:'1',
        radio5:'1',
        value:'',
        ruleForm: {
          name:'',
          pid:''
        },
         options: []
      };
    },
    methods: {
      ...mapActions(["createCategory"]),
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
     async submit(){
       let res = await this.createCategory({
         title:this.ruleForm.name,
         pid:null
       })
       console.log(res)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleChange(){
        console.log('a')
      },
      handleChanges(){
        console.log('b')
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="scss" scoped>
.wrap{
  height: calc(100vh - 100px);
  overflow-y:auto;
  & .main-classify,.minor-classify{
      background-color: #fff;
    & .el-form{
      padding:20px 10px ;
      & .el-form-item{
        margin-bottom: 20px;
        padding: 0px 10px;
      }
    }
  }
  & .minor-classify{
    margin-top: 30px;
  }
  & .footer{
    display: flex;
    justify-content: center;
    border-top: 1px solid #ff4370;
      background-color: #fff;
      padding: 15px 0px;
  }
}
::v-deep .el-form-item__label{
  font-size: 12px;
}
.classify-img,.poster-classify{
  margin-bottom: 0 !important;
}
</style>