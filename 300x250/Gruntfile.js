module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.initConfig({
        clean: { 'files': ['/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/dist'] },
        connect: {
            'src': {
                'options': {
                    'port': 8000,
                    'base': '/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/src',
                    'keepalive': true,
                    'hostname': '*'
                }
            },
            'dist': {
                'options': {
                    'port': 8001,
                    'base': '/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/dist',
                    'keepalive': true,
                    'hostname': '*'
                }
            }
        },
        copy: {
            'assets': {
                'expand': true,
                'cwd': '/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/src',
                'src': '*.{jpg,png,gif}',
                'dest': '/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/dist',
                'flatten': true,
                'filter': 'isFile'
            }
        },
        htmlmin: {
            'dist': {
                'options': {
                    'removeComments': true,
                    'collapseWhitespace': true
                },
                'files': { '/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/dist/index.html': '/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/dist/index.html' }
            }
        },
        sass: {
            'options': {
                'sourcemap': 'none',
                'noCache': true,
                'loadPath': '/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/node_modules/node-bourbon/node_modules/bourbon/app/assets/stylesheets'
            },
            'files': {
                'expand': true,
                'cwd': '/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/sass',
                'src': ['*.scss'],
                'dest': '/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/src/css',
                'ext': '.css'
            }
        },
        jshint: {
            'all': ['/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/src/js/*.js'],
            'options': {
                'camelcase': false,
                'curly': false,
                'eqeqeq': true,
                'immed': true,
                'newcap': true,
                'noarg': true,
                'sub': true,
                'undef': true,
                'eqnull': true,
                'browser': true,
                'maxlen': 150,
                'unused': true,
                'globals': {
                    'module': false,
                    'console': true
                }
            }
        },
        watch: {
            'sass': {
                'files': ['/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/sass/**/*.{scss,sass}'],
                'tasks': 'sass'
            },
            'jshint': {
                'files': ['/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/src/js/**/*.js'],
                'tasks': 'jshint'
            }
        },
        inline: {
            'options': {
                'cssmin': true,
                'uglify': {
                    'compress': { 'drop_console': true },
                    'mangle': true
                }
            },
            'dist': {
                'src': '/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/src/index.html',
                'dest': '/Users/luke.dohner/Desktop/luke/MSFTSurfaceBlue/standards/commit/dist/index.html'
            }
        }
    });
    grunt.registerTask('build', [
        'clean',
        'inline',
        'htmlmin',
        'copy'
    ]);
    grunt.registerTask('default', ['watch']);
};