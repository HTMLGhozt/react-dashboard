// The babel file needs to be babel.config.js
// https://github.com/facebook/jest/issues/6053#issuecomment-383632515
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          useBuiltIns: false,
        },
      },
    ],
    '@babel/preset-react',
  ],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        'babel-plugin-dynamic-import-node',
        '@babel/plugin-transform-runtime',
      ],
    },
  },
};
