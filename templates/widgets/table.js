'use strict';

const blessed = require('blessed');
const getTheme = require('utils/getTheme');

module.exports = function(screen) {
  const theme = getTheme();

  const table = blessed.table({
    parent: screen,
    label: 'Table',
    top: 'center',
    left: 'center',
    height: '50%',
    width: '50%',
    border: theme.table.border,
    style: theme.table.style,
  });

   table.setData([
    [ 'Animals',  'Foods'  ],
    [ 'Elephant', 'Apple'  ],
    [ 'Bird',     'Orange' ]
   ]);

  return table;
};
