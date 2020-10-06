const blessed = require('blessed');

const screen = blessed.screen({ fullUnicode: true });

const options = require('minimist')(process.argv.slice(2));
const scheme = options.theme || 'Dracula';
const colors = require(`blessed-themes/themes/${scheme}`);
const theme = require('./styles')(colors.colors);

module.exports = function() {
  const program = blessed.program();
  program.bg(theme.program.bg);
  program.fg(theme.program.fg);

  const box = blessed.box({
    parent: screen,
    content: 'Hello World',
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    border: theme.box.border,
    style: theme.box.style,
  });

  screen.key(['q'], () => {
    return process.exit(0); // eslint-disable-line
  });

  screen.append(box);

  screen.render();
};
