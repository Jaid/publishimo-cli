import path from "path"

import coffee from "coffee"

const index = path.resolve(__dirname, "..", "dist")

it("should run", () => coffee.fork(index, ["--json"])
  .expect("stdout", /"name":"jaid"/i)
  .expect("code", 0)
  .end())