import { fileURLToPath, URL } from "node:url";
// import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      // 可以自定义文件生成的位置，默认是根目录下，使用ts的建议放src目录下
      dts: "src/auto-imports.d.ts",
      imports: ["vue"],
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  //   resolve: {
  //     alias: {
  //       "@": path.resolve(__dirname, "src"),
  //     },
  //   },
});
