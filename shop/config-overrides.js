const { 
    addWebpackAlias, 
    addLessLoader, 
    fixBabelImports, 
    override, 
    addDecoratorsLegacy 
  } = require('customize-cra')
  const path = require('path')
  
  module.exports = override(
    addDecoratorsLegacy(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    //支持antd主题定制
    addLessLoader({
      javascriptEnabled: true,
    }),

    //别名
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      '@@':path.resolve(__dirname,'src/components'),
    })
  )