'use strict';

const fs = require('fs');
const path = require('path');
const util = require('util');
const chalk = require('chalk');
const { exec } = require('child_process');
const mkdir = util.promisify(fs.mkdir);
const copyFile = util.promisify(fs.copyFile); // eslint-disable-line
module.exports = async function (options) {
  const {
    projectName,
    dryRun,
    //theme,
    skipGit,
    skipNpm,
    useYarn,
    usePnpm,
  } = options;

  console.log(
    `✨Creating a new blessed-cli app in ${chalk.yellow(
      path.join(process.cwd(), projectName)
    )}:`
  );
  const _create = chalk.green('create');

  console.log(`${_create} ${projectName}/bin directory`);
  if (!dryRun) {
    await mkdir(`${projectName}/bin`, { recursive: true });
  }

  console.log(`${_create} ${projectName}/bin/cli.js file...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/bin/cli.js'),
      `${projectName}/bin/cli.js`
    );
  }

  console.log(`${_create} ${projectName}/src/pages directory...`);
  if (!dryRun) {
    await mkdir(`${projectName}/src/pages`, { recursive: true });
  }

  console.log(`${_create} ${projectName}/src/widgets`);
  if (!dryRun) {
    await mkdir(`${projectName}/src/widgets`, { recursive: true });
  }

  console.log(`${_create} ${projectName}/src/utils directory...`);
  if (!dryRun) {
    await mkdir(`${projectName}/src/utils`, { recursive: true });
  }

  console.log(`${_create} ${projectName}/src/utils/getTheme.js ...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/src/utils/getTheme.js'),
      `${projectName}/src/utils/getTheme.js`
    );
  }

  console.log(`${_create} ${projectName}/.eslintignore ...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/.eslintignore'),
      `${projectName}/.eslintignore`
    );
  }

  console.log(`${_create} ${projectName}/.eslintrc.js ...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/.eslintrc.js'),
      `${projectName}/.eslintrc.js`
    );
  }

  console.log(`${_create} ${projectName}/.gitignore ...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/__.gitignore'),
      `${projectName}/.gitignore`
    );
  }

  console.log(`${_create} ${projectName}/.npmignore ...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/__.npmignore'),
      `${projectName}/.npmignore`
    );
  }

  console.log(`${_create} ${projectName}/.prettierrc.js ...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/.prettierrc.js'),
      `${projectName}/.prettierrc.js`
    );
  }

  console.log(`${_create} ${projectName}/LICENSE.md ...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/LICENSE.md'),
      `${projectName}/LICENSE.md`
    );
  }

  console.log(`${_create} ${projectName}/README.md ...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/README.md'),
      `${projectName}/README.md`
    );
  }

  console.log(`${_create} ${projectName}/package.json ...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/package.json'),
      `${projectName}/package.json`
    );
  }

  console.log(`${_create} ${projectName}/src/index.js ...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/src/index.js'),
      `${projectName}/src/index.js`
    );
  }

  console.log(`${_create} ${projectName}/src/styles.js ...`);
  if (!dryRun) {
    await copyFile(
      path.join(__dirname, '../../templates/new/src/styles.js'),
      `${projectName}/src/styles.js`
    );
  }

  console.log('🎥  Initializing git repository.');
  //skipGit = skipNpm = dryRun;
  if (!dryRun && !skipGit) {
    exec('git init', { cwd: `${projectName}` }, (err) => {
      if (err) console.log(err);
      console.log(chalk.green('Git: successfully initialized.'));
    });
  }

  console.log('Installing npm packages.');
  if (!dryRun && !skipNpm) {
    let install = 'npm install';

    if (usePnpm) {
      install = 'pnpm install';
    } else if (useYarn) {
      install = 'yarn';
    }

    exec(install, { cwd: `${projectName}` }, (err, stdout) => {
      if (err) console.log(err);
      console.log(stdout);
    });
  }

  console.log(
    `🎉 Successfully created blessed-cli project: ${chalk.yellow(projectName)} `
  );
  console.log('👉 Get stated by typing:');

  console.log(`  $ ${chalk.blue(`cd ${projectName}`)}`);
  console.log(`  $ ${chalk.blue('npm start')}`);
  console.log(`Happy coding!`);
};
