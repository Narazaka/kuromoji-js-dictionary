#!/usr/bin/env node
const path = require('path');
const { fork } = require('child_process');
const argv = process.argv
  .slice(2);
const execPath = path.join(__dirname, 'build');
fork(execPath, argv, {
  execArgv: ['--max-old-space-size=8192']
});