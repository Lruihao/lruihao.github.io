/**
 * javascript for shortcode mmt-netease
 * @author @Lruihao (https://lruihao.cn)
 */
const RNC = new (function () {
  const $music = document.querySelector('.netease-music');
  const $comment = document.querySelector('.comment-163');
  const $loading = document.querySelector('.loading-indicator-wrapper');
  let lastMusic = void 0;
  let timer = void 0;
  const TIME_OUT = 60;

  /**
   * 获取随机网易云评论
   * @param {Boolean} [autoplay=false] 是否自动播放
   * @param {Boolean} [current=false] 是否播放当前评论的音乐
   * @name RNC#getRandomComment
   */
  this.getRandomComment = (autoplay = false, current = false) => {
    $comment.classList.toggle('d-none');
    $loading.classList.toggle('d-none');
    fetch(`https://api.lruihao.cn/netease/comment?mid=${$music.dataset.mid}`)
      .then(response => response.json())
      .then((comment) => {
        const nickname = comment.data?.nickname || '未知用户';
        const musicURL = comment.data?.musicUrl;
        if (comment.data.picUrl) {
          $comment.querySelector('.pic-backdrop').style.backgroundImage = `url(${comment.data.picUrl.slice(5)})`;
        }
        if (comment.data.avatarUrl) {
          const $avatar = $comment.querySelector('.comment-avatar');
          $avatar.alt = `${nickname}'s avatar`;
          $avatar.src = comment.data.avatarUrl.slice(5);
          $avatar.classList.remove('d-none');
        }
        $comment.querySelector('.comment-nickname').innerHTML = nickname;
        $comment.querySelector('.comment-time').innerHTML = comment.data.timeStr;
        $comment.querySelector('.comment-liked').innerHTML = comment.data.likedCount;
        $comment.querySelector('.comment-content').innerHTML = comment.data.content?.replace('\n', '<br/>');
        $comment.querySelector('.music-name').innerHTML = comment.data?.musicName;
        $comment.querySelector('.artists-name').innerHTML = comment.data?.artist;
        if (!musicURL || !current) { return; }
        if (!lastMusic || (lastMusic !== musicURL)) {
          const $player = document.createElement('meting-js');
          $player.setAttribute('auto', musicURL);
          $player.setAttribute('autoplay', autoplay);
          $music.dataset.fixed && $player.setAttribute('fixed', $music.dataset.fixed);
          $music.dataset.mini && $player.setAttribute('mini', $music.dataset.mini);
          $music.dataset.volume && $player.setAttribute('volume', $music.dataset.volume);
          $music.innerHTML = '';
          $music.appendChild($player);
          lastMusic = musicURL;
        }
      }).catch((error) => {
        console.error('Error fetching comment:', error);
        $comment.querySelector('.comment-content').innerHTML = '获取评论失败，请稍后再试...';
      }).finally(() => {
        $comment.classList.toggle('d-none');
        $loading.classList.toggle('d-none');
      });
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

  this.refresh = (autoplay = false, current = false) => {
    this.getRandomComment(autoplay, current);
    if (timer) {
      clearInterval(timer);
    }
    timer = setInterval(() => {
      this.getRandomComment(autoplay, current);
    }, TIME_OUT * 1000);
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
    $comment.addEventListener('click', () => {
      this.refresh($music.dataset.autoplay, $music.dataset.current);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 进入视口时开始获取评论
          this.refresh();
          // 取消观察
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    const target = document.querySelector('.section-comment');
    if (target) {
      observer.observe(target);
    }
  };
})();

(() => {
  // It will be executed when the DOM tree is built.
  document.addEventListener('DOMContentLoaded', () => {
    RNC.initMMTNetease();
  });
})();
