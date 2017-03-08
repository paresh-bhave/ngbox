(function() {
	'use strict';

	define(function() {
		
		View1Controller.$inject = [];

		function View1Controller() {
			this.title = "View 1";
		}

		View1Controller.prototype.getHelloWorld = function() {
			return "hello " + this.title;
		};


		View1Controller.prototype.sum = function(){
			this.total = this.number_1 + this.number_2;
		};


		return angular
				.module('view1.module',[])
				.controller('View1Controller',View1Controller);

	}); //define

})(); //self
	
