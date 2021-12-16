<template>
  <div class="main">
    <div class="m_top">填写信息</div>
    <div class="m_header">
      <div class="m_h_top">基本信息</div>
      <div class="essential_information">
        <div>
          <div>
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="formLabelAlign"
            >
              <el-form-item label="商品类型" class="commodity_type">
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
              <el-form-item label="商品分类" class="commodity_classification">
                <el-select v-model="value" filterable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select v-model="value" filterable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
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
              <el-form-item label="商品名称">
                <el-input
                  type="text"
                  placeholder="请填写商品标题（不超过60个字符）"
                  maxlength="60"
                  show-word-limit
                >
                </el-input>
              </el-form-item>
            </el-form>
          </div>
          <div>
            <div>
              <el-form
                :label-position="labelPosition"
                label-width="80px"
                :model="formLabelAlign"
              >
                <el-form-item label="品牌">
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
                <el-form-item label="重量">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div>
              <el-form
                :label-position="labelPosition"
                label-width="80px"
                :model="formLabelAlign"
              >
                <el-form-item label="销售单位">
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
                <el-form-item label="体积">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="m_centenr">
      <div class="m_c_top">销售信息</div>
      <div class="m_c_center">
        <div>
          <div>
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="formLabelAlign"
            >
              <el-form-item label="生产日期" class="date_of_manufacture">
                <div>
                  <el-select v-model="value" filterable placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>

                <div>
                  <el-checkbox v-model="checked">备选项</el-checkbox>
                  <el-checkbox v-model="checked">备选项</el-checkbox>
                  <el-checkbox v-model="checked">备选项</el-checkbox>
                </div>
              </el-form-item>
              <el-form-item label="容量" class="capacity">
                <div>
                  <el-select v-model="value" filterable placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <el-checkbox v-model="checked">备选项</el-checkbox>
                  <el-checkbox v-model="checked">备选项</el-checkbox>
                </div>
              </el-form-item>
              <el-form-item label="销售规格">
                <el-table
                  :data="tableData"
                  :span-method="objectSpanMethod"
                  border
                  style="width: 100%; margin-top: 20px"
                >
                  <el-table-column prop="id" label="生产日期" width="180">
                  </el-table-column>
                  <el-table-column prop="name" label="容量"> </el-table-column>
                  <el-table-column prop="amount1" label="* 售价">
                  </el-table-column>
                  <el-table-column prop="amount2" label="* 库存">
                  </el-table-column>
                  <el-table-column prop="amount3" label="* 条形码">
                  </el-table-column>
                  <el-table-column prop="amount4" label="* 商家编码">
                  </el-table-column>
                  <el-table-column prop="amount5" label="批量填充">
                  </el-table-column>
                </el-table>
              </el-form-item>
              <el-form-item label="销售区域" class="sales_area">
                <el-button plain>添加省区</el-button>
                <div><span>已选省区:</span> 山东省，河南省,</div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="m_footer">
      <div class="m_f_top">商品介绍</div>
      <div class="m_f_center">
        <div>
          <div class="commodity_rotation">
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="formLabelAlign"
            >
              <el-form-item label="商品轮播">
                图片不能超过1MB；1:1以上图片上传后详情页自动提供放大镜功能。白底图用来展示，若是没有则取第二张图片
              </el-form-item>
              <el-form-item label="" class="product_picture">
                <div>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                  >
                    <i class="el-icon-plus"></i>
                    <p>商品主图</p>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                  </el-dialog>
                </div>
                <div>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                  >
                    <i class="el-icon-plus"></i>
                    <p>商品主图</p>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                  </el-dialog>
                </div>
              </el-form-item>
              <el-form-item label="商品详情">
                详情切图请按顺序上传，展示宽度为750px，高度不定；最多20张，每张不得大于2M
              </el-form-item>
              <el-form-item label="" class="product_details">
                <div>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                  >
                    <i class="el-icon-plus"></i>
                    <p>商品详情页</p>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                  </el-dialog>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="preservation">
      <el-button plain>保存</el-button>
      <el-button plain>预览</el-button>
      <el-button plain>发布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
      input: "",
      checked: "",
      dialogImageUrl: "",
      dialogVisible: false,
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
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
          amount4: 9,
          amount5: 9,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
          amount4: 9,
          amount5: 9,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
          amount4: 9,
          amount5: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
          amount4: 9,
          amount5: 9,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
          amount4: 9,
          amount5: 9,
        },
      ],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    arraySpanMethod({ rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },

    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  // height: 100%;
  max-height: 85vh;
  // height: calc(100vh-100px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  & > .m_top {
    padding: 20px;
    padding-left: 0px;
    font-weight: 700;
  }
  & > .m_header {
    // height: 35%;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    & > .essential_information {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0px;
      & > div {
        width: 80%;
        & > div:nth-of-type(2) {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
.m_h_top,
.m_c_top,
.m_f_top {
  margin-left: 20px;
  padding: 20px 20px 20px 0px;
  border-bottom: 1px solid #ebe9e9;
  font-weight: 700;
}
.m_centenr {
  // height: 40%;
  display: flex;
  margin-top: 20px;
  background: #ffffff;
  width: 100%;
  flex-direction: column;
  // overflow: auto;
  & .m_c_center {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    & > div {
      width: 80%;
    }
  }
}
.m_footer {
  display: flex;
  margin-top: 20px;
  background: #ffffff;
  width: 100%;
  flex-direction: column;
  & > .m_f_center {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    & > div {
      width: 80%;
      display: flex;
      flex-direction: column;
    }
  }
}
.preservation {
  display: flex;
  justify-content: center;
  border-top: 1px solid #ff4370;
  padding: 20px 0px;
}
::v-deep .el-table__header-wrapper .has-gutter .el-table_1_column_3,
::v-deep .el-table__header-wrapper .has-gutter .el-table_1_column_4,
::v-deep .el-table__header-wrapper .has-gutter .el-table_1_column_5,
::v-deep .el-table__header-wrapper .has-gutter .el-table_1_column_6 {
  & > .cell {
    width: 90px;
    height: 32px;
    border: 1px solid #eeeced;
    line-height: 32px;
    margin-left: 15px;
  }
}
::v-deep .el-table__header-wrapper .has-gutter .el-table_1_column_7{
  & > .cell {
    width: 90px;
    height: 32px;
    border: 1px solid #eeeced;
    line-height: 32px;
    margin-left: 15px;
    color: #eeeced;
    background: #ff4370;
  }
}

::v-deep .commodity_type .el-input {
  width: 120px;
}
::v-deep .commodity_classification .el-input {
  width: 120px;
}
::v-deep .el-form-item__content {
  display: flex;
  & > div {
    margin-right: 20px;
  }
}
::v-deep .product_details {
  display: flex;
  & > div {
    margin-right: 20px;
  }
}
.el-form-item {
  margin-bottom: 10px;
}
::v-deep .sales_area > div {
  display: flex;
  flex-direction: column;
  font-weight: 700;
  & > div {
    & > span {
      color: #dbdbdb;
    }
    font-weight: 400;
  }
}
::v-deep .date_of_manufacture .el-form-item__content,
::v-deep .capacity .el-form-item__content {
  display: flex !important;
  flex-direction: column !important;
}
::v-deep .el-button {
  width: 100px;
}
::v-deep .el-button:nth-of-type(3) {
  background: #ff4370;
  color: #ebe9e9;
}
::v-deep .el-input__inner {
  height: 28px !important;
  line-height: 28px !important;
  margin-right: 20px;
}
::v-deep .el-upload--picture-card {
  display: flex;
  flex-direction: column;
  line-height: 20px;
  justify-content: center;
}
</style>