import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ghpages from "gh-pages";
import fs from "fs";

fs.writeFile("dist/CNAME", "kuki.thls.pl", function (err) {});
ghpages.publish("dist", function (err) {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
