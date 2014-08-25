'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			patternlab: {
				command: "php core/builder.php -g"
			}
		},
		compass: {
			dev: {
				options: {              
					sassDir: ['source/scss'],
					cssDir: ['public/css'],
					environment: 'development',
					//outputStyle: 'compressed',
					require: 'susy'
				}
			},
			sourceMap: {
				options: {
					sourceComments: 'map',
					sourceMap: 'style.css.map'
				},
				files: {
					'public/css/style.css': 'source/scss/style.scss'
				}
			},
		},
		watch: {
			scripts: {
				files: ['source/scss/*.scss'],
				tasks: ['compass:dev', 'shell:patternlab'],
			},
			livereload: {
				files: ['source/_patterns/**/*.mustache'],
				options: {
					livereload: true
				}
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', ['compass:dev','shell:patternlab','watch']);
};
