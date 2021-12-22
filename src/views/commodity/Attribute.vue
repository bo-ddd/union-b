<template>
  <div>
    <!-- ProductParameters商品属性 -->
    <div class="main">
      <div class="mains">
      <!-- <h1 class="h1">属性项信息</h1>
      <div class="message">
        <div class="main-top">
          <el-form ref="form" :model="form" label-width="90px">
  <el-form-item label="属性项名称:" class="top">
    <el-input v-model="form.name" class="el-input__inners"></el-input>
  </el-form-item>
  <el-form-item label="属性项多选:" class="middle">
    <el-checkbox-group v-model="form.choice">
      <el-checkbox label="启用" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>

  <el-form-item label="属性项必选:">
    <el-checkbox-group v-model="form.required">
      <el-checkbox label="启用" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</el-form>
        </div>
      </div> -->
      <h1 class="h1">属性值列表</h1>
      <div class="list">
        <el-button type="primary" @click="dialogFormVisible = true" class="button">新增属性</el-button>
        <el-dialog title="新增属性" :visible.sync="dialogFormVisible">
  <el-form :model="forms">
    <el-form-item label="属性名称" :label-width="formLabelWidth">
      <el-input v-model="forms.name" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="类型" :label-width="formLabelWidth" class="form-money">
      <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in option"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-form-item>
    <el-form-item label="类目" :label-width="formLabelWidth" class="form-money">
      <el-select v-model="value" filterable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="index" label="id" width="100" align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="属性"
        align="center"
        >
        <!-- <template>
          <input type="text" class="property" v-model="name">
        </template> -->
      </el-table-column>
      <el-table-column prop="input" label="属性值"  align="center">
        <!-- <template>
          <input type="text" class="inp" v-model="input">
        </template> -->
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        align="center"
        >
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">置顶</el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">向上</el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">向下</el-button>
      </template>
      </el-table-column>
      <el-table-column
        prop="operate"
        label="操作"
        align="center"
        >
        <!-- <template slot-scope="scope">
          <el-button size="mini">{{scope.row.redact}}</el-button>
          <el-button size="mini" type="danger" @click="remove(scope)">{{scope.row.delete}}</el-button>
        </template> -->
        <template slot-scope="scope">
        <el-button
          size="mini">编辑</el-button>
        <!-- <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">向上</el-button> -->
        <el-button
          size="mini"
          type="danger"
          @click="remove(scope)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
      </div>
      </div>
      <el-footer><el-button type="primary">保存</el-button></el-footer>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
      return {
        option: [{
          value: '选项1',
          label: '属性'
        }, {
          value: '选项2',
          label: '参数'
        }],
        options: [{
          value: '选项1',
          label: '电子'
        }, {
          value: '选项2',
          label: '电器'
        }, {
          value: '选项3',
          label: '服装'
        }, {
          value: '选项4',
          label: '食品'
        },
        ],
        value: '',
        dialogFormVisible: false,
        formLabelWidth: '120px',
        forms: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        form: {
          name: '',
          choice: '',
          required: '',
        },
        tableData: [{
            name:'型号',
            input:'FX86'
          }, {
            name:'分辨率',
            input:'1920*1080'
          }, {
            name:'尺寸',
            input:'15.6英寸'
          }, {
            name:'刷新率',
            input:'60HZ (1/秒)'
          },
          {
            name:'显卡',
            input:'独立显卡'
          },
          {
            name:'运行内存',
            input:'8G'
          },
          {
            name:'硬盘容量',
            input:'256G'
          }
          ]
      }
    },
    methods: {
      ...mapActions(["getAttributeList"]),
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      remove(data){
        console.log(data.$index);
       this.tableData.splice(data.$index,1) 
      }
  },
  async created(){
    let getAttributeList = await this.getAttributeList();
    console.log(getAttributeList);
  } 
}
</script>

<style lang="scss" scoped>
.main{
  height: calc(100vh - 100px);
  overflow-y: auto;
  min-height: 77vh;
  background: #ffffff;
}
.mains{
  margin: 0 20px;
}
.message{
  width: 100%;
  border-top: 2px solid #e5e5e5;
}
.h1{
  margin: 20px 0;
}
.top{
  margin-top: 20px;
}
.el-input__inners {
  width: 200px;
}
.list{
  width: 100%;
  border-top: 2px solid #e5e5e5;
}
.button{
  margin: 10px 0;
}
.inp{
  border: 1px solid #d8dce5;
  width: 50px;
  height: 32px;
  border-radius: 5px;
  text-align: center;
}
.property{
  border: 1px solid #d8dce5;
  width: 130px;
  height: 32px;
  text-indent: 15px;
  border-radius: 5px;
}
.iconimg{
  width: 15px;
  height: 15px;
  margin: 5px;
}
.el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-form-item {
    margin-bottom: 0px;
}
.middle{
  margin-top: 20px;
}
::v-deep .el-table__header-wrapper{
  font-size: 17px;
}
.form-money{
  margin:20px 0;
}
</style>