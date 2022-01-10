import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/user/Login.vue'

Vue.use(VueRouter)

export const routes = [{
        path: '/',
        name: '/',
        component: Home,
        redirect: '/data/transaction',
        meta: {
            title: '',
        },
    },
    // {
    //     path: '/data',
    //     name: 'Data',
    //     component: Home,
    //     meta: {
    //         title: '数据中心',
    //         icon: 'el-icon-data-line'
    //     },
    //     children: [{
    //             path: '/data/realtime',
    //             name: 'Realtime',
    //             meta: {
    //                 title: '实时数据'
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "realtime" */ '../views/data/Realtime')
    //         },
    //         {
    //             path: '/data/transaction',
    //             name: 'Transaction',
    //             meta: {
    //                 title: '交易数据'
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "transaction" */ '../views/data/Transaction')
    //         },
    //         {
    //             path: '/data/commodity',
    //             name: 'Commodity',
    //             meta: {
    //                 title: '商品数据'
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "commodity" */ '../views/data/Commodity')
    //         },
    //         {
    //             path: '/data/customer',
    //             name: 'Customer',
    //             meta: {
    //                 title: '客户数据'
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "customer" */ '../views/data/Customer')
    //         },
    //         {
    //             path: '/data/analysis',
    //             name: 'Analysis',
    //             meta: {
    //                 title: '分析报告'
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "analysis" */ '../views/data/Analysis')
    //         },
    //     ]
    // },
    // {
    //     path: '/order',
    //     name: 'Order',
    //     component: Home,
    //     meta: {
    //         title: '订单管理',
    //         icon: 'el-icon-notebook-1'
    //     },
    //     children: [{
    //             path: '/order/index',
    //             name: 'Allorders',
    //             meta: {
    //                 title: '订单管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "index" */ '../views/order/Index')
    //         },
    //         {
    //             path: '/order/details',
    //             name: 'OrderDetails',
    //             meta: {
    //                 title: '订单详情',
    //                 flag: "false"
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "details" */ '../views/order/OrderDetails')
    //         }
    //     ]
    // },
    // {
    //     path: '/store',
    //     name: 'Store',
    //     component: Home,
    //     meta: {
    //         title: '店铺管理',
    //         icon: 'el-icon-office-building'
    //     },
    //     children: [{
    //             path: '/store/index',
    //             name: 'StoreManage',
    //             meta: {
    //                 title: '查看店铺',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "StoreManage" */ '../views/store/Index')
    //         },
    //         {
    //             path: '/store/mine',
    //             name: 'Mine',
    //             meta: {
    //                 title: '店铺装修',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "mine" */ '../views/store/Mine')
    //         },
    //         {
    //             path: '/store/renovation',
    //             name: 'Renovation',
    //             meta: {
    //                 title: '装修首页',
    //                 flag: "false"
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "renovation" */ '../views/store/Renovation')
    //         },
    //         {
    //             path: '/store/mould',
    //             name: 'Mould',
    //             meta: {
    //                 title: '模板市场',
    //                 flag: "false"
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "mould" */ '../views/store/Mould')
    //         },
    //         {
    //             path: '/store/map',
    //             name: 'Map',
    //             meta: {
    //                 title: '店铺位置',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "Map" */ '../views/store/Map')
    //         },
    //         {
    //             path: '/store/details',
    //             name: 'StoreDetails',
    //             meta: {
    //                 title: '店铺详情',
    //                 flag: "false"
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "details" */ '../views/store/StoreDetails')
    //         },
    //     ]
    // },
    // {
    //     path: '/commodity',
    //     name: 'Commodity',
    //     component: Home,
    //     meta: {
    //         title: '商品管理',
    //         icon: 'el-icon-shopping-bag-1'
    //     },
    //     children: [{
    //             path: '/commodity/index',
    //             name: 'CommodityManage',
    //             meta: {
    //                 title: '商品管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "index" */ '../views/commodity/Index')
    //         },
    //         {
    //             path: '/commodity/addgoods',
    //             name: 'AddGoods',
    //             meta: {
    //                 title: '新增商品',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "addgoods" */ '../views/commodity/AddGoods')
    //         },
    //         {
    //             path: '/commodity/classification',
    //             name: 'Classification',
    //             meta: {
    //                 title: '商品分类',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "classification" */ '../views/commodity/Classification')
    //         },
    //         {
    //             path: '/commodity/addclassify',
    //             name: 'AddClassify',
    //             meta: {
    //                 title: '新增分类',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "addclassify" */ '../views/commodity/AddClassify')
    //         },
    //         {
    //             path: '/commodity/attribute',
    //             name: 'Attribute',
    //             meta: {
    //                 title: '商品属性',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "attribute" */ '../views/commodity/Attribute')
    //         },
    //         {
    //             path: '/commodity/specification',
    //             name: 'Specification',
    //             meta: {
    //                 title: '规格管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "specification" */ '../views/commodity/Specification')
    //         },
    //         {
    //             path: '/commodity/brand',
    //             name: 'Brand',
    //             meta: {
    //                 title: '品牌管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "brand" */ '../views/commodity/Brand')
    //         },
    //         {
    //             path: '/commodity/parameters',
    //             name: 'Parameters',
    //             meta: {
    //                 title: '商品参数',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "parameters" */ '../views/commodity/Parameters')
    //         },
    //         {
    //             path: '/commodity/unit',
    //             name: 'Unit',
    //             meta: {
    //                 title: '单位管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "unit" */ '../views/commodity/Unit')
    //         },
    //     ]
    // },
    // {
    //     path: '/marketing',
    //     name: 'Marketing',
    //     component: Home,
    //     meta: {
    //         title: '营销管理',
    //         icon: 'el-icon-wallet'
    //     },
    //     children: [{
    //             path: '/marketing/seckill',
    //             name: 'Seckill',
    //             meta: {
    //                 title: '秒杀管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "seckill" */ '../views/marketing/Seckill')
    //         },
    //         {
    //             path: '/marketing/sale',
    //             name: 'Sale',
    //             meta: {
    //                 title: '特卖管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "sale" */ '../views/marketing/Sale')
    //         },
    //         {
    //             path: '/marketing/coupon',
    //             name: 'Coupon',
    //             meta: {
    //                 title: '优惠券管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "coupon" */ '../views/marketing/Coupon')
    //         },
    //         {
    //             path: '/marketing/marketingact',
    //             name: 'MarketingAct',
    //             meta: {
    //                 title: '会销活动',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "marketingact" */ '../views/marketing/MarketingAct')
    //         },
    //         {
    //             path: '/marketing/gift',
    //             name: 'Gift',
    //             meta: {
    //                 title: '搭赠活动',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "gift" */ '../views/marketing/Gift')
    //         },
    //         {
    //             path: '/marketing/policy',
    //             name: 'Policy',
    //             meta: {
    //                 title: '策略管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "policy" */ '../views/marketing/Policy')
    //         },
    //     ]
    // },
    // {
    //     path: '/content',
    //     name: 'Content',
    //     component: Home,
    //     meta: {
    //         title: '内容管理',
    //         icon: 'el-icon-tickets'
    //     },
    //     children: [{
    //             path: '/content/navigation',
    //             name: 'Navigation',
    //             meta: {
    //                 title: '导航管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "navigation" */ '../views/content/Navigation')
    //         },
    //         {
    //             path: '/content/label',
    //             name: 'ContLabel',
    //             meta: {
    //                 title: '标签管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "label" */ '../views/content/Label')
    //         },
    //         {
    //             path: '/content/advertising',
    //             name: 'Advertising',
    //             meta: {
    //                 title: '广告管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "advertising" */ '../views/content/Advertising')
    //         },
    //         {
    //             path: '/content/homepage',
    //             name: 'HomePage',
    //             meta: {
    //                 title: '首页推荐',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "homepage" */ '../views/content/HomePage')
    //         },
    //         {
    //             path: '/content/premium',
    //             name: 'Premium',
    //             meta: {
    //                 title: '炫萌优品',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "premium" */ '../views/content/Premium')
    //         },
    //         {
    //             path: '/content/quick',
    //             name: 'Quick',
    //             meta: {
    //                 title: '快捷入口',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "quick" */ '../views/content/Quick')
    //         },
    //         {
    //             path: '/content/merchant',
    //             name: 'Merchant',
    //             meta: {
    //                 title: '商家推荐',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "merchant" */ '../views/content/Merchant')
    //         },
    //         {
    //             path: '/content/command',
    //             name: 'Command',
    //             meta: {
    //                 title: '口令分享',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "command" */ '../views/content/Command')
    //         },
    //         {
    //             path: '/content/banner',
    //             name: 'Banner',
    //             meta: {
    //                 title: 'banner管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "banner" */ '../views/content/Banner')
    //         },
    //     ]
    // },
    // {
    //     path: '/article',
    //     name: 'Article',
    //     component: Home,
    //     meta: {
    //         title: '文章管理',
    //         icon: 'el-icon-document'
    //     },
    //     children: [{
    //             path: '/article/articlelist',
    //             name: 'ArticleList',
    //             meta: {
    //                 title: '文章列表',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "articlelist" */ '../views/article/ArticleList')
    //         },
    //         {
    //             path: '/article/addarticle',
    //             name: 'AddArticle',
    //             meta: {
    //                 title: '新增文章',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "articlelist" */ '../views/article/AddArticle')
    //         },
    //         {
    //             path: '/article/details',
    //             name: 'Details',
    //             meta: {
    //                 title: '文章详情',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "details" */ '../views/article/Details')
    //         },
    //     ]
    // },

    // {
    //     path: '/supplier',
    //     name: 'Supplier',
    //     component: Home,
    //     meta: {
    //         title: '供应商管理',
    //         icon: 'el-icon-box'
    //     },
    //     children: [{
    //             path: '/supplier/index',
    //             name: 'SupplierManage',
    //             meta: {
    //                 title: '供应商管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "index" */ '../views/supplier/Index')
    //         },
    //         {
    //             path: '/supplier/label',
    //             name: 'SuppLabel',
    //             meta: {
    //                 title: '管理权限',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "label" */ '../views/supplier/Label')
    //         },
    //     ]
    // },
    // {
    //     path: '/merchant',
    //     name: 'Merchant',
    //     component: Home,
    //     meta: {
    //         title: '商户管理',
    //         icon: 'el-icon-house'
    //     },
    //     children: [{
    //             path: '/merchant/index',
    //             name: 'MerchantManage',
    //             meta: {
    //                 title: '商户管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "index" */ '../views/merchant/Index')
    //         },
    //         {
    //             path: '/merchant/settled',
    //             name: 'Settled',
    //             meta: {
    //                 title: '商户入驻',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "settled" */ '../views/merchant/Settled')
    //         },
    //         {
    //             path: '/merchant/label',
    //             name: 'MerLabel',
    //             meta: {
    //                 title: '权限管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "label" */ '../views/merchant/Label')
    //         },
    //     ]
    // },
    // {
    //     path: '/news',
    //     name: 'News',
    //     component: Home,
    //     meta: {
    //         title: '消息管理',
    //         icon: 'el-icon-bell'
    //     },
    //     children: [{
    //             path: '/news/notification',
    //             name: 'Notification',
    //             meta: {
    //                 title: '系统通知',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "notification" */ '../views/news/Notification')
    //         },
    //         {
    //             path: '/news/help',
    //             name: 'Help',
    //             meta: {
    //                 title: '联系客服',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "help" */ '../views/news/Help')
    //         },
    //     ]
    // },
    // {
    //     path: '/route',
    //     name: 'Route',
    //     component: Home,
    //     meta: {
    //         title: '路由管理',
    //         icon: 'el-icon-link'
    //     },
    //     children: [{
    //             path: '/route/index',
    //             name: 'RouteManage',
    //             meta: {
    //                 title: '路由管理',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "RouteManage" */ '../views/route/RouteManage')
    //         },
    //         {
    //             path: '/route/add',
    //             name: 'AddRoute',
    //             meta: {
    //                 title: '新增路由',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "AddRoute" */ '../views/route/AddRoute')
    //         },
    //         {
    //             path: '/route/identity',
    //             name: 'Identity',
    //             meta: {
    //                 title: '路由权限',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "identity" */ '../views/route/Identity')
    //         },
    //     ]
    // },
    // {
    //     path: '/set',
    //     name: 'Set',
    //     component: Home,
    //     meta: {
    //         title: '系统设置',
    //         icon: 'el-icon-set-up'
    //     },
    //     children: [{
    //             path: '/set/theme',
    //             name: 'Theme',
    //             meta: {
    //                 title: '设置主题',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "theme" */ '../views/set/Theme')
    //         },
    //         {
    //             path: '/set/feedback',
    //             name: 'Feedback',
    //             meta: {
    //                 title: '意见反馈',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "feedback" */ '../views/set/Feedback')
    //         },
    //         {
    //             path: '/set/password',
    //             name: 'Password',
    //             meta: {
    //                 title: '修改密码',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "password" */ '../views/set/Password')
    //         },
    //         {
    //             path: '/set/info',
    //             name: 'UserInfo',
    //             meta: {
    //                 title: '修改信息',
    //             },
    //             component: () =>
    //                 import ( /* webpackChunkName: "info" */ '../views/set/UserInfo')
    //         },
    //     ]
    // },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: '',
        },
        beforeEnter: (to, from, next) => {
            localStorage.setItem('from', from.path)
            next()
        }
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () =>
            import ( /* webpackChunkName: "registration" */ '../views/user/Registration.vue'),
        meta: {
            title: '',
        },
    },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const loginPath = ['/login','/registration']
    if (to.path !== loginPath && !sessionStorage.getItem('token')) next({ path: loginPath })
      next()
})   

export default router