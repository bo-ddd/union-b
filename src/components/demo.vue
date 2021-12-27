<template>
  <div class="demo">
    <div class="nav-name">
      <span class="wrods">{{ type.title }}&nbsp;&nbsp;</span>
      <span class="font-color">(数量限制:2-6个)</span>
    </div>
    <div class="nav">
      <div class="nav-item" v-for="key in type.nav" :key="key.id">
        <div class="jian mt-5" @click="removeNav(key.id)">
          <div><div></div></div>
        </div>
        <div class="img">
          <div><img :src="key.pictureUrl" alt="" /></div>
        </div>
        <div class="text">
          <span>{{ key.pictureName }}</span>
        </div>
      </div>
    </div>
    <div>
      <el-upload action="" list-type="picture-card" :http-request="httpRequest">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import uploada from '../../public/lib/uploud';
export default {
  props: ["type"],
  data() {
    return {
      navs: [],
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
//                   上传图片       列表接口     新增导航       删除导航
    ...mapActions(["uploadImage", "getNavList", "createNav", "deleteNav"]),

    // 新增导航的接口   pid 1/2  主导航/快捷导航   route  路径    contenr  内容
    async addNav(pid, route, content) {
      await this.createNav({
        pictureName: content,
        pictureUrl: route,
        pid: pid,
      });
      let navdata = await this.getNavList();
      // 往父组件传的值
      this.$emit('change1',navdata);
    },

    // 删除导航的接口
    async removeNav(id) {
      await this.deleteNav({
        id: id,
      });
      let navdata = await this.getNavList();
      // 往父组件传的值
      this.$emit('change1',navdata);
    },

    // 导航删除的点击事件
    async del(a) {
      await this.removeNav(a);
    },

    // 主导航的http事件   参数file
    async httpRequest(file) {
      let name = file.file.name.substring(0,file.file.name.indexOf('.'));
      let formdata = uploada(file.file,4);
      let res =  await this.uploadImage(formdata);
      await this.addNav(this.type.id,res.data,name);
    },
  },
  created(){
    
  },
};
</script>

<style scoped lang="scss">
.mainNav {
  & .wrods {
    font-size: 18px;
    font-weight: 700;
  }

  & .font-color {
    color: #ccc;
  }

  & .nav-name {
    padding: 10px 0;
  }

  & .nav {
    width: 100%;

    & .nav-item {
      float: left;
      width: 120px;
      height: 110px;
      border: 1px dashed #ccc;
      padding: 0 5px;

      & div {
        width: 100%;
      }

      & .jian {
        height: 20px;

        & div {
          float: right;
          width: 20px;
          height: 20px;
          border-radius: 20px;
          background-color: #ccc;
          display: flex;
          align-items: center;
          justify-content: center;

          & div {
            width: 60%;
            height: 5px;
            background-color: white;
          }
        }
      }

      & .img {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        & div {
          width: 50px;
          height: 50px;
          border-radius: 50px;

          & img {
            width: 100%;
            height: 100%;
          }
        }
      }

      & .text {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>