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
           Api.userGetToken().then(res=>{
               sessionStorage.setItem('token',res.data)
               console.log(res);
            });
            return Api.getUserInfo(payload);
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
        //生成rsa公钥接口
        getRSAPublicKey(ctx, payload) {
            return Api.getRSAPublicKey(payload);
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
            return Api.getCategoryList(payload);
        },
        //添加类目接口
        createCategory(ctx, payload) {
            return Api.createCategory(payload);
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
        //添加商品接口
        createProduct(ctx, payload) {
            return Api.createProduct(payload);
        },
        //商品属性接口
        getAttributeList(ctx, payload) {
            return Api.getAttributeList(payload);
        },
        //商品属性接口
        createAttribute(ctx, payload) {
            return Api.createAttribute(payload);
        },
        //商品单位接口
        getUnitlibraryList(ctx, payload) {
            return Api.getUnitlibraryList(payload);
        },
        //添加单位接口
        createUnitlibrary(ctx, payload) {
            return Api.createUnitlibrary(payload);
        },
        //商品单位排序接口
        unitlibraryOrders(ctx, payload) {
            return Api.unitlibraryOrders(payload);
        },
        //商品单位置顶接口
        unitlibraryStick(ctx, payload) {
            return Api.unitlibraryStick(payload);
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


        //订单管理
        //订单列表接口
        getOrderList(ctx, payload) {
            return Api.getOrderList(payload);
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

    },
    modules: {}
})