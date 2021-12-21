<template>
  <div class="wrap">
 <el-table
    :data="tableData"
    style="width: 100%"
   >
    <el-table-column
      prop="date"
      label="创建日期"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="文章标题"
      width="300">
    </el-table-column>
    <el-table-column
      prop="address"
      label="文章内容">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button class="button"
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button class="button"
          @click.native.prevent=""
          type="text"
          size="small">
          查看
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
  export default {
   created(){
     this.list();
    },
    methods: {
      ...mapActions(["getArticleList"]),
      async list(){
        let allList = await this.getArticleList();
        console.log(allList);
      },
        deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData:[]
      }
    },
  }
</script>

<style>
.wrap{
    padding: 20px;
}


</style>