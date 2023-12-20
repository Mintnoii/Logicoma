import type { Config } from 'tailwindcss';
import sharedConfig from 'tailwind-config';

const config: Pick<Config, "prefix" | "presets"> = {
// const config: Config = {
  // 如果加了 prefix，那么在使用时，需要加上这个前缀，比如  ui-text-red-500
  // prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
