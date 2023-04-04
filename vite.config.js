import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  worker: {
    plugins: [react()],
  },
  build: {
    rollupOptions: {
      main: resolve(__dirname, "index.html"),
    },
  },
  // define: {
  //   "import.meta.env.VITE_SERVICE_ID": JSON.stringify(
  //     process.env.VITE_SERVICE_ID
  //   ),
  //   "import.meta.env.VITE_TEMPLATE_ID": JSON.stringify(
  //     process.env.VITE_TEMPLATE_ID
  //   ),
  //   "import.meta.env.VITE_PUBLIC_KEY": JSON.stringify(
  //     process.env.VITE_PUBLIC_KEY
  //   ),
  //   "import.meta.env.VITE_PHONE": JSON.stringify(process.env.VITE_PHONE),
  // },
});
