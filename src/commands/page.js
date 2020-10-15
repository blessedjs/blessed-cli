'use strict';

module.exports.command = 'page [page-name]';
module.exports.desc = 'Create a new page component';
module.exports.aliases = ['p'];

module.exports.builder = function builder(yargs) {
  yargs.positional('page-name', {
    describe: 'The name of the page component to create',
  });
};

const createPage = require('../utils/createPage');
module.exports.handler = async function handler(options) {
  await createPage(options);
};
