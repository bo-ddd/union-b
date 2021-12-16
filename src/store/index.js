import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/api/api'
import { routes } from '@/router'

Vue.use(Vuex)

let getRoutes = function() {
    let defined = ['/', '/registration', '/login'];
    let arr = routes;
    let res = [];
    arr.forEach(item => {
        if (!defined.includes(item.path)) {
            res.push(item)
        }
    })
    return res;
}

export default new Vuex.Store({
    state: {
        routes: getRoutes()
    },
    getters: {
        routes: state => state.routes,
    },
    mutations: {},
    actions: {
        //登录
        userLogin(ctx, payload) {
            return Api.userLogin(payload);
        },
        //验证码
        getCaptcha() {
            return Api.getCaptcha()
        },


        //商品管理
        //商品类目接口
        getCategoryList(ctx, payload) {
            return Api.getCategoryList(payload);
        },
        //类目规格接口
        getSpecificationList(ctx, payload) {
            return Api.getSpecificationList(payload);
        },


        //内容管理
        //快捷入口接口
        getQuickList(ctx, payload) {
            return Api.getQuickList(payload);
        },
    },
    modules: {}
})