'use strict';

module.exports.command = 'widget [widget-name]';
module.exports.desc = 'Create a new blessed widget';
module.exports.aliases = ['w'];

module.exports.builder = function builder(yargs) {
  yargs.positional('widget-name', {
    describe: 'The name of the widget to create',
  });

  yargs.option('type', {
    alias: 't',
    demandOption: false,
    describe: 'The type of the widget to create. default is box',
    type: 'string',
    default: 'box',
  });
};

const createWidget = require('../utils/createWidget');
module.exports.handler = async function handler(options) {
  await createWidget(options);
};
