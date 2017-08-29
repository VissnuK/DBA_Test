var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [{
      pattern: './config/karma-test-shim.js',
      watched: false
    }],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap', 'coverage']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-coverage',
      'karma-spec-reporter'
    ],
    reporters: ['progress', 'coverage', 'spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    coverageReporter: {
      reporters: [{
        type: 'text-summary'
      }]
    },
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false,
      failFast: true
    },
  };

  config.set(_config);
};