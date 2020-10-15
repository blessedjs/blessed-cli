'use strict';

const prompts = require('prompts');
const createProject = require('../utils/createProject');

module.exports = function() {
  (async () => {

    const project = await prompts({
      type: 'text',
      name: 'name',
      message: 'Enter the name  of the project:',
    });

    const options =   { 
      projectName: project.name, 
      dryRun: false, 
      theme: undefined, 
      skipGit: true, 
      skipNpm: true, 
      useYarn: false , 
      usePnpm: false 
    }; 
    createProject(options);
  })();
};
