module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@config': './src/config',
          '@helpers': './src/helpers',
          '@network': '.src/network',
          '@theme': './src/theme',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@utility': './src/utility',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@navigation': './src/navigation',
          '@storage': './src/storage',
        },
      },
    ],
  ],
};
