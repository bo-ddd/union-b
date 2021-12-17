<template>
  <div>
    <div class="header">
      <div>
        <el-button
          class="query"
          icon="el-icon-plus"
          @click="dialogFormVisible = true"
          >新增商品</el-button
        >
        <el-dialog :visible.sync="dialogFormVisible">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="文字" name="first">
              <div class="texttab">
                <div class="textleft">
                  <el-form :model="form">
                    <el-form-item
                      label="活动名称"
                      :label-width="formLabelWidth"
                    >
                      <el-input
                        v-model="form.name"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="活动名称"
                      :label-width="formLabelWidth"
                    >
                      <div ref="div1"></div>
                    </el-form-item>
                    <el-form-item
                      label="活动名称"
                      :label-width="formLabelWidth"
                    >
                      <el-input
                        v-model="form.name"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="活动名称"
                      :label-width="formLabelWidth"
                    >
                      <el-input
                        v-model="form.name"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="活动名称"
                      :label-width="formLabelWidth"
                    >
                      <el-input
                        v-model="form.name"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="textright">
                  <div class="preview">
                    <div class="previewtop">预览</div>
                    <div v-html="article"></div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="图片" name="second">
               <div class="texttab">
                <div class="textleft">
                  <el-form :model="form">
                    <el-form-item
                      label="活动名称"
                      :label-width="formLabelWidth"
                    >
                      <el-input
                        v-model="form.name"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="活动名称"
                      :label-width="formLabelWidth"
                    >
                      <div ref="div1"></div>
                    </el-form-item>
                    <el-form-item
                      label="活动名称"
                      :label-width="formLabelWidth"
                    >
                      <el-input
                        v-model="form.name"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="活动名称"
                      :label-width="formLabelWidth"
                    >
                      <el-input
                        v-model="form.name"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="活动名称"
                      :label-width="formLabelWidth"
                    >
                      <el-input
                        v-model="form.name"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="textright">
                  <div class="preview">
                    <div class="previewtop">预览</div>
                    <div v-html="article"></div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-dialog>
      </div>
      <div class="header-right">
        <div class="header-choice">
          <el-button class="queryAt">删除</el-button>
          <el-button class="queryAt" @click="screenBtn"
            >筛选<i class="el-icon-caret-bottom"></i
          ></el-button>
        </div>
        <el-input
          placeholder="请输入物料ID 物料名称或物料内容"
          prefix-icon="el-icon-search"
          v-model="input2"
          class="ipt"
        >
        </el-input>
      </div>
    </div>
    <div class="screen">
      <div class="screeen_top">
        <div class="screen_top-r">
          <label for="" class="lab">类型</label>
          <el-select v-model="value" placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="screen_top-r">
          <label for="" class="lab">尺寸</label>
          <el-select v-model="value" placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="screen_top-r">
        <label for="" class="lab">广告</label>
        <el-select v-model="value" placeholder="请选择广告" class="labwidth">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="main">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="ID" width="180">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="广告物料名称"> </el-table-column>
        <el-table-column
          prop="address"
          label="广告物料预览"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="尺寸"
          show-overflow-tooltip
          width="220"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="类型"
          show-overflow-tooltip
          width="240"
        >
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip width="240">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button
            >
            <el-button
              size="mini"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <div>
      <div>展示的内容:</div>
      <div v-html="article"></div>
    </div> -->
    <!-- <div ref="div1"></div> -->
    <!-- <textarea id="text1" style="width: 100%; height: 200px"></textarea> -->
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  data() {
    return {
      input2: "",
      activeName: "first",
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
      article: null,
    };
  },
  created() {
    this.$nextTick(() => {
      const editor = new E(this.$refs.div1);
      editor.config.onchange = (html) => {
        // 第二步，监控变化，同步更新到 textarea
        // $text1.val(html);
        console.log(html);
        this.article = html;
      };
      editor.create();
    });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    screenBtn() {},
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  & .query {
    background-color: #ff4070;
    color: #fff3f6;
    width: 250px;
  }
  & .header-right {
    width: 83%;
    background: #eceff6;
    display: flex;
    justify-content: space-between;
    min-width: 580px;
    & .ipt {
      width: 350px;
      margin-right: 50px;
    }
    & .queryAt {
      background-color: #eceff6;
    }
  }
}
::v-deep .el-button {
  border-radius: 0px;
}
::v-deep .el-input__inner {
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
}
::v-deep .el-input__icon {
  height: 30px;
}
.screen {
  min-height: 20vh;
  border: 1px solid #ccc;
  margin-top: 15px;
  & .lab {
    margin-right: 25px;
    color: #aeb1b6;
  }
  & .screeen_top {
    display: flex;
  }
}
.screen_top-r {
  margin-left: 50px;
  margin-top: 30px;
}
.labwidth {
  width: 545px;
}
.main {
  margin-top: 15px;
}

::v-deep .el-input__icon {
  height: 40px;
}
::v-deep .el-dialog {
  width: 60%;
  height: 60%;
}
.texttab {
  display: flex;
  justify-content: space-around;
}
.textleft {
  width: 60%;
}
.preview {
  height: 320px;
  width: 280px;
  border: 1px solid #ccc;
  & .previewtop {
    background-color: #f6f7fb;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
  }
}
</style>