#!/usr/bin/env node

'use strict';

require('yargs')
  .locale('en')
  .scriptName('blessed')
  .commandDir('../src/commands')
  .demandCommand()
  .help()
  .usage('blessed <command> <params> <options>')
  .epilog('For more information, see https://github.com/terminal-junkies/blessed-cli')
  .option('dry-run', {
    alias: 'd',
    demandOption: false,
    describe: 'Dry Run: Verify the command without executing',
    type: 'boolean',
  })
  .parse();

