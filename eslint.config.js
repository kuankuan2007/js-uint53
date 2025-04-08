import eslintKuankuanConfig from '@kuankuan/eslint-2024';

export default [
  ...(await eslintKuankuanConfig.typescript),
  {
    ignores: ['dist', 'test/dist'],
    rules: {
      camelcase: 'off',
    },
  },
];
