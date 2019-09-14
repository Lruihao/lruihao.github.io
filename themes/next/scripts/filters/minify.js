/* global hexo */

'use strict';

hexo.extend.filter.register('after_generate', () => {
  const theme = hexo.theme.config;
  if (!theme.minify) return;

  const lists = hexo.route.list();
  const velocity = lists.filter(list => list.includes('lib/velocity'));
  const fontawesome = lists.filter(list => list.includes('lib/font-awesome'));

  if (!theme.bookmark.enable) {
    hexo.route.remove('js/src/bookmark.js');
  }

  if (!theme.motion.enable) {
    hexo.route.remove('js/src/motion.js');
    velocity.forEach(path => {
      hexo.route.remove(path);
    });
  }

  if (theme.motion.enable && theme.vendors.velocity && theme.vendors.velocity_ui) {
    velocity.forEach(path => {
      hexo.route.remove(path);
    });
  }

  if (theme.vendors.fontawesome) {
    fontawesome.forEach(path => {
      hexo.route.remove(path);
    });
  }

  if (!theme.algolia_search.enable) {
    hexo.route.remove('js/src/algolia-search.js');
  }

  if (theme.scheme === 'Muse' || theme.scheme === 'Mist') {
    hexo.route.remove('js/src/schemes/pisces.js');
  } else if (theme.scheme === 'Pisces' || theme.scheme === 'Gemini') {
    hexo.route.remove('js/src/schemes/muse.js');
  }
});