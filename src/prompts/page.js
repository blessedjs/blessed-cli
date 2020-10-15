'use strict';

const prompts = require('prompts');
const createPage = require('../utils/createPage');

module.exports = function () {
  (async () => {
    const page = await prompts({
      type: 'text',
      name: 'name',
      message: 'Enter the name of the page:',
    });

    const options = {
      pageName: page.name,
      dryRun: false,
    };
    createPage(options);
  })();
};
