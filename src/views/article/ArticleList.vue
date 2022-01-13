<template>
  <div class="wrap">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width=" 50"> </el-table-column>
      <el-table-column prop="createdAt" label="创建日期" width="230">
      </el-table-column>
      <el-table-column prop="articleTitle" label="文章标题" width="230">
      </el-table-column>
      <el-table-column prop="articleContent" label="文章内容" width="230">
       <template slot-scope="scope">
        <div v-html="scope.row.articleContent"></div>
       </template>
      </el-table-column>
      <el-table-column prop="updatedAt" label="更改日期" width="200">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button class="button" @click="find(scope.row)" type="text"
            >查看</el-button
          >
          <!-- <el-button class="button" @click="update(scope.row)" type="text">更改</el-button> -->
          <el-button type="text" @click="update(scope.row)">更改</el-button>
           <el-button class="button" @click="remove(scope.row)" type="text"
            >移除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input v-model="articleTitle" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文字内容" :label-width="formLabelWidth">
        </el-form-item>
            <div ref="editor" @input="change"></div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="modify"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import E from "wangeditor";
import { mapActions } from "vuex";
import { getTime } from "../../assets/until/until";
export default {
  data() {
    return {
      id: "",
      tableData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
       articleContent: null,
       cont:0,
       articleTitle:"",
      //  articleContent:""
    };
  },
  props:['value'],
  created() {
    this.list();
  },
  methods: {
    ...mapActions(["getArticleList", "deleteArticle", "updateArticle"]),
    async list() {
      let allList = await this.getArticleList();
      console.log(allList);
      allList.data.rows.forEach((fs) => {
        fs.createdAt = getTime(new Date(fs.createdAt).getTime());
        fs.updatedAt = getTime(new Date(fs.updatedAt).getTime());
      });
      this.tableData = allList.data.rows;
    },
    async remove(target) {
      let deleteArticle = await this.deleteArticle({ id: target.id });
      console.log(deleteArticle);
      this.list();
    },
    async find(target) {
      console.log(target);
      this.$router.push({
        path: "./Details",
        query: {
          target: target,
        },
      });
    },
 
    async update(a) {
      console.log(a);
      this.articleTitle=a.articleTitle;
      this.articleContent=a.articleContent
      this.id = a.id
      this.dialogFormVisible = true;
      this.initEditor();
    },
    initEditor() {
      this.cont++;
      if(this.cont!=1) return;
     
      this.$nextTick(() => {
        const editor = new E(this.$refs.editor);
        editor.config.onchange = (html) => {
          // 第二步，监控变化，同步更新到 textarea
          // $text1.val(html);
          this.articleContent = html;
        };
        editor.create();
        editor.txt.html(this.value) 
      });
    },
   change(e){
      this.$$emit('input',e.target.innerHTML)
    },
    async modify() {
     this.dialogFormVisible = false;
      let res = await this.updateArticle({
        id: this.id,
        articleContent: this.articleContent,
        articleTitle: this.articleTitle,
      });
      console.log(res);
      this.list();
    },
  },
};
</script>

<style>
.wrap {
  padding: 20px;
  background-color: #fff;
}
.el-dialog__body{
  padding: 0px 20px;
}
.el-table .cell{
  text-align: center;
}
</style>