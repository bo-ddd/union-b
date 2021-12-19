<template>
  <div class="wrap">
    <h2>秒杀管理</h2>
    <div class="content">
      <div class="content_header">
        <div class="content_header-left">
          <span>状态筛选</span>
          <el-select v-model="value" clearable placeholder="请选择" size='small'>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span>地区筛选</span>
          <el-select v-model="value" clearable placeholder="请选择" size='small'>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div class="block">
            <span class="demonstration">时间筛选</span>
            <el-date-picker v-model="value1" size='small'
              unlink-panels
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </div>
        <div class="content_header-right">
          <el-button size='small'>查询</el-button>
          <el-button size='small'>重置</el-button>
        </div>
      </div>
      <div class="content_center">
        <el-button size='small'>+新增秒杀</el-button>
        <el-button size='small'>批量终止</el-button>
        <el-button size='small'>批量删除</el-button>
      </div>
      <div class="table">
          <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" size='small' style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" >
            </el-table-column>
            <el-table-column label="名称" >
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column prop="start" label="开始时间" >
            </el-table-column>
            <el-table-column prop="end" label="结束时间" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="account" label="创建账户" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="area" label="活动地区" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="state" label="状态" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address" label="操作" show-overflow-tooltip>
                <el-link type="primary">编辑</el-link>
                <el-link type="warning">终止</el-link>
                <el-link type="danger">删除</el-link>
            </el-table-column>
          </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      tableData: [{
          name: '手机秒杀专场',
          start: '2021-11-11 00:00',
          end: '2021-11-11 24:00',
          account:'雷军',
          createTime:'2009-01-01 09:30',
          area:'全国',
          state:'进行中',
          operate :''
      },{
          name: '电脑秒杀专场',
          start: '2021-11-11 00:00',
          end: '2021-11-11 24:00',
          account:'马化腾',
          createTime:'2009-01-01 09:30',
          area:'全国',
          state:'进行中',
          operate :''
      },{
          name: '生活秒杀专场',
          start: '2021-11-11 00:00',
          end: '2021-11-11 24:00',
          account:'马云',
          createTime:'2009-01-01 09:30',
          area:'全国',
          state:'进行中',
          operate :''
      },{

          name: '空调秒杀专场',
          start: '2021-11-11 00:00',
          end: '2021-11-11 24:00',
          account:'董明珠',
          createTime:'2009-01-01 09:30',
          area:'全国',
          state:'进行中',
          operate :''
      },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  min-width: 1270px;
  
  & .content {
    // min-height: 500px;
    min-width: 1000px;
    height: calc(100vh - 300px);
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
    & .content_header {
      display: flex;
      justify-content: space-between;
      & .content_header-left{
         display: flex;
         align-items: center;
         & .el-select {
            margin: 0 25px;
            
          }
         & .demonstration {
        margin-right: 25px;
          }
      }
      &>.content_header-right{
        & .el-button:hover{
          color: #fff;
          background-color: rgb(255, 111, 147);
        }
      }
     
    }
    & .content_center{
      margin-top: 50px;
      & .el-button:hover{
         color: #fff;
         background-color: rgb(255, 111, 147);
      }
    }
    & .table{
      margin-top: 30px;
      & .el-link{
        margin-right: 20px;
      }
    }
  }
}
</style>