module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9001,
          base: 'src',
          keepalive: true
        }
      }
    }
  });

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-connect');

};
