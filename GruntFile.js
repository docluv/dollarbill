module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            all: ['js/specs/**/*.html']
        },
        jshint: {
            options: {
                browser: true
            },
            files: ['Gruntfile.js', 'js/dev/*.js']
        },
        uglify: {
            options: {
                compress: true
            },
            //    options: {
            //        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            //'<%= grunt.template.today("yyyy-mm-dd") %> */'
            //    },

            dollarbill: {
                src: [
                'js/dev/dollar-bill.js',
                'js/dev/dollar-bill.localStorage.js',
                'js/dev/dollar-bill.cssClass.js',
                'js/dev/dollar-bill.visibility.js',
                'js/dev/dollar-bill.utils.js',
                'js/dev/dollar-bill.css.js',
                'js/dev/dollar-bill.element.js',
                'js/dev/dollar-bill.events.js',
                'js/dev/dollar-bill.manipulate.js',
                'js/dev/dollar-bill.load.js',
                'js/dev/dollar-bill.utils.js'
                ],
                dest: 'js/dollarbill.min.js'
            },
            dollarbillMovie: {
                src: [
                'js/dev/dollar-bill.js',
                'js/dev/dollar-bill.localStorage.js',
                'js/dev/dollar-bill.cssClass.js',
                'js/dev/dollar-bill.visibility.js',
                'js/dev/dollar-bill.utils.js',
                'js/dev/dollar-bill.load.js',
                'js/dev/dollar-bill.utils.js'
                ],
                dest: 'js/movie/dollarbill.min.js'
            }


        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
 //   grunt.loadNpmTasks('grunt-contrib-jshint');
  //  grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default task.
    grunt.registerTask('default', [/*'jshint', */'uglify' /* "qunit" */]);

};