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
         <el-button type="primary" @click="inquirygoods">查询</el-button>
         <el-button  type="primary">重置</el-button>
    </div>
         </div>
         <div class="header-center">
             <el-button type="primary" icon="el-icon-plus" @click="getshopping">新增优品</el-button>
         </div>
     </div>
    <div class="main">
         <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="名称"
      width="280">
    </el-table-column>
    <el-table-column
      prop="num"
      label="排序"
      width="180">
    </el-table-column>
    <el-table-column
      prop="goodnum"
      label="关联商品数量">
    </el-table-column>
    <el-table-column
      prop="address"
      label="展示区域">
    </el-table-column>
    <el-table-column
      prop="broadcast"
      label="播放量"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="120">
         <el-button type="primary"  @click="dialogFormVisible = true">编辑</el-button>
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
          action=""
          list-type="picture-card" 
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>


    </el-form-item>
    <el-form-item label="销售区域" :label-width="formLabelWidth" class="mb-5 asterisk">
        <el-button type="primary"  @click="dialogFormVisible1 = true">添加省区</el-button>
    </el-form-item>
    <span class="pattern">已选省区:
      <span v-for="key in checkedlist" :key="key">{{key}}&nbsp;&nbsp;&nbsp;</span>
    </span>
    <el-form-item label="关联商品" :label-width="formLabelWidth" class="asterisk">
         <el-button type="primary">选择商品</el-button>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary"  @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
<el-dialog title="请选择省区" :visible.sync="dialogFormVisible1" >
  <div class="empty" @click="emptySelect">清空已选</div>
  <el-checkbox-group  v-model="checkedlist" @change='gettext'>
    <el-checkbox v-for="key in arr" :key="key.model" :label="key.name">{{key.name}}</el-checkbox>
  </el-checkbox-group>
  
</el-dialog>

<!--新增优品-->
<el-dialog title="新增优品" :visible.sync="dialogFormVisible3">
  <el-form :model="form">
    <el-form-item label="商品名称" :label-width="formLabelWidth">
     <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-form-item>
    <el-form-item label="商品图片" :label-width="formLabelWidth">
     <el-select v-model="getgoods" placeholder="请选择">
    <el-option
      v-for="item in getgoods"
      :key="item.id"
      :label="item.title"
      :value="item.id">
    </el-option>
  </el-select>
    </el-form-item>
    <el-form-item label="展示区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible3 = false">取 消</el-button>
    <el-button type="primary" @click="newProducts">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>
<script>
import {mapActions} from "vuex";
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
          name: '奶粉通货行情',
          num:1,
          goodnum:5,
          address: '全国',
          broadcast:"92,394"
        }, {
          date: '2016-05-04',
          name: '尿不湿通货行情',
          num:2,
          goodnum:12,
          address: '北京,上海,天津',
          broadcast:"234"
        }, {
          date: '2016-05-01',
          name: '食品辅食',
          num:3,
          goodnum:22,
          address: '全国',
          broadcast:"768"
        }, {
          date: '2016-05-03',
          name: '婴幼营养',
          num:4,
          goodnum:80,
          address: '上海,天津',
          broadcast:"2,354"
        }],
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
        dialogFormVisible3: false,
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
        disabled: false,
        num : 0,
        superName:"",//商品名称
        serialNumber:[],//商品的id
        regionld:"",//展示区域
        id:""//商品id
      };
    },
    created () {
        this.arr.push(
          {
    "name": "北京市",
    "id": "110000000000"
}, {
    "name": "天津市",
    "id": "120000000000"
}, {
    "name": "河北省",
    "id": "130000000000"
}, {
    "name": "山西省",
    "id": "140000000000"
}, {
    "name": "内蒙古自治区", 
    "id": "150000000000"
}, {
    "name": "辽宁省",
    "id": "210000000000"
}, {
    "name": "吉林省",
    "id": "220000000000"
}, {
    "name": "黑龙江省",
    "id": "230000000000"
}, {
    "name": "上海市",
    "id": "310000000000"
}, {
    "name": "江苏省",
    "id": "320000000000"
}, {
    "name": "浙江省",
    "id": "330000000000"
}, {
    "name": "安徽省",
    "id": "340000000000"
}, {
    "name": "福建省",
    "id": "350000000000"
}, {
    "name": "江西省",
    "id": "360000000000"
}, {
    "name": "山东省",
    "id": "370000000000"
}, {
    "name": "河南省",
    "id": "410000000000"
}, {
    "name": "湖北省",
    "id": "420000000000"
}, {
    "name": "湖南省",
    "id": "430000000000"
}, {
    "name": "广东省",
    "id": "440000000000"
}, {
    "name": "广西壮族自治区",
    "id": "450000000000"
}, {
    "name": "海南省",
    "id": "460000000000"
}, {
    "name": "重庆市",
    "id": "500000000000"
}, {
    "name": "四川省",
    "id": "510000000000"
}, {
    "name": "贵州省",
    "id": "520000000000"
}, {
    "name": "云南省",
    "id": "530000000000"
}, {
    "name": "西藏自治区",  
    "id": "540000000000"
}, {
    "name": "陕西省",
    "id": "610000000000"
}, {
    "name": "甘肃省",
    "id": "620000000000"
}, {
    "name": "青海省",
    "id": "630000000000"
}, {
    "name": "宁夏回族自治区",
    "id": "640000000000"
}, {
    "name": "新疆维吾尔自治区",
    "id": "650000000000"
}),
this.getpremium()
    },
    methods: {
         ...mapActions(["getSuperList","superProductTradeName","superProductTradeImg","createSuperProduct","updateSuperProduct"]),
      //已选省区
        gettext(value){
          // this.checkedlist.push(value[this.num]);
          // this.num++;
          this.checkedlist = value;
        },
       async getpremium(){
        let premium=await this.getSuperList()
          console.log(premium);
        },
        //清空已选
        emptySelect(){
            this.checkedlist=[];
        },
        handleChange(value) {
            console.log(value);
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
          console.log(file.url);
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        //新增推荐优品
       async newProducts(){
          this.dialogFormVisible3 = false;
      
          //新增优品
        let suproduct= await this.createSuperProduct({
            superName:this.superName,
            serialNumber:this.serialNumber,
            regionld:this.regionld
        });
        console.log(suproduct);
        },
       async getshopping(){
          this.dialogFormVisible3 = true;
          //获取商品名称及ID
              let getgoods=await this.superProductTradeName();
              console.log(getgoods);
             let getImage=await this.superProductTradeImg({
               id:this.id
             });
             console.log(getImage);
        },
        //查询商品
        async inquirygoods(){
         let inquiry= await this.updateSuperProduct({
           id:this.id,
           superName:this.superName,
           serialNumber:this.serialNumber,
           regionld:this.regionld
         });
         console.log(inquiry);
         }
        
    }
  }
</script>

<style lang="scss" scoped>
::v-deep .el-checkbox-group{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 20px 20px;
}
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
  // top: 15px;
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
  .empty{
    text-align: right;
    margin-bottom: 20px;
    color: #ff6051;
  }
  ::v-deep .el-table__row  .el-table_1_column_3 {
    padding-left: 70px;
  }
  ::v-deep .el-table__row  .el-table_1_column_5 {
    padding-left: 30px;
  }
//  ::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell {
//      background-color: #fcf9fa;
//   }
//  ::v-deep .el-table__footer-wrapper, .el-table__header-wrapper {
//       background-color: #fcf9fa;
//      }
 
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