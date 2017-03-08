(function() {
	'use strict';

	define(function() {
		
		View2Controller.$inject = [];

		function View2Controller() {
			this.title = "View 2";
		}

		View2Controller.prototype.getHelloWorld = function() {
			return "hello another " + this.title;
		};

		return angular
				.module('view2.module',[])
				.controller('View2Controller',View2Controller);
	}); //define

})(); //self
	
