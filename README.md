# blessed-cli

![Build and Deploy](https://github.com/blessedjs/blessed-cli/Build%20and%20Deploy/badge.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](http://img.shields.io/npm/v/@blessed/cli.svg?style=flat)](https://npmjs.org/package/@blessed/cli "View this project on npm")


A CLI to create / scaffold [blessed](https://github.com/chjj/blessed) apps with conventional folder structure and project setup.

Features:
- Project scaffolding
- Theming setup implemeted by default
- Generate commands for pages and widgets
- Conventional project structure with linting enabled

## Install 

```
npm install -g @blessed/cli
```

## Usage

To open a wizard UI
```
blessed
```

### Create a new blessed CLI project
```
blessed new <project-name>
```

Example:
```
blessed new my-awesome-cli
```

### Create a new page in the CLI
```
cd my-awesome-cli
blessed page <page-name>
```

For example, if you want to create a page named `home`
```
blessed page home
```

You can also use the alias `p` for creating pages
```
blessed p home
```

### Create a new blessed widget inside the project
```
blessed widget <widget-name>
```
By default, this will create a [Box](https://github.com/chjj/blessed#box-from-element) widget.
You can also pass the `--type` option to specify the type of the widget.

```
blessed widget <widget-name> --type list
```

You can also use the alias `w` to create a widget
```
blessed w hello-world --type list
```

List of widgets available
- bigtext
- box
- list
- listbar
- listtable
- loading
- log
- message
- prompt
- question
- table
- text


## Help
```
blessed <command> <params> <options>

Commands:
  blessed new [project-name]    Create a new blessed project
  blessed page [page-name]      Create a new page component         [aliases: p]
  blessed widget [widget-name]  Create a new blessed widget         [aliases: w]

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -d, --dry-run  Dry Run: Verify the command without executing         [boolean]

For more information, see https://github.com/terminal-junkies/blessed-cli

```

### Projects created with blessed-cli
- ember-cli-next
- ember-app-explorer
- ember-observer-cli
- nvm-tui
- npmx
