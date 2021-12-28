<template>
  <div>
    <div class="wrap">
      <div class="main-classify">
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="分类名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="上级分类" prop="pid" class="classifya">
            <template>
              <div class="block">
                <span class="demonstration"></span>
                <el-cascader
                  ref="cascader"
                  :options="options"
                  @change="getId()"
                  :props="{
                    checkStrictly: true,
                    label: 'title',
                    children: 'child',
                    value: 'title',
                  }"
                  clearable
                ></el-cascader>
              </div>
            </template>
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
              action=""
              list-type="picture-card"
              id="file"
              :http-request="uploadClassify"
              :before-upload="test"
              name="file"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-form-item>
        </el-form>
      </div>
      <div class="minor-classify">
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
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
              action=""
              list-type="picture-card"
              id="file"
              :http-request="uploadSectionFile"
              name="file"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <el-button type="primary" class="submit" @click="submit"
          >确定</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import uploud from "../../../public/lib/uploud";
export default {
  data() {
    return {
      src: "",
      pid: "",
      dialogImageUrl: "",
      dialogVisible: false,
      radio1: "1",
      radio2: "1",
      radio3: "1",
      radio4: "1",
      radio5: "1",
      ruleForm: {
        name: "",
        pid: "",
      },
      value: "",
      options: [],
      arr: [],
    };
  },
  methods: {
    ...mapActions(["createCategory", "getCategoryList", "uploadImage"]),
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    getId() {
      let res = this.$refs["cascader"].getCheckedNodes();
      this.ruleForm.pid = res[0].data.id;
    },
    async submit() {
      let res = await this.createCategory({
        title: this.ruleForm.name,
        pid: this.ruleForm.pid == "" ? null : this.ruleForm.pid,
        category: this.src,
      });
      console.log(res);
    },
    async getClassifyInfo() {
      let res = await this.getCategoryList({});
      let data = res.data.rows.slice();
      this.arr = data;
      let target = this.format(data);
      this.options = target;
    },
    format(target) {
      let res = target.slice();
      res.forEach((item) => {
        // item.child = item.child || [];
        let p = res.find((type) => item.pid == type.id);
        if (item.pid && p) {
          p.child = p.child || [];
          p.child.push(item);
        }
        item.category = p ? p.category + "=>" + item.title : item.title;
      });
      return res.filter((type) => type.pid === null);
    },
    handleChanges() {
      console.log("b");
    },
    test(val) {
      let isPNg = val.type === "image/png" || "image/jpg";
      let isSz2m = val.size / 1024 / 1024 < 2;
      if (!isPNg) {
        this.$message("图片格式只能是PNG格式");
      }
      if (!isSz2m) {
        this.$message("上传图片大小不能超过2M");
      }
      return isPNg && isSz2m;
    },
    async uploadClassify(val) {
      let formData = uploud(val.file, 3);
      let res = await this.uploadImage(formData);
      this.src = res.data;
    },
    async uploadSectionFile(val) {
      let formData = uploud(val.file, 3);
      let res = await this.uploadImage(formData);
      this.src = res.data;
    },
  },
  created() {
    this.getClassifyInfo();
  }, 
};
</script>

<style lang="scss" scoped>
.wrap {
  height: calc(100vh - 100px);
  overflow-y: auto;
  & .main-classify,
  .minor-classify {
    background-color: #fff;
    & .el-form {
      padding: 20px 10px;
      & .el-form-item {
        margin-bottom: 20px;
        padding: 0px 10px;
      }
    }
  }
  & .minor-classify {
    margin-top: 30px;
  }
  & .footer {
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--color);
    background-color: #fff;
    padding: 15px 0px;
  }
}
::v-deep .el-form-item__label {
  font-size: 12px;
}
.classify-img,
.poster-classify {
  margin-bottom: 0 !important;
}
::v-deep .file {
  & .el-input__inner {
    border: none;
  }
}
</style>