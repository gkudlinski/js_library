module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
				src: [
					'js/magnific-popup/*.js', // All JS in the libs folder
					'js/owl/*.js', // All JS in the libs folder
					'js/jquery-1.12.3.min.js'  // This specific file
				],
				dest: 'js/all/production.js',
			}
        },
		uglify: {
			build: {
				src: 'js/all/production.js',
				dest: 'js/all/production.min.js'
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/build/'
				}]
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/build/global.css': 'css/global.scss'
				}
			} 
		},
		watch: {
			options: {
				livereload: true,
			},
			scripts: {
				files: ['js/magnific-popup/*.js','js/owl/*.js','js/jquery-1.12.3.min.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				}
			},
			css: {
				files: ['css/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			},
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin','sass']);

};