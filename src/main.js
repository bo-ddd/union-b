import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
// 引入地图
import VueAMap from "vue-amap"
Vue.use(VueAMap)

Vue.use(ElementUI, { size: "small" });
Vue.config.productionTip = false

// 地图
VueAMap.initAMapApiLoader({
  key:'e02bb1f3271957bac9384a27cc1cde3e',
  Plugin:['AMap.Autocomplete','AMap.Geocoder','AMap.PlaceSearch','AMap.Scale','AMap.OverView','AMap.ToolBar','AMap.MapType','AMap.AMapManager','AMap.Geolocation'],
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')