var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/Spec\.js$/).test(file);
});
require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/src',

  // dynamically load all test files
  deps: tests,

  paths: {
    angular: "../src/libs/angular/angular",
    "angular-animate": "../src/libs/angular-animate/angular-animate",
    "angular-aria": "../src/libs/angular-aria/angular-aria",
    "angular-material": "../src/libs/angular-material/angular-material",
    "angular-messages": "../src/libs/angular-messages/angular-messages",
    "angular-mocks": "../src/libs/angular-mocks/angular-mocks",
    "angular-ui-router": "../src/libs/angular-ui-router/release/angular-ui-router"
  },
  shim: {
    "angular": {
      exports: "angular"
    },
    "angular-animate": [
      "angular"
    ],
    "angular-aria": [
     "angular"
    ],
    "angular-messages": [
      "angular"
    ],
    "angular-mocks": [
     "angular"
    ],
    "angular-material": [
      "angular-animate",
      "angular-aria",
      "angular-messages"
    ],
    "angular-ui-router": [
      "angular"
    ]
  },

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
})
