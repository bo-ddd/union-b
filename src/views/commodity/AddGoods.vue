<template>
  <div class="main">
    <div class="m_top">填写信息</div>
    <div class="m_header">
      <div class="m_h_top">基本信息</div>
      <div class="essential_information">
        <div>
          <div>
            <el-form :label-position="labelPosition" label-width="80px">
              <el-form-item label="商品类型" class="commodity_type">
                <el-select
                  v-model="commodityType"
                  filterable
                  placeholder="请选择食品"
                >
                  <el-option
                    v-for="item in typeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品分类" class="commodity_classification">
                <el-select
                  v-model="commodityClassificationOne"
                  filterable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in classificationListOne"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select
                  v-model="commodityClassificationTwo"
                  filterable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in classificationListTwo"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select
                  v-model="commodityClassificationThree"
                  filterable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in classificationListThree"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品名称" class="trade_name">
                <el-input
                  type="text"
                  placeholder="请填写商品标题（不超过60个字符）"
                  maxlength="60"
                  v-model="text"
                  show-word-limit
                >
                </el-input>
              </el-form-item>
              <el-form-item label="商品描述" class="trade_name">
                <el-input
                  type="text"
                  placeholder="请填写商品描述"
                  maxlength="60"
                  v-model="productDescription"
                  show-word-limit
                >
                </el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="commodity_specifications">
            <div>
              <el-form :label-position="labelPosition" label-width="80px">
                <el-form-item label="品牌">
                  <el-select
                    v-model="brand"
                    filterable
                    placeholder="请选择品牌"
                  >
                    <el-option
                      v-for="item in brandList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="平台价">
                  <el-input
                  placeholder="请填写商品平台价"
                  v-model="commodityPlatformPrice"
                  show-word-limit
                >
                </el-input>
                </el-form-item>
                <el-form-item label="重量">
                  <el-input
                    v-model="weight"
                    placeholder="请输入重量"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div>
              <el-form :label-position="labelPosition" label-width="80px">
                <el-form-item label="销售单位">
                  <el-select
                    v-model="company"
                    filterable
                    placeholder="请选择或输入自定义单位"
                  >
                    <el-option
                      v-for="item in companyList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="售卖价">
                  <el-input
                    v-model="sellingPriceGoods"
                    placeholder="请填写售卖价"
                  ></el-input>
                </el-form-item>
                <el-form-item label="体积">
                  <el-input
                    v-model="volume"
                    placeholder="请填写包裹体积"
                  ></el-input>
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
            <el-form :label-position="labelPosition" label-width="80px">
              <el-form-item label="生产日期" class="date_of_manufacture">
                <div>
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择或输入日期Enter自定义"
                  >
                  </el-date-picker>
                </div>

                <div>
                  <el-checkbox v-model="July">18年7月</el-checkbox>
                  <el-checkbox v-model="August">18年8月</el-checkbox>
                  <el-checkbox v-model="September">18年9月</el-checkbox>
                </div>
              </el-form-item>
              <el-form-item label="容量" class="capacity">
                <div>
                  <el-select
                    v-model="capacity"
                    filterable
                    placeholder="选择或输入容量Enter自定义"
                  >
                    <el-option
                      v-for="item in capacityList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <el-checkbox v-model="Fourml">400ml</el-checkbox>
                  <el-checkbox v-model="Sixml">600ml</el-checkbox>
                </div>
              </el-form-item>
              <el-form-item label="销售规格" class="sales_information">
                <el-table
                  :data="tableData"
                  :span-method="objectSpanMethod"
                  border
                  style="width: 100%; margin-top: 20px"
                >
                  <el-table-column
                    prop="dateOfManufacture"
                    label="生产日期"
                    width="180"
                  >
                  </el-table-column>
                  <el-table-column prop="capacity" label="容量">
                  </el-table-column>
                  <el-table-column prop="amount1" label="* 售价">
                  </el-table-column>
                  <el-table-column prop="amount2" label="* 库存">
                  </el-table-column>
                  <el-table-column prop="amount3" label="* 条形码">
                  </el-table-column>
                  <el-table-column prop="amount4" label="* 商家编码">
                  </el-table-column>
                  <el-table-column prop="amount5" label="批量填充">
                    <template>
                      <el-link type="info">删除</el-link>
                    </template>
                  </el-table-column>
                </el-table>
              </el-form-item>
              <el-form-item label="销售区域" class="sales_area">
                <el-button
                  @click="dialogFormVisible = true"
                  plain
                  type="primary"
                  >添加省区</el-button
                >
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
            <el-form :label-position="labelPosition" label-width="80px">
              <el-form-item label="商品轮播">
                <span class="font"
                  >图片不能超过1MB；1:1以上图片上传后详情页自动提供放大镜功能。白底图用来展示，若是没有则取第二张图片</span
                >
              </el-form-item>
              <el-form-item label="" class="product_picture">
                <div>
                  <el-upload
                    action=""
                    list-type="picture-card"
                    id="file"
                    name="file"
                    :http-request="customUpload1"
                  >
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{ file }">
                      <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url"
                        alt=""
                      />
                      <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <i class="el-icon-zoom-in"></i>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleDownload(file)"
                        >
                          <i class="el-icon-download"></i>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleRemove(file)"
                        >
                          <i class="el-icon-delete"></i>
                        </span>
                      </span>
                    </div>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                  </el-dialog>
                </div>
              </el-form-item>
              <el-form-item label="商品详情">
                <span class="font"
                  >详情切图请按顺序上传，展示宽度为750px，高度不定；最多20张，每张不得大于2M</span
                >
              </el-form-item>
              <el-form-item label="" class="product_details">
                <el-upload
                  action=""
                  list-type="picture-card"
                  id="file"
                  name="file"
                  :http-request="customUpload"
                >
                  <i slot="default" class="el-icon-plus"></i>
                  <div slot="file" slot-scope="{ file }">
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    >
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                      >
                        <i class="el-icon-zoom-in"></i>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <i class="el-icon-download"></i>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                      >
                        <i class="el-icon-delete"></i>
                      </span>
                    </span>
                  </div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="" />
                </el-dialog>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="preservation">
      <el-button plain type="primary" @click="preservation">保存</el-button>
      <el-button plain type="primary">预览</el-button>
      <el-button plain type="primary">发布</el-button>
    </div>
    <el-dialog
      title=""
      :visible.sync="dialogFormVisible"
      align="center"
      class="provincial_elastic_layer"
    >
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        ><div>全选</div>
      </el-checkbox>
      <div style="margin: 15px 0"></div>
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{
          city
        }}</el-checkbox>
      </el-checkbox-group>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" type="primary"
          >取 消</el-button
        >
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
const cityOptions = ["上海", "北京", "广州", "深圳", "成都"];
export default {
  data() {
    return {
      weight: "",
      volume: "",
      commodityType: "",
      typeList: [
        {
          value: "选项1",
          label: "家具类",
        },
        {
          value: "选项2",
          label: "日用品类",
        },
        {
          value: "选项3",
          label: "鞋帽类",
        },
      ],
      commodityClassificationOne: "",
      classificationListOne: [
        {
          value: "选项1",
          label: "奶粉",
        },
      ],
      commodityClassificationTwo: "",
      classificationListTwo: [
        {
          value: "选项1",
          label: "牛奶粉",
        },
      ],
      commodityClassificationThree: "",
      classificationListThree: [
        {
          value: "选项1",
          label: "1段牛奶粉",
        },
      ],
      text: "",
      productDescription:"",
      commodityPlatformPrice:"",
      sellingPriceGoods:"",
      brand: "",
      brandList: [
        {
          value: "选项1",
          label: "啄木鸟",
        },
        {
          value: "选项2",
          label: "花花公子",
        },
      ],
      company: "",
      companyList: [
        {
          value: "选项1",
          label: "千克",
        },
        {
          value: "选项2",
          label: "克",
        },
      ],
      value1: "",
      capacity: "",
      capacityList: [
        {
          value: "选项1",
          label: "升",
        },
        {
          value: "选项2",
          label: "毫升",
        },
      ],

      labelPosition: "right",
      input: "",
      July: "",
      August: "",
      September: "",
      Fourml: "",
      Sixml: "",
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      src:'',

      tableData: [
        {
          dateOfManufacture: "18年7月",
          capacity: "400ml",
          amount1: "",
          amount2: "",
          amount3: "",
          amount4: "",
          amount5: "",
        },
        {
          dateOfManufacture: "18年7月",
          capacity: "600ml",
          amount1: "",
          amount2: "",
          amount3: "",
          amount4: "",
          amount5: "",
        },
        {
          dateOfManufacture: "18年8月",
          capacity: "400ml",
          amount1: "",
          amount2: "",
          amount3: "",
          amount4: "",
          amount5: "",
        },
        {
          dateOfManufacture: "18年8月",
          capacity: "600ml",
          amount1: "",
          amount2: "",
          amount3: "",
          amount4: "",
          amount5: "",
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

      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },
  methods: {
    ...mapActions(["createProduct", "uploadImage"]),
    one() {
      // let formData = new FormData();
      let file = this.$refs.file.files[0]; //this.$refs.file.files[0] 获取到上传的文件
      console.log(file);
    },
    handleRemove(file) {
      console.log(file.raw);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },

    async customUpload(val) {
      let formData = new FormData();
      formData.append("file", val.file);
      formData.append("type", 3);
      // console.log(val.file);
      let res = await this.uploadImage(formData);
      console.log(res);
      this.src = res.data
    },
    async customUpload1(val) {
      let formData = new FormData();
      formData.append("file", val.file);
      formData.append("type", 3);
      // console.log(val.file);
      // let res = await this.uploadImage(formData);
      // console.log(res);
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
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    async preservation() {
      let res = await this.createProduct({
        cid: 1,
        title: "暖宝宝",
        keywords: "日用类",
        bannerImg: this.src,
        platformPrice: 10,
        desc: "这是一个暖宝宝",
        realPrice: 12,
      });
      console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  // height: 100%;
  // max-height: 85vh;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  & > .m_top {
    padding: 20px;
    padding-top: 0px;
    // padding-left: 0px;
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
        & > div:nth-of-type(1) {
          width: 70%;
        }
        & > div:nth-of-type(2) {
          display: flex;
          justify-content: space-between;
          width: 70%;
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

::v-deep .product_picture {
  & > div > div:nth-of-type(1) > div:nth-of-type(1) {
    display: flex;
  }
}
::v-deep .product_details {
  & > div > div:nth-of-type(1) {
    display: flex;
  }
}
::v-deep .product_details {
  & .el-form-item__content {
    display: flex;
    flex-direction: column;
  }
}
::v-deep .provincial_elastic_layer {
  display: flex;
  align-items: center;
  justify-content: center;
  & > .el-dialog {
    width: 40%;
    & .el-dialog__body div:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
    }
  }
}
::v-deep .sales_information .cell {
  text-align: center;
}
::v-deep .sales_area > div {
  margin-top: 10px;
  & .el-button {
    width: 80px;
    padding: 6px 10px;
  }
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
::v-deep .el-table__header-wrapper .has-gutter .el-table_1_column_7 {
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
::v-deep .commodity_type .el-input,
::v-deep .commodity_classification .el-input {
  width: 120px;
}
::v-deep .commodity_specifications .el-input {
  width: 220px;
}
::v-deep .trade_name .el-input {
  width: 100%;
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
  & .el-input {
    width: 220px;
  }
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
.font {
  color: #a4a4a4;
}
</style>