module.exports = function(grunt) {
  grunt.config.set('sass', {
    // Compile `bongeats.scss` file into `bongeats.css`
    dev: {
      options: {
        sourceMap: false
      },
      files: {
        'source/assets/css/bongeats.css': 'source/_css/bongeats.scss'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
