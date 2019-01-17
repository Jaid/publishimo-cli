import path from "path"

import commander from "commander"
import publishimo from "publishimo"
import winston from "winston"
import jsonColorizer from "json-colorizer"

process.argv |> commander
  .version(__VERSION__)
  .option("-c, --cwd [dir]", "Project folder that contains a package.json", ".")
  .option("-j, --json", "Print generated package")
  .option("-s, --stats", "Print all stats")
  .option("-o, --output [dir]", "Output directory for the new package")
  .option("--color", "Enabled colored output")
  .parse

// TODO The parameter relations are pretty confusing at the moment.
const isApi = !commander.color && (commander.json || commander.stats)

const log = winston.createLogger({
  level: "info",
  format: isApi ? winston.format.printf(entry => entry.message) : winston.format.cli(),
  transports: [new winston.transports.Console],
})

const stats = publishimo({
  pkg: commander.cwd,
  output: commander.output,
})

if (isApi) {
  if (commander.json) {
    log.info(JSON.stringify(stats.generatedPkg))
  }
  if (commander.stats) {
    log.info(JSON.stringify(stats))
  }
  process.exit(0)
}

if (stats.sourcePkgLocation) {
  log.info(`Input package: ${stats.sourcePkgLocation |> path.resolve}`)
}

if (stats.outputPath) {
  log.info(`Saved package as ${stats.outputPath |> path.resolve}`)
}

if (commander.stats) {
  log.info(JSON.stringify(stats, null, 2) |> jsonColorizer)
} else if (commander.json) {
  log.info(JSON.stringify(stats.generatedPkg, null, 2) |> jsonColorizer)
}