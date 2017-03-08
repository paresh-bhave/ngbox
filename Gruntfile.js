
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
				rjsConfig: '<%= pkg.src %>main.js',
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
						'*.css',
						'assets/**/*',
						'app/**/*',
						'libs/requirejs/*',
						'!assets/**/*.less'
					]
				}]
			}
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
					'<%= pkg.src %>libs/angular-material/angular-material.css',
					'<%= pkg.src %>assets/less/app.style.css'
				],
				dest: '<%= pkg.src %>main.css'
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
					cwd: '<%= pkg.temp %>',
					src: 'main.css',
					dest: '<%= pkg.temp %>',
					ext: 'main.css'
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
					'<%= pkg.src %>assets/less/app.style.css': [
						'<%= pkg.src %>assets/less/app.style.less'
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
					src: ['<%= pkg.src %>app/**/*.js'],
					dest: '<%= pkg.temp %>'
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
					dir: '<%= pkg.temp %>/',
					modules: [{
						name: 'main'
					}],
					preserveLicenseComments: false,
					removeCombined: true,
					baseUrl: '<%= pkg.src %>',
					mainConfigFile: '<%= pkg.src %>main.js',
					findNestedDependencies: true
				}
			}
		}
	});



	grunt.loadNpmTasks('grunt-bower-requirejs');
	grunt.registerTask('shim',['bowerRequirejs:app']);	
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('clean-all',['clean:temp','clean:dist']);
	
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('copy-dist',['copy:dist']);

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('minify-html',['htmlmin']);
	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('lesscss', ['less:dev','concat:maincss']);

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('minify-css',['cssmin']);

	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.registerTask('annotate',['ngAnnotate']);

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('rjsdist',['clean','requirejs']);

	grunt.registerTask('build',[
		'clean',
		'less',
		'concat:maincss',
		'ngAnnotate',
		'requirejs',
		'cssmin',
		'htmlmin',
		'copy:dist'
	]);
};