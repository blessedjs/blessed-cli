/* globals QUnit */
const path = require('path');
const createTempDir = require('broccoli-test-helper').createTempDir;
const execa = require('execa');
const walkSync = require('walk-sync');

const PROJECT_ROOT = path.join(__dirname, '..');
const EXECUTABLE_PATH = path.join(PROJECT_ROOT, 'bin', 'blessed.js');
const ROOT = process.cwd();

QUnit.module('blessed-cli', function (hooks) {
  let cliProject;

  hooks.beforeEach(async function () {
    cliProject = await createTempDir();

    process.chdir(cliProject.path());
  });

  hooks.afterEach(async function () {
    process.chdir(ROOT);

    await cliProject.dispose();
  });

  QUnit.module('new', function () {
    QUnit.test('should generate a basic project structure', async function (
      assert
    ) {
      let result = await execa(EXECUTABLE_PATH, [
        'new',
        'my-awesome-cli',
        '--skip-git',
        '--skip-npm',
      ]);

      assert.equal(result.exitCode, 0, 'exited with zero');
      assert.deepEqual(walkSync(cliProject.path()), [
        'my-awesome-cli/',
        'my-awesome-cli/.eslintignore',
        //'my-awesome-cli/.eslintrc.js',
        'my-awesome-cli/.gitignore',
        'my-awesome-cli/.npmignore',
        'my-awesome-cli/.prettierrc.js',
        'my-awesome-cli/LICENSE.md',
        'my-awesome-cli/README.md',
        'my-awesome-cli/bin/',
        'my-awesome-cli/bin/cli.js',
        'my-awesome-cli/package.json',
        'my-awesome-cli/src/',
        'my-awesome-cli/src/index.js',
        'my-awesome-cli/src/pages/',
        'my-awesome-cli/src/styles.js',
        'my-awesome-cli/src/utils/',
        'my-awesome-cli/src/utils/getTheme.js',
        'my-awesome-cli/src/widgets/',
      ]);
    });
  });
});
