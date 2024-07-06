import { getAlias } from './utils';

const config = {
  projectName: 'taro-react-wxmini-template',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html', 'taro-plugin-compiler-optimization'],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    // 仅 webpack5 支持依赖预编译配置
    prebundle: {
      enable: false,
    },
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  sass: {
    resource: [
      'src/styles/variable.scss',
      'src/styles/mixins.scss',
      'src/styles/custom-theme.scss',
    ],
    data: `@import "@nutui/nutui-react-taro/dist/styles/variables.scss";`,
  },
  mini: {
    webpackChain: (chain) => {
      chain.merge({
        plugin: {
          install: {
            plugin: require('terser-webpack-plugin'),
            args: [
              {
                terserOptions: {
                  compress: true, // 默认使用terser压缩
                  // mangle: false,
                  keep_classnames: true, // 不改变class名称
                  keep_fnames: true, // 不改变函数名称
                },
              },
            ],
          },
        },
      });
    },
    optimizeMainPackage: {
      enable: true,
    },
    prerender: {
      match: ['pages/**/**', 'sub-pages/pages/**/**'], // 所有以 `pages/shop/` 开头的页面都参与 prerender
    },
    // TODO:可绕过，也可以找出
    miniCssExtractPluginOption: {
      ignoreOrder: true,
    },
    alias: {
      '@/components': getAlias('components'),
      '@/utils': getAlias('utils'),
      '@/constants': getAlias('constants'),
      '@/api': getAlias('api'),
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-'],
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, import('./dev'));
  }
  return merge({}, config, import('./prod'));
};
