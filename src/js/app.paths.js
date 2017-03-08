(function() {

	/**
	 * File to define
	 * constant paths
	 *
	 * Note: RequireJS AMD will add .js extension to JavaScript file
	 */

	var BASE_URL = "",
		APP = "js/",
		COMMON = "common/",
		COMMON_CTRL = COMMON + "controller/",
		COMMON_FACTORY = COMMON + "factory/",
		COMMON_MODEL = COMMON + "model/",
		COMMON_SERVICE = COMMON + "service/",
		MODULE = "module/",
		EXT_CTRL = ".controller",
		EXT_FACTORY = ".factory",
		EXT_MODEL = ".model",
		EXT_SERVICE = ".service",
		EXT_VIEW = ".view.html",
		EXT_TPL = ".template.html"

	/**
	 * [getControllerPath description]
	 * @param  {[type]} ctrlName [description]
	 * @return {[type]}          [description]
	 */
	function getControllerPath(ctrlName) {
		return COMMON_CTRL + ctrlName + EXT_CTRL;
	}

	function getServicePath(serviceName) {
		return COMMON_SERVICE + serviceName + EXT_SERVICE;
	}

	/**
	 * [getModelPath description]
	 * @param  {[type]} modelName [description]
	 * @return {[type]}           [description]
	 */
	function getModelPath(modelName) {
		return COMMON_MODEL + modelName + EXT_MODEL;
	}

	/**
	 * [getFactorypath description]
	 * @param  {[type]} factoryName [description]
	 * @return {[type]}             [description]
	 */
	function getFactorypath(factoryName) {
		return COMMON_FACTORY + factoryName + EXT_FACTORY;
	}

	/**
	 * [getModulePath description]
	 * @param  {[type]} moduleName [description]
	 * @return {[type]}            [description]
	 */
	function getModulePath(moduleName) {
		return {
			html: APP + MODULE + moduleName + "/" + moduleName + EXT_VIEW,
			js: MODULE + moduleName + "/" + moduleName + EXT_CTRL
		}
	}

	/**
	 * [assign your file paths to window objects]
	 */
	
	window.NgBox = {
		baseUrl: BASE_URL,
		module: {
			'view_1': getModulePath('view_1'),
			'view_2': getModulePath('view_2')
		},
		common: {
			ctrl: {
				header: getControllerPath('header')
			}
		}
	}


})(); //self