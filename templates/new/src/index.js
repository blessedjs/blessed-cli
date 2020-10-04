const blessed = require('blessed');

const screen = blessed.screen({ fullUnicode: true });

const inithomePage = require('./src/pages/home');
const initSearchPage = require('./src/pages/search');

const options = require('minimist')(process.argv.slice(2));
const scheme = options.theme || 'Dracula';
const colors = require(`blessed-themes/themes/${scheme}`);
const theme = require('./src/styles')(colors.colors);

module.exports = function() {
  const program = blessed.program();
  program.bg(theme.program.bg);
  program.fg(theme.program.fg);

  const header = blessed.box({
    parent: screen,
    content: 'Ember Observer CLI',
    top: 0,
    left: 0,
    width: '30%',
    height: '10%',
    border: theme.header.border,
    style: theme.header.style,
  });

  const searchBox = blessed.form({
    parent: screen,
    top: 0,
    left: '30%+1',
    width: '70%',
    height: '10%',
    border: theme.searchBox.border,
    style: theme.searchBox.style,
    content: 'Search addons',
    keys: true,
  });
  const text = blessed.textbox({
    parent: searchBox,
    mouse: true,
    keys: true,
    fg: theme.text.fg,
    bg: theme.text.bg,
    border: theme.text.border,
    height: 3,
    width: 80,
    left: 1,
    top: 1,
    name: 'text',
    inputOnFocus: true,
  });

  screen.key(['q'], () => {
    //return screen.destroy();
    return process.exit(0); // eslint-disable-line
  });

  screen.append(header);
  screen.append(searchBox);

  screen.render();
};
