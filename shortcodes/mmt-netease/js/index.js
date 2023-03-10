/**
 * javascript for shortcode mmt-netease
 * @author @Lruihao (https://lruihao.cn)
 */
const RNC = new (function () {
  const $music = document.querySelector('.netease-music');
  const $comment = document.querySelector('.comment-163');
  let lastMusic = void 0;

  /**
   * 获取随机网易云评论
   * @param {Boolean} [autoplay=false] 是否自动播放
   * @name RNC#getRandomComment
   */
  this.getRandomComment = (autoplay=false) => {
    fetch(`https://api.uomg.com/api/comments.163?mid=${$music.dataset.mid}`)
    .then(response => response.json())
    .then((comment) => {
      $comment.querySelector('.pic-backdrop').style.backgroundImage = `url(${comment.data.picurl.slice(5)})`;
      const $avatar = $comment.querySelector('.comment-avatar');
      $avatar.alt = `${comment.data.nickname}'s avatar`;
      $avatar.src = comment.data.avatarurl.slice(5);
      $avatar.classList.remove('d-none');
      $comment.querySelector('.comment-nickname').innerHTML = comment.data.nickname;
      $comment.querySelector('.comment-content').innerHTML = comment.data.content.replace('\n','<br/>');
      $comment.querySelector('.music-name').innerHTML = comment.data.name;
      $comment.querySelector('.artists-name').innerHTML = comment.data.artistsname;
      if (!lastMusic || (lastMusic !== comment.data.url)) {
        const $player = document.createElement('meting-js');
        $player.setAttribute('auto', comment.data.url);
        $player.setAttribute('autoplay', autoplay);
        $music.dataset.fixed && $player.setAttribute('fixed', $music.dataset.fixed);
        $music.dataset.mini && $player.setAttribute('mini', $music.dataset.mini);
        $music.dataset.volume && $player.setAttribute('volume', $music.dataset.volume);
        $music.innerHTML = '';
        $music.appendChild($player);
        lastMusic = comment.data.url;
      }
    })
  };

  /**
   * require APlayer and MetingJS
   */
  this.getRequire = () => {
    if (typeof MetingJSElement === 'undefined') {
      const APlayer = document.createElement('script');
      const Meting = document.createElement('script');
      APlayer.src = 'https://unpkg.com/aplayer/dist/APlayer.min.js';
      Meting.src = 'https://unpkg.com/meting@2/dist/Meting.min.js';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(APlayer, s);
      s.parentNode.insertBefore(Meting, s);
    }
  };

  /**
   * 初始化 mmt-netease shortcode
   * @name RNC#initRandomComment
   */
  this.initMMTNetease = () => {
    if (!$music || !$comment) {
      return;
    }
    this.getRequire();
    this.getRandomComment();
    $comment.addEventListener('click', () => {
      this.getRandomComment($music.dataset.autoplay);
    });
  };
})();

(() => {
  // It will be executed when the DOM tree is built.
  document.addEventListener('DOMContentLoaded', () => {
    RNC.initMMTNetease();
  });
})();
