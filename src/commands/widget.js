'use strict';

module.exports.command = 'widget [widget-name]';
module.exports.desc = 'Create a new blessed widget';
module.exports.aliases = ['w'];

module.exports.builder = function builder(yargs) {

  yargs.positional('widget-name', {
    describe: 'The name of the widget to create',
  });

  yargs.option('type', {
    alias: 't',
    demandOption: false,
    describe: 'The type of the widget to create. default is box',
    type: 'string',
    default: 'box'
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

  const { widgetName, type, dryRun  } = options;
  console.log(type, 'type');

  const _create = chalk.green('create');

  console.log(`${_create} src/widgets/${widgetName}.js`);
  if(!dryRun) {
    let source = path.join(__dirname, `../../templates/widgets/${type}.js`);
    await copyFile(source, `src/widgets/${widgetName}.js`);
  }


};
