import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { env } from "node:process";

const repositoryName = env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase = repositoryName ? `/${repositoryName}/` : "/portfolio/";

// https://vite.dev/config/
export default defineConfig({
  base: env.GITHUB_PAGES === "true" ? githubPagesBase : "/",
  plugins: [react(), tailwindcss()],
});
