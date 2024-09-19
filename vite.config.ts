import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["**/*.glb"],
  optimizeDeps: {
    exclude: ["@babylonjs/havok"],
  },
});
