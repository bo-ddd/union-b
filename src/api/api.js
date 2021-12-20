import axios from 'axios';
import { postConfig } from './config'


// 添加请求拦截器  概念：每次调用接口之前都会走到此方法中；走完此方法才会去请求服务端；
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么,一般配置一些请求头的公共信息；
    config.headers.authorization = sessionStorage.getItem('token');
    return config;
})

// 添加响应拦截器  概念：每次调用接口之后都会走到此方法中，服务端返回数据后优先走到此方法，之后才会走到 // // // //axiox.get()/axios.post() 的then方法中；
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么，一般可以把登录失效后的逻辑添加到此处，所有需要登录接口的判断都可以写到此处，这样就不用每个接口都判断用户是否登录，如果没有登录就跳转到登录页面去的逻辑；抽离业务逻辑的好地方；
    if (response.data.status == 401) {
        location.href = '/login'
    }
    return response.data;
}, function(error) {
    // 对响应错误做点什么
    console.log('get error:', error)
    return {
        code: -1,
        msg: '网络异常'
    }
});

//接口定义的方式；
export default {
    //用户的接口
    /**
     * @description  用户登录接口
     * @params {
     * username:[String],   用户名
     * password:[String],   密码
     * captcha:[String]     验证码
     * } 
     * */
    userLogin(params) {
        return axios.post('/user/login', params, postConfig)
    },
    /**
     * @description  验证码
     * */
    getCaptcha() { return `/api/captcha?${Math.random()}` },
    /**
     * @description  用户注册接口
     * @params {
     * username:[string] 必填 用户名称，
     * password:[string] 必填 用户密码,
     * email:[string]    必填 用户邮箱,
     * phone:[string]  非必填 手机号码,
     * } 
     * */
    userRegister(params) {
        return axios.post('/user/register', params, postConfig)
    },

    //商品管理
    /**
     * @description 商品类目接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getCategoryList(params) {
        return axios.post('/category/list', params, postConfig)
    },
    /**
     * @description 类目规格接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getSpecificationList(params) {
        return axios.post('/specification/list', params, postConfig)
    },
    /**
     * @description 添加类目接口
     * @params {
     *  title : [String],   类目昵称
     *  pid   : [Number]    父id
     * } 
     */
    createCategory(params) {
        return axios.post('/category/create', params, postConfig)
    },


    //数据中心
    /**
     * @description 交易数据接口
     * @params 无
     */
    getTradeData(params) {
        return axios.post('/data/trade', params, postConfig)
    },



    //内容管理
    /**
     * @description 快捷入口接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getQuickList(params) {
        return axios.post('/content/list', params, postConfig)
    },
    /**
     * @description 广告管理接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getAdvertList(params) {
        return axios.post('/advert/list', params, postConfig)
    },
    /**
     * @description 优品展示接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getSuperList(params) {
        return axios.post('/superProduct/list', params, postConfig)
    },

    //订单管理
    /**
     * @description 订单列表接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getOrderList(params) {
        return axios.post('/order/list', params, postConfig)
    },

}