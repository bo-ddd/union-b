import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

Vue.use(ElementUI, { size: "small" });
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    const loginPath = '/login'
    if (to.path !== loginPath && !sessionStorage.getItem('token')) {
      next(loginPath)
    } else {
      next()
    }
})   

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')