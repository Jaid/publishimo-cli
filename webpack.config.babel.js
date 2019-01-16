import webpackConfigNode from "webpack-config-node"

const isDevelopment = process.env.NODE_ENV !== "production"

export default webpackConfigNode({
  isDevelopment,
  packageRoot: __dirname,
  type: "cli",
  extra: {
    devtool: "inline-source-map",
  },
})