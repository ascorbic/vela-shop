import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import impala from "@impalajs/core/plugin";
import Icons from "unplugin-icons/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    impala(),
    Icons({
      compiler: "jsx",
      jsx: "react",
      autoInstall: true,
    }),
  ],
});
