'use strict';

const blessed = require('blessed');
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

  const data1 = [
    [ 'Animals',  'Foods',  'Times'  ],
    [ 'Elephant', 'Apple',  '1:00am' ],
    [ 'Bird',     'Orange', '2:15pm' ],
    [ 'T-Rex',    'Taco',   '8:45am' ],
    [ 'Mouse',    'Cheese', '9:05am' ]
  ];

  data1[1][0] = '{red-fg}' + data1[1][0] + '{/red-fg}';
  data1[2][0] += ' (' + DU + JUAN + ')';

  const data2 = [
    [ 'Animals',  'Foods',  'Times',   'Numbers' ],
    [ 'Elephant', 'Apple',  '1:00am',  'One'     ],
    [ 'Bird',     'Orange', '2:15pm',  'Two'     ],
    [ 'T-Rex',    'Taco',   '8:45am',  'Three'   ],
    [ 'Mouse',    'Cheese', '9:05am',  'Four'    ]
  ];

  data2[1][0] = '{red-fg}' + data2[1][0] + '{/red-fg}';
  data2[2][0] += ' (' + DU + JUAN + ')';


  table.focus();

  table.setData(data2);


  return table;
};
