const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');

const OUTPUT_FOLDER_NAME = path.resolve(__dirname, 'dist'); // Папка, куда всё заливаться сбилженный проект.

const headerUrl = process.env.HEADER_URL ? process.env.HEADER_URL : 'http://localhost:3001';

const cartUrl = process.env.CART_URL ? process.env.CART_URL : 'http://localhost:3002';

const moduleFederationConfig = {
  name: 'main',
  remotes: {
    header: `header@${headerUrl}/remoteEntry.js`, // headerUrl - это домен, на котором "живёт" хедер; header - это name, который мы задали в ремоуте в moduleFederationConfig.
    cart: `cart@${cartUrl}/remoteEntry.js`, // cartUrl - это домен, на котором "живёт" хедер; cart - это name, который мы задали в ремоуте в moduleFederationConfig.
  },
  exposes: {
    './ProductCounter': './src/components/ProductCounter/ProductCounter',
  },
  // Библиотеки, которые мы собираемся шерить.
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
      eager: true,
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: deps['react-router-dom'],
      eager: true,
    },
    antd: {
      singleton: true,
      requiredVersion: deps.antd,
      eager: true,
    },
  },
};

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: OUTPUT_FOLDER_NAME,
    filename: 'bundle.js',
  }, // выходной файл
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin(moduleFederationConfig),
    new ExternalTemplateRemotesPlugin(), // Таким образом мы даём понять, что наше приложение - хостовое.
  ],
  devServer: {
    static: {
      directory: OUTPUT_FOLDER_NAME,
    },
    port: 3000,
    historyApiFallback: true,
    compress: true,
  },
};
