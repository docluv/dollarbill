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
            files: ['Gruntfile.js', 'js/debug/*.js']
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
                'js/debug/dollar-bill.js',
                'js/debug/dollar-bill.localStorage.js',
                'js/debug/dollar-bill.cssClass.js',
                'js/debug/dollar-bill.visibility.js',
                'js/debug/dollar-bill.utils.js',
                'js/debug/dollar-bill.css.js',
                'js/debug/dollar-bill.element.js',
                'js/debug/dollar-bill.events.js',
                'js/debug/dollar-bill.manipulate.js',
                'js/debug/dollar-bill.load.js',
                'js/debug/dollar-bill.utils.js'
                ],
                dest: 'js/dollarbill.min.js'
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
 //   grunt.loadNpmTasks('grunt-contrib-jshint');
  //  grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default task.
    grunt.registerTask('default', [/*'jshint', */'uglify' /* "qunit" */]);

};