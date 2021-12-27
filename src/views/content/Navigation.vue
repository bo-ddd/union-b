<template>
  <div class="wrap">
      <!-- <el-rows :type="primary" :key="">asdasd</el-rows> -->
    <div class="head">
      <div>
        <div class="right-block"></div>
        <h3>桌面端导航</h3>
      </div>
      <div>
        <el-button type="primary">取消</el-button>
        <el-button type="primary">保存</el-button>
      </div>
    </div>

    <div class="text-tips">
      <h4>操作区域</h4>
      <h4 class="mr-300">桌面端预览</h4>
    </div>
    <div class="content">
      <div class="left">
        <!-- 主导航 -->
        <div class="mainNav" v-for="key in newNav" :key="key.id">
          <!-- <div class="nav-name">
            <span class="wrods">{{ key.title }}&nbsp;&nbsp;</span>
            <span class="font-color">(数量限制:2-6个)</span>
          </div> -->
          <!-- <div class="nav">
            <div class="nav-item" v-for="key in key.nav" :key="key.id">
              <div class="jian mt-5" @click="del(key.id)">
                <div><div></div></div>
              </div>
              <div class="img">
                <div>
                  <img :src="key.pictureUrl" alt="" />
                </div>
              </div>
              <div class="text">
                <span>{{ key.pictureName }}</span>
              </div>
            </div> -->

            <!-- 上传图片的 -->
            <!-- <div>
                <el-upload
                    action=""
                    list-type="picture-card"
                    :http-request="uploadNav"
                >
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                </el-dialog>
            </div> -->
          <!-- </div> -->
          <el-demo :type="key" @change1='change1'></el-demo>
        </div>
      </div>

      <!-- 手机端部分 -->
      <div class="right">
        <div class="nav">
          <div v-for="key in mainNav" :key="key.id">
            <div class="img">
              <img :src="key.pictureUrl" alt="" />
            </div>
            <div class="text mt-5">
              {{ key.pictureName }}
            </div>
          </div>
        </div>
        <!-- 秒杀活动 -->
        <div class="sec_kill_floor">
          <div class="title_wrap">
            <div class="seckill-left-link">
              <span>京东秒杀</span>
              <span>12</span>
              <div class="miaosha">
                <span class="red-background fs-color">01</span>
                <span>:</span>
                <span class="red-background fs-color">02</span>
                <span>:</span>
                <span class="red-background fs-color">03</span>
              </div>
            </div>
            <div class="seckill-more-link">
              <div>
                <span>更多秒杀</span>
                <div class="miao">
                  <span>></span>
                </div>
              </div>
            </div>
          </div>
          <div class="floor-container">
            <div class="flex" v-for="key in quickNav" :key="key.id">
              <img :src="key.pictureUrl" alt="" />
              <span>{{ key.pictureName }}</span>
            </div>
          </div>
        </div>

        <!-- 主要内容 -->
        <div class="waterfall">
          <!-- 手机端除导航以外的左侧 -->
          <div class="feeds_col_left">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <!-- 手机端除导航以外的右侧 -->
          <div class="feeds_col_right">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import demo from '../../components/demo.vue'
export default {
    components:{
      'el-demo':demo
    },
  data() {
    return {
      imageUrl: "",
      navs: [],
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
//                 列表接口     
  ...mapActions(["getNavList"]),
                                    
  // 所有导航的列表接口
  async navList() {
    let res = await this.getNavList();
    this.navs = res.data.rows;
  },
// 子组件传过来的值  通过标签中的@change1事件传过来
  change1(data){
    this.navs = data.data.rows;
  }
},


async created() {
  await this.navList();
},
computed: {
  //   主导航
  mainNav: {
      get() {
        if (!this.navs.length) return [];
        return this.navs.filter((item) => item.pid === "1");
      },
  },
  // 快捷导航
  quickNav: {
      get() {
        if (!this.navs.length) return [];
        return this.navs.filter((item) => item.pid === "2");
      },
  },
  // 总数组
  newNav() {
      return [
        {
          id:1,
          title: "主导航",
          nav: this.mainNav,
        },
        {
          id:2,
          title: "快捷导航",
          nav: this.quickNav,
        },
      ];
  },
},
};
</script>




<style scoped lang="scss">
::v-deep .el-upload-list__item {
  width: 132px;
  height: 112px;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.mt-5 {
  margin-top: 5px;
}
::v-deep .is-ready {
  width: 120px;
  height: 110px;
}
::v-deep .el-upload {
  width: 120px;
  height: 110px;
  border: none;
}
::v-deep .el-upload--picture-card {
  line-height: 110px;
}
.bor {
  border: none;
}
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 110px;
  line-height: 110px;
  text-align: center;
}
.avatar {
  padding: 5px;
  width: 110px;
  height: 110px;
  display: block;
}
.mr-180 {
  margin-right: 180px;
}
.mr-300 {
  margin-right: 300px;
}
.mt-20 {
  margin-top: 20px;
}
.fs-16 {
  font-size: 16px;
  font-weight: 700;
}
.text-color {
  color: #ccc;
}
.red-background {
  background-color: #fa2c19;
}
.fs-color {
  color: white;
}
.wrap {
  height: calc(100vh - 100px);
  overflow-y: auto;
  margin-right: 100px;
  .head {
    display: flex;
    justify-content: space-between;
    & .right-block {
      height: 16px;
      width: 8px;
      background-color: #ff4070;
      margin-right: 20px;
    }
    & div {
      display: flex;
      align-items: center;
    }
  }
  .text-tips {
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    & .right {
      float: right;
      width: 375px;
      height: 520px;
      overflow: scroll;
      background-color: #f6f6f6;

      & .nav {
        padding: 20px 10px;
        display: flex;
        //    grid-template-columns: repeat(5,1fr);
        //    gap:20px 20px;
        //    align-items: center;
        //    justify-content: center;
        align-items: center;
        justify-content: space-around;
        & div {
          height: 50px;
          & div {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          & .img {
            height: 30px;

            & img {
              width: 30px;
              height: 30px;
            }
          }
          & .text {
            height: 20px;
          }
        }
      }

      & .sec_kill_floor {
        margin: 10px;
        background-color: white;
        border-radius: 5px;
        & .title_wrap {
          height: 35px;
          & .seckill-left-link {
            width: 200px;
            height: 35px;
            float: left;
            display: flex;
            align-items: center;
            justify-content: space-around;

            & .miaosha {
              width: 50px;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          & .seckill-more-link {
            float: right;
            width: 100px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;

            & div {
              float: right;
              color: #fa2c19;
              font-size: 12px;

              & .miao {
                width: 15px;
                height: 15px;
                border-radius: 15px;
                background-color: #fa2c19;
                color: white;
                text-align: center;
                line-height: 15px;
              }
            }
          }
        }

        & .floor-container {
          padding: 0 5px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: space-around;

          & div {
            float: left;
            width: 60px;
            height: 100px;
            color: #fa2c19;
            & img {
              width: 40px;
              height: 50px;
            }
          }
        }
      }

      & .waterfall {
        margin: 10px;
        display: flex;
        flex-wrap: wrap;
        border-radius: 5px;

        //    background-color: violet;

        & div {
          width: 50%;
          height: 100%;
        }

        & .feeds_col_left {
          border-radius: 5px 0 0 5px;

          & div {
            width: 94%;
            margin: 5px;
            height: 170px;
            background-color: white;
          }
        }
        & .feeds_col_right {
          border-radius: 0 5px 5px 0;

          & div {
            width: 94%;
            margin: 5px;
            height: 200px;
            background-color: white;
          }
        }
      }
    }
  }
  .ccc {
    color: #ccc;
  }
}
</style>