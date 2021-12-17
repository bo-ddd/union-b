<template>
  <div>
      <!-- LabelManagement -->
      <div class="wrap">
      <!-- <div class="title">
        <span>标签管理</span>
      </div> -->
      <div class="content">
        <div class="new-module">
          <h3>商品管理</h3>
          <div class="tag-group">
  <span class="tag-group__title">商品管理</span>
  <el-tag class="spans"
  :key="tag"
  v-for="tag in management"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加标签</el-button>
</div>
<div class="tag-group">
  <span class="tag-group__title">商品分类</span>
  <el-tag class="spans"
  :key="tag"
  v-for="tag in classify"
  closable
  :disable-transitions="false"
  @close="handleClose1(tag)">
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加标签</el-button>
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
        management: ['商品查看', '商品审核'],
        classify: ['商品分类查看', '商品审核'],
        inputVisible: false,
        inputValue: '',
      };
    },
    methods: {
      handleClose(tag) {
        this.management.splice(this.management.indexOf(tag), 1);
      },
      handleClose1(tag) {
        // this.management.splice(this.management.indexOf(tag), 1);
        this.classify.splice(this.classify.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.management.push(inputValue);
          this.classify.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fcf9fa;
  height: calc(100vh - 100px);
  overflow-y: auto;
}
.content {
    background-color: #ffffff;
}
.new-module {
      padding: 20px;
}
.el-tag + .el-tag {
    margin-left: 45px;
    margin-top: 10px;
  }
  .button-new-tag {
    margin-left: 40px;
    margin-top: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
.tag-group{
  margin: 0 20px;
}
.tag-group__title{
  padding-right: 10px;
  color: #a4a4a4;
}
</style>