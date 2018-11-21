module.exports = function (grunt) {
    const sass = require('node-sass');
    require('load-grunt-tasks')(grunt);
    require('grunt-contrib-cssmin')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                files: {
                    'dist/tree.css': 'src/tree.scss'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/tree.min.css': 'dist/tree.css'
                }
            }
        }
    });

    grunt.registerTask('build', ['sass', 'cssmin']);
};