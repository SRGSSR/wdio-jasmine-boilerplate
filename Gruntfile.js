module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {
            test: {
                configFile: './conf/wdio.test.conf.js'
            },
            stage: {
                configFile: './conf/wdio.stage.conf.js'
            },
            prod: {
                configFile: './conf/wdio.prod.conf.js'
            }

        },
        jshint: {
            main: {
                options: {
                    jshintrc: '.jshintrc'
                },
            }
        }
    });

    grunt.registerTask('prod', ['jshint', 'webdriver:prod']);
    grunt.registerTask('test', ['jshint', 'webdriver:test']);
    grunt.registerTask('stage', ['jshint', 'webdriver:stage']);
    grunt.registerTask('default', ['prod']);
};