import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "authentication-ui",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],

      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [dts({ rollupTypes: true }), libInjectCss()],

  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
