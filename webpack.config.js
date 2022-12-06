const nodeExternals = require('webpack-node-externals');
const dotenv = require('dotenv-safe');
const webpack = require('webpack');

const env = process.env.NODE_ENV || 'production';
const dev = env === 'development';

if (dev) {
  dotenv.config({ allowEmptyValues: true });
}

module.exports = {
  mode: env,
  devtool: dev ? 'eval-source-map' : 'none',
  externals: [nodeExternals()],
  devServer: {
    proxy: {
      '/.netlify': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/.netlify/functions': '' }
      }
    }
  },
  module: {
    rules: []
  },
  plugins: [
    new webpack.DefinePlugin({
        patterns: [
            {
              from: "./prisma/schema.prisma",
              to: "handlers/schema.prisma",
            },
            {
              from: "./node_modules/.prisma/client/libquery_engine-rhel-openssl-1.0.x.so.node",
              to: "handlers/libquery_engine-rhel-openssl-1.0.x.so.node",
            },
          ],
    })
  ]
};

