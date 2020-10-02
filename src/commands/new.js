'use strict';

module.exports.command = 'new [project-name]';
module.exports.desc = 'Create a new blessed project';

module.exports.builder = function builder(yargs) {
  yargs.positional('project-name', {
    describe: 'The name of the project to create',
  });

  yargs.option('theme', {
    alias: 't',
    demandOption: false,
    describe: 'The name of the theme to set as default theme',
    type: 'string',
  });
};

module.exports.handler = async function handler(options) {
  const fs = require('fs');
  const path = require('path');
  const util = require('util');

  const mkdir = util.promisify(fs.mkdir);
  const copyFile = util.promisify(fs.copyFile);

  const { projectName, dryRun, theme } = options;

  console.log(`Creating ${projectName}/bin directory...`);
  if(!dryRun) {
    await mkdir(`${projectName}/bin`, { recursive: true });
  }
  console.log(`Creating ${projectName}/bin/cli.js file...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/bin/cli.js'), `${projectName}/bin/cli.js`);
  }

  console.log(`Creating ${projectName}/src/pages directory...`);
  if(!dryRun) {
    await mkdir(`${projectName}/src/pages`, { recursive: true });
  }
  console.log(`Creating ${projectName}/src/utils directory...`);
  if(!dryRun) {
    await mkdir(`${projectName}/src/utils`, { recursive: true });
  }

  console.log(`blessed project: ${projectName} successfully created.`);

};
