// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const compress = new CompressionWebpackPlugin({
//     filename: info => {
//         return `${info.path}.gz${info.query}`;
//     },
//     algorithm: 'gzip',
//     threshold: 10240,
//     test: new RegExp('\\.(' + ['js'].join('|') + ')$'),
//     minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
//     deleteOriginalAssets: false // 删除原文件
// });require('./package').version
const version = '1.2.8'; // 版本号

module.exports = {
    // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制) 原本属性名为baseUrl【已废除】
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './',

    // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    outputDir: 'dist',

    // 放置生成的静态资源(js、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
    assetsDir: 'assets',

    // 指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
    indexPath: 'index.html',

    // eslint-loader 是否在保存的时候检查
    lintOnSave: process.env.NODE_ENV !== 'production',

    // 关闭生产环境的 source map 以加速生产环境构建
    productionSourceMap: false,

    pages: {
    // pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
        index: {
            // 除了 entry 之外都是可选的
            entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
            template: 'public/index.html', // 模板来源
            filename: 'index.html', // 在 dist/index.html 的输出
            title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
            chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
        }
    },

    // css相关配置
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps
        // loaderOptions: {
        //     sass: {
        //         // 配置scss全局变量 根据自己样式文件的位置调整
        //         prependData: '@import "@/assets/css/themeStyle/global.scss";'
        //     }
        // }
    },

    // 开发环境配置
    devServer: {
        port: 8080, // 端口
        open: false, // 配置自动启动浏览器
        overlay: { // 当出现编译器错误或警告时，在浏览器中显示
            warnings: true,
            errors: true
        },
        // proxy: {
        //     '/api': {
        //         target: 'http://10.10.7.78:11010', // 代理的IP
        //         changeOrigin: true, // 开启代理
        //         ws: true, // 是否启用websockets
        //         pathRewrite: { '^/api': '/api' }
        //     },
        //     '/zuul': {
        //         target: 'http://10.10.6.247:30688', // 代理的IP
        //         changeOrigin: true, // 开启代理
        //         ws: true, // 是否启用websockets
        //         pathRewrite: { '^/zuul': '/zuul' }
        //     }
        // }
    },

    // webapck细化配置
    // chainWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         // 添加分析工具
    //         if (process.env.npm_config_report) {
    //             config
    //                 .plugin('webpack-bundle-analyzer')
    //                 .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    //                 .end();
    //             config.plugins.delete('prefetch');
    //         }
    //         // 最小化代码
    //         config.optimization.minimize(true);
    //         // 分割代码
    //         config.optimization.splitChunks({
    //             chunks: 'async',
    //             minSize: 30000, // 模块的最小体积
    //             minChunks: 1, // 模块的最小被引用次数
    //             maxAsyncRequests: 5, // 按需加载的最大并行请求数
    //             maxInitialRequests: 3, // 一个入口最大并行请求数
    //             automaticNameDelimiter: '~', // 文件名的连接符
    //             name: true,
    //             cacheGroups: { // 缓存数组
    //                 default: {
    //                     minChunks: 2,
    //                     priority: -20,
    //                     reuseExistingChunk: true
    //                 },
    //                 vendors: {
    //                     test: /[\\/]node_modules[\\/]/,
    //                     priority: -10
    //                 }
    //             }
    //         });
    //         // 压缩图片
    //         config.module
    //             .rule('images')
    //             .use('image-webpack-loader')
    //             .loader('image-webpack-loader')
    //             .options({ bypassOnDebug: true })
    //             .end();
    //         // 设置图片版本号
    //         config.module
    //             .rule('images')
    //             .use('url-loader')
    //             .tap(options => {
    //                 return {
    //                     limit: 4096, // 图片进行base64转换文件的大小限制
    //                     fallback: {
    //                         loader: 'file-loader',
    //                         options: { name: `assets/img/[name]-${version}.[ext]` }
    //                     }
    //                 };
    //             });
    //         // 设置css版本号
    //         const handelCss = new MiniCssExtractPlugin({
    //             filename: `assets/css/[name]--${version}.css`,
    //             chunkFilename: `assets/css/[name]-${version}.css`
    //         });
    //         config.plugin('extract-css').use(handelCss);
    //     }
    // },
    // configureWebpack: {
    //     // 通过 compression-webpack-plugin 插件对js文件进行gzip压缩
    //     // plugins: [compress],
    //     output: { // 输出重构  打包编译后的 文件名称  【模块名称-时间戳.版本号】
    //         filename: `assets/js/[name]-${version}.js`,
    //         chunkFilename: `assets/js/[name]-${version}.js`
    //     },
    //     module: {
    //         rules: [
    //             {
    //                 test: /Worker\.js$/, // 以Worker.js结尾的文件将被worker-loader加载
    //                 use: {
    //                     loader: 'worker-loader',
    //                     options: { name: 'worker[hash].js' }
    //                 }
    //             }
    //         ]
    //     }
    // },
    parallel: false,
    // 第三方插件配置
    pluginOptions: {}
};
