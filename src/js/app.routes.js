(function(MODULE) {
	'use strict';
	
	define([
		"js/app.constants"
	], function(app) {
		
		/**
		 * [Routes description]
		 * @param {[type]} $stateProvider      [description]
		 * @param {[type]} $urlRouterProvider  [description]
		 * @param {[type]} $controllerProvider [description]
		 * @param {[type]} $compileProvider    [description]
		 * @param {[type]} $filterProvider     [description]
		 * @param {[type]} $provide            [description]
		 */
		Routes.$inject = ["$stateProvider", "$urlRouterProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide"];
		function Routes($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

			/**
			 * https://benohead.com/angularjs-requirejs-dynamic-loading-and-pluggable-views/
			 * [providers description]
			 * @type {Object}
			 */
			var providers = {
				$controllerProvider: $controllerProvider,
				$compileProvider: $compileProvider,
				$filterProvider: $filterProvider,
				$provide: $provide
			};

			/**
			 * [registerModule dynamic registration of modules]
			 * @param  {[type]} moduleName [description]
			 * @return {[type]}            [description]
			 */
			function registerModule(moduleName) {
				var module = angular.module(moduleName);
				if (module.requires) {
					for (var i = 0; i < module.requires.length; i++) {
						registerModule(module.requires[i]);
					}
				}
				angular.forEach(module._invokeQueue, function(invokeArgs) {
					var provider = providers[invokeArgs[0]];
					provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
				});
				angular.forEach(module._configBlocks, function (fn) {
					$injector.invoke(fn);
				});
				angular.forEach(module._runBlocks, function (fn) {
					$injector.invoke(fn);
				});
			};

			/**
			 * [resolveModule description]
			 * @param  {[type]} ctrlFilePath [description]
			 * @return {[type]}              [description]
			 */
			function resolveModule(ctrlFilePath) {
				return ['$q','$rootScope', function($q, $rootScope) {
					var deferred = $q.defer();
					require([ctrlFilePath], function(module){
						registerModule(module.name)
						$rootScope.$apply(function(){
							deferred.resolve();
						});
					});
					return deferred.promise;
				}]
			}

			/**
			 * Defining State Routes
			 */
			$stateProvider
				.state('view_1', {
					url: '/view_1',
					templateUrl: MODULE.view_1.html,
					resolve: {
						deps: resolveModule( MODULE.view_1.js )
					}
				})
				.state('view_2', {
					url: '/view_2',
					templateUrl: MODULE.view_2.html,
					resolve: {
						deps: resolveModule( MODULE.view_2.js )
					}
				});

				$urlRouterProvider.otherwise('/view_1');

		} //Routes Class

		return app.config(Routes);

	}); //Define

})(window.NgBox.module); //Self