<template>
  <div class="main">
    <div class="m_header">商品管理</div>
    <div class="m_main">
      <div class="m_m_center">
        <div class="m_m_c_top">
          <div>
            <!-- <div class="commodity_status">
              <span>商品状态</span>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="commodity_type">
              <span>商品类型</span>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="trade_name">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <input type="search" class="search" placeholder="请输入" />
            </div> -->
            <div class="mains">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="活动区域">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
      <el-option label="区域三" value="tianjian"></el-option>
      <el-option label="区域四" value="guangzhou"></el-option>
      <el-option label="区域五" value="shenzhen"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="活动区域">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
      <el-option label="区域三" value="tianjian"></el-option>
      <el-option label="区域四" value="guangzhou"></el-option>
      <el-option label="区域五" value="shenzhen"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
  <div style="margin-top: 5px;">
  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" class="inputs">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
      <el-option label="区域三" value="tianjian"></el-option>
      <el-option label="区域四" value="guangzhou"></el-option>
      <el-option label="区域五" value="shenzhen"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
  </el-form-item>
</el-form>
            </div>
          </div>
          <div class="query">
            <div>查询</div>
            <div>重置</div>
          </div>
        </div>
        <div class="commodity_operation">
          <div>新增商品</div>
          <div>批量下架</div>
          <div>批量上架</div>
          <div>批量删除</div>
        </div>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          stripe
          :header-cell-style="{ background: '#fcfafb' }"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="条码" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="商品名称" width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="售价"
            sortable
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="库存"
            sortable
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="销量"
            sortable
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column prop="address" label="状态" show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="address"
            label="创建日期"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip>
            <template>
              <el-link type="primary" class="edit">编辑</el-link>
              <el-link type="warning" class="off_the_shelf">下架</el-link>
              <el-link type="danger" class="delete">删除</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="m_footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout=" sizes, prev, pager, next, jumper,total"
          :total="400"
        >
        </el-pagination>
      </div>
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
      input1: '',
      input2: '',
      input3: '',
      select: '',
      formInline: {
          user: '',
          region: ''
        },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
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
.main {
  display: flex;
  flex-direction: column;
  & > .m_header {
    padding: 20px;
    font-weight: 700;
  }
  & > .m_main {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    & > .m_m_center {
      display: grid;
      grid-template-rows: 1fr 1fr;
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
        margin-top: 20px;
        display: flex;
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
  }
  & >.m_footer{
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
.delete {
  text-decoration: none;
}
input::-webkit-input-placeholder {
  color: #c0c4cc;
  font-weight: 700;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c0c4cc;
  font-weight: 700;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-weight: 700;
  color: #c0c4cc;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #c0c4cc;
  font-weight: 700;
}
// ::v-deep .el-pagination__sizes{
//   width: 120px;
// }
::v-deep .el-pagination__jump{
  margin: 0px;
}
::v-deep .cell {
  font-weight: 700;
}
::v-deep .el-input {
  width: 100% !important;
}
::v-deep .el-select {
  width: 70% !important;
}
::v-deep .el-input__icon {
  line-height: 32px;
}
::v-deep .el-input__inner {
  height: 32px;
  line-height: 32px;
  font-weight: 700;
}
::v-deep .el-input--suffix {
  width: 70% !important;
}
// .cascader {
//   margin-left: 5px;
//   width: 140px;
//   height: 30px !important;
// }
.m_m_c_top{
  // border: 2px solid red;
}
.el-form--inline .el-form-item {
    // display: inline-block;
    margin-right: -90px;
    // vertical-align: top;
}
.el-select .el-input {
    width: 130px;
  }
// .input-with-select .el-input-group__prepend {
//     background-color: #fff;
//   }
.inputs{
  margin-left: 20px;
}
.mains{
  margin: 5px 0 -20px 0;
}
</style>