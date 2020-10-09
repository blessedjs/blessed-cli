'use strict';

const blessed = require('blessed');
const getTheme = require('utils/getTheme');

module.exports = function(screen) {
  const theme = getTheme();

  const prompt = blessed.prompt({
  parent: screen,
  border: 'line',
  height: 'shrink',
  width: 'half',
  top: 'center',
  left: 'center',
  label: ' {blue-fg}Prompt{/blue-fg} ',
  tags: true,
  keys: true,
  vi: true
  });


  return prompt;
};
