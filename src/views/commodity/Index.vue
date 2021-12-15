<template>
  <div class="main">
            <div class="m-header">
               <div class="m-header_top">
                     <div class="mheade-top_content">
                       <span>商品状态<el-cascader class="cascader" placeholder="全部" :options="options" @change="handleChange"></el-cascader></span>
                     </div>
                     <div class="mheade-top_content">right</div>
               </div>
           </div> 
  </div>
</template>

<script>
export default {
   /**
    * author: syh
    */
   data(){
     return{
       
          options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
            }]
          }]
     }
   }
}
</script>

<style lang="scss" scoped>
.m-header_top{
 display: grid;
 grid-template-columns:90% 10%;
}

.cascader {
  margin-left: 5px;
  width:140px;
  height:30px !important;
}

</style>