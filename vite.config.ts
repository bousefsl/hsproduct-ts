import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import * as path from "path"

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  plugins: [react()],
})
