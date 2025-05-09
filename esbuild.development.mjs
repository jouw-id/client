/* eslint-disable no-undef */
import { build } from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

build({
	entryPoints: ["src/browser.ts"], // Ensure your entry file is a TypeScript file
	bundle: true,
	minify: false,
	sourcemap: true,
	outfile: "dist/bundle-dev.js",
	format: "esm", // Keep it as ESM (since it's an .mjs file)
	platform: "browser",
	loader: {
		".ts": "ts",
		".tsx": "tsx"
	},
	tsconfig: "tsconfig.json",
	plugins: [
		polyfillNode({
			crypto: true,
			url: true
		}),
	]
}).catch(() => process.exit(1));