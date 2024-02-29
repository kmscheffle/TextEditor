const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  // Other webpack configuration settings
  
  plugins: [
    // Add Workbox plugin to generate the service worker
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      // Define caching strategies for different assets
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://api.example.com/'),
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          handler: 'CacheFirst',
        },
        // Add more caching strategies as needed
      ],
    }),
  ],
};


const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  // Other webpack configuration settings
  
  plugins: [
    // Add WebpackPwaManifest plugin to generate the manifest file
    new WebpackPwaManifest({
      name: 'Text Editor App',
      short_name: 'Text Editor',
      description: 'A Progressive Web Application for editing text',
      background_color: '#ffffff',
      theme_color: '#317EFB',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
};
// TODO: Add CSS loaders and babel to webpack.
module.exports = {
  // Other webpack configuration settings

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = {
  // Other webpack configuration settings

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};


module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
