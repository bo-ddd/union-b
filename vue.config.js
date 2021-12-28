const path = require('path')
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
    // const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    devServer: {
        //原理：将axios中匹配到的包含 http://192.168.1.18:7001的接口转换成本地同源接口，
        //将匹配到的 /api 替换 成 "";  
        //比如： http://192.168.1.18:7001/api/user/info
        //替换结果为 localhost:8080/user/info
        proxy: {
            '/api': {
                target: 'http://localhost:7001', //填写服务端的接口地址；
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            // 配置compression-webpack-plugin压缩
            new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            })
        ],
    },
    chainWebpack: (config) => {
        config.externals({
            'echarts': 'echarts',
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            "element-ui": "ELEMENT",
            "FileSaver": "FileSaver",
            "xlsx": "XLSX",
            "wangeditor": "wangEditor",
        });
    }
}