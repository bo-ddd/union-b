<template>
  <div>
     <div class="wrap">
       <div class="main-classify">
       <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="分类名称" prop="name">
    <el-input  size="small" v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="上级分类" prop="name">
<el-popover
  placement="bottom"
  width="400"
  trigger="click">
  <div class="superior-classify" style="height:200px">
 <el-input
    placeholder="请输入内容"
     size="small"
    style="width:80%">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
<div class="block" style="margin-top:10px">
  <span class="demonstration"></span>
  <el-cascader
    v-model="value"
    :options="options"
    @change="handleChange"></el-cascader>
</div>
  </div>
   <el-select slot="reference" v-model="value"  size="small" style="width:100%">
     
   </el-select>
</el-popover>
  </el-form-item>
 <!-- <el-form-item label="商品模板" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
 <el-form-item label="排序号" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
 <el-form-item label="订单推荐分类" prop="name">
     <el-radio v-model="radio1" label="1">是</el-radio>
  <el-radio v-model="radio1" label="0">否</el-radio>
  </el-form-item>
 <el-form-item label="商城前端显示" prop="name">
     <el-radio v-model="radio2" label="1">是</el-radio>
  <el-radio v-model="radio2" label="0">否</el-radio>
  </el-form-item>
   <el-form-item label="页面标题" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="分享说明" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item> -->
   <el-form-item class="classify-img" label="分类图片" prop="name">
      <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>

</el-form>
       </div>
          <div class="minor-classify">
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <!-- <el-form-item label="分类编码" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="商家编码" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="管理分类" prop="name">
<el-popover
  placement="bottom"
  width="400"
  trigger="click">
  <div class="superior-classify" style="height:200px">
 <el-input
    placeholder="请输入内容"
    style="width:80%">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
<div class="block" style="margin-top:10px">
  <span class="demonstration"></span>
  <el-cascader
    v-model="value"
    :options="options"
    @change="handleChanges"></el-cascader>
</div>
  </div>
   <el-select slot="reference" v-model="value"  style="width:100%">
     
   </el-select>
</el-popover>
  </el-form-item>
 <el-form-item label="商城推荐分类" prop="name">
     <el-radio v-model="radio3" label="1">是</el-radio>
  <el-radio v-model="radio3" label="0">否</el-radio>
  </el-form-item>
 <el-form-item label="订货前端显示" prop="name">
     <el-radio v-model="radio4" label="1">是</el-radio>
  <el-radio v-model="radio4" label="0">否</el-radio>
  </el-form-item>
 <el-form-item label="触屏端开单显示" prop="name">
     <el-radio v-model="radio5" label="1">是</el-radio>
  <el-radio v-model="radio5" label="0">否</el-radio>
  </el-form-item>
   <el-form-item label="SEO关键字" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="SEO描述" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item> -->
   <el-form-item class="poster-classify" label="广告图片" prop="name">
   <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>

</el-form>
        </div>
     </div>
  </div>
</template>

<script>
export default {
 data() {
      return {
         dialogImageUrl: '',
        dialogVisible: false,
        radio1:'1',
          radio2:'1',
        radio3:'1',
          radio4:'1',
        radio5:'1',
        value:'',
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
         options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleChange(){
        console.log('a')
      },
      handleChanges(){
        console.log('b')
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="scss" scoped>
.wrap{
  height: calc(100vh - 100px);
  overflow-y:auto;
  & .main-classify,.minor-classify{
      background-color: #fff;
    & .el-form{
      padding:20px 10px ;
      & .el-form-item{
        margin-bottom: 20px;
        padding: 0px 10px;
      }
    }
  }
  & .minor-classify{
    margin-top: 30px;
  }
}
::v-deep .el-form-item__label{
  font-size: 12px;
}
.classify-img,.poster-classify{
  margin-bottom: 0 !important;
}
</style>