<template>
  <div class="wrap">
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
          <el-button size="small">批量下架</el-button>
          <el-button size="small">批量上架</el-button>
          <el-button size="small">批量删除</el-button>
        </div>
      </div>
      <div>
        <el-table
          size="small"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          stripe
          :header-cell-style="{ background: '#fcfafb' }"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="供应商名称" align="center">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column prop="code" label="角色归属" align="center">
          </el-table-column>

          <el-table-column
            prop="address"
            label="描述"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="date"
            label="加盟时间"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="sales"
            label="状态"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column label="操作" align="center" show-overflow-tooltip>
            <template>
              <el-link type="primary" class="edit">编辑</el-link>
              <el-link type="warning" class="off_the_shelf">审核</el-link>
              <el-link type="danger" class="delete">删除</el-link>
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
      input1: "",
      input2: "",
      input3: "",
      select: "",
      formInline: {
        user: "",
        region: "",
      },

      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",

      tableData: [
        {
          name: "供应商VIP商品管理",
          code: "平台",
          address: "上海市普陀区金沙江路 1518 弄",
          sales: "正常",
          state: "否",
          date: "2019-08-12",
        },
        {
          name: "供应商VIP商品管理",
          code: "平台",
          address: "上海市普陀区金沙江路 1518 弄",
          sales: "正常",
          state: "否",
          date: "2019-08-12",
        },
        {
          name: "供应商VIP商品管理",
          code: "平台",
          address: "上海市普陀区金沙江路 1518 弄",
          sales: "正常",
          state: "否",
          date: "2019-08-12",
        },
        {
          name: "供应商VIP商品管理",
          code: "平台",
          address: "上海市普陀区金沙江路 1518 弄",
          sales: "正常",
          state: "否",
          date: "2019-08-12",
        },
        {
          name: "供应商VIP商品管理",
          code: "平台",
          address: "上海市普陀区金沙江路 1518 弄",
          sales: "正常",
          state: "否",
          date: "2019-08-12",
        },
        {
          name: "供应商VIP商品管理",
          code: "平台",
          address: "上海市普陀区金沙江路 1518 弄",
          sales: "正常",
          state: "否",
          date: "2019-08-12",
        },
        {
          name: "供应商VIP商品管理",
          code: "平台",
          address: "上海市普陀区金沙江路 1518 弄",
          sales: "正常",
          state: "否",
          date: "2019-08-12",
        },
        {
          name: "供应商VIP商品管理",
          code: "平台",
          address: "上海市普陀区金沙江路 1518 弄",
          sales: "正常",
          state: "否",
          date: "2019-08-12",
        },
        {
          name: "供应商VIP商品管理",
          code: "平台",
          address: "上海市普陀区金沙江路 1518 弄",
          sales: "正常",
          state: "否",
          date: "2019-08-12",
        },
        {
          name: "供应商VIP商品管理",
          code: "平台",
          address: "上海市普陀区金沙江路 1518 弄",
          sales: "正常",
          state: "否",
          date: "2019-08-12",
        },
      ],
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
.wrap {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  overflow-y: auto;
  min-height: 80vh;
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
::v-deep .modify_information .el-dialog {
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
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
