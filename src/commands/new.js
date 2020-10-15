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

  yargs.option('skip-git', {
    demandOption: false,
    describe: 'Skip git init for the new project',
    type: 'boolean',
    default: false,
  });

  yargs.option('skip-npm', {
    demandOption: false,
    describe: 'Skip npm install for the new project',
    type: 'boolean',
    default: false,
  });
  yargs.option('use-yarn', {
    demandOption: false,
    describe: 'Use yarn as package manager to install dependencies',
    type: 'boolean',
    default: false,
  });
  yargs.option('use-pnpm', {
    demandOption: false,
    describe: 'Use pnpm as package manager to install dependencies',
    type: 'boolean',
    default: false,
  });
};

const createProject = require('../utils/createProject');
module.exports.handler = async function handler(options) {
  await createProject(options);
};
