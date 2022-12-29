import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    base: mode == "development"
      ? "/"
      : "/",
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/main.scss";
        `,
        },
      },
    },
    plugins: [
      AutoImport({
        include: [
          /\.vue$/, /\.vue\?vue/,
          /\.[tj]sx?$/,  // .ts, .tsx, .js, .jsx
        ],
        imports: [
          "pinia",
          "vue",
          "vue-router",
          "@vueuse/core",
          {
            "ohmyfetch": [
              "$fetch",
            ],
            "vue-toastification": [
              "useToast",
            ],
            "@vueuse/integrations/useCookies": [
              "useCookies",
            ],
            "@/router/router": [
              ["default", "router"],
            ],
            "@/store/store": [
              ["useSessionStore", "useSessionStore"],
            ],
            "@/lib/helpers": [
              "delay"
            ],
          }
        ],
        dts: true,
        eslintrc: {
          enabled: true,
        },
      }),
      Components({
        dirs: [
          "./src/components",
          "./src/views",
        ],
        deep: true,
        dts: true,
      }),
      vue(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  })
}