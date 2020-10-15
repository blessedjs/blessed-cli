'use strict';

const fs = require('fs');
const path = require('path');
const util = require('util');
const chalk = require('chalk');

const mkdir = util.promisify(fs.mkdir);
const copyFile = util.promisify(fs.copyFile);
const { exec } = require('child_process');

module.exports = async function(options) {

  const { pageName, dryRun  } = options;

  const _create = chalk.green('create');

  console.log(`${_create} src/pages/${pageName}`);
  if(!dryRun) {
    await mkdir(`src/pages/${pageName}`, { recursive: true });
  }

  console.log(`${_create} src/widgets/${pageName}`);
  if(!dryRun) {
    await mkdir(`src/widgets/${pageName}`, { recursive: true });
  }

  console.log(`${_create} src/pages/${pageName}/index.js`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/src/pages/page.js'), `src/pages/${pageName}/index.js`);
  }
};
