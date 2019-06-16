import path from "path"

import coffee from "coffee"

const main = path.resolve(process.env.MAIN)

it("should run", () => coffee.fork(main, ["--json"])
  .expect("stdout", /"name":"jaid"/i)
  .expect("code", 0)
  .debug()
  .end())