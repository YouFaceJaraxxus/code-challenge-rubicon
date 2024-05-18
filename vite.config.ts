import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import environmentPlugin from "vite-plugin-environment";
import checker from "vite-plugin-checker";
import webfontDownload from "vite-plugin-webfont-dl";

export default defineConfig(() => {
    return {
        server: {
            port: 3000,
            host: true,
        },
        build: {
            outDir: "build",
            sourcemap: true,
        },
        plugins: [
            react(),
            eslint(),
            viteTsconfigPaths(),

            // https://www.npmjs.com/package/vite-plugin-svgr
            // Transforms svg's into React components
            svgr({ svgrOptions: {} }),

            // https://www.npmjs.com/package/vite-plugin-environment
            // Exposes configured environment variables (all in this case)
            environmentPlugin("all", { prefix: "VITE_" }),

            // https://www.npmjs.com/package/vite-plugin-checker
            // Typescript linter
            checker({
                typescript: true,
            }),

            // https://www.npmjs.com/package/vite-plugin-webfont-dl
            // Downloads the fonts and adds them to the bundle
            webfontDownload(),
        ],
    };
});
