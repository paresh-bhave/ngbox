(function() {
	'use strict';
	
	define([
		"app.values",
	], function(app) {
		
		var version = 0.1;

		return app.constant('VERSION', version);

	}); //Define

})(); //Self