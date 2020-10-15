'use strict';

const blessed = require('@blessed/neo-blessed');
const getTheme = require('utils/getTheme');

module.exports = function(screen) {
  const theme = getTheme();
  const table = blessed.listtable({
    parent: screen,
    top: 'center',
    left: 'center',
    data: null,
    border: 'line',
    align: 'center',
    tags: true,
    keys: true,
    width: 'shrink',
    height: '70%',
    vi: true,
    mouse: true,
    style: theme.listtable.style,
  });

  const data2 = [
    [ 'Animals',  'Foods',  'Times',   'Numbers' ],
    [ 'Elephant', 'Apple',  '1:00am',  'One'     ],
    [ 'Bird',     'Orange', '2:15pm',  'Two'     ],
    [ 'T-Rex',    'Taco',   '8:45am',  'Three'   ],
    [ 'Mouse',    'Cheese', '9:05am',  'Four'    ]
  ];


  table.focus();

  table.setData(data2);


  return table;
};
