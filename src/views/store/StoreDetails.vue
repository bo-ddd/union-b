<template>
  <div class="wrap">
      <el-tabs type="border-card" class="tabsbox">
        <el-tab-pane label="店铺管理">
          <div class="projectmain"> 
            <div class="main-nav">
              <div class="main-nav-title">店铺信息</div>
            </div>
            <div class="infobox">
              <div class="info-item">
                <el-descriptions class="descriptionsbox">
                  <el-descriptions-item label="店主头像">
                    <img class="shophead" :src="avatorImg" alt="">
                  </el-descriptions-item>
                  <el-descriptions-item label="店主名称">{{storeInfo.storeTitle}}</el-descriptions-item>
                  <el-descriptions-item label="店主电话">{{storeInfo.userPhone}}</el-descriptions-item>
                  <el-descriptions-item label="店铺名称">{{storeInfo.avatorName}}</el-descriptions-item>
                  <el-descriptions-item label="邮箱号">{{storeInfo.email}}</el-descriptions-item>
                  <el-descriptions-item label="身份">{{storeInfo.identityName}}</el-descriptions-item>
                  <el-descriptions-item label="创建时间">{{gettime(storeInfo.storeCreatedAt)}}</el-descriptions-item>
                  <el-descriptions-item label="经度">{{longitude}}</el-descriptions-item>
                  <el-descriptions-item label="纬度">{{latitude}}</el-descriptions-item>
                </el-descriptions>
              </div>
              <div class="info-item-right">
                <div class="description"> <span>项目描述</span></div>
                <div class="description-text">
                  <div>{{storeInfo.storeDescription}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="projectbottom">
            <div class="main-nav">
              <div class="main-nav-title">商品信息</div>
            </div>
            <!-- <div class="projectleft">
              <div class="left-nav">
                <div class="main-nav-title">商品列表</div>
                <div class="main-nav-btn"><i class="el-icon-more"></i></div>
              </div>  
                <template>
                  <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="日期"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="姓名"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="地址">
                    </el-table-column>
                  </el-table>
                </template>
              <div>
              </div>
            </div>
            <div class="projectright">
              <div class="right-nav">
                <div class="main-nav-title">{{storeInfo.storeId}}</div>
                <div class="main-nav-btn"><i class="el-icon-more"></i></div>
              </div>
            </div> -->
            <div class="detailinfo">
              <template >
                  <el-table
                    :data="tableData"
                    style="width: 100%" max-height="240">
                    <el-table-column
                      prop="productId"
                      label="商品Id"
                      width="80">
                    </el-table-column>
                    <el-table-column
                      prop="productTitle"
                      label="商品名称"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="proNo"
                      label="商品编号"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="productKeywords"
                      label="商品的关键字"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="platformPrice"
                      label="商品平台价"
                      width="110">
                    </el-table-column>
                    <el-table-column
                      prop="productDesc"
                      label="商品介绍"
                      width="230">
                    </el-table-column>
                    <el-table-column
                      prop="realPrice"
                      label="商品售卖价"
                      width="110">
                    </el-table-column>
                    <el-table-column
                      prop="product_pv"
                      label="商品点击量">
                    </el-table-column>
                    <el-table-column
                      prop="productStatus"
                      label="商品状态">
                      <template>{{ productStatus }}</template>
                    </el-table-column>
                  </el-table>
                </template>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="员工管理">员工管理</el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import { getTime } from "../../assets/until/until"
import { mapActions } from "vuex";
 export default {
      data() {
        return {
          storeInfo:{},
          storeId:"",
          storeTitle:"",
          storeDescription:"",
          storeCreatedAt:"",
          userId:"",
          avatorName:"",
          avatorImg:"",
          userPhone:"",
          emailId:"",
          email:"",
          identityId:"",
          identityName:"",
          tableData: [],
          productStatus:""
        }
      },
      async created(){
        let res =await this.getStoreDetail({
          storeId:1
        });
        this.storeInfo = res.data[0];
        this.tableData=res.data[0].detail;
        console.log(this.storeInfo);
        this.productStatus=this.tableData[0].productStatus
        if(this.productStatus==0){
          this.productStatus="已删除"
        }else if(this.productStatus==1){
          this.productStatus="已上架"
        }else{
          this.productStatus="已下架"
        }
        this.avatorImg = require('@/assets/images/avator/' + this.storeInfo.avatorImg + '.png')

      },
      methods:{
        ...mapActions(["getStoreDetail"]),
        gettime(time) {
            return getTime(time)
        },
      }
    }
</script>
<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
  & .tabsbox{
    height: 658px;
    & .projectmain{
      width: 100%;
      height: 270px;
      border: 1px solid #dddddd;
      & .main-nav{
        width: 100%;
        height: 45px;
        background-color:#ececec;
        display: flex;
        justify-content: space-between;
        & .main-nav-title{
          width: 100px;
          height: 45px;
          background-color: var(--color);
          color: var(--textcolor);
          font-size: 14px;
          line-height: 45px;
          text-align: center;
        }
        & .main-nav-btn{
          width:45px;
          height: 45px;
          margin-right: 0px;
          background-color: #dfdfdf;
          text-align: center;
          line-height: 45px;
        }
      }
      & .infobox{
        width: 100%;
        height: 225px;
        display: flex;
        & .info-item{
          height: 225px;
          width: 72%;
          display: flex;
          justify-content: center;
          & .descriptionsbox{
            width: 95%;
            margin-top: 20px;
            margin-bottom: 20px;
            height: 185px;
              display: flex;
              align-items: center;
            & .shophead{
              width: 70px;
              height: 70px;
              background-color: #ececec;
            }
          }
        }
        & .info-item-right{
          height:225px ;
          width: 28%;
          border-left: 1px solid #dddddd;
          & .description{
            width: 100%;
            height: 45px;
            line-height: 45px;
            border-bottom: 1px solid #dddddd;
            & > span{
              font-size: 13px;
              padding-left: 20px;
              color: #444444;
            }
          }
          & .description-text{
            width: 100%;
            height: 179px;
            & >div{
              padding: 10px;
              font-size: 13px;
              color: #868686;
              padding-left:20px;
              padding-right:20px;
              line-height: 20px;
            }
          }
        }
      }
    }
    & .projectbottom{
      margin-top: 15px;
      width: 100%;
      border: 1px solid #dddddd;  
        height: 300px;
      // display: flex;
      // justify-content: space-between;
      & .projectleft{
        width: 49%;
        height: 300px;
        border: 1px solid #dddddd;
      & .left-nav{
        width: 100%;
        height: 45px;
        background-color:#ececec;
        display: flex;
        justify-content: space-between;
        & .main-nav-title{
          width: 100px;
          height: 45px;
          background-color: var(--color);
          color: var(--textcolor);
          font-size: 14px;
          line-height: 45px;
          text-align: center;
        }
        & .main-nav-btn{
          width:45px;
          height: 45px;
          margin-right: 0px;
          background-color: #dfdfdf;
          text-align: center;
          line-height: 45px;
        }
      }
      }
      & .projectright{
        width: 49.5%;
        height: 300px;
        border: 1px solid #dddddd;
      & .right-nav{
        width: 100%;
        height: 45px;
        background-color:#ececec;
        display: flex;
        justify-content: space-between;
        & .main-nav-title{
          width: 100px;
          height: 45px;
          background-color: var(--color);
          color: var(--textcolor);
          font-size: 14px;
          line-height: 45px;
          text-align: center;
        }
        & .main-nav-btn{
          width:45px;
          height: 45px;
          margin-right: 0px;
          background-color: #dfdfdf;          
          text-align: center;
          line-height: 45px;
        }
      }
      }
      & .main-nav{
        width: 100%;
        height: 45px;
        background-color:#ececec;
        display: flex;
        justify-content: space-between;
        & .main-nav-title{
          width: 100px;
          height: 45px;
          background-color: var(--color);
          color: var(--textcolor);
          font-size: 14px;
          line-height: 45px;
          text-align: center;
        }
        & .main-nav-btn{
          width:45px;
          height: 45px;
          margin-right: 0px;
          background-color: #dfdfdf;
          text-align: center;
          line-height: 45px;
        }
      }
    }
  } 
}
::v-deep .el-descriptions--small {
  font-size: 13px;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color:var(--textcolor)

}
::v-deep .el-tabs__nav-scroll{
    background-color: var(--color);
}
::v-deep.el-tabs--border-card>.el-tabs__header .el-tabs__item+.el-tabs__item, .el-tabs--border-card>.el-tabs__header .el-tabs__item:first-child {
    color:var(--textcolor)
  }
::v-deep.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
      color: var(--color);
}
</style>