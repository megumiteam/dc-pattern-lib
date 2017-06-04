# DC Pattern Lib

## Usage

Clone this project to your local machine. Run `npm install`. This should run `bower install` and `gulp build`. If, for some reason, those two commands fail to run, you should run them manually.

To run Browsersync, open `gulpfile.js`, and change 'CONFIG_THIS' on line 198 to the name of your local dev url. Save the file. Navigate to the main directory in command line and run `gulp serve`.

When you run a gulp command, such as `gulp style_task` or `gulp scripts_task`, unminified files are created in the `src/` directory.

To create production ready files, run `gulp --production`, and minified files will be created in the `dist/` directory. The `index.html` file will automatically be updated with the `dist/` file paths for scripts and styles as well. Running `gulp` without the production flag will switch the file paths in `index.html` back to `src/`.

**Issues and Contributions**

Report issues: https://github.com/megumiteam/dc-pattern-lib/issues
