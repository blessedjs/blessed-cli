#!/usr/bin/env node

'use strict';
const projectPrompt = require('../src/prompts/project');
const pagePrompt = require('../src/prompts/page');
const widgetPrompt = require('../src/prompts/widget');

if (process.argv.length <= 2) {
  const prompts = require('prompts');

  (async () => {
    const response = await prompts({
      type: 'select',
      name: 'command',
      message: 'What do you want to create?',
      choices: [
        {
          title: 'project',
          description: 'Create a new blessed project',
          value: 'project',
        },
        {
          title: 'page',
          value: 'page',
          description: 'Create a new page inside current cli project',
        },
        {
          title: 'widget',
          value: 'widget',
          description: 'Create a new widget',
        },
      ],
    });

    switch (response.command) {
      case 'project':
        (async () => {
          await projectPrompt();
        })();
        break;
      case 'page':
        (async () => {
          await pagePrompt();
        })();
        break;
      case 'widget':
        (async () => {
          await widgetPrompt();
        })();
        break;
    }
  })();
} else {
  require('yargs')
    .locale('en')
    .scriptName('blessed')
    .commandDir('../src/commands')
    .demandCommand()
    .help()
    .usage('blessed <command> <params> <options>')
    .epilog(
      'For more information, see https://github.com/terminal-junkies/blessed-cli'
    )
    .option('dry-run', {
      alias: 'd',
      demandOption: false,
      describe: 'Dry Run: Verify the command without executing',
      type: 'boolean',
    })
    .parse();
}
