import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
            icon: 'el-icon-s-tools'
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
            },
        ]
    },
    {
        path: '/ordermanage',
        name: 'Ordermanage',
        component: Home,
        meta: {
            title: '订单管理',
            icon: 'el-icon-menu'
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
            },
        ]
    },
    {
        path: '/commoditymanage',
        name: 'CommodityManage',
        component: Home,
        meta: {
            title: '商品管理',
            icon: 'el-icon-menu'
        },
        children: [{
            path: '/commoditymanage/commoditymanagement',
            name: 'CommodityManagement',
            meta: {
                title: '商品管理',
            },
            component: () =>
                import ( /* webpackChunkName: "commoditymanagement" */ '../views/CommodityManage/CommodityManagement')
        }, ]
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router