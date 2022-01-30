import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { visualizer } from "rollup-plugin-visualizer";

export default [
  {
    input: "src/App.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "es",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      resolve({ browser: true }),
      external(),
      typescript({ tsconfig: "./tsconfig.json" }),
      commonjs(),
      postcss({
        minimize: true,
        exclude: ["node_modules/**", "stories/**"],
      }),
      terser(),
      visualizer(),
    ],
  },
];
