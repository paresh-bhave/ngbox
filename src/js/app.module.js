(function() {
	'use strict';
	
	define([
		"angular",
		"angular-material",
		"angular-ui-router"
	], function(angular, ngMaterial, uiRouter) {
		
		return angular.module("ngbox",[
				"ngMaterial",
				"ui.router"
			]);

	});

})();