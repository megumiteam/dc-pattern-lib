# DC Pattern Lib

## Installation

1. Clone this project to your local machine [Download](https://github.com/j2made/mercury/archive/master.zip)
2. Run `npm install`. This should run `bower install` and `gulp`. If, for some reason, those two commands fail to run, you should run them manually.
3. Start server and begin dev with `gulp serve`

## Usage

#### `gulp`
This will compile `scss` and `js` into the `src` directory for local development.

#### `gulp --production`
To create production ready files, run `gulp --production`, and minified files will be created in the `dist/` directory. The `index.html` file will automatically be updated with the `dist/` file paths for scripts and styles as well. Running `gulp` without the production flag will switch the file paths in `index.html` back to `src/`.

**Issues and Contributions**

Report issues: https://github.com/megumiteam/dc-pattern-lib/issues
