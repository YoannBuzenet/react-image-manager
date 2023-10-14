const webpack = require("webpack");
const path = require("path");
const dir_js = path.resolve(__dirname, "src");
const dir_build = path.resolve(__dirname, "build");
const dir_dist = path.resolve(__dirname, "dist");
const dir_node_modules = path.resolve(__dirname, "node_modules");
const dir_demo = path.resolve(__dirname, "demo");


const config = {
  entry: [path.resolve(dir_js, "index.ts")],
  output: {
    path: dir_build,
    filename: "react-image-manager.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
   }),
  ],
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    fallback : {
      url: require.resolve("url/"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      https: require.resolve("https-browserify"),
      http: require.resolve("stream-http"),
      buffer: require.resolve("buffer/"),
      util: require.resolve("util/"),
      assert: require.resolve("assert/")
    },
    aliasFields: [] // Make react-select work
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
  }
  return config;
};
