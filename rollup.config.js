import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import ts from "rollup-plugin-ts";
import common from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".js", ".ts"];
export default {
	input: "./src/index.ts",
	plugins: [
		ts({}),
		common(),
		resolve(),
		babel({
			exclude: "node_modules/**",
			extensions,
		}),
		terser({
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		}),
	],
	external: ["@ckeditor/ckeditor5-core"],
	output: [
		{
			name: "index",
			file: pkg.browser,
			format: "umd",
			exports: "default",
			globals: { "@ckeditor/ckeditor5-core/src/plugin": "Plugin" },
		},
		{
			file: pkg.main,
			format: "cjs",
			strict: true,
			exports: "default",
			globals: { "@ckeditor/ckeditor5-core/src/plugin": "Plugin" },
		},
		{
			file: pkg.module,
			format: "es",
			exports: "default",
			globals: { "@ckeditor/ckeditor5-core/src/plugin": "Plugin" },
		},
	],
};
