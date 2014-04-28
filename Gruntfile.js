module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // these directories are auto-generated
    clean: ["assets/*"],

    // gather all our assets and the specific bower items we need
    copy: {
      main: {
        files: [
          {dest: 'assets/', src: ['assets_src/images/*'], expand: true, flatten: true},
          {dest: 'assets/fonts/', src: ['bower_components/fontawesome/fonts/*'], expand: true, flatten: true},

          {dest: 'assets/jquery.js', src: 'bower_components/jquery/dist/jquery.js'},
          {dest: 'assets/jquery.min.js', src: 'bower_components/jquery/dist/jquery.min.js'},
          {dest: 'assets/jquery.min.map', src: 'bower_components/jquery/dist/jquery.min.map'},
          {dest: 'assets/modernizr.js', src: 'bower_components/modernizr/modernizr.js'},
          {dest: 'assets/fastclick.js', src: 'bower_components/fastclick/lib/fastclick.js'},
          {dest: 'assets/foundation.min.js', src: 'bower_components/foundation/js/foundation.min.js'},
        ]
      },
    },
    sass: {
      dist: {
        options: {
          imagePath: '/assets',
          outputStyle: 'compressed'
        },
        files: {
          'assets/styles.css': 'assets_src/styles.scss'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['clean', 'copy', 'sass:dist']);
};
