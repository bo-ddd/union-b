<template>
  <div class="main">
    <div class="top">
      <el-input v-model="id" size="mini" placeholder="输入id搜索" />
      <el-input v-model="shop" size="mini" placeholder="输入店铺搜索" />
      <el-input v-model="name" size="mini" placeholder="输入店主搜索" />
      <el-button type="primary" @click="search">查询</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="店铺id" prop="storeId"> </el-table-column>
      <el-table-column label="店铺名称" prop="storeTitle"> </el-table-column>
      <el-table-column label="店主名称">
        <template slot-scope="scope">{{
          scope.row.avatorName || "大帅"
        }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <el-button type="text" slot-scope="scope" @click="store(scope.row.storeId)">查看店铺</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      class="fen"
      layout="prev, pager, next"
      :total="tableData.length"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      tableData: [],
      id: "",
      shop: "",
      name: "",
    };
  },
  methods: {
    ...mapActions(["getStoreList"]),
    async getlist() {
      var res = await this.getStoreList();
      console.log(res);
      this.tableData = res.data.rows;
    },
    search() {
      if (this.id) {
        this.tableData = this.tableData.filter(
          (data) => data.storeId == Number(this.id)
        );
      } else if (this.shop) {
        this.tableData = this.tableData.filter((data) =>
          data.storeTitle.includes(this.shop)
        );
      } else if (this.name) {
        this.tableData = this.tableData.filter((data) =>
          data.avatorName.includes(this.name)
        );
      }
    },
    store(id) {
      this.$router.push({
        path: "details",
        query:{
          id:id
        }
      });
    }
  },
  created() {
    this.getlist();
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 77vh;
  background-color: #fff;
  padding: 3%;
}
.main > div {
  width: 600px;
}
::v-deep .el-input__inner {
  width: 120px;
}
::v-deep .el-button {
  margin: 0 0 0 15px;
}
.top {
  display: flex;
}
.fen {
  width: auto !important;
  margin: 1% 33%;
}
</style>