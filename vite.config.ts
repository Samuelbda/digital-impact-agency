import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/digital-impact-agency/",
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});