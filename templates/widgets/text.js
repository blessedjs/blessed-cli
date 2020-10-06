'use strict';

const blessed = require('blessed');
const getTheme = require('utils/getTheme');

module.exports = function(screen) {
  const theme = getTheme();

  const text = blessed.text({
    parent: screen,
    label: 'Text',
    content: 'Hello world',
    top: 'center',
    left: 'center',
    height: '50%',
    width: '50%',
    border: theme.text.border,
    style: theme.text.style,
  });

  return text;
};
