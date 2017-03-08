(function() {
	'use strict';
	
	define([
		"app.module",
	], function(app) {
		
		var App = {
			name: 'NgBox',
			version: 0.1
		}

		var Author = {
			name: 'John Doe',
			description: 'Lorem ipsum dolor sit amet'
		}

		return app
				.value('Author', Author)
				.value('App', App)

	}); //Define

})(); //Self