const { resolve } = require("core-js/fn/promise")

// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    publicPath: './', // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'static', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    chainWebpack: config => {
      config.module
        .rule('css')
          .test(/\.css$/)
          .oneOf('vue')
          .resourceQuery(/\?vue/)
          .use('px2rem')
            .loader('px2rem-loader')
            .options({
              remUnit: 75//设计稿的宽度的1/10
            })
    },
    // postcss:[require('postcss-px2rem')({'remUnit':75,'baseDpr':2})]
    configureWebpack:{
      name: name,
      resolve:{
        alias:{
          '@':resolve('src')    
        }
      }
    }
  }   