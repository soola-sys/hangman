const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = (env) => {
  return {
    mode: env.mode ?? 'development',
    entry: {
      main: path.resolve(__dirname, 'src', 'js', 'index.js')
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'body',
        template: path.resolve(__dirname, 'src', 'index.html')
      }),
      new ESLintPlugin({
        extensions: ['js'],
        exclude: ['node_modules', 'dist'],
        // Optional: Set ESLint options
        eslintOptions: {
          // Enable ESLint fix mode
          fix: true,
          // Additional ESLint options
          rules: {
            // Customize rules as needed
            'no-console': 'warn',
            'no-unused-vars': 'error'
          }
        }
      })
    ]
  };
};
