<template>
  <div class="wrap">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="100"> </el-table-column>
      <el-table-column prop="createdAt" label="创建日期" width="230">
      </el-table-column>
      <el-table-column prop="articleTitle" label="文章标题" width="230">
      </el-table-column>
      <el-table-column prop="articleContent" label="文章内容">
      </el-table-column>
      <el-table-column prop="updatedAt" label="更改日期" width="230">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="230">
        <template slot-scope="scope">
          <el-button class="button" @click="remove(scope.row)" type="text">移除</el-button>
          <el-button class="button" @click="find(scope.row)" type="text">查看</el-button>
          <el-button class="button" @click="update(scope.row)" type="text">更改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog  :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="文章内容" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="modify">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { getTime } from "../../assets/until/until";
export default {
  data() {
    return {
      id: "",
      tableData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form : {
        name : '',
        title : '',
      }
    };
  },
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
      this.id = a.id
      this.dialogFormVisible = true;
    },
    
    async modify(){
      this.dialogFormVisible = false;
      let res = await this.updateArticle({
        id : this.id,
        articleTitle : this.form.title,
        articleContent : this.form.name
      });
      console.log(res);
      this.list();
    }
  },
};
</script>

<style>
.wrap {
  padding: 20px;
}
</style>