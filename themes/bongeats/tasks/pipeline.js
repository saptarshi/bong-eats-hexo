// Js files to inject in `layout/_partial/script.ejs`
var tranquilpeakJsFilesToInject = [
  'jquery.js',
  'jquery.fancybox.js',
  'jquery.fancybox-thumbs.js',
  'tranquilpeak.js'
];

// Css files to inject in `layout/_partial/head.ejs`
var tranquilpeakCssFilesToInject = [
  'bongeats.css',
];

module.exports.tranquilpeakCssFilesToInject = tranquilpeakCssFilesToInject.map(function(path) {
  return 'source/assets/css/' + path;
});

module.exports.tranquilpeakJsFilesToInject = tranquilpeakJsFilesToInject.map(function(path) {
  return 'source/assets/js/' + path;
});
