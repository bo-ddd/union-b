import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/UserCenter/Login.vue'
import Registration from '../views/UserCenter/Registration.vue'

Vue.use(VueRouter)

export const routes = [{
        path: '/',
        name: '/',
        redirect: '/datacenter/realtime',
        meta: {
            title: '',
        },
    },
    {
        path: '/datacenter',
        name: 'Datacenter',
        component: Home,
        meta: {
            title: '数据中心',
            icon: 'el-icon-s-data'
        },
        children: [{
                path: '/datacenter/realtime',
                name: 'Realtime',
                meta: {
                    title: '实时数据'
                },
                component: () =>
                    import ( /* webpackChunkName: "realtime" */ '../views/Datacenter/Realtime')
            },
            {
                path: '/datacenter/transaction',
                name: 'Transaction',
                meta: {
                    title: '交易数据'
                },
                component: () =>
                    import ( /* webpackChunkName: "transaction" */ '../views/Datacenter/Transaction')
            },
            {
                path: '/datacenter/commodity',
                name: 'Commodity',
                meta: {
                    title: '商品数据'
                },
                component: () =>
                    import ( /* webpackChunkName: "commodity" */ '../views/Datacenter/Commodity')
            },
            {
                path: '/datacenter/customer',
                name: 'Customer',
                meta: {
                    title: '客户数据'
                },
                component: () =>
                    import ( /* webpackChunkName: "customer" */ '../views/Datacenter/Customer')
            }
        ]
    },
    {
        path: '/ordermanage',
        name: 'Ordermanage',
        component: Home,
        meta: {
            title: '订单管理',
            icon: 'el-icon-s-order'
        },
        children: [{
                path: '/ordermanage/allorders',
                name: 'Allorders',
                meta: {
                    title: '全部订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "allorders" */ '../views/Ordermanage/Allorders')
            },
            {
                path: '/ordermanage/tobeapprovedorders',
                name: 'TobeApprovedOrders',
                meta: {
                    title: '待审核订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "tobeapprovedorders" */ '../views/Ordermanage/TobeApprovedOrders')
            },
            {
                path: '/ordermanage/tobepaidorders',
                name: 'TobePaidOrders',
                meta: {
                    title: '待支付订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "tobepaidorders" */ '../views/Ordermanage/TobePaidOrders')
            },
            {
                path: '/ordermanage/tobeshippedorders',
                name: 'TobeShippedOrders',
                meta: {
                    title: '待发货订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "tobeshippedorders" */ '../views/Ordermanage/TobeShippedOrders')
            },
            {
                path: '/ordermanage/tobereceivedorders',
                name: 'TobeReceivedOrders',
                meta: {
                    title: '待收货订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "tobereceivedorders" */ '../views/Ordermanage/TobeReceivedOrders')
            },
            {
                path: '/ordermanage/completedorders',
                name: 'CompletedOrders',
                meta: {
                    title: '已完成订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "completedorders" */ '../views/Ordermanage/CompletedOrders')
            },
            {
                path: '/ordermanage/cancelledorders',
                name: 'CancelledOrders',
                meta: {
                    title: '已取消订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "cancelledorders" */ '../views/Ordermanage/CancelledOrders')
            },
            {
                path: '/ordermanage/deliverymanage',
                name: 'DeliveryManage',
                meta: {
                    title: '发货管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "deliverymanage" */ '../views/Ordermanage/DeliveryManage')
            },
            {
                path: '/ordermanage/abnormalorders',
                name: 'AbnormalOrders',
                meta: {
                    title: '异常订单',
                },
                component: () =>
                    import ( /* webpackChunkName: "abnormalorders" */ '../views/Ordermanage/AbnormalOrders')
            }
        ]
    },
    {
        path: '/commoditymanage',
        name: 'CommodityManage',
        component: Home,
        meta: {
            title: '商品管理',
            icon: 'el-icon-shopping-bag-1'
        },
        children: [{
                path: '/commoditymanage/commoditymanagement',
                name: 'CommodityManagement',
                meta: {
                    title: '商品管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "commoditymanagement" */ '../views/CommodityManage/CommodityManagement')
            },
            {
                path: '/commoditymanage/commodityclassification',
                name: 'CommodityClassification',
                meta: {
                    title: '商品分类',
                },
                component: () =>
                    import ( /* webpackChunkName: "commodityclassification" */ '../views/CommodityManage/CommodityClassification')
            },
            {
                path: '/commoditymanage/commodityattribute',
                name: 'CommodityAttribute',
                meta: {
                    title: '商品属性',
                },
                component: () =>
                    import ( /* webpackChunkName: "commodityattribute" */ '../views/CommodityManage/CommodityAttribute')
            },
            {
                path: '/commoditymanage/specificationmanage',
                name: 'SpecificationManage',
                meta: {
                    title: '规格管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "specificationmanage" */ '../views/CommodityManage/SpecificationManage')
            },
            {
                path: '/commoditymanage/brandmanage',
                name: 'BrandManage',
                meta: {
                    title: '品牌管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "brandmanage" */ '../views/CommodityManage/BrandManage')
            },
            {
                path: '/commoditymanage/productparameters',
                name: 'ProductParameters',
                meta: {
                    title: '商品参数',
                },
                component: () =>
                    import ( /* webpackChunkName: "productparameters" */ '../views/CommodityManage/ProductParameters')
            },
            {
                path: '/commoditymanage/unitmanage',
                name: 'UnitManage',
                meta: {
                    title: '单位管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "unitmanage" */ '../views/CommodityManage/UnitManage')
            },
        ]
    },
    {
        path: '/marketingmanage',
        name: 'MarketingManage',
        component: Home,
        meta: {
            title: '营销管理',
            icon: 'el-icon-s-ticket'
        },
        children: [{
                path: '/marketingmanage/seckillmanage',
                name: 'SeckillManage',
                meta: {
                    title: '秒杀管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "seckillmanage" */ '../views/MarketingManage/SeckillManage')
            },
            {
                path: '/marketingmanage/salemanage',
                name: 'SaleManage',
                meta: {
                    title: '特卖管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "salemanage" */ '../views/MarketingManage/SaleManage')
            },
            {
                path: '/marketingmanage/couponmanage',
                name: 'CouponManage',
                meta: {
                    title: '优惠券管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "couponmanage" */ '../views/MarketingManage/CouponManage')
            },
            {
                path: '/marketingmanage/marketingactivities',
                name: 'MarketingActivities',
                meta: {
                    title: '会销活动',
                },
                component: () =>
                    import ( /* webpackChunkName: "marketingactivities" */ '../views/MarketingManage/MarketingActivities')
            },
            {
                path: '/marketingmanage/complimentaryactivities',
                name: 'ComplimentaryActivities',
                meta: {
                    title: '搭赠活动',
                },
                component: () =>
                    import ( /* webpackChunkName: "complimentaryactivities" */ '../views/MarketingManage/ComplimentaryActivities')
            },
            {
                path: '/marketingmanage/policymanage',
                name: 'PolicyManage',
                meta: {
                    title: '策略管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "policymanage" */ '../views/MarketingManage/PolicyManage')
            },
        ]
    },
    {
        path: '/contentmanage',
        name: 'ContentManage',
        component: Home,
        meta: {
            title: '内容管理',
            icon: 'el-icon-document'
        },
        children: [{
                path: '/contentmanage/navigationmanage',
                name: 'NavigationManage',
                meta: {
                    title: '导航管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "navigationmanage" */ '../views/ContentManage/NavigationManage')
            },
            {
                path: '/contentmanage/articlemanage',
                name: 'ArticleManage',
                meta: {
                    title: '文章管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "articlemanage" */ '../views/ContentManage/ArticleManage')
            },
            {
                path: '/contentmanage/labelmanage',
                name: 'LabelManage',
                meta: {
                    title: '标签管理',
                },
                component: () =>
                    import ( /* webpackChunkName: "labelmanage" */ '../views/ContentManage/LabelManage')
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