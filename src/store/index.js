import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/api/api'
import  routes  from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        routes
    },
    getters: {
        routes: state => state.routes,
    },
    mutations: {},
    actions: {
        /**
         * @description 用户登录
         * @param username  用户名
         * @param password 密码
         */
        login(ctx, payload) {
            return Api.login(payload)
        },
        /**
         * @description 验证码
         */
        getCaptcha() {
            return Api.getCaptcha()
        }
    },
    modules: {}
})