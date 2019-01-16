import webpackConfigJaid from "webpack-config-jaid"

const isDevelopment = process.env.NODE_ENV !== "production"

export default webpackConfigJaid({
  isDevelopment,
  packageRoot: __dirname,
  type: "cli",
})