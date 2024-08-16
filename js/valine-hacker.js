// 是否默认折叠 Valine 评论
const collapseList = false;
// Valine 是否插在系统评论前面
const insertBefore = false;
// Valine 评论最大高度，例如：500px、50vh、auto
const listMaxHeight = "auto";

/**
 * ValineHacker
 * 
 * @example 在 front matter 中添加以下配置
 *
 * library:
 *  css:
 *    valineHacker: valine-hacker.css
 *  js:
 *    valine: https://unpkg.com/valine@latest
 *    valineHacker: /js/valine-hacker.js
 *
 */
class ValineHacker {
  #timerHackValine;

  /**
   * 修改 Valine 样式及功能
   */
  hackValine() {
    const $valine = document.querySelector('#valine');
    this.#timerHackValine = void 0;
    if (!$valine) {
      return;
    }
    this.#timerHackValine = setInterval(() => {
      const $vcount = $valine.querySelector('.vcount');
      if ($vcount) {
        const $vcards = $valine.querySelector('.vcards');
        const $vpage = $valine.querySelector('.vpage');
        // 是否默认折叠评论
        if (collapseList) {
          $vcards.classList.add('d-none');
          $vpage.classList.add('d-none');
        }
        $vcount.addEventListener('click', () => {
          $vcards.classList.toggle('d-none');
          $vpage.classList.toggle('d-none');
        });
        clearInterval(this.#timerHackValine);
      }
    }, 500);
  };

  init() {
    const comments = document.querySelector('#comments');
    if (!comments) {
      return;
    }
    const comment = document.createElement('div');
    comment.id = 'valine';
    comment.classList.add('comment');
    comment.style.maxHeight = listMaxHeight;
    if (insertBefore) {
      // 插在系统评论前面
      comments.insertBefore(comment, comments.firstChild);
    } else {
      // 插在系统评论后面
      comments.appendChild(comment);
    }
    new Valine({
      el: '#valine',
      appId: '7HwTRT0Q0Tfrat6ugrT6P67c-gzGzoHsz',
      appKey: 'mhTY1kuUmviCtQwkwOASfsfD',
      placeholder: 'ヾﾉ≧∀≦)o~ 有事请留言！\n评论功能以邮件作为通知方式！\n如有必要请填写正确邮箱哦！',
      avatar: 'wavatar',
      meta: ['nick', 'mail', 'link'],
      requiredFields: ['nick', 'mail', 'link'],
      pageSize: 10,
      lang: 'zh-CN',
      visitor: true,
      recordIP: true,
      highlight: true,
      enableQQ: true,
      serverURLs: '',
    });
    this.hackValine();
  }
}

/**
 * immediate.
 */
(() => {
  const vh = new ValineHacker();
  // it will be executed when the DOM tree is built
  document.addEventListener('DOMContentLoaded', () => {
    vh.init();
  });
})();
