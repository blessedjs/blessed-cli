'use strict';

module.exports.command = 'page [page-name]';
module.exports.desc = 'Create a new page component';

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

  const { entityType, entityName, dryRun  } = options;
  console.log('new project entity created');
};
