<template>
  <div class="wrap">
    <div class="wrap_recommend">
      <div class="preservation">
        <el-button plain @click="(dialogFormVisible = true), addshop"
          >添加</el-button
        >
        <el-button plain class="issuebtn">发布</el-button>
      </div>
      <div>
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
            show-overflow-tooltip
          >
            <template slot-scope="scope">{{ scope.row.code }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="商品名称"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="classify"
            label="商品分类"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="money"
            label="售价"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="inventory"
            label="库存"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="sales"
            label="销量"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态"
            align="center"
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
            show-overflow-tooltip
          >
            <template
              ><el-link type="danger" class="delete">删除</el-link></template
            >
          </el-table-column>
        </el-table>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>

      <div class="block">
        <div class="footer_right">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="[10, 20, 30, 40, 50]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="renderDynamic.length"
            background
          >
          </el-pagination>
        </div>
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
      renderDynamic: [],
      table: [
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
      dialogFormVisible: false,
      form: {
        code: "",
        name: "",
        address: "",
        classify: "",
        money: "",
        inventory: "",
        sales: "",
        state: "",
        date: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    //分页
    //分页有多少条
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleCurrentChange(1);
    },
    //分页的当前页有多少条
    handleCurrentChange(val) {
      let arr = [];
      for (
        let i = val * this.pageSize - this.pageSize;
        i < val * this.pageSize;
        i++
      ) {
        if (this.renderDynamic[i] != undefined) arr.push(this.renderDynamic[i]);
      }
      this.table = arr;
    },
    /**
     * addshop添加商品
     */
    // async addshop(){
    //   let res=await this.jiekou();
    //   console.log(res);
    // }
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
      & .footer_right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }
}
</style>