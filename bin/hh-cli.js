"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
commander_1.program
    .version(require('../package.json').version)
    .usage("<command> [options]")
    .command("init [projectName]", "init a project")
    .parse(process.argv);
