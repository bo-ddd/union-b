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
            >
              <el-form-item label="商品状态">
                <el-select
                  v-model="commodityStatusValue"
                  filterable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in commodityStatus"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品类型">
                <el-select
                  v-model="salesTypeValue"
                  filterable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in salesType"
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
            <el-button type="primary" @click="query(flag1)">查询</el-button>
            <el-button type="primary" @click="reset">重置</el-button>
          </div>
        </div>
        <div class="commodity_operation">
          <el-button type="primary" @click="skip">+ 新增商品</el-button>
          <el-button type="primary">批量下架</el-button>
          <el-button type="primary">批量上架</el-button>
          <el-button @click="multipleRemove()" type="primary"
            >批量删除</el-button
          >
        </div>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="table"
          tooltip-effect="dark"
          style="width: 100%"
          stripe
          @select="checkBoxData"
          @select-all="handleSelectionChange"
          :header-cell-style="{ background: '#fcfafb' }"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="条码" width="90">
            <template slot-scope="scope">{{ scope.row.code }}</template>
          </el-table-column>
          <el-table-column label="商品名称" width="180">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column label="商品分类" sortable show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.classify }}</template>
          </el-table-column>
          <el-table-column label="售价" sortable show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.money }}</template>
          </el-table-column>
          <el-table-column label="库存" sortable show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.inventory }}</template>
          </el-table-column>
          <el-table-column label="销量" sortable show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.sales }}</template>
          </el-table-column>
          <el-table-column label="状态" show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.state }}</template>
          </el-table-column>
          <el-table-column label="创建日期" show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip align="center">
            <template slot-scope="scope">
              <el-link
                type="primary"
                class="edit"
                @click="getCommodityDat(scope)"
                >编辑</el-link
              >
              <el-link type="warning" class="off_the_shelf">下架</el-link>
              <el-link type="danger" class="delete" @click="remove([scope])"
                >删除</el-link
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="m_footer">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="page"
            :page-sizes="[10, 20, 30]"
            :page-size="limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tablelength"
            class="page"
          >
          </el-pagination>
        </div>
      </div>
      <el-dialog
        title="编辑商品"
        :visible.sync="dialogFormVisible"
        class="modify_information"
      >
        <el-form :model="form">
          <el-form-item label="商品名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品分类" :label-width="formLabelWidth">
            <div class="block">
              <el-cascader
                placeholder="请选择分类"
                :options="form.classificationList"
                filterable
                class="classification"
              ></el-cascader>
            </div>
          </el-form-item>
          <el-form-item label="售价" :label-width="formLabelWidth">
            <el-input v-model="form.money" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="库存" :label-width="formLabelWidth">
            <el-input v-model="form.inventory" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
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
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  /**
   * author: syh
   */
  data() {
    return {
      checked: false,
      commodityStatusValue: "",
      commodityStatus: [
        {
          value: "销售中",
          label: "销售中",
        },
        {
          value: "已售空",
          label: "已售空",
        },
      ],
      salesTypeValue: "",
      salesType: [
        {
          value: "孕产妇用品",
          label: "孕产妇用品",
        },
        {
          value: "婴幼儿用品",
          label: "婴幼儿用品",
        },
      ],
      value: "",
      options: [
        {
          value: "选项一",
          label: "0000",
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
          id: 1,
          code: "20160503",
          name: "立白洗衣液",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          id: 2,
          code: "20160503",
          name: "舒克儿童牙膏",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "婴幼儿用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "已售空",
          date: "2019-08-12",
        },
        {
          id: 3,
          code: "20160503",
          name: "苏菲卫生巾",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "已售空",
          date: "2019-08-12",
        },
        {
          id: 4,
          code: "20160503",
          name: "阿迪达斯运动鞋",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "婴幼儿用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          id: 5,
          code: "20160503",
          name: "三只松鼠_手撕面包",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "婴幼儿用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "已售空",
          date: "2019-08-12",
        },
        {
          id: 6,
          code: "20160503",
          name: "苹果IPhone",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "已售空",
          date: "2019-08-12",
        },
        {
          id: 7,
          code: "20160503",
          name: "体重秤",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "已售空",
          date: "2019-08-12",
        },
        {
          id: 8,
          code: "20160503",
          name: "南极人袜子",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "婴幼儿用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "销售中",
          date: "2019-08-12",
        },
        {
          id: 9,
          code: "20160503",
          name: "乡巴佬鹌鹑蛋",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "婴幼儿用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "已售空",
          date: "2019-08-12",
        },
        {
          id: 10,
          code: "20160503",
          name: "书箱收纳箱",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "婴幼儿用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "已售空",
          date: "2019-08-12",
        },
        {
          id: 11,
          code: "20160503",
          name: "桂花奶茶瓜子",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "已售空",
          date: "2019-08-12",
        },
        {
          id: 12,
          code: "20160503",
          name: "男女加绒加厚裤子",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "已售空",
          date: "2019-08-12",
        },
        {
          id: 13,
          code: "20160503",
          name: "米创网红同款口罩",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "已售空",
          date: "2019-08-12",
        },
        {
          id: 14,
          code: "20160503",
          name: "正宗藏红花茶",
          address: "上海市普陀区金沙江路 1518 弄",
          classify: "孕产妇用品",
          money: "159.00",
          inventory: "4647",
          sales: "464",
          state: "已售空",
          date: "2019-08-12",
        },
      ],
      deleteDataArr: [],
      arr3: [],
      arr4: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        money: "",
        inventory: "",
        classificationList: [
          {
            value: "zhinan",
            label: "指南",
            children: [
              {
                value: "shejiyuanze",
                label: "设计原则",
                children: [
                  {
                    value: "yizhi",
                    label: "一致",
                  },
                  {
                    value: "fankui",
                    label: "反馈",
                  },
                  {
                    value: "xiaolv",
                    label: "效率",
                  },
                  {
                    value: "kekong",
                    label: "可控",
                  },
                ],
              },
              {
                value: "daohang",
                label: "导航",
                children: [
                  {
                    value: "cexiangdaohang",
                    label: "侧向导航",
                  },
                  {
                    value: "dingbudaohang",
                    label: "顶部导航",
                  },
                ],
              },
            ],
          },
          {
            value: "zujian",
            label: "组件",
            children: [
              {
                value: "basic",
                label: "Basic",
                children: [
                  {
                    value: "layout",
                    label: "Layout 布局",
                  },
                  {
                    value: "color",
                    label: "Color 色彩",
                  },
                  {
                    value: "typography",
                    label: "Typography 字体",
                  },
                  {
                    value: "icon",
                    label: "Icon 图标",
                  },
                  {
                    value: "button",
                    label: "Button 按钮",
                  },
                ],
              },
              {
                value: "form",
                label: "Form",
                children: [
                  {
                    value: "radio",
                    label: "Radio 单选框",
                  },
                  {
                    value: "checkbox",
                    label: "Checkbox 多选框",
                  },
                  {
                    value: "input",
                    label: "Input 输入框",
                  },
                  {
                    value: "input-number",
                    label: "InputNumber 计数器",
                  },
                  {
                    value: "select",
                    label: "Select 选择器",
                  },
                  {
                    value: "cascader",
                    label: "Cascader 级联选择器",
                  },
                  {
                    value: "switch",
                    label: "Switch 开关",
                  },
                  {
                    value: "slider",
                    label: "Slider 滑块",
                  },
                  {
                    value: "time-picker",
                    label: "TimePicker 时间选择器",
                  },
                  {
                    value: "date-picker",
                    label: "DatePicker 日期选择器",
                  },
                  {
                    value: "datetime-picker",
                    label: "DateTimePicker 日期时间选择器",
                  },
                  {
                    value: "upload",
                    label: "Upload 上传",
                  },
                  {
                    value: "rate",
                    label: "Rate 评分",
                  },
                  {
                    value: "form",
                    label: "Form 表单",
                  },
                ],
              },
              {
                value: "data",
                label: "Data",
                children: [
                  {
                    value: "table",
                    label: "Table 表格",
                  },
                  {
                    value: "tag",
                    label: "Tag 标签",
                  },
                  {
                    value: "progress",
                    label: "Progress 进度条",
                  },
                  {
                    value: "tree",
                    label: "Tree 树形控件",
                  },
                  {
                    value: "pagination",
                    label: "Pagination 分页",
                  },
                  {
                    value: "badge",
                    label: "Badge 标记",
                  },
                ],
              },
              {
                value: "notice",
                label: "Notice",
                children: [
                  {
                    value: "alert",
                    label: "Alert 警告",
                  },
                  {
                    value: "loading",
                    label: "Loading 加载",
                  },
                  {
                    value: "message",
                    label: "Message 消息提示",
                  },
                  {
                    value: "message-box",
                    label: "MessageBox 弹框",
                  },
                  {
                    value: "notification",
                    label: "Notification 通知",
                  },
                ],
              },
              {
                value: "navigation",
                label: "Navigation",
                children: [
                  {
                    value: "menu",
                    label: "NavMenu 导航菜单",
                  },
                  {
                    value: "tabs",
                    label: "Tabs 标签页",
                  },
                  {
                    value: "breadcrumb",
                    label: "Breadcrumb 面包屑",
                  },
                  {
                    value: "dropdown",
                    label: "Dropdown 下拉菜单",
                  },
                  {
                    value: "steps",
                    label: "Steps 步骤条",
                  },
                ],
              },
              {
                value: "others",
                label: "Others",
                children: [
                  {
                    value: "dialog",
                    label: "Dialog 对话框",
                  },
                  {
                    value: "tooltip",
                    label: "Tooltip 文字提示",
                  },
                  {
                    value: "popover",
                    label: "Popover 弹出框",
                  },
                  {
                    value: "card",
                    label: "Card 卡片",
                  },
                  {
                    value: "carousel",
                    label: "Carousel 走马灯",
                  },
                  {
                    value: "collapse",
                    label: "Collapse 折叠面板",
                  },
                ],
              },
            ],
          },
          {
            value: "ziyuan",
            label: "资源",
            children: [
              {
                value: "axure",
                label: "Axure Components",
              },
              {
                value: "sketch",
                label: "Sketch Templates",
              },
              {
                value: "jiaohu",
                label: "组件交互文档",
              },
            ],
          },
        ],
      },
      formLabelWidth: "120px",
      page: 1,
      limit: 10,
      table: [],
      pageNum: "",
      num: "",
      cacheArr: [],
      tablelength: 20,
      flag: false,
      flag1: true,
    };
  },

  methods: {
    ...mapActions(["getProductList", "deleteProduct"]),
    pageList() {
      this.getList(this.query());
    },
    getList(arr) {
      // es6过滤得到满足搜索条件的展示数据list
      // console.log(arr);
      this.flag1 = true;
      if (this.flag) {
        // console.log(this.table);
        this.table = arr.filter(
          (item, index) =>
            index < this.page * this.limit &&
            index >= this.limit * (this.page - 1)
        ); //根据页数显示相应的内容
        this.tablelength = arr.length;
      } else {
        var list = this.tableData.filter((item) =>
          arr.forEach((element) => {
            item.name.includes(element);
          })
        );
        // 搜索符号条件的内容
        // console.log(list);
        this.table = list.filter(
          (item, index) =>
            index < this.page * this.limit &&
            index >= this.limit * (this.page - 1)
        ); //根据页数显示相应的内容
        this.tablelength = list.length;
      }
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.limit = val;
      this.getList(this.query());
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      console.log(this.arr4);
      this.cacheArr.forEach((item) => {
        this.$refs.multipleTable.toggleRowSelection(item, true);
      });
      this.getList(this.query());
    },
    offSize() {
      this.num = this.pageSize * (this.pageNum - 1);
      this.articles();
    },
    articles(val) {
      if (!val) {
        this.table = this.tableData.slice(this.num, this.num + this.pageSize);
        // this.tablelength = this.tableData.length;
      } /*  else {
        console.log(val);
        this.table = val;
        // this.tablelength = this.table.length;
        this.handleSizeChange(10);
        this.handleCurrentChange(1);
      } */
    },
    query(flag) {
      let arr = [];
      if (!this.commodityStatusValue && !this.salesTypeValue) {
        arr = this.tableData;
        this.flag = true;
      } else if (this.commodityStatusValue && !this.salesTypeValue) {
        arr = this.tableData.filter((item) => {
          return item.state == this.commodityStatusValue;
        });
      } else if (!this.commodityStatusValue && this.salesTypeValue) {
        arr = this.tableData.filter((item) => {
          return item.classify == this.salesTypeValue;
        });
      } else {
        arr = this.tableData.filter((item) => {
          return (
            item.classify == this.salesTypeValue &&
            item.state == this.commodityStatusValue
          );
        });
      }
      if (flag) {
        this.flag1 = false;
        return this.pageList();
      } else {
        return arr;
      }
    },
    reset() {
      this.flag1 = true;
      this.getList(this.tableData);
    },
    skip() {
      this.$router.push({
        name: "AddGoods",
      });
    },
    getCommodityDat(data) {
      this.dialogFormVisible = true;
      // console.log(data);
      this.form = data.row;
    },
    async remove(indexArr) {
      this.tableData.splice(this.tableData.indexOf(indexArr[0].row), 1);
      this.table.splice(this.table.indexOf(indexArr[0].row), 1);
      this.getList(this.query());
      // let res = await this.deleteProduct({
      //   id: indexArr[0].row.id,
      // });
      // console.log(res);
    },
    multipleRemove() {
      console.log(this.arr4);
      for (let i = 0; i < this.arr4.length; i++) {
        if (!this.cacheArr.includes(this.arr4[i])) {
          this.cacheArr.push(this.arr4[i]);
        } else {
          let temp = this.cacheArr.indexOf(this.arr4[i]);
          this.cacheArr.splice(temp, 1);
        }
      }
      // console.log(this.cacheArr);
      this.cacheArr.forEach((item) => {
        this.tableData.splice(this.tableData.indexOf(item), 1);
        this.table.splice(this.table.indexOf(item), 1);
      });
      this.getList(this.query());
      // console.log(this);
    },
    checkBoxData: function (selection, row) {
      this.arr4.push(row);
      // console.log(this.arr4);
    },
    handleSelectionChange(val) {
      if (!val.length) {
        this.arr4 = [];
      } else {
        val.forEach((item) => {
          this.arr4.push(item);
          this.$refs.multipleTable.toggleRowSelection(item, true);
        });
      }
    },
  },
  async created() {
    this.pageList();
    // let res = await this.getProductList({
    // })
    // console.log(res);
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
          padding: 9px 10px;
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
.query .el-button {
  padding: 9px 10px;
}
::v-deep .modify_information .el-dialog {
  width: 30%;
  & > .el-dialog__body {
    & > .el-form {
      & > .el-form-item:nth-of-type(2) {
        & > .el-form-item__content {
          display: flex;
        }
      }
    }
  }
}
::v-deep
  .mains
  > form
  > .el-form-item:nth-of-type(3)
  > .el-form-item__content
  > .el-input
  > .el-input__inner {
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