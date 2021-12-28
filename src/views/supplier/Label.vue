<template>
  <div>
      <!-- LabelManagement -->
      <div class="wrap">
      <!-- <div class="title">
        <span>标签管理</span>
      </div> -->
      <div class="content">
        <div class="new-module">
          <h3>商品管理</h3>
          <div class="tag-group">
  <span class="tag-group__title">商品管理</span>
  <el-tag class="spans"
  :key="tag"
  v-for="tag in management"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加标签</el-button>
</div>

<div class="tag-group">
  <span class="tag-group__title">商品分类</span>
  <el-tag class="spans"
  :key="tags"
  v-for="tags in classify"
  closable
  :disable-transitions="false"
  @close="handleCloses(tags)">
  {{tags}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles"
  v-model="inputValues"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms"
  @blur="handleInputConfirms"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs">+ 添加标签</el-button>
</div>

<div class="tag-group">
  <span class="tag-group__title">商品参数</span>
  <el-tag class="spans"
  :key="tag1"
  v-for="tag1 in parameter"
  closable
  :disable-transitions="false"
  @close="handleCloses1(tag1)">
  {{tag1}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles1"
  v-model="inputValues1"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms1"
  @blur="handleInputConfirms1"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs1">+ 添加标签</el-button>
</div>

<div class="tag-group">
  <span class="tag-group__title">商品属性</span>
  <el-tag class="spans"
  :key="tag2"
  v-for="tag2 in property"
  closable
  :disable-transitions="false"
  @close="handleCloses2(tag2)">
  {{tag2}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles2"
  v-model="inputValues2"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms2"
  @blur="handleInputConfirms2"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs2">+ 添加标签</el-button>
</div>

<div class="tag-group">
  <span class="tag-group__title">规格管理</span>
  <el-tag class="spans"
  :key="tag3"
  v-for="tag3 in specification"
  closable
  :disable-transitions="false"
  @close="handleCloses3(tag3)">
  {{tag3}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles3"
  v-model="inputValues3"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms3"
  @blur="handleInputConfirms3"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs3">+ 添加标签</el-button>
</div>

<div class="tag-group">
  <span class="tag-group__title">品牌管理</span>
  <el-tag class="spans"
  :key="tag4"
  v-for="tag4 in brand"
  closable
  :disable-transitions="false"
  @close="handleCloses4(tag4)">
  {{tag4}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles4"
  v-model="inputValues4"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms4"
  @blur="handleInputConfirms4"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs4">+ 添加标签</el-button>
</div>
        </div>

        <div class="new-module">
          <h3>订单管理</h3>
          <div class="tag-group">
  <span class="tag-group__title">订单列表</span>
  <el-tag class="spans"
  :key="tag5"
  v-for="tag5 in list"
  closable
  :disable-transitions="false"
  @close="handleCloses5(tag5)">
  {{tag5}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles5"
  v-model="inputValues5"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms5"
  @blur="handleInputConfirms5"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs5">+ 添加标签</el-button>
</div>

          <div class="tag-group">
  <span class="tag-group__title">订单处理</span>
  <el-tag class="spans"
  :key="tag6"
  v-for="tag6 in dispose"
  closable
  :disable-transitions="false"
  @close="handleCloses6(tag6)">
  {{tag6}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles6"
  v-model="inputValues6"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms6"
  @blur="handleInputConfirms6"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs6">+ 添加标签</el-button>
</div>
        </div>
        <div class="new-module">
          <h3>供应商</h3>
          <div class="tag-group">
  <span class="tag-group__title">供应商管理</span>
  <el-tag class="spans"
  :key="tag7"
  v-for="tag7 in supplier"
  closable
  :disable-transitions="false"
  @close="handleCloses7(tag7)">
  {{tag7}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles7"
  v-model="inputValues7"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms7"
  @blur="handleInputConfirms7"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs7">+ 添加标签</el-button>
</div>
        </div>

        <div class="new-module">
          <h3>BD管理</h3>
          <div class="tag-group">
  <span class="tag-group__title">BD管理</span>
  <el-tag class="spans"
  :key="tag8"
  v-for="tag8 in BDmanagement"
  closable
  :disable-transitions="false"
  @close="handleCloses8(tag8)">
  {{tag8}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles8"
  v-model="inputValues8"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms8"
  @blur="handleInputConfirms8"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs8">+ 添加标签</el-button>
</div>

          <div class="tag-group">
  <span class="tag-group__title">推广管理</span>
  <el-tag class="spans"
  :key="tag9"
  v-for="tag9 in Marketingmanagement"
  closable
  :disable-transitions="false"
  @close="handleCloses9(tag9)">
  {{tag9}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles9"
  v-model="inputValues9"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms9"
  @blur="handleInputConfirms9"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs9">+ 添加标签</el-button>
</div>
        </div>
        <div class="new-module">
          <h3>营销管理</h3>
          <div class="tag-group">
  <span class="tag-group__title">特卖管理</span>
  <el-tag class="spans"
  :key="tag10"
  v-for="tag10 in Salemanagement"
  closable
  :disable-transitions="false"
  @close="handleCloses10(tag10)">
  {{tag10}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles10"
  v-model="inputValues10"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms10"
  @blur="handleInputConfirms10"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs10">+ 添加标签</el-button>
</div>

<div class="tag-group">
  <span class="tag-group__title">秒杀管理</span>
  <el-tag class="spans"
  :key="tag11"
  v-for="tag11 in Secondskillmanagement"
  closable
  :disable-transitions="false"
  @close="handleCloses11(tag11)">
  {{tag11}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles11"
  v-model="inputValues11"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms11"
  @blur="handleInputConfirms11"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs11">+ 添加标签</el-button>
</div>

<div class="tag-group">
  <span class="tag-group__title">会销管理</span>
  <el-tag class="spans"
  :key="tag12"
  v-for="tag12 in Willpinmanagement"
  closable
  :disable-transitions="false"
  @close="handleCloses12(tag12)">
  {{tag12}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles12"
  v-model="inputValues12"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms12"
  @blur="handleInputConfirms12"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs12">+ 添加标签</el-button>
</div>

<div class="tag-group">
  <span class="tag-group__title">优惠券</span>
  <el-tag class="spans"
  :key="tag13"
  v-for="tag13 in discount"
  closable
  :disable-transitions="false"
  @close="handleCloses13(tag13)">
  {{tag13}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles13"
  v-model="inputValues13"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms13"
  @blur="handleInputConfirms13"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs13">+ 添加标签</el-button>
</div>
        </div>
        <div class="new-module">
          <h3>代理管理</h3>
          <div class="tag-group">
  <span class="tag-group__title">代理管理</span>
  <el-tag class="spans"
  :key="tag14"
  v-for="tag14 in Agentmanagement"
  closable
  :disable-transitions="false"
  @close="handleCloses14(tag14)">
  {{tag14}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisibles14"
  v-model="inputValues14"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirms14"
  @blur="handleInputConfirms14"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInputs14">+ 添加标签</el-button>
</div>
        </div>
      </div>
      <el-footer>
        <el-button>保存</el-button>
        <el-button type="primary">提交</el-button>
        </el-footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
      return {
        management: ['商品查看', '商品审核'],
        classify: ['商品分类查看'],
        parameter:['商品参数查看','商品参数编辑'],
        property:['商品属性查看','商品属性编辑'],
        specification:['规格查看','规格编辑'],
        brand:['品牌查看','品牌编辑'],
        list:['订单管理','待审核订单','待支付订单','待发货订单','待收货订单','已完成订单','已取消订单','订单导出','订单删除'],
        dispose:['收款管理','发货管理','发货单删除','平台收货','线下转账订单','转账支付','异常支付订单','异常支付操作'],
        supplier:['供应商管理'],
        BDmanagement:['BD账号查看','BD账号编辑','BD账号导入','BD推广明细','BD推广管理',],
        Marketingmanagement:['BD推广明细查看','BD推广数据导出','BD推广管理查看','BD推广管理编辑',],
        Salemanagement:['特卖查看','特卖编辑'],
        Secondskillmanagement:['秒杀查看','秒杀新增编辑','秒杀关联商品','秒杀发布','秒杀删除',],
        Willpinmanagement:['会销查看','会销编辑'],
        discount:['优惠券管理'],
        Agentmanagement:['代理管理','品牌招商'],
        inputVisible: false,
        inputVisibles: false,
        inputVisibles1: false,
        inputVisibles2: false,
        inputVisibles3: false,
        inputVisibles4: false,
        inputVisibles5: false,
        inputVisibles6: false,
        inputVisibles7: false,
        inputVisibles8: false,
        inputVisibles9: false,
        inputVisibles10: false,
        inputVisibles11: false,
        inputVisibles12: false,
        inputVisibles13: false,
        inputVisibles14: false,
        inputValue: '',
        inputValues: '',
        inputValues1: '',
        inputValues2: '',
        inputValues3: '',
        inputValues4: '',
        inputValues5: '',
        inputValues6: '',
        inputValues7: '',
        inputValues8: '',
        inputValues9: '',
        inputValues10: '',
        inputValues11: '',
        inputValues12: '',
        inputValues13: '',
        inputValues14: '',
      };
    },
    methods: {
      ...mapActions(["createLable"]),
      handleClose(tag) {
        this.management.splice(this.management.indexOf(tag), 1);
      },
      handleCloses(tag) {
        this.classify.splice(this.classify.indexOf(tag), 1);
      },
      handleCloses1(tag) {
        this.parameter.splice(this.parameter.indexOf(tag), 1);
      },
      handleCloses2(tag) {
        this.property.splice(this.property.indexOf(tag), 1);
      },
      handleCloses3(tag) {
        this.specification.splice(this.specification.indexOf(tag), 1);
      },
      handleCloses4(tag) {
        this.brand.splice(this.brand.indexOf(tag), 1);
      },
      handleCloses5(tag) {
        this.list.splice(this.list.indexOf(tag), 1);
      },
      handleCloses6(tag) {
        this.dispose.splice(this.dispose.indexOf(tag), 1);
      },
      handleCloses7(tag) {
        this.supplier.splice(this.supplier.indexOf(tag), 1);
      },
      handleCloses8(tag) {
        this.BDmanagement.splice(this.BDmanagement.indexOf(tag), 1);
      },
      handleCloses9(tag) {
        this.Marketingmanagement.splice(this.Marketingmanagement.indexOf(tag), 1);
      },
      handleCloses10(tag) {
        this.Salemanagement.splice(this.Salemanagement.indexOf(tag), 1);
      },
      handleCloses11(tag) {
        this.Secondskillmanagement.splice(this.Secondskillmanagement.indexOf(tag), 1);
      },
      handleCloses12(tag) {
        this.Willpinmanagement.splice(this.Willpinmanagement.indexOf(tag), 1);
      },
      handleCloses13(tag) {
        this.discount.splice(this.discount.indexOf(tag), 1);
      },
      handleCloses14(tag) {
        this.Agentmanagement.splice(this.Agentmanagement.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs() {
        this.inputVisibles = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs1() {
        this.inputVisibles1 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs2() {
        this.inputVisibles2 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs3() {
        this.inputVisibles3 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs4() {
        this.inputVisibles4 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs5() {
        this.inputVisibles5 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs6() {
        this.inputVisibles6 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs7() {
        this.inputVisibles7 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs8() {
        this.inputVisibles8 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs9() {
        this.inputVisibles9 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs10() {
        this.inputVisibles10 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs11() {
        this.inputVisibles11 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          // console.log(this.$refs.saveTagInput.$refs.input.focus());
          console.log(_);
        });
      },
      showInputs12() {
        this.inputVisibles12 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs13() {
        this.inputVisibles13 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },
      showInputs14() {
        this.inputVisibles14 = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
          console.log(_);
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.getAdd(inputValue);
          this.management.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      handleInputConfirms() {
        let inputValues = this.inputValues;
        if (inputValues) {
          this.getAdd(inputValues);
          this.classify.push(inputValues);
        }
        this.inputVisibles = false;
        this.inputValues = '';
      },
      handleInputConfirms1() {
        let inputValues1 = this.inputValues1;
        if (inputValues1) {
          this.getAdd(inputValues1);
          this.parameter.push(inputValues1);
        }
        this.inputVisibles1 = false;
        this.inputValues1 = '';
      },
      handleInputConfirms2() {
        let inputValues2 = this.inputValues2;
        if (inputValues2) {
          this.getAdd(inputValues2);
          this.property.push(inputValues2);
        }
        this.inputVisibles2 = false;
        this.inputValues2 = '';
      },
      handleInputConfirms3() {
        let inputValues3 = this.inputValues3;
        if (inputValues3) {
          this.getAdd(inputValues3);
          this.specification.push(inputValues3);
        }
        this.inputVisibles3 = false;
        this.inputValues3 = '';
      },
      handleInputConfirms4() {
        let inputValues4 = this.inputValues4;
        if (inputValues4) {
          this.getAdd(inputValues4);
          this.brand.push(inputValues4);
        }
        this.inputVisibles4 = false;
        this.inputValues4 = '';
      },
      handleInputConfirms5() {
        let inputValues5 = this.inputValues5;
        if (inputValues5) {
          this.getAdd(inputValues5);
          this.list.push(inputValues5);
        }
        this.inputVisibles5 = false;
        this.inputValues5 = '';
      },
      handleInputConfirms6() {
        let inputValues6 = this.inputValues6;
        if (inputValues6) {
          this.getAdd(inputValues6);
          this.dispose.push(inputValues6);
        }
        this.inputVisibles6 = false;
        this.inputValues6 = '';
      },
      handleInputConfirms7() {
        let inputValues7 = this.inputValues7;
        if (inputValues7) {
          this.getAdd(inputValues7);
          this.supplier.push(inputValues7);
        }
        this.inputVisibles7 = false;
        this.inputValues7 = '';
      },
      handleInputConfirms8() {
        let inputValues8 = this.inputValues8;
        if (inputValues8) {
          this.getAdd(inputValues8);
          this.BDmanagement.push(inputValues8);
        }
        this.inputVisibles8 = false;
        this.inputValues8 = '';
      },
      handleInputConfirms9() {
        let inputValues9 = this.inputValues9;
        if (inputValues9) {
          this.getAdd(inputValues9);
          this.Marketingmanagement.push(inputValues9);
        }
        this.inputVisibles9 = false;
        this.inputValues9 = '';
      },
      handleInputConfirms10() {
        let inputValues10 = this.inputValues10;
        if (inputValues10) {
          this.getAdd(inputValues10);
          this.Salemanagement.push(inputValues10);
        }
        this.inputVisibles10 = false;
        this.inputValues10 = '';
      },
      handleInputConfirms11() {
        let inputValues11 = this.inputValues11;
        // console.log(inputValues11);
        if (inputValues11) {
          this.getAdd(inputValues11);
          this.Secondskillmanagement.push(inputValues11);
        }
        this.inputVisibles11 = false;
        this.inputValues11 = '';
      },
      handleInputConfirms12() {
        let inputValues12 = this.inputValues12;
        if (inputValues12) {
          this.getAdd(inputValues12);
          this.Willpinmanagement.push(inputValues12);
        }
        this.inputVisibles12 = false;
        this.inputValues12 = '';
      },
      handleInputConfirms13() {
        let inputValues13 = this.inputValues13;
        if (inputValues13) {
          this.getAdd(inputValues13);
          this.discount.push(inputValues13);
        }
        this.inputVisibles13 = false;
        this.inputValues13 = '';
      },
      handleInputConfirms14() {
        let inputValues14 = this.inputValues14;
        if (inputValues14) {
          this.getAdd(inputValues14);
          this.Agentmanagement.push(inputValues14);
        }
        this.inputVisibles14 = false;
        this.inputValues14 = '';
      },
      async getAdd(value){
        let res = await this.createLable({lableName:value});
        console.log(res);
      }
    },
    // async created() {
      // let res = await this.createLable();
      // console.log(res);
    // }
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fcf9fa;
  height: calc(100vh - 100px);
  overflow-y: auto;
}
.content {
    background-color: #ffffff;
}
.new-module {
      padding: 20px;
}
.el-tag + .el-tag {
    margin-left: 10px;
    margin-top: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    margin-top: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    margin-top: 10px;
    vertical-align: bottom;
  }
.tag-group{
  margin: 0 20px;
}
.tag-group__title{
  padding-right: 10px;
  color: #a4a4a4;
}
.el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-tag--small {
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
}
</style>