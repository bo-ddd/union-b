<template>
  <div class="main">
    <div class="top">
      <el-input v-model="id" placeholder="输入id搜索" />
      <el-input v-model="shop" placeholder="输入店铺搜索" />
      <el-input v-model="name" placeholder="输入店主搜索" />
      <el-button type="primary" @click="search" class="m-15">查询</el-button>
    </div>
    <el-button class="btn" type="primary" @click="my">查询我的店铺</el-button>
    <el-table :data="tableData" style="width: 100%;text-align:center">
      <el-table-column label="店铺id" prop="storeId"> </el-table-column>
      <el-table-column label="店铺名称" prop="storeTitle"> </el-table-column>
      <el-table-column label="店主名称">
        <template slot-scope="scope">{{
          scope.row.avatorName || "大帅"
        }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <el-button
          type="text"
          slot-scope="scope"
          @click="store(scope.row.storeId)"
          >查看店铺</el-button
        >
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
    ...mapActions(["getStoreList", "getMineStoreList"]),
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
      } else {
        this.getlist();
      }
    },

    store(id) {
      this.$router.push({
        path: "details",
        query: {
          id: id,
        },
      });
    },
    async my() {
      var res = await this.getMineStoreList({});
      console.log(res);
      this.tableData = res.data.rows;
    },
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
.el-input--small{
  margin-right:10px;
}
::v-deep .m-15 {
  margin: 0 0 0 15px;
}
.top {
  display: flex;
  align-items: center;
}
.fen {
  width: auto !important;
  margin: 1% 33%;
}
.btn {
  margin: 15px 0;
}
::v-deep .el-table tr {
  height: 10vh;
  line-height: 10vh;
}
</style>