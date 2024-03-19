import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const useBuiltIn = !!process.env.BUILTIN;
const noPlugins = !!process.env.NOPLUGINS;
console.log("useBuiltIn", useBuiltIn);
console.log("noPlugins", noPlugins);

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index",
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "rspack-dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(?:js|jsx|mjs|cjs|ts|tsx|mts|cts)$/,
        type: 'javascript/auto',
        use: {
          loader: useBuiltIn ? "builtin:swc-loader" : "swc-loader",
          options: {
            sourceMap: true,
            jsc: {
              parser: {
                syntax: "typescript",
                jsx: true,
              },
              experimental: {
                plugins: noPlugins ? [] : [
                  [
                    "@swc/plugin-remove-console",
                    {
                      exclude: ["error"],
                    },
                  ],
                ],
              },
            },
          },
        },
      },
    ],
  },
  experiments: {
    css: true,
  },
};

export default config;
