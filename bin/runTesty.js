#!/usr/bin/env node

'use strict';

const { Testy } = require('../testy');

const testFile = process.argv[2];

Testy.configuredWith({
  // relative or absolute path
  directory: './tests',
  // regular expression to filter test files to run
  filter: testFile || /.*test.js$/,
  // 'en' is the default. For example, you can try 'es' to see output in Spanish
  language: 'en',
  // Stops at the first failed or errored test. false by default
  failFast: false,
}).run();
