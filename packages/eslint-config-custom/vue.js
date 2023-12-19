const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * 这是一个自定义 ESLint 配置
 * (扩展了 Vercel 工程风格指南,内部使用 VueJS)
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/browser",
    "@vue/eslint-config-typescript",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: "latest",
  },
  settings: {
    // eslint-plugin-import 插件的配置，用于帮助 ESLint 解析模块的导入路径
    "import/resolver": {
      alias: {
        map: [['@', './src/']],
        extensions: ['.js','.ts', '.vue'],
      },
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],

  rules: {
    "import/no-default-export": "off",
    "vue/multi-word-component-names": "off",
    "no-console": "off"
    // add specific rules configurations here
  },
};
