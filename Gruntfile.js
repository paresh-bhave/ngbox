
module.exports = function(grunt) {
	'use strict';
	
	/**
	 * Following tasks work on 2 folders
	 * src: contains all source files in distributed format
	 * tmp: requirejs optimize files first get copied to temp folder
	 * dist: after compliting all the minification and optimization tasks,
	 *  selected set of files gets copied to dist folder
	 */

	var pkg = {
		'src': 'src/',
		'dist': 'dist/',
		'temp': 'tmp/'
	};

	grunt.initConfig({
		'pkg': pkg,

		/**
		 * Task to add shim dependencies
		 * after bower component installation 
		 */
		'bowerRequirejs': {
			app: {
				options: {
					exclude: ['requirejs']
				},
				rjsConfig: '<%= pkg.src %>require.config.js',
			}
		},

		/**
		 * Task to clean temp or dist folders 
		 */
		'clean': {
			temp: {
				src: '<%= pkg.temp %>/*'
			},
			dist: {
				src: '<%= pkg.dist %>/*'
			}
		},

		/**
		 * Task to copy files from
		 * temp to dist folder
		 */
		'copy': {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= pkg.temp %>',
					dest: '<%= pkg.dist %>',
					src: [
						'*.html',
						'*.js',
						'css/main.css',
						'fonts/*',
						'img/*',
						'js/common/**/*.js',
						'js/module/**/*',
						'js/libs/requirejs/require.js',
						'js/*.js'
					]
				}]
			},
			main: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= pkg.src %>',
					dest: '<%= pkg.temp %>',
					src: [
						'*.html',
						'fonts/*',
						'img/*',
						'css/main.css'
					]
				}]
			},
		},

		/**
		 * Task to concat app stylesheet
		 * into 1 main.css
		 */
		'concat': {
			options: {
				stripBanners: true
			},
			maincss: {
				src: [
					'<%= pkg.src %>js/libs/angular-material/angular-material.css',
					'<%= pkg.src %>css/less/app.style.css'
				],
				dest: '<%= pkg.src %>css/main.css'
			},
		},

		/**
		 * Task to minify css
		 * for dist package
		 */
		'cssmin': {
			target: {
				files: [{
					expand: true,
					cwd: '<%= pkg.temp %>css/',
					src: 'main.css',
					dest: '<%= pkg.temp %>css/'
				}]
			}
		},

		/**
		 * Task to minify
		 * HTML files
		 */
		'htmlmin': {
			dist: {
				options: {
					collapseWhitespace: true,
					conservativeCollapse: true,
					collapseBooleanAttributes: true,
					removeCommentsFromCDATA: true
				},
				files: [{
					expand: true,
					cwd: '<%= pkg.temp %>',
					src: ['**/*.html'],
					dest: '<%= pkg.temp %>'
				}]
			}
		},

		/**
		 * Task to compile
		 * less files into css
		 */
		'less': {
			options: {
				strictUnits: false
			},
			dev: {
				files: {
					'<%= pkg.src %>css/less/app.style.css': [
						'<%= pkg.src %>css/less/app.style.less'
					]
				}
			}
		},

		/**
		 * Task to add annotation in angularjs
		 * to make safe minification of angularjs files
		 */
		'ngAnnotate': {
			all: {
				files: [{
					expand: true,
					src: ['<%= pkg.src %>js/**/*.js'],
					dest: '<%= pkg.src %>'
				}]
			},
		},

		/**
		 * Task to optimize
		 * RequireJs project
		 */
		'requirejs': {
			compile: {
				options: {
					dir: '<%= pkg.temp %>',
					baseUrl: '<%= pkg.src %>',
					mainConfigFile: '<%= pkg.src %>require.config.js',
					modules: [{
						name: 'require.config'
					}],
					preserveLicenseComments: false,
					removeCombined: true,
					findNestedDependencies: true
				}
			}
		}
	});



	grunt.loadNpmTasks('grunt-bower-requirejs');
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.loadNpmTasks('grunt-ng-annotate');

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('maincss', [
		'less',
		'concat:maincss'
	]);

	grunt.registerTask('build',[
		'clean',
		'less',
		'concat:maincss',
		'ngAnnotate',
		'requirejs',
		'cssmin',
		'htmlmin',
		'copy:dist',
		'clean:temp'
	]);
};