# blessed-cli

A CLI to create / scaffold [blessed]() apps with conventional folder structure and project setup.

## Install 

```
npm install -g blessed-cli
```

## Usage

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
blessed generate page <page-name>
```

### Create a new blessed widget inside the project
```
blessed generate widget <widget-name>
```
By default, this will create a [Box]() widget.
You can also pass the `--type` option to specify the type of the widget.

```
blessed generate widget <widget-name> --type list
```
