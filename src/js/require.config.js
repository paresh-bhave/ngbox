(function() {
	'use strict';

	require([
		'app.paths'
	], function() {
		
		require.config({
			paths: {
				angular: "libs/angular/angular",
				"angular-animate": "libs/angular-animate/angular-animate",
				"angular-aria": "libs/angular-aria/angular-aria",
				"angular-material": "libs/angular-material/angular-material",
				"angular-messages": "libs/angular-messages/angular-messages",
				"angular-mocks": "libs/angular-mocks/angular-mocks",
				"angular-ui-router": "libs/angular-ui-router/release/angular-ui-router"
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
			deps: ['app.config']
		});

	});


	/**
	 * [Bootstrap application
	 * you can also bootstrap to specific element]
	 * @param  {[type]} angular [description]
	 * @param  {[type]} config  [description]
	 * @param  {[type]} routes) {				angular.element(document).ready(function() {					angular.bootstrap(document,["ngbox"]);					});			} [description]
	 * @return {[type]}         [description]
	 */
	// require([
	// 	"angular",
	// 	"app/config",
	// 	"app/routes"
	// 	], function(angular, config, routes) {
	// 		angular.element(document).ready(function() {
	// 			angular.bootstrap(document,["ngbox"]);	
	// 		});
	// 	});

})(); //self