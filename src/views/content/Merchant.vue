<template>
  <div class="wrap">
    <div class="wrap_recommend">
      <div class="preservation">
        <el-button plain class="issuebtn">发布</el-button>
      </div>
      <el-table
        :data="tableData"
        stripe
        :header-cell-style="{ background: '#fcfcfc' }"
      >
        <el-table-column type="selection" align="center" width="50">
        </el-table-column>
        <el-table-column
          label="商品编号"
          align="center"
          sortable
          show-overflow-tooltip
        >
          <template slot-scope="scope">{{ scope.row.code }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品名称"
          align="center"
          sortable
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="classify"
          label="商品分类"
          align="center"
          sortable
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="money"
          label="售价"
          align="center"
          sortable
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="inventory"
          label="库存"
          align="center"
          sortable
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="sales"
          label="销量"
          align="center"
          sortable
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          align="center"
          sortable
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="创建日期"
          align="center"
          sortable
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          label="操作"
          align="left"
          width="100"
          sortable
          show-overflow-tooltip
        >
          <template
            ><el-link type="danger" class="delete">删除</el-link></template
          >
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[6, 10]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="20"
          class="page"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00元",  
          inventory: "4647件",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00元",
          inventory: "4647件",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00元",
          inventory: "4647件",
          sales: "464",
          state: "销售中",
          date: "2019-10-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00元",
          inventory: "4647件",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00元",
          inventory: "4647件",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00元",
          inventory: "4647件",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00元",
          inventory: "4647件",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00元",
          inventory: "4647件",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00元",
          inventory: "4647件",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00元",
          inventory: "4647件",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fcfcfc;
  overflow: hidden;
  & .wrap_recommend {
    height: calc(100vh - 110px);
    overflow-y: auto;
    background-color: #ffffff;
    min-width: 900px;
    & .preservation {
      padding: 20px 20px 0px 20px;
    }
    & .el-table {
      padding: 20px 20px;
    }
    & .block {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0px;
    }
  }
}
</style>