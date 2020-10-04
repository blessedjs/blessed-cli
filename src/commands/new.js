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
    alias: 'sg',
    demandOption: false,
    describe: 'Skip git init for the new project',
    type: 'string',
  });

  yargs.option('skip-npm', {
    alias: 'sn',
    demandOption: false,
    describe: 'Skip npm installl for the new project',
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

  console.log(`Creating ${projectName}/src/utils/getTheme.js ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/src/utils/getTheme.js'), `${projectName}/src/utils/getTheme.js`);
  }

  console.log(`Creating ${projectName}/.eslintignore ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/.eslintignore'), `${projectName}/.eslintignore`);
  }

  console.log(`Creating ${projectName}/.gitignore ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/.gitignore'), `${projectName}/.gitignore`);
  }

  console.log(`Creating ${projectName}/.npmignore ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/.npmignore'), `${projectName}/.npmignore`);
  }

  console.log(`Creating ${projectName}/.prettierrc.js ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/.prettierrc.js'), `${projectName}/.prettierrc.js`);
  }

  console.log(`Creating ${projectName}/LICENSE.md ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/LICENSE.md'), `${projectName}/LICENSE.md`);
  }

  console.log(`Creating ${projectName}/README.md ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../tjemplates/new/README.md'), `${projectName}/README.md`);
  }

  console.log(`Creating ${projectName}/package.json ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/package.json'), `${projectName}/package.json`);
  }

  console.log(`Creating ${projectName}/src/index.js ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/src/index.js.json'), `${projectName}/src/index.js`);
  }

  console.log(`Creating ${projectName}/src/styles.js ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/src/styles.js'), `${projectName}/src/styles.js.json`);
  }

  console.log(`blessed project: ${projectName} successfully created.`);

};
