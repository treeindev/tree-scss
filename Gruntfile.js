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
                    'css/tree.css': 'src/tree.scss'
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
                    'css/tree.min.css': 'css/tree.css'
                }
            }
        }
    });

    grunt.registerTask('build', ['sass', 'cssmin']);
};