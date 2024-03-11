/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/recommended', // 追加
    'plugin:react/jsx-runtime', // 追加
    'plugin:react-hooks/recommended',
    'plugin:redos/recommended', // 追加
    'plugin:tailwindcss/recommended',
    'prettier', // 追加
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', //@typescript-eslint/recommended-type-checkedを使用する場合、tsconfig.jsonのパスを指定
  },
  plugins: ['react-refresh', 'import', 'unused-imports'],
  settings: {
    react: { version: 'detect' }, // eslintが使用しているeslint-plugin-reactが、プロジェクトにインストールされているReactのバージョンを自動的に検出し、そのバージョンに合わせたルールを適用するように指示
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], //コンポーネントファイルから定数を許可
    // import の並び順を設定
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'type', 'index'],
        'newlines-between': 'always', // importの間に改行を入れる
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true }, //アルファベット順にソート。大文字小文字を区別しない
        pathGroups: [
          {
            pattern: 'react', //reactを先頭に
            group: 'external',
            position: 'before',
          },
        ],
      },
    ],
    'unused-imports/no-unused-imports': 'error', //不要なimportを削除
    'redos/no-vulnerable': 'error', //正規表現での脆弱性を検出した場合にエラー
    'no-console': 'warn', //console.logを警告
    '@typescript-eslint/ban-ts-comment': 'off', //TypeScriptの@ts-ignore、@ts-nocheck、@ts-checkの使用を許可
    '@typescript-eslint/no-floating-promises': 'error', //Promiseをawaitせずにそのまま使うのをエラーにする
    '@typescript-eslint/no-misused-promises': 'warn', //Promiseを誤って使っている場合に警告
    'import/no-duplicates': 'error', //重複するimportをエラーにする
    'react/jsx-sort-props': 'error', //JSXコンポーネントのPropsの順番も自動でソート
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }], //型はimport typeで表示
  },
};
