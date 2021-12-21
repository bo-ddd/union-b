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
        //注册
        userRegister(ctx, payload) {
            return Api.userRegister(payload);
        },
        //用户信息
        getUserInfo(ctx, payload) {
            return Api.getUserInfo(payload);
        },
        //退出登录
        userLogout(ctx, payload) {
            return Api.userLogout(payload);
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
        //添加类目接口
        createCategory(ctx, payload) {
            return Api.createCategory(payload);
        },
        //添加商品接口
        createProduct(ctx, payload) {
            return Api.createProduct(payload);
        },
        //商品属性接口
        getAttributeList(ctx, payload) {
            return Api.getAttributeList(payload);
        },
        //商品单位接口
        getUnitlibraryList(ctx, payload) {
            return Api.getUnitlibraryList(payload);
        },
        //添加单位接口
        createUnitlibrary(ctx, payload) {
            return Api.createUnitlibrary(payload);
        },



        //数据中心
        //交易数据接口
        getTradeData(ctx, payload) {
            return Api.getTradeData(payload);
        },
        //数据排行接口
        getRankingData(ctx, payload) {
            return Api.getRankingData(payload);
        },


        //内容管理
        //快捷入口接口
        getQuickList(ctx, payload) {
            return Api.getQuickList(payload);
        },
        //广告管理接口
        getAdvertList(ctx, payload) {
            return Api.getAdvertList(payload);
        },
        //优品展示接口
        getSuperList(ctx, payload) {
            return Api.getSuperList(payload);
        },
        //标签列表接口
        getLableList(ctx, payload) {
            return Api.getLableList(payload);
        },
        //新增标签接口
        createLable(ctx, payload) {
            return Api.createLable(payload);
        },
        //文章列表接口
        getArticleList(ctx, payload) {
            return Api.getArticleList(payload);
        },
        //新增文章接口
        createArticle(ctx, payload) {
            return Api.createArticle(payload);
        },


        //订单管理
        //订单列表接口
        getOrderList(ctx, payload) {
            return Api.getOrderList(payload);
        },
        //订单详情接口
        getOrderDetail(ctx, payload) {
            return Api.getOrderDetail(payload);
        },
    },
    modules: {}
})