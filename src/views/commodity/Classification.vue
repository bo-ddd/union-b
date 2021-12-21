<template>
  <div>
    <div class="wrap">
      <div class="content">
        <div class="new-module">
          <div @click="jump" class="add-classification">
            <span>+ 新增分类</span>
          </div>
          <div class="batch-association">
            <span>批量关联</span>
          </div>
        </div>
        <el-table
          :data="renderDynamic"
          ref="product"
          border
          row-key="id"
          :row-class-name="rowClassNameFun"
          :header-row-class-name="headerRowClassName"
          size="small"
          style="width: 97%"
          @select="selectFun"
          @select-all="selectAllFun"
          :tree-props="{ children: 'child', hasChildren: 'hasChildren' }"
          :header-cell-style="{ background: '#fafafa' }"
        >
          <el-table-column type="selection" width="55" > </el-table-column>
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
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="num" label="数量" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-link type="primary" @click="ascendingOrder(scope,scope.row.pIndex? scope.row.pIndex : scope.row.childIndex)"
                >升序</el-link
              >
              <el-link
                class="ml-10"
                type="primary"
                @click="sescendingOrder(scope,scope.row.pIndex? scope.row.pIndex : scope.row.childIndex)"
                >降序</el-link
              >
              <el-link class="ml-10" type="danger" @click="deleteData(scope.$index)"
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      checked: true,
      size: "",
      currentPage: 1,
      cacheExport: [],
      multipleSelection: [],
      table: [],
      pageSize: 10,
      renderDynamic: []
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
    jump(){
      this.$router.push({
        name:'AddClassify'
      })
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
      this.cacheExport = this.multipleSelection;
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
    async commodityInfo() {
      let res = await this.getCategoryList({});
      let  target = res.data.rows.slice();
      let data = this.format(target);
      this.renderDynamic = data;
    },
    /**
     * @description 根据id把数据重新排序
     */
    mySort(arr){
      arr.sort((a,b)=>{
        let num1 = a.ord;
        let num2 = b.ord;
        return num1 - num2
      })
      this.renderDynamic = arr
    },
    /**
     * @description 当前行上升一位
     */
    ascendingOrder(val,id) {
      console.log(id)
      if(val.row.pIndex==0||val.row.childIndex==0) return;
      this.renderDynamic.forEach(el=>{
        if(el.pIndex == id ||el.childIndex ==id){
       let res =  el.pIndex? el.pIndex = id*1 -1 : el.childIndex = id*1 -1
          console.log(res)
        }
      })
    },
    /**
     * @description 当前行下降一位
     */
    sescendingOrder(val,id) {
      console.log(val)
        if(val.row.pIndex==this.renderDynamic.length-1||val.row.childIndex==this.renderDynamic.length-1) return;
      this.renderDynamic.forEach(el=>{
        if(el.pIndex == id ||el.childIndex ==id){
       let res =el.pIndex? el.pIndex = id*1 +1 : el.childIndex = id*1 +1
          console.log(res)
        }
      })
    },
    /**
     * @description 删除当前行
     */
    deleteData(val) {
    let data = this.renderDynamic.slice()
     data.forEach(el=>{
       if(el.id == val){
         data.splice(val-1,1);
       }
     })
     this.mySort(data)
    },
     format(target){
       let childrenIndex = 0;
       let parentIndex = 0;
     let res = target.slice();
     res.forEach(item=>{
       item.child = [];
           let p = res.find((el) => el.id == item.pid);
           if(item.pid){
             item.childIndex = childrenIndex++ 
             item.association = '规格' 
             p.child.push(item)
           }else{
             item.pIndex = parentIndex++
           }
            item.category = p ? p.category + "=>" + item.title : item.title;
     })
     return res.filter(el => el.pid === null)
  }
  },
  mounted() {
    this.initData(this.renderDynamic);
  },
  created() {
    this.commodityInfo() 
     this.handleSizeChange(10);
 
  }
}
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
        padding: 9px 10px;
        background-color: #ff4070;
        color: #ffccd8;
        margin-top: 15px;
        margin-left: 15px;
        margin-bottom: 30px;
        border: 1px solid #ffc7d5;
        border-radius: 5px;
        font-size: 12px;
        cursor: pointer;
      }
      & .batch-association {
        padding: 9px 10px;
        background-color: #ffffff;
        color: #686868;
        margin-top: 15px;
        border: 1px solid #f2f2f2;
        border-radius: 5px;
        margin-left: 10px;
        font-size: 12px;
        margin-bottom: 30px;
        cursor: pointer;
      }
    }
    & .el-table{
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