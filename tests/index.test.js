import path from "path"

import coffee from "coffee"

const index = path.resolve(__dirname, "..", "dist")
it("should run", () => coffee.fork(index, ["args"])
  .debug()
  .expect("stdout", "function")
  .expect("code", 0)
  .end())