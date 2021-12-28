<template>
  <div class="wrap">
 <el-table
    :data="tableData"
    style="width: 100%"
   >
   <el-table-column
      prop="id"
      label="id"
      width="100">
    </el-table-column>
    <el-table-column
      prop="createdAt"
      label="创建日期"
      width="230">
    </el-table-column>
    <el-table-column
      prop="articleTitle"
      label="文章标题"
      width="230">
    </el-table-column>
    <el-table-column
      prop="articleContent"
      label="文章内容">
    </el-table-column>
    <el-table-column
      prop="updatedAt"
      label="更改日期"
      width="230">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="230">
      <template slot-scope="scope">
        <el-button class="button"
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          >
          移除
        </el-button>
        <el-button class="button"
          @click="see"
          type="text"
          >
          查看
        </el-button>
        <el-button class="button"
          @click="change"
          type="text"
          >
          更改
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {getTime} from '../../assets/until/until'
  export default {
   created(){
     this.list();

    },
    methods: {
      ...mapActions(["getArticleList","deleteArticle","updateArticle"]),
      async list(){
        let allList = await this.getArticleList();
        allList.data.rows.forEach(fs=>{
           fs.createdAt = getTime(new Date(fs.createdAt).getTime());
        })
          console.log(allList.data.rows);
        this.tableData = allList.data.rows
        console.log(this.tableData);
      },
      async see(){
        this.$router.push({
          path:'./Details'
        })
      },
      async change(){
        
      },
        deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData:[],
      }
    },
  }
</script>

<style>
.wrap{
    padding: 20px;
}


</style>