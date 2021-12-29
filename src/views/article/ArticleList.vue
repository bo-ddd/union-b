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
          @click="remove(scope.row)"
          type="text"
          >
          移除
        </el-button>
        <el-button class="button"
          @click="find(scope.row)"
          type="text"
          >
          查看
        </el-button>
        <el-button class="button"
          @click="update"
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
    data() {
      return{
        id :'',
        articleTitle:'我是标题',
        articleContent:'我是内容',
        tableData:[],

      }
    },
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
        this.tableData = allList.data.rows;
      },
      async remove(target){
        let deleteArticle = await this.deleteArticle({id :target.id });
        console.log(deleteArticle)
        this.list();
      },
      async find(target){
        console.log(target);
        this.$router.push({ 
          path:'./Details',
          query:{
            target:target,
          }
        })
      },
      async update(){
        let updateArticle = await this.updateArticle();
        console.log(updateArticle)                                                                                                                                                                                                                                                                     
      },
      ellipsis(a){
        if(a.length>10){
          return a.substring(0,10);
        }
      }
       
    },
  }
</script>

<style>
.wrap{
    padding: 20px;
}


</style>