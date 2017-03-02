module.exports = function(grunt) {
    // Link all assets (environment : production)
  grunt.registerTask('linkAssetsProd', [
    'sails-linker:prodCss',
    'replace:linker'
  ]);
};
