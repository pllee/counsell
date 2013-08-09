
module.exports = function(grunt) {
  grunt.initConfig({ 
    exec: {
      buildSrc: {
        cmd: 'node_modules/.bin/browserify --debug lib/counsell-web.js > counsell.js'
      },
      buildTest: {
        cmd: 'node_modules/.bin/browserify --debug test/counsell.js > pages/testRunner/build/tests.js'
      }, 
      runTest: {
        cmd: 'node_modules/.bin/mocha -R list'
      }
    },
    uglify: {
      compress: {
        files: {
          'counsell.min.js': ['counsell.js']
        },
        options: {
          mangle: false,
          preserveComments: 'some',
          banner:  '/**\n' +
                   ' * @license https://github.com/pllee/counsell/blob/master/LICENSE\n' +
                   ' */\n'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['exec', 'uglify']);

};
