// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  pwa: {
    themeColor: '#FFB548',
    name: 'vptcoder'
  }
  // , chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //       .set('parser', {
  //         dataUrlCondition: {
  //           maxSize: 4 * 1024 //4KiB
  //         }
  //       })
  // }
}