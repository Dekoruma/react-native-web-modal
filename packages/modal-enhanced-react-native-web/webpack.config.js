const path = require('path');

const libraryName = 'modal-animated-react-native-web';

const config = {
  context: __dirname,
  mode: 'production',
  entry: path.resolve('./src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve('./src'),
          path.resolve('./node_modules/react-native-animatable'),
        ],
        // include: [path.resolve('./src'), /node_modules\/react-native-/],
        // react-native-web is already compiled.
        exclude: /node_modules\/react-native-web\//,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules', './src'],
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    ReactDOM: {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'react-native': {
      root: 'react-native',
      commonjs2: 'react-native',
      commonjs: 'react-native',
      amd: 'react-native',
    },
    'react-native-web': {
      root: 'react-native-web',
      commonjs2: 'react-native-web',
      commonjs: 'react-native-web',
      amd: 'react-native-web',
    },
  },
};

module.exports = config;
