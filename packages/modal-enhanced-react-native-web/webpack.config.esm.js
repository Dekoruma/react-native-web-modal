const { defaultConfig, libraryName } = require('./default-config');

module.exports = {
  ...defaultConfig,
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.js$/,
        type: 'javascript/esm',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};
