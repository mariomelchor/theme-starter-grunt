module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded',
        },
        files: {
          'src/css/styles.css': 'sass/styles.scss'
        }
      }
    },
    cssmin: {
      options: {
        sourceMap: true
      },
      target: {
        files: {
          'css/styles.min.css': [
            'src/css/bootstrap/bootstrap.css',
            'src/css/owlcarousel/owl.theme.default.css',
            'src/css/owlcarousel/owl.carousel.css',
            'src/css/styles.css'
          ]
        }
      }
    },
    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass', 'cssmin'],
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
          'css/styles.min.css',
          '*.php',
          '**/*.php'
          ]
        },
        options: {
          watchTask: true,
          proxy: 'localhost:8080/domainname.com/'
        }
     }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', [ 'browserSync', 'watch' ] );

};