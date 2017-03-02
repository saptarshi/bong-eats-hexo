'use strict';

var regCSSClass = /^[a-zA-Z0-9-_]+$/;

/**
 * HTMLClass tag
 *
 * Syntax: {% htmlClass [css classes] %}content{% endhtmlClass %}
 */
hexo.extend.tag.register('htmlClass', function(args, content) {
  var classes = [];
  var html = '';

  // get CSS classes
  while (args.length && regCSSClass.test(args[0])) {
    classes.push(args.shift());
  }

  // build html
  html += '<div class="' + classes.join(' ') + '">';
  html += hexo.render.renderSync({text: content, engine: 'markdown'});
  html += '</div>';

  return html;
}, {ends: true});
