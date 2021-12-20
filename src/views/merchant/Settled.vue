<template>
  <div class="wrap">
    <div class="title">编辑角色</div>
    <!-- 基本信息 -->
    <div class="information">
      <div class="information-title">基本信息</div>
      <div class="information-content">
        <el-form label-width="100px">
          <el-form-item label="归属" :rules="[{required: true}]">
            <el-select v-model="value"  reserve-keyword>
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="名称" :rules="[{required: true}]">
            <el-input class="el-input"></el-input>
          </el-form-item>
          <el-form-item label="描述" :rules="[{required: true}]">
            <el-input class="el-input"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 编辑权限 -->
    <div class="jurisdiction">
      <div class="jurisdiction-title">编辑权限</div>
      <div class="commodity">
        <div class="commodity-title">商品管理</div>
        <div class="commodity-content">
          <span class="commodity-content_title">商品管理</span>
          <div>
            <el-checkbox v-model="checked">商品查看</el-checkbox>
            <el-checkbox v-model="checked">商品审核</el-checkbox>
            <el-checkbox v-model="checked">备选项</el-checkbox>
          </div>
        </div>
        <div class="commodity-content">
          <span class="commodity-content_title">商品分类</span>
          <div>
            <el-checkbox v-model="checked">商品分类查看</el-checkbox>
            <el-checkbox v-model="checked">商品分类查看</el-checkbox>
          </div>
        </div>
        <div class="commodity-content">
          <span class="commodity-content_title">商品参数</span>
          <div>
            <el-checkbox v-model="checked">商品参数查看</el-checkbox>
            <el-checkbox v-model="checked">商品参数编辑</el-checkbox>
          </div>
        </div>
        <div class="commodity-content">
          <span class="commodity-content_title">商品属性</span>
          <div>
            <el-checkbox v-model="checked">商品属性查看</el-checkbox>
            <el-checkbox v-model="checked">商品属性编辑</el-checkbox>
          </div>
        </div>
        <div class="commodity-content">
          <span class="commodity-content_title">规格管理</span>
          <div>
            <el-checkbox v-model="checked">规格查看</el-checkbox>
            <el-checkbox v-model="checked">规格编辑</el-checkbox>
          </div>
        </div>
        <div class="commodity-content">
          <span class="commodity-content_title">品牌管理</span>
          <div>
            <el-checkbox v-model="checked">品牌查看</el-checkbox>
            <el-checkbox v-model="checked">品牌编辑</el-checkbox>
          </div>
        </div>
        <div class="commodity-title">商品管理</div>
        <div class="commodity-content">
          <span class="commodity-content_title">商品管理</span>
          <div>
            <el-checkbox v-model="checked">商品查看</el-checkbox>
            <el-checkbox v-model="checked">商品审核</el-checkbox>
            <el-checkbox v-model="checked">备选项</el-checkbox>
          </div>
        </div>
        <div class="commodity-content">
          <span class="commodity-content_title">商品分类</span>
          <div>
            <el-checkbox v-model="checked">商品分类查看</el-checkbox>
            <el-checkbox v-model="checked">商品分类查看</el-checkbox>
          </div>
        </div>
        <div class="commodity-content">
          <span class="commodity-content_title">商品参数</span>
          <div>
            <el-checkbox v-model="checked">商品参数查看</el-checkbox>
            <el-checkbox v-model="checked">商品参数编辑</el-checkbox>
          </div>
        </div>
        <div class="commodity-content">
          <span class="commodity-content_title">商品属性</span>
          <div>
            <el-checkbox v-model="checked">商品属性查看</el-checkbox>
            <el-checkbox v-model="checked">商品属性编辑</el-checkbox>
          </div>
        </div>
        <div class="commodity-content">
          <span class="commodity-content_title">规格管理</span>
          <div>
            <el-checkbox v-model="checked">规格查看</el-checkbox>
            <el-checkbox v-model="checked">规格编辑</el-checkbox>
          </div>
        </div>
        <div class="commodity-content">
          <span class="commodity-content_title">品牌管理</span>
          <div>
            <el-checkbox v-model="checked">品牌查看</el-checkbox>
            <el-checkbox v-model="checked">品牌编辑</el-checkbox>
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
        options: [{
          value: '选项1',
          label: '平台'
        }, {
          value: '选项2',
          label: '商家'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
         checked: false
      }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-input__inner{
  height: 28px;
}
::v-deep .el-form-item{
  margin-bottom: 10px;
}
.wrap{
    height: calc(100vh - 100px);
    overflow-y:auto;
    & .title{
      margin: 0 0 20px 10px;
      font-weight: 800;
    }
    & .information{
      width: 100%;
      height: 33%;
      background-color: white;
      & .information-title{
        padding: 20px;
        font-weight: 500;
      }
      & .information-content{
        width: 35%;
      }
    }
    & .jurisdiction{
      background-color: white;
      margin-top: 2%;
      & .jurisdiction-title{
          padding:20px;
          font-weight: 800;
      }
      & .commodity{
        padding: 10px 0 0 30px;
        & .commodity-title{
          font-weight:800;
        }
        & .commodity-content{
          display: flex;
          margin: 20px;
          & .commodity-content_title{
            margin: 0 20px 0 0;
            width: 9%;
          }
        }
      }
    }
  }
</style>