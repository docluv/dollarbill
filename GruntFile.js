module.exports = function (grunt) {

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    RegExp.quote = function (string) {
        return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    var fs = require('fs');
    var path = require('path');

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        qunit: {
            all: ['js/specs/**/*.html']
        },
        jshint: {
            options: {
                browser: true
            },
            files: ['Gruntfile.js', 'js/dev/*.js']
        },
        yuidoc: {
        	compile: {
        		name: '<%= pkg.name %>',
        		description: '<%= pkg.description %>',
        		version: '<%= pkg.version %>',
        		url: '<%= pkg.homepage %>',
        		options: {
        			paths: 'js/dev',
        			outdir: 'docs/yui'
        		}
        	}
        },
        bump: {
            options: {
              files: ['package.json'],
              updateConfigs: [],
              commit: true,
              commitMessage: 'Release v%VERSION%',
              commitFiles: ['package.json'],
              createTag: true,
              tagName: 'v%VERSION%',
              tagMessage: 'Version %VERSION%',
              push: true,
              pushTo: 'upstream',
              gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
            }
          },
        version: {
            myplugin: {
                //options: {
                //    prefix: 'version:\\s+'
                //},
                src: ['js/dev/dollar-bill.js', 'js/123.js']
            }
        },
        uglify: {
            options: {
                compress: {}
            },
            //    options: {
            //        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            //'<%= grunt.template.today("yyyy-mm-dd") %> */'
            //    },

            dollarbill: {
                options: {
                    banner: '<%= banner %>'
                },
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
                dest: 'js/<%= pkg.name %>.min.js'
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
                dest: 'js/movie/<%= pkg.name %>.min.js'
            }
        },
        concat: {
            options: {
                compress: false
            },
            //    options: {
            //        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            //'<%= grunt.template.today("yyyy-mm-dd") %> */'
            //    },

            dollarbill: {
                options: {
                    banner: '<%= banner %>'
                },
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
                dest: 'js/<%= pkg.name %>.js'
            }
        }
    });

   
    // Default task.
    grunt.registerTask('default', [/*'jshint', *//*'bump',*'version',*/ 'uglify', /*"yuidoc"/*, 'release'*/ /* "qunit" */]);

};