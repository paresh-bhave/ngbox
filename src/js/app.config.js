(function(CONTROLLER) {
	'use strict';
	
	define([
		"app.routes",
	], function(app) {
		
		Config.$inject = ["$mdThemingProvider"];

		function Config($mdThemingProvider) {
			$mdThemingProvider
				.theme('default')
				.primaryPalette('indigo',{
					'hue-3':'900'
				})
				.accentPalette('teal')
				.warnPalette('red');
		} //Config

		app.config(Config);


		/**
		 * [manual bootstrapping the app]
		 */
		require([CONTROLLER.header], function(){
			angular.bootstrap(document,["ngbox"]);	
		});

	}); //Define

})(window.NgBox.common.ctrl); //Self