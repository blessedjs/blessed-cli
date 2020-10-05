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
  });

  yargs.option('skip-npm', {
    alias: 'sn',
    demandOption: false,
    describe: 'Skip npm install for the new project',
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

  const { projectName, dryRun, theme, skipGit, skipNpm } = options;

  console.log(`✨Creating a new blessed-cli app in ${chalk.yellow(path.join(process.cwd(), projectName))}:`);
  const _create = chalk.green('create');

  console.log(`${_create} ${projectName}/bin directory`);
  if(!dryRun) {
    await mkdir(`${projectName}/bin`, { recursive: true });
  }

  console.log(`${_create} ${projectName}/bin/cli.js file...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/bin/cli.js'), `${projectName}/bin/cli.js`);
  }

  console.log(`${_create} ${projectName}/src/pages directory...`);
  if(!dryRun) {
    await mkdir(`${projectName}/src/pages`, { recursive: true });
  }

  console.log(`${_create} ${projectName}/src/widgets`);
  if(!dryRun) {
    await mkdir(`${projectName}/src/widgets`, { recursive: true });
  }

  console.log(`${_create} ${projectName}/src/utils directory...`);
  if(!dryRun) {
    await mkdir(`${projectName}/src/utils`, { recursive: true });
  }

  console.log(`${_create} ${projectName}/src/utils/getTheme.js ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/src/utils/getTheme.js'), `${projectName}/src/utils/getTheme.js`);
  }

  console.log(`${_create} ${projectName}/.eslintignore ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/.eslintignore'), `${projectName}/.eslintignore`);
  }

  console.log(`${_create} ${projectName}/.gitignore ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/.gitignore'), `${projectName}/.gitignore`);
  }

  console.log(`${_create} ${projectName}/.npmignore ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/.npmignore'), `${projectName}/.npmignore`);
  }

  console.log(`${_create} ${projectName}/.prettierrc.js ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/.prettierrc.js'), `${projectName}/.prettierrc.js`);
  }

  console.log(`${_create} ${projectName}/LICENSE.md ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/LICENSE.md'), `${projectName}/LICENSE.md`);
  }

  console.log(`${_create} ${projectName}/README.md ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/README.md'), `${projectName}/README.md`);
  }

  console.log(`${_create} ${projectName}/package.json ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/package.json'), `${projectName}/package.json`);
  }

  console.log(`${_create} ${projectName}/src/index.js ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/src/index.js'), `${projectName}/src/index.js`);
  }

  console.log(`${_create} ${projectName}/src/styles.js ...`);
  if(!dryRun) {
    await copyFile(path.join(__dirname, '../../templates/new/src/styles.js'), `${projectName}/src/styles.js`);
  }

  console.log('🎥  Initializing git repository.');
  if(!skipGit && !dryRun) {
    exec('git init', { cwd: `${projectName}` }, (err, stdout, stderr) => {

      if(err) console.log(err);
      console.log(chalk.green('Git: successfully initialized.'));
    });
  }

  console.log('Installing npm packages.');
  if(!skipNpm && !dryRun) {
    exec('npm install', { cwd: `${projectName}` }, (err, stdout, stderr) => {

      if(err) console.log(err);
      console.log(stdout);
    });
  }

  console.log(`🎉 Successfully created blessed-cli project: ${chalk.yellow(projectName)} `);
  console.log('👉 Get stated by typing:');

  console.log(`  $ ${chalk.blue(`cd ${projectName}`)}`);
  console.log(`  $ ${chalk.blue('npm start')}`);
  console.log(`Happy coding!`);

};
