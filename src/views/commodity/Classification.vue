<template>
  <div>
    <div class="wrap">
      <div class="title">
        <span>分类管理</span>
      </div>
      <div class="content">
        <div class="new-module">
          <div class="add-classification">
            <span>+ 新增分类</span>
          </div>
          <div class="batch-association">
            <span>批量关联</span>
          </div>
        </div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          stripe
          row-key="id"
          border
          select-on-indeterminate
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="分类名称" prop="classificationName" width="300"></el-table-column>
          <el-table-column  label="关联" width="200">
            <template slot-scope="scope">
               <el-link type="primary">品牌</el-link>
               <el-link class="ml-10" type="primary">{{scope.row.association || ''}}</el-link>
            </template>
          </el-table-column>
          <el-table-column
            label="创建日期"
            sortable
            width="200"
            show-overflow-tooltip
          >
          <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="num" label="数量" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip>
            <template>
                <el-link type="primary">升序</el-link>
                  <el-link class="ml-10" type="primary">降序</el-link>
                  <el-link class="ml-10" type="danger">删除</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id:1,
          classificationName:'奶粉',
         
          date:"2021年12月15日",
          num:88,
          children:[
            {
          id:8,
          classificationName:'成人奶粉',
        association:"规格",
          date:"2021年12月15日",
          num:88,
          children:[
            {
            id:13,
          classificationName:'成人奶粉A',
      association:"规格",
          date:"2021年12月15日",
          num:88,
            }
          ]
            },
          ]
        },
          {
          id:2,
          classificationName:'奶粉',
         
          date:"2021年12月15日",
          num:88,
          children:[
            {
          id:9,
          classificationName:'成人奶粉',
         association:"规格",
          date:"2021年12月15日",
          num:88,
          children:[
            {
          id:16,   
          classificationName:'成人奶粉A',
           association:"规格",
          date:"2021年12月15日",
          num:88,
            }
          ]
            },
          ]
        },  {
           id:3,
          classificationName:'奶粉',
          
          date:"2021年12月15日",
          num:88,
          children:[
            {
           id:10,   
          classificationName:'成人奶粉',
           association:"规格",
          date:"2021年12月15日",
          num:88,
          children:[
            {
           id:17,   
          classificationName:'成人奶粉A',
          association:"规格",
          date:"2021年12月15日",
          num:88,
            }
          ]
            },
          ]
        }
      ],
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fcf9fa;
  & .title {
    padding: 20px;
    font-weight: 800;
  }
  & .content {
    padding: 20px;
    background-color: #ffffff;
    & .new-module {
      display: flex;
      align-items: center;
      & .add-classification {
        padding: 5px 10px;
        background-color: #ff4070;
        color: #ffccd8;
        margin-top: 15px;
        margin-left: 15px;
        margin-bottom: 15px;
        border: 1px solid #ffc7d5;
        border-radius: 5px;
        font-size: 12px;
      }
      & .batch-association {
        padding: 5px 10px;
        background-color: #ffffff;
        color: #686868;
         margin-top: 15px;
         border: 1px solid #f2f2f2;
         border-radius: 5px;
         margin-left: 10px;
         font-size: 12px;
         margin-bottom: 15px;
      }
    }
  }
}
.ml-10{
  margin-left: 10px;
}
</style>