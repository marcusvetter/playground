module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    keepalive: true,
                    open: true,
                    base: './src'
                }
            }
        },
        jshint: {
            files: ['src/task8_routing-templates/**/*.js'],
            options: {
                globals: {
                    angular: true
                }
            }
        },
        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    singleRun: true,
                    browsers: ['PhantomJS'],
                    files: [
                        'src/lib/angular.js',
                        'src/lib/angular-mocks.js',
                        'src/lib/angular-route.js',
                        'src/task6_service-factory/modules.js',
                        'src/task6_service-factory/controllers/peopleController.js',
                        'src/task6_service-factory/services/peopleService.js',
                        'test/**/*.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', ['jshint', 'karma:unit', 'connect:server']);
};

