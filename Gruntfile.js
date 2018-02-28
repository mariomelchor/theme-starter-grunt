module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'src/css/styles.css': 'sass/styles.scss'
        }
      }
    },
    uglify: {
      options: {
        mangle: false,
        sourceMap: true
      },
      my_target: {
        files: {
          'js/scripts.min.js': [
            'src/js/google-fonts.js'
          ]
        }
      }
    },
    cssmin: {
      options: {
        sourceMap: false
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
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify'],
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
          'css/styles.min.css',
          '*.php',
          '**/*.php',
          'js/*.js'
          ]
        },
        options: {
          watchTask: true,
          proxy: 'localhost:8080/domainname.com/'
        }
     }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', [ 'browserSync', 'watch' ] );

};
