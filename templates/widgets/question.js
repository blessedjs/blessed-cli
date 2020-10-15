'use strict';

const blessed = require('@blessed/neo-blessed');
const getTheme = require('utils/getTheme');

module.exports = function(screen) {
  const theme = getTheme();

  const question = blessed.question({
  parent: screen,
  border: 'line',
  height: 'shrink',
  width: 'half',
  top: 'center',
  left: 'center',
  label: ' {blue-fg}Question{/blue-fg} ',
  tags: true,
  keys: true,
  vi: true
  });


  return question;
};
