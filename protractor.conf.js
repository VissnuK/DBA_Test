let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './test/e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: false,
  seleniumAddress: 'http://localhost:4444/wd/hub/',
  baseUrl: 'http://localhost:8080/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'src'
    });
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};