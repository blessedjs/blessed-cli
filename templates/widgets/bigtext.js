'use strict';

const blessed = require('@blessed/neo-blessed');
const getTheme = require('utils/getTheme');

module.exports = function(screen) {
  const theme = getTheme();

  const bigtext = blessed.bigtext({
    parent: screen,
    content: 'Hello',
    top: 'center',
    left: 'center',
    width: '80%',
    height: '50%',
    border: theme.bigtext.border,
    style: theme.bigtext.style,
  });

  return bigtext;
};
