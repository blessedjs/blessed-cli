'use strict';

const fs = require('fs');
const prompts = require('prompts');
const createWidget = require('../utils/createWidget');

module.exports = function () {
  const widgets = fs.readdirSync(__dirname + '/../../templates/widgets');
  const choices = widgets.map((w) => {
    const value = w.replace('.js', '');
    return { title: value, value };
  });
  (async () => {
    const questions = [
      {
        type: 'autocomplete',
        name: 'type',
        message: 'Select a widget:',
        choices,
      },
      {
        type: 'text',
        name: 'name',
        message: 'Enter the name of the widget:',
      },
    ];
    const response = await prompts(questions);

    const options = {
      widgetName: response.name,
      type: response.type,
      dryRun: false,
    };
    createWidget(options);
  })();
};
