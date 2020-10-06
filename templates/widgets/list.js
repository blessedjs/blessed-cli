'use strict';

const blessed = require('blessed');
const getTheme = require('utils/getTheme');

module.exports = function(screen) {
  const theme = getTheme();

  const list = blessed.list({
    parent: screen,
    label: 'List',
    top: 'center',
    left: 'center',
    height: '50%',
    width: '50%',
    border: theme.list.border,
    style: theme.list.style,
  });

  list.setItems(['one','two','three']);

  return list;
};
