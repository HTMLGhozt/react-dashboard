module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current', browsers: 'last 1 version' } },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
  ],
};
