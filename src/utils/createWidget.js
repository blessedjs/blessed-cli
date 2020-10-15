'use strict';

const fs = require('fs');
const path = require('path');
const util = require('util');
const chalk = require('chalk');

const copyFile = util.promisify(fs.copyFile); // eslint-disable-line

module.exports = async function (options) {
  const { widgetName, type, dryRun } = options;

  const _create = chalk.green('create');

  console.log(`${_create} src/widgets/${widgetName}.js`);
  if (!dryRun) {
    let source = path.join(__dirname, `../../templates/widgets/${type}.js`);
    await copyFile(source, `src/widgets/${widgetName}.js`);
  }
};
