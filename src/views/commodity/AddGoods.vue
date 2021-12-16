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
              <el-form-item label="商品分类">
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
                  v-model="text"
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
              <el-form-item label="名称">
                <el-input v-model="formLabelAlign.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input v-model="formLabelAlign.type"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
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
  & > .m_top {
    padding: 20px;
    padding-left: 0px;
    font-weight: 700;
  }
  & > .m_header {
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
.m_h_top {
  margin-left: 20px;
  padding: 20px 20px 20px 0px;
  border-bottom: 1px solid #ebe9e9;
}
.m_centenr {
  display: flex;
  margin-top: 20px;
  background: #ffffff;
  width: 100%;
  flex-direction: column;
}
.el-form-item {
  margin-bottom: 10px;
}
::v-deep .el-input__inner {
  height: 28px !important;
  line-height: 28px !important;
  margin-right: 20px;
}
</style>