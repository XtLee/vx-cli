import { execSync } from "child_process";


console.log(execSync(
  "npm search --json --registry http://registry.npmjs.org/ vue"
).toJSON())