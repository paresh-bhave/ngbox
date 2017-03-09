(function() {
	'use strict';

	require.config({
		paths: {
			angular: "js/libs/angular/angular",
			"angular-animate": "js/libs/angular-animate/angular-animate",
			"angular-aria": "js/libs/angular-aria/angular-aria",
			"angular-material": "js/libs/angular-material/angular-material",
			"angular-messages": "js/libs/angular-messages/angular-messages",
			"angular-mocks": "js/libs/angular-mocks/angular-mocks",
			"angular-ui-router": "js/libs/angular-ui-router/release/angular-ui-router"
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
		packages: [

		],
		deps: ['js/app.config']
	});

})(); //self