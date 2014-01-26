module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js: {
        files: '**/*.js',
        tasks: ['js'],
        options: {
          interrupt: true,
        },
      },
      coffee: {
        files: '*.coffee',
        tasks: ['coffee'],
        options: {
          interrupt: true,
        },
      },
    },
    jshint: {
      all: ['Gruntfile.js', '**/*.js'],
      options: {
        ignores: ['node_modules/**/*.js']
      }
    },
    coffeecompile: {
      app: {
        files: {
          '*.js': '*.coffee'
        }
      },
    },
    coffeelint: {
      app: ['*.coffee'],
      options: {
        arrow_spacing: true,
        colon_assignment_spacing: true
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['coffeelint', 'coffee:compile', 'jshint']);
  grunt.registerTask('coffee', ['coffeelint', 'coffeecompile']);
  grunt.registerTask('js', ['jshint']);

};