const path = require('path');

module.exports = {
  libraryName: 'modal-enhanced-react-native-web',
  defaultConfig: {
    context: __dirname,
    mode: 'production',
    entry: {
      index: path.resolve('./src/index.js'),
      styles: path.resolve('./src/styles.js'),
      animations: path.resolve('./src/animations.js'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve('./src'),
            path.resolve('./node_modules/react-native-animatable'),
          ],
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
    devtool: 'none',
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
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
    // optimization: {
    //   // We no not want to minimize our code.
    //   minimize: false,
    // },
  },
};
