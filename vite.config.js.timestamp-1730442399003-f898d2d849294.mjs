// vite.config.js
import { defineConfig } from "file:///C:/Users/BS-00982/BS23%20Trainee/react-library/authentication-ui/node_modules/vite/dist/node/index.js";
import tailwindcss from "file:///C:/Users/BS-00982/BS23%20Trainee/react-library/authentication-ui/node_modules/tailwindcss/lib/index.js";
import dts from "file:///C:/Users/BS-00982/BS23%20Trainee/react-library/authentication-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///C:/Users/BS-00982/BS23%20Trainee/react-library/authentication-ui/node_modules/vite-plugin-lib-inject-css/dist/index.js";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "authentication-ui",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [dts({ rollupTypes: true }), libInjectCss()],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxCUy0wMDk4MlxcXFxCUzIzIFRyYWluZWVcXFxccmVhY3QtbGlicmFyeVxcXFxhdXRoZW50aWNhdGlvbi11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQlMtMDA5ODJcXFxcQlMyMyBUcmFpbmVlXFxcXHJlYWN0LWxpYnJhcnlcXFxcYXV0aGVudGljYXRpb24tdWlcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0JTLTAwOTgyL0JTMjMlMjBUcmFpbmVlL3JlYWN0LWxpYnJhcnkvYXV0aGVudGljYXRpb24tdWkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgeyBsaWJJbmplY3RDc3MgfSBmcm9tIFwidml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3NcIjtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIGJ1aWxkOiB7XG4gICAgICAgIGxpYjoge1xuICAgICAgICAgICAgZW50cnk6IFwiLi9zcmMvaW5kZXgudHN4XCIsXG4gICAgICAgICAgICBuYW1lOiBcImF1dGhlbnRpY2F0aW9uLXVpXCIsXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgICAgICAgICBmb3JtYXRzOiBbXCJjanNcIiwgXCJlc1wiXSxcbiAgICAgICAgfSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLFxuICAgICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAgICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbZHRzKHsgcm9sbHVwVHlwZXM6IHRydWUgfSksIGxpYkluamVjdENzcygpXSxcbiAgICBjc3M6IHtcbiAgICAgICAgcG9zdGNzczoge1xuICAgICAgICAgICAgcGx1Z2luczogW3RhaWx3aW5kY3NzXSxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBYLFNBQVMsb0JBQW9CO0FBQ3ZaLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUU3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixPQUFPO0FBQUEsSUFDSCxLQUFLO0FBQUEsTUFDRCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxNQUNyQyxTQUFTLENBQUMsT0FBTyxJQUFJO0FBQUEsSUFDekI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNYLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDakI7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLElBQ0EsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxFQUFFLGFBQWEsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDO0FBQUEsRUFDcEQsS0FBSztBQUFBLElBQ0QsU0FBUztBQUFBLE1BQ0wsU0FBUyxDQUFDLFdBQVc7QUFBQSxJQUN6QjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
