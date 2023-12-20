import type { Config } from 'tailwindcss';
import sharedConfig from 'tailwind-config';

// 默认使用 sharedConfig 的配置 即 packages/tailwind-config/tailwind.config.ts
const config: Pick<Config, 'presets'> = {
  presets: [sharedConfig],
};

export default config;
