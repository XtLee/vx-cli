import * as inquirer from 'inquirer'
import * as fs from 'fs';
import * as ora from 'ora';
import { execSync } from 'child_process';


export default class Init {
  private projectName: string
  private answers: inquirer.Answers

  constructor(projectName: string, answers: inquirer.Answers) {
    this.projectName = projectName;
    this.answers = answers;
  }

  async init() {
    const spinner = ora("查找远程仓库模板").start();
    const list = await this.search();
    if (list.length) {
      spinner.succeed("开始安装");

    }
  }

  search(): Promise<string> {
    try {
      const list = execSync(
        "npm search --json --registry http://registry.npmjs.org/ @hh-cli/hh-cli-template"
      ).toJSON();
      return Promise.resolve('list');
    } catch (err) {
      return Promise.reject(err);
    }
  }
}