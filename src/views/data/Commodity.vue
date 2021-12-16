<template>
  <div class="warp">
    <!-- 刘青松 -->
    <div class="class">
      <div class="fen"><span>商品分类</span> <i class="el-icon-edit"></i></div>
      <div class="fen"><span>商品分类</span> <i class="el-icon-edit"></i></div>
      <div class="fen"><span>商品分类</span> <i class="el-icon-edit"></i></div>
      <div class="fen"><span>商品分类</span> <i class="el-icon-edit"></i></div>
    </div>
    <div class="filter">
      <div>
        <label for="">开始时间: </label>
        <input class="background" type="date" />
      </div>
      <div>
        <label for="">结束时间: </label>
        <input class="background" type="date">
      </div>
      <div>
        <label for="">性别: </label>
        <select class="background" name="" id="">
          <option value="女">女</option>
          <option value="男">男</option>
        </select>
      </div>
      <div>
        <label for="">性别: </label>
        <select class="background" name="" id="">
          <option value="女">女</option>
          <option value="男">男</option>
        </select>
      </div>
      <div>
        <label for="">性别: </label>
        <select class="background" name="" id="">
          <option value="女">女</option>
          <option value="男">男</option>
        </select>
      </div>
      <div class="chaxun">
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-s">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div class="bottom-b">
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.warp{
  min-width: 1109px;
}
.background{
  background: #f0ebeb;
  border: 1px solid rgb(119, 113, 113);
  border-radius: 3px;
}
.class {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  & .fen{
    background: #409EFF;
    padding: 12px 20px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.filter{
  margin: 10px 0;
  border-radius: 5px;
  padding-left: 15px;
  background: #f0ebeb;
  display: flex;
  position: relative;
  &>div{
    height: 40px;
    padding-right: 20px;
    display: flex;
    align-items: center;
  }
  &>.chaxun{
    position: absolute;
    right: 0px;
  }
  & label{
    padding-right: 5px;
  }
}
.bottom-s,.bottom-b{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 10px 10px;
  &>div{
    margin: 5px 0;
    padding: 10px;
    background: #f0ebeb;
    border: 1px solid #f0ebeb;
    border-radius: 5px;
  }
}
.bottom-s{
  grid-template-rows: 200px;
}
.bottom-b{
  grid-template-rows: 350px;
}
::v-deep .filter .el-button{
  padding: 6px 10px;
}
.filter {
  font-size: 14px;
}
</style>