import { defineConfig } from "@rsbuild/core";
import { pluginPreact } from "@rsbuild/plugin-preact";
import { pluginYaml } from "@rsbuild/plugin-yaml";

export default defineConfig({
  html: { title: "Калькулятор доставки" },
  plugins: [
    pluginPreact({ exclude: [/[\\/]node_modules[\\/]/, /[\\/]packages[\\/]/] }),
    pluginYaml(),
  ],
  resolve: {
    alias: { "@": "./src" },
  },
});
