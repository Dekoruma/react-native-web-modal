const { defaultConfig, libraryName } = require('./default-config');

module.exports = {
  ...defaultConfig,
  output: {
    path: `${__dirname}/dist/cjs`,
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'commonjs2',
  },
};
