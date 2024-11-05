// vite.config.js
import { defineConfig } from "file:///C:/Users/BS-Test/OneDrive%20-%20Brain%20Station%2023%20PLC/My%20datas/My%20Learning/JS/New%20folder/Company/Story%20book/authentication-ui/node_modules/vite/dist/node/index.js";
import tailwindcss from "file:///C:/Users/BS-Test/OneDrive%20-%20Brain%20Station%2023%20PLC/My%20datas/My%20Learning/JS/New%20folder/Company/Story%20book/authentication-ui/node_modules/tailwindcss/lib/index.js";
import dts from "file:///C:/Users/BS-Test/OneDrive%20-%20Brain%20Station%2023%20PLC/My%20datas/My%20Learning/JS/New%20folder/Company/Story%20book/authentication-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///C:/Users/BS-Test/OneDrive%20-%20Brain%20Station%2023%20PLC/My%20datas/My%20Learning/JS/New%20folder/Company/Story%20book/authentication-ui/node_modules/vite-plugin-lib-inject-css/dist/index.js";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxCUy1UZXN0XFxcXE9uZURyaXZlIC0gQnJhaW4gU3RhdGlvbiAyMyBQTENcXFxcTXkgZGF0YXNcXFxcTXkgTGVhcm5pbmdcXFxcSlNcXFxcTmV3IGZvbGRlclxcXFxDb21wYW55XFxcXFN0b3J5IGJvb2tcXFxcYXV0aGVudGljYXRpb24tdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEJTLVRlc3RcXFxcT25lRHJpdmUgLSBCcmFpbiBTdGF0aW9uIDIzIFBMQ1xcXFxNeSBkYXRhc1xcXFxNeSBMZWFybmluZ1xcXFxKU1xcXFxOZXcgZm9sZGVyXFxcXENvbXBhbnlcXFxcU3RvcnkgYm9va1xcXFxhdXRoZW50aWNhdGlvbi11aVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQlMtVGVzdC9PbmVEcml2ZSUyMC0lMjBCcmFpbiUyMFN0YXRpb24lMjAyMyUyMFBMQy9NeSUyMGRhdGFzL015JTIwTGVhcm5pbmcvSlMvTmV3JTIwZm9sZGVyL0NvbXBhbnkvU3RvcnklMjBib29rL2F1dGhlbnRpY2F0aW9uLXVpL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHsgbGliSW5qZWN0Q3NzIH0gZnJvbSBcInZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzXCI7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBidWlsZDoge1xuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGVudHJ5OiBcIi4vc3JjL2luZGV4LnRzeFwiLFxuICAgICAgICAgICAgbmFtZTogXCJhdXRoZW50aWNhdGlvbi11aVwiLFxuICAgICAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLFxuICAgICAgICAgICAgZm9ybWF0czogW1wiY2pzXCIsIFwiZXNcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcbiAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIH0sXG4gICAgcGx1Z2luczogW2R0cyh7IHJvbGx1cFR5cGVzOiB0cnVlIH0pLCBsaWJJbmplY3RDc3MoKV0sXG4gICAgY3NzOiB7XG4gICAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzc10sXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFra0IsU0FBUyxvQkFBb0I7QUFDL2xCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUU3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixPQUFPO0FBQUEsSUFDSCxLQUFLO0FBQUEsTUFDRCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxNQUNyQyxTQUFTLENBQUMsT0FBTyxJQUFJO0FBQUEsSUFDekI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNYLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDakI7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLElBQ0EsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxFQUFFLGFBQWEsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDO0FBQUEsRUFDcEQsS0FBSztBQUFBLElBQ0QsU0FBUztBQUFBLE1BQ0wsU0FBUyxDQUFDLFdBQVc7QUFBQSxJQUN6QjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
