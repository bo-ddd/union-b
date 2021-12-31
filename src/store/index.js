import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/api/api'
import { routes } from '@/router'
import data from '../assets/js/getToken'
console.log(data);
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
        needReCategoryList: true,
        categorylist: {},
        needGetTradeData: true,
        tradeData: {},
        routes: getRoutes()
    },
    getters: {
        routes: state => state.routes,
        needReCategoryList: state => state.needReCategoryList,
        categorylist: state => state.categorylist,
        tradeData: state => state.tradeData,
        needGetTradeData: state => state.needGetTradeData
    },
    mutations: {
        // ctx.commit('NEED_GETCATEGORYLIST',false)
        NEED_GETCATEGORYLIST: (state, payload) => state.needReCategoryList = payload,
        CATEGORY_LIST: (state, payload) => state.categorylist = payload,
        NEED_GETGETTRADEDATA: (state, payload) => state.needGetTradeData = payload,
        TRADEDATA: (state, payload) => state.tradeData = payload
    },
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
        //更改用户信息
        updateUserInfo(ctx, payload) {
            return Api.updateUserInfo(payload);
        },
        //退出登录
        userLogout(ctx, payload) {
            return Api.userLogout(payload);
        },
        //修改密码 
        userUpdatePwd(ctx, payload) {
            return Api.userUpdatePwd(payload);
        },
        //获取token接口
        userGetToken(ctx, payload) {
            return Api.userGetToken(payload);
        },
        //上传图片接口
        uploadImage(ctx, payload) {
            return Api.uploadImage(payload);
        },
        //身份列表接口
        getIdentityList(ctx, payload) {
            return Api.getIdentityList(payload);
        },
        //新增身份接口
        createIdentity(ctx, payload) {
            return Api.createIdentity(payload);
        },


        //商品管理
        //商品管理列表接口
        getProductList(ctx, payload) {
            return Api.getProductList(payload);
        },
        //商品类目接口
        getCategoryList(ctx, payload) {
            if (ctx.state.needReCategoryList) {
                return Api.getCategoryList(payload).then(res => {
                    //commit到mutations里面
                    ctx.commit('NEED_GETCATEGORYLIST', false);
                    ctx.commit('CATEGORY_LIST', res);
                    return res;
                })
            } else {
                return ctx.state.categorylist;
            }
        },
        //添加类目接口
        createCategory(ctx, payload) {
            return Api.createCategory(payload);
        },
        //删除类目接口
        deleteCategory(ctx, payload) {
            return Api.deleteCategory(payload);
        },
        //商品类目排序接口
        categoryOrders(ctx, payload) {
            return Api.categoryOrders(payload);
        },
        //类目规格接口
        getSpecificationList(ctx, payload) {
            return Api.getSpecificationList(payload);
        },
        //添加规格接口
        createSpecification(ctx, payload) {
            return Api.createSpecification(payload);
        },
        //删除规格接口
        deleteSpecification(ctx, payload) {
            return Api.deleteSpecification(payload);
        },
        //添加商品接口
        createProduct(ctx, payload) {
            return Api.createProduct(payload);
        },
        //删除商品接口
        deleteProduct(ctx, payload) {
            return Api.deleteProduct(payload);
        },
        //商品属性接口
        getAttributeList(ctx, payload) {
            return Api.getAttributeList(payload);
        },
        //添加属性接口
        createAttribute(ctx, payload) {
            return Api.createAttribute(payload);
        },
        //删除属性接口
        deleteAttribute(ctx, payload) {
            return Api.deleteAttribute(payload);
        },
        //商品单位接口
        getUnitlibraryList(ctx, payload) {
            return Api.getUnitlibraryList(payload);
        },
        //添加单位接口
        createUnitlibrary(ctx, payload) {
            return Api.createUnitlibrary(payload);
        },
        //删除单位接口
        disableUnitlibrary(ctx, payload) {
            return Api.disableUnitlibrary(payload);
        },
        //商品单位排序接口
        unitlibraryOrders(ctx, payload) {
            return Api.unitlibraryOrders(payload);
        },
        //商品单位置顶接口
        unitlibraryStick(ctx, payload) {
            return Api.unitlibraryStick(payload);
        },
        //商品属性置顶接口
        attributeStick(ctx, payload) {
            return Api.attributeStick(payload);
        },
        //商品属性排序接口
        attributeOrders(ctx, payload) {
            return Api.attributeOrders(payload);
        },
        //单位模糊查询接口
        unitlibraryFuzzySearch(ctx, payload) {
            return Api.unitlibraryFuzzySearch(payload);
        },
        //规格管理更改
        updateSpecification(ctx, payload) {
            return Api.updateSpecification(payload);
        },
        //商品属性更改
        updateAttribute(ctx, payload) {
            return Api.updateAttribute(payload);
        },
        //类目规格模糊查询接口
        specificationFuzzySearch(ctx, payload) {
            return Api.specificationFuzzySearch(payload);
        },



        //数据中心
        //交易数据接口
        getTradeData(ctx, payload) {
            if (ctx.state.needGetTradeData) {
                return Api.getTradeData(payload).then(res => {
                    ctx.commit('NEED_GETGETTRADEDATA', false);
                    ctx.commit('TRADEDATA', res);
                    return res
                })
            } else {
                return ctx.state.tradeData
            }
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
        //快速入口增加
        createQuick(ctx, payload) {
            return Api.createQuick(payload);
        },
        //修改快速入口
        updateQuick(ctx, payload) {
            return Api.updateQuick(payload);
        },
        //删除快速入口
        deleteQuick(ctx, payload) {
            return Api.deleteQuick(payload);
        },
        //广告管理接口
        getAdvertList(ctx, payload) {
            return Api.getAdvertList(payload);
        },
        //新增广告接口
        createAdvert(ctx, payload) {
            return Api.createAdvert(payload);
        },
        //更改广告接口
        updateAdvert(ctx, payload) {
            return Api.updateAdvert(payload);
        },
        //删除广告接口
        deleteAdvert(ctx, payload) {
            return Api.deleteAdvert(payload);
        },
        //根据Id查询广告
        findIdAdvert(ctx, payload) {
            return Api.findIdAdvert(payload);
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
        //删除文章接口
        deleteArticle(ctx, payload) {
            return Api.deleteArticle(payload);
        },
        //修改文章接口
        updateArticle(ctx, payload) {
            return Api.updateArticle(payload);
        },
        //导航列表接口
        getNavList(ctx, payload) {
            return Api.getNavList(payload);
        },
        //新增导航展示
        createNav(ctx, payload) {
            return Api.createNav(payload);
        },
        //删除导航展示
        deleteNav(ctx, payload) {
            return Api.deleteNav(payload);
        },
        //获取商品Id以及名称
        superProductTradeName(ctx, payload) {
            return Api.superProductTradeName(payload);
        },
        //根据商品Id获取图片
        superProductTradeImg(ctx, payload) {
            return Api.superProductTradeImg(payload);
        },
        //新增推荐商品
        createSuperProduct(ctx, payload) {
            return Api.createSuperProduct(payload);
        },
        //更改推荐商品
        updateSuperProduct(ctx, payload) {
            return Api.updateSuperProduct(payload);
        },
        //banner列表
        getBannerList(ctx, payload) {
            return Api.getBannerList(payload);
        },
        //更改banner
        updateBanner(ctx, payload) {
            return Api.updateBanner(payload);
        },
        //增加banner
        createBanner(ctx, payload) {
            return Api.createBanner(payload);
        },
        //删除banner
        deleteBanner(ctx, payload) {
            return Api.deleteBanner(payload);
        },
        //首页推荐列表
        getHomeList(ctx, payload) {
            return Api.getHomeList(payload);
        },
        //新增首页推荐
        createHome(ctx, payload) {
            return Api.createHome(payload);
        },
        //删除首页推荐
        deleteHome(ctx, payload) {
            return Api.deleteHome(payload);
        },
        //更改首页推荐
        updateHome(ctx, payload) {
            return Api.updateHome(payload);
        },


        //订单管理
        //订单列表接口
        getOrderList(ctx, payload) {
            return Api.getOrderList(payload);
        },
        //获取快递接口
        getExpressList(ctx, payload) {
            return Api.getExpressList(payload);
        },
        //订单详情接口
        getOrderDetail(ctx, payload) {
            return Api.getOrderDetail(payload);
        },
        //订单状态接口
        getOrderStatusList(ctx, payload) {
            return Api.getOrderStatusList(payload);
        },
        //支付方式接口
        getPaymentList(ctx, payload) {
            return Api.getPaymentList(payload);
        },

        //系统设置
        //意见反馈接口
        getOpinionList(ctx, payload) {
            return Api.getOpinionList(payload);
        },
        //新增文章接口
        createOpinion(ctx, payload) {
            return Api.createOpinion(payload);
        },

        //商户管理
        //商户入驻接口
        createSettled(ctx, payload) {
            return Api.createSettled(payload);
        },
        //同意申请接口
        settledAdopt(ctx, payload) {
            return Api.settledAdopt(payload);
        },
        //拒绝申请接口
        settledRefuse(ctx, payload) {
            return Api.settledRefuse(payload);
        },
        //商户申请列表接口
        getSettledList(ctx, payload) {
            return Api.getSettledList(payload);
        },

        //店铺管理
        //店铺列表接口
        getStoreList(ctx, payload) {
            return Api.getStoreList(payload);
        },
        //我的店铺接口
        getMineStoreList(ctx, payload) {
            return Api.getMineStoreList(payload);
        },
        //店铺详情接口
        getStoreDetail(ctx, payload) {
            return Api.getStoreDetail(payload);
        },

        //路由管理
        // 新增路由接口 
        createRoute(ctx, payload) {
            return Api.createRoute(payload);
        },
        //新增路由中的meta
        createRouteMeta(ctx, payload) {
            return Api.createRouteMeta(payload);
        },
        //修改路由接口
        updateRoute(ctx, payload) {
            return Api.updateRoute(payload);
        },
        //修改路由中的meta 
        updateRouteMeta(ctx, payload) {
            return Api.updateRouteMeta(payload);
        },
        //路由列表 
        getRouteList(ctx, payload) {
            return Api.getRouteList(payload);
        },
        //路由meta列表
        getRouteMetaList(ctx, payload) {
            return Api.getRouteMetaList(payload);
        },
        //删除路由接口
        deleteRoute(ctx, payload) {
            return Api.deleteRoute(payload);
        },
        //删除路由meta接口
        deleteRouteMeta(ctx, payload) {
            return Api.deleteRouteMeta(payload);
        },


    },
    modules: {}
})