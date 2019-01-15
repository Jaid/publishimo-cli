import path from "path"

import webpackConfigNode from "webpack-config-node"

const isDevelopment = process.env.NODE_ENV !== "production"

export default webpackConfigNode({
  isDevelopment,
  packageRoot: path.resolve(__dirname, ".."),
  extra: {
    devtool: "inline-source-map",
  },
})