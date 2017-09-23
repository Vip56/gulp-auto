module.exports = function(config) {
  'use strict';
  config.set({
    autoWatch: true,
    basePath: '',
    frameworks: [
      'jasmine'
    ],
    files: [
      'test/mock/**/*.js',
      'spec/**/*.js'
    ],
    exclude: [

    ],
    port: 8080,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],
    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,
    colors: true,
    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
     //proxies: {
     //  '/': 'http://localhost:9000/'
     //},
    // URL root prevent conflicts with the site root
     //urlRoot: '_karma_'
  });
};
