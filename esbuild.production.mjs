import { build } from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

build({
	entryPoints: ["src/browser.mjs"],
	bundle: true,
	minify: true,
	sourcemap: false,
	outfile: "dist/bundle.js",
	plugins: [
		polyfillNode({
			crypto: true,
			url: true
		}),
	]
});