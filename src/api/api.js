import axios from 'axios';
import { postConfig, uploadConfig } from './config'

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
    /**
     * @description  用户信息接口
     * @params 没有参数  必须登录
     * */
    getUserInfo(params) {
        return axios.post('/user/info', params, postConfig)
    },
    /**
     * @description  更改用户信息 
     * @params {
     * avatorName : [string],     //非必填    用户名字
     * avatorImg  : [string],     //非必填    用户头像
     * phone      : [string],     //非必填    用户电话
     * identityId : [number]      //非必填    用户身份
     * }
     * */
    updateUserInfo(params) {
        return axios.post('/userInfo/update', params, postConfig)
    },
    /**
     * @description  退出登录接口
     * @params 没有参数  必须登录
     * */
    userLogout(params) {
        return axios.post('/user/logout', params, postConfig)
    },
    /**
     * @description  修改密码接口
     * @params password :[string] 新密码  必须登录
     * */
    userUpdatePwd(params) {
        return axios.post('user/updatePwd', params, postConfig)
    },
    /**
     * @description  获取token接口
     * @params 无
     * */
    userGetToken(params) {
        return axios.post('user/getToken', params, postConfig)
    },
    /**
     * @description 上传图片
     * @params {
     * file:  <stream>  上传的流 
     * type:[Number]  //1.banner图 2.导航图 3.类目图 4.许可证  5.推荐商品  6.文章
     * } 
     */
    uploadImage(params) {
        // params   FormDate()
        // params.append('type',1);
        return axios.post('/upload/image', params, uploadConfig)
    },
    /**
     * @description 身份列表接口 
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getIdentityList(params) {
        return axios.post('/identity/list', params, postConfig)
    },
    /**
     * @description 新增身份接口 
     * @params {
     * identityName:[string]      '身份名称'
     * } 
     */
    createIdentity(params) {
        return axios.post('/identity/create', params, postConfig)
    },


    //商品管理
    /**
     * @description 商品管理列表接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getProductList(params) {
        return axios.post('/product/list', params, postConfig)
    },
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
     * @description 添加类目接口
     * @params {
     *  title : [String],   类目昵称
     *  pid   : [Number]    父id
     * } 
     */
    createCategory(params) {
        return axios.post('/category/create', params, postConfig)
    },
    /**
     * @description 删除类目接口
     * @params {
     * id     //要删除类目的id
     * } 
     */
    deleteCategory(params) {
        return axios.post('/category/delete', params, postConfig)
    },
    /**
     * @description 商品类目排序接口
     * @params {
     * [当前类目的id,要交换类目的id ]
     * } 
     */
    categoryOrders(params) {
        return axios.post('/category/orders', params, postConfig)
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
     * @description 添加规格接口
     * @params {
     * title : [String]     规格名称
     * cid   : [Number]     类目id
     * } 
     */
    createSpecification(params) {
        return axios.post('/specification/create', params, postConfig)
    },
    /**
     * @description 删除规格接口
     * @params {
     *  id     //要删除类目的id
     * } 
     */
    deleteSpecification(params) {
        return axios.post('/specification/delete', params, postConfig)
    },
    /**
     * @description 添加商品接口 
     * @params {
     * cid           : [Number],     商品类目标识
     * title         : [String],    商品名称
     * keywords      : [String],     商品关键字
     * bannerImg     : [String],     商品banner图 
     * platformPrice : [Number],     平台价
     * desc          : [String],     商品描述
     * realPrice     : [Nmber]      商品售卖价
     * } 
     */
    createProduct(params) {
        return axios.post('/product/create;', params, postConfig)
    },
    /**
     * @description 删除商品接口 
     * @params {
     *  id     要删除删除的id
     * } 
     */
    deleteProduct(params) {
        return axios.post('/product/delete;', params, postConfig)
    },
    /**
     * @description 商品属性接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getAttributeList(params) {
        return axios.post('/attribute/list', params, postConfig)
    },
    /**
     * @description 添加属性接口
     * @params {
     * value     : [String]     商品的属性或者是参数
     * type      : [Number]     类型 1 属性  2参数
     * productId : [Number]     商品id
     * } 
     */
    createAttribute(params) {
        return axios.post('/attribute/create', params, postConfig)
    },
    /**
     * @description 删除属性接口
     * @params {
     * value     : [String]     商品的属性或者是参数
     * type      : [Number]     类型 1 属性  2参数
     * productId : [Number]     商品id
     * } 
     */
    deleteAttribute(params) {
        return axios.post('/attribute/delete', params, postConfig)
    },
    /**
     * @description 商品单位接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getUnitlibraryList(params) {
        return axios.post('/unitlibrary/list', params, postConfig)
    },
    /**
     * @description 添加单位接口
     * @params {
     * title     : [String]     单位名称 例子:衣服单位为件,
     * cid       : [Number]     类目标识  类目id
     * storeId   : [Number]     店铺id 这个单位的来源
     * } 
     */
    createUnitlibrary(params) {
        return axios.post('/unitlibrary/create', params, postConfig)
    },
    /**
     * @description 禁用商品单位接口
     * @params {
     * id     //要禁用单位的id
     * disable  //改成禁用还是可以使用  1可以使用    0是禁用
     * } 
     */
    disableUnitlibrary(params) {
        return axios.post('/unitlibrary/disable', params, postConfig)
    },
    /**
     * @description 商品单位排序接口
     * @params {
     * [当前单位的id,要交换单位的id ]
     * } 
     */
    unitlibraryOrders(params) {
        return axios.post('/unitlibrary/orders', params, postConfig)
    },
    /**
     * @description 商品单位置顶接口
     * @params {
     *  id    //要置顶单位的id
     * } 
     */
    unitlibraryStick(params) {
        return axios.post('/unitlibrary/stick', params, postConfig)
    },
    /**
     * @description 商品属性置顶接口 
     * @params {
     *  id     //要置顶的属性id
     * } 
     */
    attributeStick(params) {
        return axios.post('/attribute/stick', params, postConfig)
    },
    /**
     * @description 商品属性排序接口
     * @params {
     * [当前类目的id,要交换类目的id ]  数组
     * } 
     */
    attributeOrders(params) {
        return axios.post('/attribute/orders', params, postConfig)
    },
    /**
     * @description 单位模糊查询接口 /unitlibrary/fuzzySearch
     * @params {
     * title : [String]     单位名称
     * } 
     */
    unitlibraryFuzzySearch(params) {
        return axios.post('/unitlibrary/fuzzySearch', params, postConfig)
    },



    //数据中心
    /**
     * @description 交易数据接口
     * @params 无
     */
    getTradeData(params) {
        return axios.post('/data/trade', params, postConfig)
    },
    /**
     * @description 数据排行接口
     * @params 无
     */
    getRankingData(params) {
        return axios.post('/data/ranking', params, postConfig)
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
     * @description 新增广告接口 
     * @params {
     * title : [string]     广告标题
     * imgUrl:[string]  图片路径
     * type:[number] 图片类型   1代表首屏广告
     * } 
     */
    createAdvert(params) {
        return axios.post('/advert/create', params, postConfig)
    },
    /**
     * @description 更改广告接口 
     * @params {
     * title : [string]     广告标题
     * imgUrl:[string]  图片路径
     * type:[number] 图片类型   1代表首屏广告
     * } 
     */
    updateAdvert(params) {
        return axios.post('/advert/update', params, postConfig)
    },
    /**
     * @description 根据Id查询广告 
     * @params {
     * id : [number]    必填    广告id
     * } 
     */
    findIdAdvert(params) {
        return axios.post('/advert/findId', params, postConfig)
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
    /**
     * @description 标签列表接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getLableList(params) {
        return axios.post('/lable/list', params, postConfig)
    },
    /**
     * @description 新增标签接口
     * @params {
     * lableName:[string] 必填  '标签的名字'
     * } 
     */
    createLable(params) {
        return axios.post('/lable/create', params, postConfig)
    },
    /**
     * @description 文章列表接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getArticleList(params) {
        return axios.post('/article/list', params, postConfig)
    },
    /**
     * @description 新增文章接口
     * @params {
     * articleTitle:[string]    '标题',
     * articleImg:[string]      '文章的图片',
     * authorId:[number]        '作者id',
     * articleContent:[string] '文章内容'
     * } 
     */
    createArticle(params) {
        return axios.post('/article/create', params, postConfig)
    },
    /**
     * @description 导航列表接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getNavList(params) {
        return axios.post('/navigation/list', params, postConfig)
    },
    /**
     * @description 新增导航展示
     * @params {
     * pictureName:[string]     '图片内容',
     * pictureUrl:[string]      '图片路径',
     * pid:[number]     '1主导航  2快捷导航',
     * } 
     */
    createNav(params) {
        return axios.post('/navigation/create', params, postConfig)
    },
    /**
     * @description 删除导航展示
     * @params {
     * id:[number] 必填  '传入删除的Id'
     * } 
     */
    deleteNav(params) {
        return axios.post('/navigation/delete', params, postConfig)
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
    /**
     * @description 订单详情接口
     * @params {
     * id:''//必填 订单id  //1639803937171000001
     * } 
     */
    getOrderDetail(params) {
        return axios.post('/order/detail', params, postConfig)
    },
    /**
     * @description 订单状态接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getOrderStatusList(params) {
        return axios.post('/orderStatus/list', params, postConfig)
    },
    /**
     * @description 支付方式接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getPaymentList(params) {
        return axios.post('/payment/list', params, postConfig)
    },
    /**
     * @description 获取快递接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getExpressList(params) {
        return axios.post('/express/list', params, postConfig)
    },


    //系统设置
    /**
     * @description 意见反馈接口
     * @params {
     * roleId [number]   角色Id   选填  默认不传   传的话 返回的是申请角色为角色Id的数据
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getOpinionList(params) {
        return axios.post('/opinion/list', params, postConfig)
    },
    /**
     * @description 新增文章接口
     * @params {
     * title:[String] ,//意见的标题  
     * content:[String],//意见的内容 
     * imgUrl:[String]//意见图  非必填  
     * } 
     */
    createOpinion(params) {
        return axios.post('/opinion/create', params, postConfig)
    },

    //商户管理
    /**
     * @description 商户入驻接口
     * @params {
     * role:[int],//申请的身份id
     * qualificationsUrl:[String], //资格证书的图片 非必填
     * businessUrl:[String], //营业执照的图片 必填
     * } 
     */
    createSettled(params) {
        return axios.post('/settled/create', params, postConfig)
    },
    /**
     * @description 同意申请接口
     * @params {
     * id :[Number]  //你点击的那个申请
     * } 
     */
    settledAdopt(params) {
        return axios.post('/settled/adopt', params, postConfig)
    },
    /**
     * @description 拒绝申请接口
     * @params {
     * id :[Number]  //你点击的那个申请
     * } 
     */
    settledRefuse(params) {
        return axios.post('/settled/refuse', params, postConfig)
    },
    /**
     * @description 商户申请列表接口
     * @params {
     * pagination[boolean]   默认不传为false 返回所有数据  传pagination:true 则返回分页10条 ;
     * pageNum   [number]    每页多少条数据  默认是10条
     * pageSize  [number]    这是第几页      默认是第1页
     * } 
     */
    getSettledList(params) {
        return axios.post('/settled/list', params, postConfig)
    },

}