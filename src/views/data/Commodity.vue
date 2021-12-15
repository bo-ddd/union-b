<template>
  <div>
    <!-- 刘青松 -->
    <div class="class">
      <el-button type="primary">主要按钮<i class="el-icon-edit"></i></el-button>
      <el-button type="primary">主要按钮<i class="el-icon-edit"></i></el-button>
      <el-button type="primary">主要按钮<i class="el-icon-edit"></i></el-button>
      <el-button type="primary">主要按钮<i class="el-icon-edit"></i></el-button>
    </div>
    <div class="filter">
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.class{
  display: grid;
  grid-template-columns: repeat(4,1fr);
}
</style>