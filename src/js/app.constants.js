(function() {
	'use strict';
	
	define([
		"js/app.values",
	], function(app) {
		
		var version = 0.1;

		return app.constant('VERSION', version);

	}); //Define

})(); //Self