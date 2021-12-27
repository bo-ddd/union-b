<template>
  <div>
    <div class="wrap">
      <div class="content">
        <div class="new-module">
          <div @click="jump" class="add-classification">
            <el-button type="primary">+ 新增分类</el-button>
          </div>
          <!-- <div class="batch-association">
            <el-button type="primary">批量关联</el-button>
          </div> -->
        </div>
        <el-table
          v-loading="loading"
           element-loading-text="拼命加载中"
    element-loading-background="rgba(0, 0, 0, 0.8)"
          :data="table"
          ref="table"
          border
          row-key="id"
          style="width: 97%"
          @select="select"
          @select-all="selectAll"
          :tree-props="{children: 'child'}"
          :header-cell-style="{ background: '#fafafa' }"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column
            label="分类名称"
            prop="title"
            width="200"
          ></el-table-column>
          <el-table-column label="关联" width="200">
            <template slot-scope="scope">
              <el-link type="primary">品牌</el-link>
              <el-link class="ml-10" type="primary">{{
                scope.row.association || ""
              }}</el-link>
            </template>
          </el-table-column>
          <el-table-column
            label="创建日期"
            width="200"
            show-overflow-tooltip
            sortable
          >
            <template slot-scope="scope">{{ scope.row.createdAt }}</template>
          </el-table-column>
          <el-table-column prop="num" label="数量" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-link type="primary" @click="ascendingOrder(scope.row)"
                >升序</el-link
              >
              <el-link
                class="ml-10"
                type="primary"
                @click="sescendingOrder(scope.row)"
                >降序</el-link
              >
              <el-link
                class="ml-10"
                type="danger"
                @click="deleteData(scope.row)"
                >删除</el-link
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="footer">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="[10, 20, 30, 40, 50]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="renderDynamic.length"
            background
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTime } from "@/assets/until/until";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loading:true,
      checked: true,
      size: "",
      currentPage: 1,
      table: [],
      pageSize: 10,
      renderDynamic: [],
    };
  },
  methods: {
    ...mapActions(["getCategoryList","categoryOrders","deleteCategory"]),
        setChildren(children, type) {
      // 编辑多个子层级
      children.map((j) => {
        this.toggleSelection(j, type)
        if (j.child) {
          this.setChildren(j.child, type)
        }
      })
    },
        // 选中父节点时，子节点一起选中取消
    select(selection, row) {
      if (
        selection.some((el) => {
          return row.id === el.id
        })
      ) {
        if (row.child) {
          // 解决子组件没有被勾选到
          this.setChildren(row.child, true)
        }
      } else {
        if (row.childList) {
          this.setChildren(row.child, false)
        }
      }
    },
    toggleSelection(row, select) {
      if (row) {
        this.$nextTick(() => {
          this.$refs.table && this.$refs.table.toggleRowSelection(row, select)
        })
      }
    },
    // 选择全部
    selectAll(selection) {
      // tabledata第一层只要有在selection里面就是全选
      const isSelect = selection.some((el) => {
        const tableDataIds = this.table.map((j) => j.id)
        return tableDataIds.includes(el.id)
      })
      // tableDate第一层只要有不在selection里面就是全不选
      const isCancel = !this.table.every((el) => {
        const selectIds = selection.map((j) => j.id)
        return selectIds.includes(el.id)
      })
      if (isSelect) {
        selection.map((el) => {
          if (el.child) {
            // 解决子组件没有被勾选到
            this.setChildren(el.child, true)
          }
        })
      }
      if (isCancel) {
        this.table.map((el) => {
          if (el.child) {
            // 解决子组件没有被勾选到
            this.setChildren(el.child, false)
          }
        })
      }
      this.$emit('handleSelect', this.table)
    },
    /**
     * @description 跳转到新增分类页面
     */
    jump() {
      this.$router.push({
        name: "AddClassify",
      });
    },
    /**
     * @description 分页每页有多少条
     * **/
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleCurrentChange(1);
    },

    /**
     * @description 分页的当前页有多少条
     * **/
    handleCurrentChange(val) {
      let arr = [];
      for (
        let i = val * this.pageSize - this.pageSize;
        i < val * this.pageSize;
        i++
      ) {
        if (this.renderDynamic[i] != undefined) arr.push(this.renderDynamic[i]);
      }
      this.table = arr;
    },
    /**
     * @description 调分类列表的接口 渲染页面
     */
    async commodityInfo() {
      let res = await this.getCategoryList({});
         console.log(res);
       if(res.status==1){
          this.loading = false ;
      let data = res.data.rows.slice();
      let target = this.format(data);
      target.forEach((el) => {
          el.association = "";
      });
      this.renderDynamic = target;
      this.handleSizeChange(10);
       }
    },
    format(target) {
      let res = target.slice();
      res.forEach((item) => {
        item.child = item.child || [];
        item.association = "规格";
        let p = res.find((type) => item.pid == type.id);
        if (item.pid && p) {
          p.child = p.child || [];
          p.child.push(item);
        }
           item.createdAt = getTime(item.createdAt);
        item.category = p ? p.category + "=>" + item.title : item.title;
      });
      return res.filter((type) => type.pid === null);
    },
    /**
     * @description 当前行上升一位
     */
    async ascendingOrder(row) {
      console.log(row.ord)
      //返回当前行所在的父级中所有的数据；
      var fn = (row) => {
        console.log(row);
        if (row.child.length) {
          return row.child;
        } else {
          for (var i = 0; i < this.renderDynamic.length; i++) {
            if (this.renderDynamic[i].id == row.pid) {
              return this.renderDynamic[i].child;
            }
          }
        }
      };
      //获取当前层所有额数据；
      var formatData = (row) => {
        let res = {};
        if (row.pid) {
          let childData = fn(row);
          for (let i = 0; i < childData.length; i++) {
            let item = childData[i];
            if (item.id == row.id) {
              // console.log(item);
              res.i = i;
              res.currentData = item; //当前的数据；
              res.preData = childData[i - 1]; //上一个数据；
              break;
            }
          }
        } else {
          for (let i = 0; i < this.renderDynamic.length; i++) {
            let item = this.renderDynamic[i];
            if (item.id == row.id) {
              // console.log(item);
              res.i = i; 
              res.currentData = item; //当前的数据；
              res.preData = this.renderDynamic[i - 1]; //上一个数据；
              break;
            }
          }
        }
        return res;
      };
      let obj = formatData(row);
      console.log(obj)
      if(obj.i){
          let ord = obj.currentData.ord;
      obj.currentData.ord = obj.preData.ord;
      obj.preData.ord = ord;
        this.ordSort(this.renderDynamic);
        let res = await this.categoryOrders([
         obj.currentData.id,
           obj.preData.id,]
        );
        console.log(res)
      }else{
        this.$message("已经是第一个了不能再升序了")
      }
    },  
    /**
     * @description 根据ord进行排序完成后 重新渲染页面
     */
    ordSort(arr) {
      arr.forEach((el) => {
        if (el.child.length) {
          el.child.sort((c, d) => {
            let n1 = c.ord;
            let n2 = d.ord;
            return n2 - n1;
          });
        }
      });
      arr.sort((a, b) => {
        let num1 = a.ord;
        let num2 = b.ord;
        return num2 - num1;
      });
      this.table = arr;
    },
    /**
     * @description 当前行下降一位
     */
  async sescendingOrder(row) {
      var fn = (row) => {
        console.log(row);
        if (row.child.length) {
          return row.child;
        } else {
          for (var i = 0; i < this.renderDynamic.length; i++) {
            if (this.renderDynamic[i].id == row.pid) {
              return this.renderDynamic[i].child;
            }
          }
        }
      };
      //获取当前层所有额数据；
      var formatData = (row) => {
        let res = {};
             let childData = fn(row);
        if (row.pid) {
          for (let i = 0; i < childData.length; i++) {
            let item = childData[i];
            if (item.id == row.id) {
              // console.log(item);
              res.i = i;
              res.currentData = item; //当前的数据；
              res.preData = childData[i + 1]; //上一个数据；
              break;
            }
          }
        } else {
          for (let i = 0; i < this.renderDynamic.length; i++) {
            let item = this.renderDynamic[i];
            if (item.id == row.id) {
              // console.log(item);
              res.i = i;
              res.currentData = item; //当前的数据；
              res.preData = this.renderDynamic[i + 1]; //上一个数据；
              break;
            }
          }
        }
        return res;
      };
      let obj = formatData(row);
      console.log(obj);
        let ord = obj.currentData.ord;
        obj.currentData.ord = obj.preData.ord;
        obj.preData.ord = ord;
        this.ordSort(this.renderDynamic);
          let res = await this.categoryOrders([
          obj.currentData.id,
          obj.preData.id]  
        );
        console.log(res)
    }, 
    /**
     * @description 删除当前行
     */
  async deleteData(row) {
      for (var i = 0; i < this.renderDynamic.length; i++) {
        let el = this.renderDynamic[i];
        if (row.ord == el.ord) {
          this.renderDynamic.splice(i, 1);
        } else {
          for (var j = 0; j < el.child.length; j++) {
            if (row.ord == el.child[j].ord) {
              el.child.splice(j, 1);
            }
          }
        }
      }
      this.ordSort(this.renderDynamic);
      let res = await this.deleteCategory({
        id:row.id,
      })
      console.log(res)
    },
  },
  created() {
    this.commodityInfo();
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fcf9fa;
  height: calc(100vh - 100px);
  overflow-y: auto;
  & .content {
    background-color: #ffffff;
    & .new-module {
      display: flex;
      align-items: center;
      & .add-classification {
        color: #ffccd8;
        margin-top: 15px;
        margin-left: 15px;
        margin-bottom: 30px;
        border-radius: 5px;
        font-size: 12px;
        cursor: pointer;
        & .el-button {
          padding: 9px 10px;
        }
      }
      & .batch-association {
        color: #686868;
        margin-top: 15px;
        border-radius: 5px;
        margin-left: 10px;
        font-size: 12px;
        margin-bottom: 30px;
        cursor: pointer;
        & .el-button {
          padding: 9px 10px;
        }
      }
    }
    & .el-table {
      margin-left: 15px;
    }
  }
  & .footer {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
}
.ml-10 {
  margin-left: 10px;
}
</style>