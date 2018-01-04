#!/usr/bin/env node

const minimist = require('minimist');

const { measure } = require('../main');

const description = `
check-bundle-size [options]

  Example usage: check-bundle-size --pattern='lib/*.js' --task='npm run build'

Options:

  -h, --help   Usage information
  --pattern    Glob pattern for files to measure, example: 'lib/*.js'
  --task       Task to run, example: 'npm run build'
`;

const argv = minimist(process.argv.slice(2));

if (argv.pattern && argv.task) {
  measure(argv.pattern, argv.task);
} else {
  console.log(description);
}
