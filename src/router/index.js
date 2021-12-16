import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/user/Login.vue'
import Registration from '../views/user/Registration.vue'

Vue.use(VueRouter)

export const routes = [{
        path: '/',
        name: '/',
        redirect: '/data/realtime',
        meta: {
            title: '',
        },
    },
    {
        path: '/data',
        name: 'Data',
        component: Home,
        meta: {
            title: '数据中心',
            icon: 'el-icon-s-data'
        },
        children: [{
                path: '/data/realtime',
                name: 'Realtime',
                meta: {
                    title: '实时数据'
                },
                component: () =>
                    import ( /* webpackChunkName: "realtime" */ '../views/data/Realtime')
            },
            {
                path: '/data/transaction',
                name: 'Transaction',
                meta: {
                    title: '交易数据'
                },
                component: () =>
                    import ( /* webpackChunkName: "transaction" */ '../views/data/Transaction')
            },
            {
                path: '/data/commodity',
                name: 'Commodity',
                meta: {
                    title: '商品数据'
                },
                component: () =>
                    import ( /* webpackChunkName: "commodity" */ '../views/data/Commodity')
            },
            {
                path: '/data/customer',
                name: 'Customer',
                meta: {
                    title: '客户数据'
                },
                component: () =>
                    import ( /* webpackChunkName: "customer" */ '../views/data/Customer')
            },
            {
                path: '/data/analysis',
                name: 'Analysis',
                meta: {
                    title: '分析报告'
                },
                component: () =>
                    import ( /* webpackChunkName: "analysis" */ '../views/data/Analysis')
            },
        ]
    },
    {
        path: '/order',
        name: 'Order',
        component: Home,
        meta: {
            title: '订单管理',
            icon: 'el-icon-s-order'
        },
        children: [{
                path: '/order/index',
                name: 'Allorders',
                meta: {
                    title: '全部订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "index" */ '../views/order/Index')
            },
            {
                path: '/order/examine',
                name: 'Examine',
                meta: {
                    title: '待审核订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "examine" */ '../views/order/Examine')
            },
            {
                path: '/order/paid',
                name: 'Paid',
                meta: {
                    title: '待支付订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "paid" */ '../views/order/Paid')
            },
            {
                path: '/order/shipped',
                name: 'Shipped',
                meta: {
                    title: '待发货订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "shipped" */ '../views/order/Shipped')
            },
            {
                path: '/order/received',
                name: 'Received',
                meta: {
                    title: '待收货订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "received" */ '../views/order/Received')
            },
            {
                path: '/order/completed',
                name: 'Completed',
                meta: {
                    title: '已完成订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "completed" */ '../views/order/Completed')
            },
            {
                path: '/order/cancelled',
                name: 'Cancelled',
                meta: {
                    title: '已取消订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "cancelled" */ '../views/order/Cancelled')
            },
            {
                path: '/order/delivery',
                name: 'Delivery',
                meta: {
                    title: '发货管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "delivery" */ '../views/order/Delivery')
            },
            {
                path: '/order/abnormal',
                name: 'Abnormal',
                meta: {
                    title: '异常订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "abnormal" */ '../views/order/Abnormal')
            }
        ]
    },
    {
        path: '/commodity',
        name: 'Commodity',
        component: Home,
        meta: {
            title: '商品管理',
            icon: 'el-icon-shopping-bag-1'
        },
        children: [{
                path: '/commodity/index',
                name: 'CommodityManage',
                meta: {
                    title: '商品管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "index" */ '../views/commodity/Index')
            },
            {
                path: '/commodity/addgoods',
                name: 'AddGoods',
                meta: {
                    title: '新增商品',
                },
                component: () =>
                    import ( /* webpackChunkName: "addgoods" */ '../views/commodity/AddGoods')
            },
            {
                path: '/commodity/classification',
                name: 'Classification',
                meta: {
                    title: '商品分类',
                },
                component: () =>
                    import ( /* webpackChunkName: "classification" */ '../views/commodity/Classification')
            },
            {
                path: '/commodity/addclassify',
                name: 'AddClassify',
                meta: {
                    title: '新增分类',
                },
                component: () =>
                    import ( /* webpackChunkName: "addclassify" */ '../views/commodity/AddClassify')
            },
            {
                path: '/commodity/attribute',
                name: 'Attribute',
                meta: {
                    title: '商品属性',
                },
                component: () =>
                    import ( /* webpackChunkName: "attribute" */ '../views/commodity/Attribute')
            },
            {
                path: '/commodity/specification',
                name: 'Specification',
                meta: {
                    title: '规格管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "specification" */ '../views/commodity/Specification')
            },
            {
                path: '/commodity/brand',
                name: 'Brand',
                meta: {
                    title: '品牌管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "brand" */ '../views/commodity/Brand')
            },
            {
                path: '/commodity/parameters',
                name: 'Parameters',
                meta: {
                    title: '商品参数',
                },
                component: () =>
                    import ( /* webpackChunkName: "parameters" */ '../views/commodity/Parameters')
            },
            {
                path: '/commodity/unit',
                name: 'Unit',
                meta: {
                    title: '单位管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "unit" */ '../views/commodity/Unit')
            },
        ]
    },
    {
        path: '/marketing',
        name: 'Marketing',
        component: Home,
        meta: {
            title: '营销管理',
            icon: 'el-icon-s-ticket'
        },
        children: [{
                path: '/marketing/seckill',
                name: 'Seckill',
                meta: {
                    title: '秒杀管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "seckill" */ '../views/marketing/Seckill')
            },
            {
                path: '/marketing/sale',
                name: 'Sale',
                meta: {
                    title: '特卖管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "sale" */ '../views/marketing/Sale')
            },
            {
                path: '/marketing/coupon',
                name: 'Coupon',
                meta: {
                    title: '优惠券管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "coupon" */ '../views/marketing/Coupon')
            },
            {
                path: '/marketing/marketingact',
                name: 'MarketingAct',
                meta: {
                    title: '会销活动',
                },
                component: () =>
                    import ( /* webpackChunkName: "marketingact" */ '../views/marketing/MarketingAct')
            },
            {
                path: '/marketing/gift',
                name: 'Gift',
                meta: {
                    title: '搭赠活动',
                },
                component: () =>
                    import ( /* webpackChunkName: "gift" */ '../views/marketing/Gift')
            },
            {
                path: '/marketing/policy',
                name: 'Policy',
                meta: {
                    title: '策略管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "policy" */ '../views/marketing/Policy')
            },
        ]
    },
    {
        path: '/content',
        name: 'Content',
        component: Home,
        meta: {
            title: '内容管理',
            icon: 'el-icon-tickets'
        },
        children: [{
                path: '/content/navigation',
                name: 'Navigation',
                meta: {
                    title: '导航管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "navigation" */ '../views/content/Navigation')
            },
            {
                path: '/content/label',
                name: 'ContLabel',
                meta: {
                    title: '标签管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "label" */ '../views/content/Label')
            },
            {
                path: '/content/advertising',
                name: 'Advertising',
                meta: {
                    title: '广告管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "advertising" */ '../views/content/Advertising')
            },
            {
                path: '/content/homepage',
                name: 'HomePage',
                meta: {
                    title: '首页推荐',
                },
                component: () =>
                    import ( /* webpackChunkName: "homepage" */ '../views/content/HomePage')
            },
            {
                path: '/content/local',
                name: 'Local',
                meta: {
                    title: '本地推荐',
                },
                component: () =>
                    import ( /* webpackChunkName: "local" */ '../views/content/Local')
            },
            {
                path: '/content/premium',
                name: 'Premium',
                meta: {
                    title: '炫萌优品',
                },
                component: () =>
                    import ( /* webpackChunkName: "premium" */ '../views/content/Premium')
            },
            {
                path: '/content/quick',
                name: 'Quick',
                meta: {
                    title: '快捷入口',
                },
                component: () =>
                    import ( /* webpackChunkName: "quick" */ '../views/content/Quick')
            },
            {
                path: '/content/merchant',
                name: 'Merchant',
                meta: {
                    title: '商家推荐',
                },
                component: () =>
                    import ( /* webpackChunkName: "merchant" */ '../views/content/Merchant')
            },
            {
                path: '/content/command',
                name: 'Command',
                meta: {
                    title: '口令分享',
                },
                component: () =>
                    import ( /* webpackChunkName: "command" */ '../views/content/Command')
            },
        ]
    },
    {
        path: '/article',
        name: 'Article',
        component: Home,
        meta: {
            title: '文章管理',
            icon: 'el-icon-document'
        },
        children: [{
                path: '/article/articlelist',
                name: 'ArticleList',
                meta: {
                    title: '文章列表',
                },
                component: () =>
                    import ( /* webpackChunkName: "articlelist" */ '../views/article/ArticleList')
            },
            {
                path: '/article/addarticle',
                name: 'AddArticle',
                meta: {
                    title: '新增文章',
                },
                component: () =>
                    import ( /* webpackChunkName: "articlelist" */ '../views/article/AddArticle')
            },
            {
                path: '/article/details',
                name: 'Details',
                meta: {
                    title: '文章详情',
                },
                component: () =>
                    import ( /* webpackChunkName: "details" */ '../views/article/Details')
            },
        ]
    },

    {
        path: '/supplier',
        name: 'Supplier',
        component: Home,
        meta: {
            title: '供应商管理',
            icon: 'el-icon-box'
        },
        children: [{
                path: '/supplier/index',
                name: 'SupplierManage',
                meta: {
                    title: '供应商管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "index" */ '../views/supplier/Index')
            },
            {
                path: '/supplier/label',
                name: 'SuppLabel',
                meta: {
                    title: '标签管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "label" */ '../views/supplier/Label')
            },
        ]
    },
    {
        path: '/merchant',
        name: 'Merchant',
        component: Home,
        meta: {
            title: '商户管理',
            icon: 'el-icon-s-shop'
        },
        children: [{
                path: '/merchant/index',
                name: 'MerchantManage',
                meta: {
                    title: '商户管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "index" */ '../views/merchant/Index')
            },
            {
                path: '/merchant/settled',
                name: 'Settled',
                meta: {
                    title: '商户入驻',
                },
                component: () =>
                    import ( /* webpackChunkName: "settled" */ '../views/merchant/Settled')
            },
            {
                path: '/merchant/label',
                name: 'MerLabel',
                meta: {
                    title: '标签管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "label" */ '../views/merchant/Label')
            },
        ]
    },
    {
        path: '/set',
        name: 'Set',
        component: Home,
        meta: {
            title: '系统设置',
            icon: 'el-icon-s-tools'
        },
        children: [{
                path: '/set/theme',
                name: 'Theme',
                meta: {
                    title: '设置主题',
                },
                component: () =>
                    import ( /* webpackChunkName: "theme" */ '../views/set/Theme')
            },
            {
                path: '/set/feedback',
                name: 'Feedback',
                meta: {
                    title: '意见反馈',
                },
                component: () =>
                    import ( /* webpackChunkName: "feedback" */ '../views/set/Feedback')
            },
            {
                path: '/set/password',
                name: 'Password',
                meta: {
                    title: '修改密码',
                },
                component: () =>
                    import ( /* webpackChunkName: "password" */ '../views/set/Password')
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: '',
        },
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration,
        meta: {
            title: '',
        },
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router