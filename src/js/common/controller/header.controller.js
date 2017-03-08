(function() {
	'use strict';

	define(function() {
		
		HeaderController.$inject = ["$rootScope", "$mdToast", "App"];
		function HeaderController($rootScope, $mdToast, App) {
			
			$rootScope.showProgress = function(){
				$mdToast.show(
					$mdToast.simple()
					.textContent("Loading...")
					.position("bottom left")
				);
			}
			$rootScope.hideProgress = function(){
				$mdToast.hide();
			} 

			this.appName = App.name;
			this.appVersion = App.version;
		}

		return angular
				.module('ngbox')
				.controller('HeaderController',HeaderController);

	}); //define

})(); //self
	
