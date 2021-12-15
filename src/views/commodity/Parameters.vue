<template>
  <div>
      <!-- ProductParameters商品参数 -->
      <div class="wrap">
        <el-container>
          <el-header>
            <div class="title">
              <span>商品参数</span>
            </div>
            <div class="parameter">
              <div>参数项信息</div>
              <div class="information">
              <el-form ref="form" :model="form" label-width="90px">
                <el-form-item label="参数项名称:" class="top">
                  <el-input v-model="form.name" class="el-input__inners"></el-input>
                </el-form-item>
                <el-form-item label="参数项多选:">
                  <el-checkbox-group v-model="form.choice">
                    <el-checkbox label="启用" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="参数项必选:">
                  <el-checkbox-group v-model="form.required">
                    <el-checkbox label="启用" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-form>
              </div>
            </div>
          </el-header>
          <el-main>Main</el-main>
        </el-container>
      </div>
  </div>
</template>

<script>
export default {
   data() {
      return {
    form: {
          name: '',
          choice: '',
          required: '',
        },
      }
    },
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: calc(100vh - 100px);
    & .el-container {
      height: calc(100vh - 100px);
        & .el-header {
          height: 45% !important;
            & .title{
              padding: 20px;
              font-weight: 800;
            }
            & .parameter{
              padding-left: 20px;
              & .information{
                  width: 100%;
                  border-top: 2px solid #e5e5e5;
                  border-bottom: 2px solid #e5e5e5;
                    & .top{
                        margin-top: 30px;
                      }
                    & .el-input__inners {
                      width: 200px;
                    }
                }
            }
        }
        & .el-main {
          height: 55% !important;
        }
    }
}
</style>