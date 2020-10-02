'use strict';

module.exports.command = 'generate [entity-type] [entity-name]';
module.exports.desc = 'Create a new blessed entity';

module.exports.builder = function builder(yargs) {
  yargs.positional('entity-type', {
    describe: 'The type of the project entity to create, could be page or widget',
  });

  yargs.positional('entity-name', {
    describe: 'The name of the project entity to create',
  });

  yargs.option('type', {
    alias: 't',
    demandOption: false,
    describe: 'The type of the widget to create',
    type: 'string',
  });
};

module.exports.handler = async function handler(options) {
  console.log('new project entity created');
};
