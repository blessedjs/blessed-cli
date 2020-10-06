'use strict';

module.exports = function (colors) {
  const {
    primary: { background, foreground },
    normal: { red, green, blue, yellow, magenta, cyan },
  } = colors;

  return {
    colors,
    program: {
      bg: background,
      fg: foreground,
    },
    text: {
      fg: foreground,
      bg: background,

      border: {
        type: 'line',
        fg: foreground,
        bg: background,
      },
    },
    box: {
      border: {
        type: 'line',
        fg: green,
        bg: background,
      },
      style: {
        bg: background,
        fg: foreground,
        focus: {
          border: {
            fg: red,
          },
        },
        label: {
          fg: foreground,
          bg: background,
        },
      },
    },
    table: {
      border: {
        type: 'line',
        fg: foreground,
        bg: background,
      },
      style: {
        bg: background,
        fg: foreground,
        header: {
          fg: foreground,
          bg: background,
        },
        cell: {
          fg: foreground,
          bg: background,
        },
        label: {
          fg: foreground,
          bg: background,
        },
      },
    },
  };
};
