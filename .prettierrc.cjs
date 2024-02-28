/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120, // 1行の文字列を120文字にする
  singleQuote: true, // ダブルに代わりシングルクオーテーションを使う
  semi: true, // 行末にセミコロンを追加
  tabWidth: 2, // タブのスペース2
  trailingComma: "all", // 複数行の場合は可能な限り末尾のカンマを表示
  arrowParens: "always", // アロー関数のパラメーターをカッコで囲む
};
