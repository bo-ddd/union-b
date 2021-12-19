<template>
  <div class="main">
    <div class="m_main">
      <div class="m_m_center">
        <div class="m_m_c_top">
          <div class="mains">
            <el-form
              :inline="true"
              :model="formInline"
              class="demo-form-inline"
              size="small"
            >
              <el-form-item label="商品状态">
                <el-select v-model="value" filterable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品类型">
                <el-select v-model="value" filterable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="请输入内容" v-model="input1">
                  <el-select
                    v-model="value"
                    filterable
                    placeholder="请选择"
                    slot="prepend"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="query">
            <el-button type="danger" size="small">查询</el-button>
            <el-button size="small">重置</el-button>
          </div>
        </div>
        <div class="commodity_operation">
          <!-- <div>新增商品</div> -->
          <!-- <div>批量下架</div>
          <div>批量上架</div>
          <div>批量删除</div> -->
          <el-button type="danger" size="small">+ 新增商品</el-button>
          <el-button size="small">批量下架</el-button>
          <el-button size="small">批量上架</el-button>
          <el-button size="small">批量删除</el-button>
        </div>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          stripe
          size="small"
          :header-cell-style="{ background: '#fcfafb' }"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="条码" width="90">
            <template slot-scope="scope">{{ scope.row.code }}</template>
          </el-table-column>
          <el-table-column prop="name" label="商品名称" width="180">
          </el-table-column>
          <el-table-column
            prop="classify"
            label="商品分类"
            sortable
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="money"
            label="售价"
            sortable
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="inventory"
            label="库存"
            sortable
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="sales"
            label="销量"
            sortable
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column prop="state" label="状态" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="date" label="创建日期" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip align="center">
            <template>
              <el-link
                type="primary"
                class="edit"
                size="small"
                @click="dialogFormVisible = true"
                >编辑</el-link
              >
              <el-link type="warning" class="off_the_shelf" size="small"
                >下架</el-link
              >
              <el-link type="danger" class="delete" size="small">删除</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="m_footer">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            class="page"
          >
          </el-pagination>
        </div>
      </div>
      <el-dialog title="编辑商品" :visible.sync="dialogFormVisible" class="modify_information">
      <el-form :model="form">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品分类" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="售价" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="库存" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
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
  </div>
</template>

<script>
export default {
  /**
   * author: syh
   */
  data() {
    return {
      value: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      input1: "",
      input2: "",
      input3: "",
      select: "",
      formInline: {
        user: "",
        region: "",
      },

      tableData: [
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          code: "20160503",
          name: "十月结晶一次性产妇纸",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
      ],

      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      multipleSelection: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
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
.main {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  overflow-y: auto;
  min-height: 77vh;
  & > .m_main {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    & > .m_m_center {
      display: grid;
      width: 100%;
      & > .m_m_c_top {
        display: grid;
        grid-template-columns: 85% 15%;
        row-gap: 20px;
        & > div:nth-of-type(1) {
          display: flex;
          flex-direction: row;
          & > .commodity_status,
          & > .commodity_type,
          & > .trade_name {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            & span {
              margin-right: 10px;
            }
            & .search {
              height: 32px;
              line-height: 32px;
              border: 1px solid #dcdfe6;
              border-radius: 5px;
              text-indent: 10px;
              color: #c0c4cc;
            }
          }
        }
        & > div:nth-of-type(2) {
          display: flex;
          align-items: center;
          // margin-bottom: 3px;
          & > div {
            height: 32px;
            width: 60px;
            border-radius: 5px;
            border: 1px solid #c0c4cc;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
          }
          & > div:nth-of-type(1) {
            background: #ff4370;
            color: #ffc6d3;
            margin-right: 10px;
          }
        }
      }
      & > .commodity_operation {
        padding-top: 20px;
        display: flex;
        & .el-button {
          height: 40px;
          padding: 10px;
        }
        & > div {
          height: 32px;
          width: 80px;
          border: 1px solid #c0c4cc;
          border-radius: 5px;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        & > div:nth-of-type(1) {
          background: #ff4370;
        }
      }
    }
    & > div:nth-of-type(2) {
      padding: 20px 0px;
    }
  }
  & > .m_footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.edit,
.off_the_shelf {
  margin-right: 10px;
  & a:hover {
    text-decoration: none;
  }
}

.mains {
  width: 100%;
  & > form {
    width: 100%;
    & > .el-form-item {
      margin-bottom: 0px;
    }
    & > .el-form-item:nth-of-type(1) {
      margin-right: 15px;
    }
    & > .el-form-item:nth-of-type(2) {
      margin-right: 15px;
    }
  }
}
::v-deep .modify_information .el-dialog{
  width: 30%;
}
::v-deep
  .mains
  > form
  > .el-form-item:nth-of-type(3)
  .el-form-item__content
  .el-input__inner {
  width: 280px;
}
.delete {
  text-decoration: none;
}
input::-webkit-input-placeholder {
  color: #c0c4cc;
  font-weight: 700;
}
input::-moz-placeholder {
  color: #c0c4cc;
  font-weight: 700;
}
input:-moz-placeholder {
  font-weight: 700;
  color: #c0c4cc;
}
input:-ms-input-placeholder {
  color: #c0c4cc;
  font-weight: 700;
}
::v-deep .mains .el-input:nth-of-type(1),
::v-deep .mains .el-input:nth-of-type(2) {
  width: 120px;
}
// ::v-deep .el-pagination__jump{
//   margin: 0px;
// }
// ::v-deep .cell {
//   font-weight: 700;
// }
// ::v-deep .el-input {
//   width: 100% !important;
// }
// ::v-deep .el-select {
//   width: 70% !important;
// }
// ::v-deep .el-input__icon {
//   line-height: 32px;
// }
// ::v-deep .el-input__inner {
//   height: 32px;
//   line-height: 32px;
//   font-weight: 700;
// }
// ::v-deep .el-input--suffix {
//   width: 70% !important;
// }
.el-form--inline .el-form-item {
  margin-right: -90px;
}
.el-select .el-input {
  width: 130px;
}
.inputs {
  margin-left: 20px;
}

.block {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>