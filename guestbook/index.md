# 留言


{{< admonition tip "Welcome" >}}
{{< typeit >}}
  互联网的广大朋友们，欢迎光临我的小博客！欢迎留言！
{{< /typeit >}}

<small>*关于 [FixIt 主题](https://github.com/hugo-fixit/FixIt) 的问题，请移步 [FixIt 官网](https://fixit.lruihao.cn) 相关文章哦～*</small>
{{< /admonition >}}

{{< admonition example "感谢大家的支持 🙏"  false >}}

{{< reward wechatpay="/images/wechatpay.gif" alipay="/images/alipay.gif" comment="给作者买杯卡布奇诺～" >}}

- **2018.09.28 [francs](https://postgres.fun) AliPay ￥50**  
  作为一个大学生，第一次在网上收到别人的支持，内心表示受宠若惊又非常开心。拿这 50 块买了半年腾讯云服务器！真的非常感谢老哥的支持！
- **2018.10.26 [francs](https://postgres.fun) QQ ￥8.8**  
  今天学校运动会没课，睡到 9 点多起来看到 QQ 收到一个红包，也是很开心！感谢支持！
- **2018.11 [francs](https://postgres.fun) QQ ￥8.8**
- **2018.12.04 * 昌升 AliPay ￥10**  
  上课的时候听到了支付宝清脆的支付宝到账 10 元的声音！感谢评论区匿名打赏的 [兄 dei!](#5c05d8189f545400678a8bbe)
- **2018.12.04 * 昌升 AliPay ￥18**  
  晚上加了一个 qq 好友，聊天之中又收到支付宝的提示，才知道是谁打赏的，真的很感谢每笔打赏！
- **2019.03.19 A\*r WechatPay ￥2**  
  2019 收到的第一笔打赏！每一份打赏支持我都心存感激！谢谢各位兄弟！`231****047#qq.com`
- **2020.01.17 * 喜洲 QQ ￥20.20**  
  时隔一年再次因为这个博客收到打赏，谢谢大家看得起！有关博客的问题，我能解答的都会帮助你们。`101****073`

{{< /admonition >}}

---

<div class="netease-music"></div>

<div class="comment-163" title="随机下一条">
  <span class="pic-backdrop"></span>
  <div class="commentator">
    <img class="comment-avatar" style="display:none;"/>
    <span class="comment-nickname"></span>
  </div>
  <div class="comment-content"></div>
  <div class="music-info">
    <span class="artists-name"></span>
    <span class="music-name"></span>
  </div>
</div>

---

{{< details "来自 [网易云歌单](https://music.163.com/#/playlist?id=2280569152)" >}}
{{< music server="netease" type="playlist" id="2280569152" loop="all" list-folded="true" >}}
{{< /details >}}

{{< script >}}
function getRandomComment() {
  fetch('https://api.uomg.com/api/comments.163?mid=2280569152')
  .then(response => response.json())
  .then((comment) => {
    document.querySelector('.pic-backdrop').style.backgroundImage = `url(${comment.data.picurl.slice(5)})`;
    document.querySelector('.comment-avatar').alt = `${comment.data.nickname}'s avatar`;
    document.querySelector('.comment-avatar').src = comment.data.avatarurl.slice(5);
    document.querySelector('.comment-avatar').style = '';
    document.querySelector('.comment-nickname').innerHTML = comment.data.nickname;
    document.querySelector('.comment-content').innerHTML = comment.data.content.replace('\n','<br/>');
    document.querySelector('.music-name').innerHTML = comment.data.name;
    document.querySelector('.artists-name').innerHTML = comment.data.artistsname;
    let player = document.createElement('meting-js');
    player.setAttribute('auto', comment.data.url);
    document.querySelector('.netease-music').innerHTML = '';
    document.querySelector('.netease-music').appendChild(player);
  })
}
document.addEventListener('DOMContentLoaded', () => {
  getRandomComment();
});
document.querySelector('.comment-163').addEventListener('click', () => {
  getRandomComment();
});
{{< /script >}}


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/guestbook/  

