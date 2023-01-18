const webpack = require("webpack");
const path = require("path");
const dir_js = path.resolve(__dirname, "src");
const dir_build = path.resolve(__dirname, "build");
const dir_dist = path.resolve(__dirname, "dist");
const dir_node_modules = path.resolve(__dirname, "node_modules");
const dir_demo = path.resolve(__dirname, "demo");
var nodeExternals = require("webpack-node-externals");


const config = {
  // TRYING TO WORK AROUND THE NEXTJS PROBLEM "window is not defined"
  // Nothing here works, I kept it to follow up
  plugins: [
    // new webpack.IgnorePlugin({ resourceRegExp: /FormData/ }),
    // throw Error: Cannot find module './toFormData.js' coté serveur sur l'app nextjs
  ],
  // https://stackoverflow.com/questions/33001237/webpack-not-excluding-node-modules/35820388#35820388
  // target: "node", // use require() & use NodeJs CommonJS style
  // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  // externalsPresets: {
  //   node: true, // in order to ignore built-in modules like path, fs, etc.
  // },
  entry: [path.resolve(dir_js, "index.js")],
  mode: "development",
  output: {
    path: dir_build,
    filename: "react-image-manager.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  devServer: {
    contentBase: dir_build,
  },
  module: {
    rules: [
      {
        use: "babel-loader",
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
