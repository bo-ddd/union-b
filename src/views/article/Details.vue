<template>
  <div class="wrap">
    <div class="body">
      <div class="center">
        <span class="title">{{bigTitle}}</span>
        <div class="information">
         
          <div class="nickName">
            <div class="top">
              <span class="name">神仙儿</span>
              <button type="primary" class="button" @click="follow">{{tit}}</button>
            </div>
            <div class="bottom">
              <span>日期：2021.12.20 9:14</span>
            </div>
          </div>
        </div>
        <div class="details">
          <span>
           {{displayContent}}
           
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  data(){
    return{
      bigTitle:'我是一个大标题',
      displayContent:'我是展示内容的地方',
      tit:'关注',
      num:0,
    }
  },
  methods:{
     follow(){
      this.num++;
      this.num%2 == 0 ? this.tit = '关注' : this.tit = '已关注' 
    }

  }

};
</script>

<style scoped lang='scss'>
.wrap {
  padding: 20px;
}
.title {
  font-size: 30px;
}
.center {
  margin: auto;
  text-align: left;
}
.information {
  height: 100px;
  margin-top: 20px;
  display: flex;
}

.nickName {
  height: 100px;
  margin-left: 20px;
}
.top {
  height: 30px;
  display: flex;
  margin-top: 10px;
}
.button {
  width: 60px;
  height: 30px;
  border: none;
  border: 1px solid #fff;
  color: #406dff;
  border-radius: 50px;
  margin-left: 10px;
}
.name {
  line-height: 30px;
}
.bottom {
  height: 30px;
  margin-top: 10px;
}

</style>