const webpack = require("webpack");
const path = require("path");
const dir_js = path.resolve(__dirname, "src");
const dir_build = path.resolve(__dirname, "build");
const dir_dist = path.resolve(__dirname, "dist");
const dir_node_modules = path.resolve(__dirname, "node_modules");
const dir_demo = path.resolve(__dirname, "demo");


const config = {
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
   }),
  ],
  target : "node",
  entry: [path.resolve(dir_js, "index.ts")],
  mode: "development",
  output: {
    path: dir_build,
    filename: "react-image-manager.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    fallback : {
      fs : false
    }
  },
  devServer: {
    contentBase: dir_build,
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.js|\.jsx|\.ts|\.tsx$/,
        exclude: [dir_node_modules, dir_demo],
      },
    ],
  },
  externals: [
    {
      react: {
        root: "React",
        amd: "react",
        commonjs: "react",
        commonjs2: "react",
      },
    },
  ],
  stats: {
    colors: true,
  },
  devtool: "source-map",
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.mode = "production";
    config.output.path = dir_dist;
    config.module.rules = config.module.rules.filter(
      (rule) => rule.use !== "react-hot-loader/webpack"
    );
  }
  return config;
};
