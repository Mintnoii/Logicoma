import type { Config } from "tailwindcss";

// 如果希望每个使用方的包对自己的内容负责，则可以使用 Omit<Config, "content"> 来去除 content 配置
// const config: Omit<Config, "content"> = {
const config: Config = {
  // 通常情况下，将 content 设置为要读取的模版文件，一般为 html、vue、jsx 等
  // 主要是看需要 tailwind 去识别哪里的 class
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
    // 加这个是因为外部在引入 packages/ui 包时，这里的组件 tailwind 默认不会去识别，导致未编译，样式丢失
    // 这里的路径是引用方的路径
    "node_modules/ui/**/*.{vue,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    },
  },
  plugins: [],
};
export default config;