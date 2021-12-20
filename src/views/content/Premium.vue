<template>
  <div class="wrap">
     <div class="header">
         <div class="header-title">
         <div class="block">
  <span class="demonstration">地区筛选</span>
   <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</div>
    <div class="block">
         <el-button class="query">查询</el-button>
         <el-button>重置</el-button>
    </div>
         </div>
         <div class="header-center">
             <el-button class="query" icon="el-icon-plus">新增商品</el-button>
         </div>
     </div>
    <div class="main">
         <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="名称"
      width="280">
    </el-table-column>
    <el-table-column
      prop="num"
      label="排序"
      width="180">
    </el-table-column>
    <el-table-column
      prop="num"
      label="关联商品数量">
    </el-table-column>
    <el-table-column
      prop="address"
      label="展示区域">
    </el-table-column>
    <el-table-column
      prop="num"
      label="播放量"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="120">
         <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
    </el-table-column>
  </el-table>
    </div>

    <el-dialog title="编辑炫萌优品" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="视频名称" :label-width="formLabelWidth" class="asterisk">
        <el-input type="text" placeholder="填写视频名称(不超过60个字符)" v-model="text" maxlength="60" show-word-limit>
        </el-input>
    </el-form-item>
    <el-form-item label="视频链接" :label-width="formLabelWidth" class="asterisk">
    <el-select v-model="value"  placeholder="请填写完整的视频链接">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
  </el-select>
    </el-form-item>
    <el-form-item label="排序" :label-width="formLabelWidth" >
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="上传封面" :label-width="formLabelWidth" class="asterisk">
      <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
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
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
    </el-form-item>
    <el-form-item label="销售区域" :label-width="formLabelWidth" class="mb-5 asterisk">
        <el-button  @click="dialogFormVisible1 = true">添加省区</el-button>
    </el-form-item>
    <span class="pattern">已选省区:{{checkedlist}}</span>
    <el-form-item label="关联商品" :label-width="formLabelWidth" class="asterisk">
         <el-button>选择商品</el-button>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button class="query" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
<el-dialog title="请选择省区" :visible.sync="dialogFormVisible1" >
  <el-checkbox-group  v-model="checkedlist" @change='gettext'>
    <el-checkbox v-for="key in arr" :key="key.model" :label="key.label">{{key.text}}</el-checkbox>
  </el-checkbox-group>
  
</el-dialog>
  </div>
</template>
<script>
export default {
    data() {
      return {
        checkedlist : [],
        value: [],
        options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
        }],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          num:1,
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
           num:1,
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
           num:1,
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
           num:1,
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        dialogFormVisible: false,
        dialogFormVisible1: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        text:'',
        imageUrl: '',
        checked: true,
        arr : [],
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      };
    },
    created () {
        this.arr.push(
          {
            text : '山西省',
            label : '山西省',
          },
          {
            text : '山东省',
            label : '山东省',
          }
        )
    },
    methods: {
        gettext(value){
          console.log(typeof value);
          this.checkedlist.push(value.shift());
          // this.checkedlist.push()
        },
        handleChange(value) {
            console.log(value);
        },
      
     handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
      
    }
  }
</script>

<style lang="scss" scoped>
.wrap{
  height: calc(100vh - 100px);
  overflow-y:auto;
}
.asterisk{
  position: relative;
}
.asterisk::before{
  position: absolute;
  content: '*';
  color: #f56c6c;
  left: 40px;
  top: 15px;
}
.mb-5{
    margin-bottom: 5px;
}
::v-deep .el-dialog__header , .dialog-footer{
    text-align: center;
}
::v-deep .el-dialog__title{
    font-weight: 700;
}
.query{ 
         background-color: #ff4070;
         color: #fff3f6;
      }
.header{
    min-height:15vh;
    padding: 20px 15px;
     & .header-title{
      display: flex;
      justify-content: space-between;
      & .demonstration{
          margin-right: 10px;  
          color: #b4b4b4;  
      }  
    }
    & .header-center{
        margin-top: 30px;
    }
  }
 .main {
    background-color: #E9EEF3;
    color: #333;
  }

//   ::v-deep .is-leaf{
//       text-align: center;
//   }

  ::v-deep .el-table__row  .el-table_1_column_1{
      text-align: left;
  }
  ::v-deep .el-table__row  .el-table_1_column_3 {
    padding-left: 70px;
  }
  ::v-deep .el-table__row  .el-table_1_column_5 {
    padding-left: 30px;
  }
 ::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell {
     background-color: #fcf9fa;
  }
 ::v-deep .el-table__footer-wrapper, .el-table__header-wrapper {
      background-color: #fcf9fa;
     }
 
::v-deep .el-upload{
    border: 1px dashed #d9d9d9;
}
.mb-20{
    margin-bottom: 20px;
}
.pattern{
    display: inline-block;
    margin-left: 135px;
    margin-bottom: 10px;
}
</style>