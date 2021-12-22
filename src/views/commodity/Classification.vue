<template>
  <div>
    <div class="wrap">
      <div class="content">
        <div class="new-module">
          <div @click="jump" class="add-classification">
            <el-button type="primary">+ 新增分类</el-button>
          </div>
          <div class="batch-association">
            <el-button type="primary">批量关联</el-button>
          </div>
        </div>
        <el-table
          :data="table"
          ref="product"
          border
          row-key="id"
          :row-class-name="rowClassNameFun"
          :header-row-class-name="headerRowClassName"
          style="width: 97%"
          @select="selectFun"
          @select-all="selectAllFun"
          :tree-props="{ children: 'child', hasChildren: 'hasChildren' }"
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
      checked: true,
      size: "",
      currentPage: 1,
      table: [],
      pageSize: 10,
      renderDynamic: [],
    };
  },
  methods: {
    ...mapActions(["getCategoryList"]),
    initData(data) {
      data.forEach((item) => {
        item.isSelect = false; //默认为不选中
        if (item.children && item.children.length) {
          this.initData(item.children);
        }
      });
    },
    /**
     * @description 跳转到新增分类页面
     */
    jump() {
      this.$router.push({
        name: "AddClassify",
      });
    },
    selectFun(selection, row) {
      this.setRowIsSelect(row);
    },
    setRowIsSelect(row) {
      //当点击父级点复选框时，当前的状态可能为未知状态，所以当前行状态设为false并选中，即可实现子级点全选效果
      if (row.isSelect === "") {
        row.isSelect = false;
        this.$refs.product.toggleRowSelection(row, true);
      }
      row.isSelect = !row.isSelect;
      let that = this;

      function selectAllChildrens(data) {
        data.forEach((item) => {
          item.isSelect = row.isSelect;
          that.$refs.product.toggleRowSelection(item, row.isSelect);
          if (item.children && item.children.length) {
            selectAllChildrens(item.children);
          }
        });
      }

      function getSelectStatus(selectStatuaArr, data) {
        data.forEach((childrenItem) => {
          selectStatuaArr.push(childrenItem.isSelect);
          if (childrenItem.children && childrenItem.children.length) {
            getSelectStatus(selectStatuaArr, childrenItem.children);
          }
        });
        return selectStatuaArr;
      }
      function getLevelStatus(row) {
        //如果当前节点的parantId =0 并且有子节点，则为1
        //如果当前节点的parantId !=0 并且子节点没有子节点 则为3
        if (row.parentId == 0) {
          if (row.children && row.children.length) {
            return 1;
          } else {
            return 4;
          }
        } else {
          if (!row.children || !row.children.length) {
            return 3;
          } else {
            return 2;
          }
        }
      }
      let result = {};
      //获取明确的节点
      function getExplicitNode(data, parentId) {
        data.forEach((item) => {
          if (item.id == parentId) {
            result = item;
          }
          if (item.children && item.children.length) {
            getExplicitNode(item.children, parentId);
          }
        });
        return result;
      }
      function operateLastLeve(row) {
        //操作的是子节点  1、获取父节点  2、判断子节点选中个数，如果全部选中则父节点设为选中状态，如果都不选中，则为不选中状态，如果部分选择，则设为不明确状态
        let selectStatuaArr = [];
        let item = getExplicitNode(that.renderDynamic, row.parentId);
        selectStatuaArr = getSelectStatus(selectStatuaArr, item.children);
        if (
          selectStatuaArr.every((selectItem) => {
            return true == selectItem;
          })
        ) {
          item.isSelect = true;
          that.$refs.product.toggleRowSelection(item, true);
        } else if (
          selectStatuaArr.every((selectItem) => {
            return false == selectItem;
          })
        ) {
          item.isSelect = false;
          that.$refs.product.toggleRowSelection(item, false);
        } else {
          item.isSelect = "";
        }
        //则还有父级
        if (item.parentId != 0) {
          operateLastLeve(item);
        }
      }
      //判断操作的是子级点复选框还是父级点复选框，如果是父级点，则控制子级点的全选和不全选

      //1、只是父级 2、既是子集，又是父级 3、只是子级
      let levelSataus = getLevelStatus(row);
      if (levelSataus == 1) {
        selectAllChildrens(row.children);
      } else if (levelSataus == 2) {
        selectAllChildrens(row.children);
        operateLastLeve(row);
      } else if (levelSataus == 3) {
        operateLastLeve(row);
      }
    },
    checkIsAllSelect() {
      this.oneProductIsSelect = [];
      this.renderDynamic.forEach((item) => {
        this.oneProductIsSelect.push(item.isSelect);
      });
      //判断一级产品是否是全选.如果一级产品全为true，则设置为取消全选，否则全选
      let isAllSelect = this.oneProductIsSelect.every((selectStatusItem) => {
        return true == selectStatusItem;
      });
      return isAllSelect;
    },
    selectAllFun(selection) {
      let isAllSelect = this.checkIsAllSelect();
      this.renderDynamic.forEach((item) => {
        item.isSelect = isAllSelect;
        this.$refs.product.toggleRowSelection(item, !isAllSelect);
        this.selectFun(selection, item);
      });
    },
    rowClassNameFun({ row }) {
      if (row.isSelect === "") {
        return "indeterminate";
      }
    },
    headerRowClassName() {
      let oneProductIsSelect = [];
      this.renderDynamic.forEach((item) => {
        oneProductIsSelect.push(item.isSelect);
      });
      if (oneProductIsSelect.includes("")) {
        return "indeterminate";
      }
      return "";
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
      let data = res.data.rows.slice();
      console.log(data);
      let target = this.format(data);
      target.forEach((el) => {
        el.createdAt = getTime(el.createdAt);
        if (el.child.length) {
          el.child.forEach((item) => {
            item.association = "规格";
            item.createdAt = getTime(item.createdAt);
          });
        }
      });
      this.renderDynamic = target;
      this.handleSizeChange(10);
    },
    format(target) {
      let res = target.slice();
      res.forEach((item) => {
        item.child = item.child || [];
        let p = res.find((type) => item.pid == type.id);
        if (item.pid && p) {
          p.child = p.child || [];
          p.child.push(item);
        }
        item.category = p ? p.category + "=>" + item.title : item.title;
      });
      return res.filter((type) => type.pid === null);
    },
    /**
     * @description 当前行上升一位
     */
    async ascendingOrder(row) {
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
      // console.log(obj);
      let ord = obj.currentData.ord;
      obj.currentData.ord = obj.preData.ord;
      obj.preData.ord = ord;
      this.ordSort(this.renderDynamic);
      let res = await this.getCategoryList({
        currentDataord: obj.currentData.ord,
        preDataord: obj.preData.ord,
      });
      console.log(res);
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
            return n1 - n2;
          });
        }
      });
      arr.sort((a, b) => {
        let num1 = a.ord;
        let num2 = b.ord;
        return num1 - num2;
      });
      this.table = arr;
    },
    /**
     * @description 当前行下降一位
     */
    sescendingOrder(row) {
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
    },
    /**
     * @description 删除当前行
     */
    deleteData(row) {
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
    },
  },
  mounted() {
    this.initData(this.renderDynamic);
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