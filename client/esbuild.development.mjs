import { build } from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

build({
	entryPoints: ["src/browser.mjs"],
	bundle: true,
	minify: false,
	sourcemap: true,
	outfile: "dist/bundle-dev.js",
	plugins: [
		polyfillNode({
			crypto: true,
			url: true
		}),
	]
});