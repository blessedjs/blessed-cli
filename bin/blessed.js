#!/usr/bin/env node

'use strict';

console.log(process.argv.length);

if (process.argv.length <= 2) {

  const cmds = {
  type: 'select',
  name: 'value',
  message: 'Pick a color',
  choices: [
    { title: 'Red', description: 'This option has a description', value: '#ff0000' },
    { title: 'Green', value: '#00ff00', disabled: true },
    { title: 'Blue', value: '#0000ff' }
  ],
  initial: 1
  };

  const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'number',
    name: 'value',
    message: 'How old are you?',
    validate: value => value < 18 ? `Nightclub is 18+ only` : true
  });

  console.log(response); // => { value: 24 }
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
