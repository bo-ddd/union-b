<template>
  <div class="main">
    <div class="m_header">商品管理</div>
    <div class="m_main">
      <div class="m_m_center">
        <div class="m_m_c_top">
          <div>
            <div class="commodity_status">
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
            </div>
          </div>
          <div>
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
      <div></div>
    </div>
    <div class="m_footer"></div>
  </div>
</template>

<script>
export default {
  /**
   * author: syh
   */
  data() {
    return {
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
    };
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
      & >.commodity_operation{
        margin-top: 20px;
        display: flex;
        & >div{
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
        & >div:nth-of-type(1){
          background: #ff4370;
        }
      }
    }
  }
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
::v-deep .el-input {
  width: 100% !important;
}
::v-deep .el-select {
  width: 50% !important;
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
</style>