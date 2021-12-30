<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
@import "./style/common";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  & .el-button--primary{
    background-color: var(--color);
    color: var(--textcolor);
    border-color: var(--color);
  }
  & .el-button--primary:hover{
    background-color: var(--textcolor);
    color: var(--color);
    border-color: var(--color);
  }
  & .el-tabs__nav-scroll{
    background-color: var(--color);
  }
  & .el-tabs--border-card>.el-tabs__header .el-tabs__item+.el-tabs__item, .el-tabs--border-card>.el-tabs__header .el-tabs__item:first-child {
    color:var(--textcolor)
  }
    & .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
      color: var(--color);
    }
}

</style>
