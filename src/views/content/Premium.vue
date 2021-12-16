<template>
  <div>
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
    <el-form-item label="视频名称" :label-width="formLabelWidth">
        <el-input type="text" placeholder="填写视频名称(不超过60个字符)" v-model="text" maxlength="60" show-word-limit>
        </el-input>
    </el-form-item>
    <el-form-item label="视频链接" :label-width="formLabelWidth">
    <el-select v-model="value"  placeholder="请填写完整的视频链接">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
  </el-select>
    </el-form-item>
    <el-form-item label="排序" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="上传封面" :label-width="formLabelWidth">
   <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </el-form-item>
    <el-form-item label="销售区域" :label-width="formLabelWidth" class="mb-5">
        <el-button  @click="dialogFormVisible1 = true">添加省区</el-button>
    </el-form-item>
    <span class="pattern">已选省区:山西 临汾</span>
    <el-form-item label="关联商品" :label-width="formLabelWidth">
         <el-button>选择商品</el-button>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button class="query" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
<el-dialog title="请选择省区" :visible.sync="dialogFormVisible1" >
  <el-form :model="form">
        <el-checkbox class="mb-20" :v-model="key.model" v-for="key in arr" :key="key.model">{{key.text}}</el-checkbox>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible1= false">取 消</el-button>
    <el-button  class="query"  @click="addProvince">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>
<script>
export default {
    data() {
      return {
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
      };
    },
    created () {
        for(var i = 0 ;i<50;i++){
            this.arr.push({
                text : '山西省',
                model : i,
            })
        }
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
        return isJPG && isLt2M;
      },
      addProvince (){
        this.dialogFormVisible1 = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
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
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
     }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
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