'use strict';

module.exports.command = 'page [page-name]';
module.exports.desc = 'Create a new page component';
module.exports.aliases = ['p'];

module.exports.builder = function builder(yargs) {

  yargs.positional('page-name', {
    describe: 'The name of the page component to create',
  });

};

module.exports.handler = async function handler(options) {
  const fs = require('fs');
  const path = require('path');
  const util = require('util');
  const chalk = require('chalk');

  const mkdir = util.promisify(fs.mkdir);
  const copyFile = util.promisify(fs.copyFile);
  const { exec } = require('child_process');

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
