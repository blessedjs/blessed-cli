'use strict';

const blessed = require('blessed');
const getTheme = require('utils/getTheme');

module.exports = function(screen) {
  const theme = getTheme();

  const box = blesed.box({
    parent: screen,
    label: 'box',
    content: 'hello world',
    top: 'center',
    left: 'center',
    height: '50%',
    width: '50%',
    border: theme.box.border,
    style: theme.box.style,
  });

  return box;
};
