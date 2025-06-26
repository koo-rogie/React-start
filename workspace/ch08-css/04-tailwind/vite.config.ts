import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // 리엑트
    tailwindcss(), // 테일윈드
  ],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "#types", replacement: "/src/types" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@contexts", replacement: "/src/contexts" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@redux", replacement: "/src/redux" },
      { find: "@recoil", replacement: "/src/recoil" },
      { find: "@zustand", replacement: "/src/zustand" },
    ],
  },
});
