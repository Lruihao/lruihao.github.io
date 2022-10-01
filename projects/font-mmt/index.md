# 沐目体


<iframe class="manuscript" src="https://hw.xiezixiansheng.com/mobile.php?c=Grzkreader&a=fontshowPics&u=qbfRl8gPF2s-&z=Kqz%2FRroVGYc-" style="width: 100%;height: 370px;margin-top: .25rem;" frameborder="0" allowfullscreen></iframe>

<!--more-->

## 预览

<div id="app-mmt" v-cloak>
  <p class="live-content">{{ message || '“沐目之，湘也”，取她之名，写给她的字体。\n 从下笔到停笔，从恋爱开始到结束，沐目体见证了我们稚嫩到成熟。故事的开头往往极具温柔啊，但故事总会有结局，这个故事的结局就是分开画上了最后的句号。' }}</p>
  <textarea class="live-textarea" v-model="message" placeholder="请输入文字 ..."></textarea>
</div>

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

<details close>
  <summary>点击展开更多</summary>

{{< music server="tencent" type="playlist" id="8305844774" loop="all" list-folded="true">}}

<div class="preview-lyric">

|《富士山下》|《爱情转移》|
|:-:|:-:|
|前尘硬化像石头|阳光在身上流转|
|随缘地抛下便逃走|等所有业障被原谅|
|我绝不罕有|爱情不停站|
|往街里绕过一周|想开往地老天荒|
|我便化乌有|需要多勇敢|
|你还嫌不够|你不要失望|
|我把这陈年风褛|荡气回肠是为了|
|送赠你解咒|最美的平凡|

</div>

![word](images/word1.png)

<div class="preview-images">

![preview](images/preview.png)
![mobile setting](images/setting.png)
![wechat](images/wechat.png)

</div>

</details>

## 下载

{{< admonition warning "警告" >}}
[沐目体](https://github.com/Lruihao/MMT/releases) *仅用于个人非商用！*
{{< /admonition >}}

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
  new Vue({
    el: '#app-mmt',
    data: {
      message: ''
    }
  });
});
document.querySelector('.comment-163').addEventListener('click', () => {
  getRandomComment();
});
{{< /script >}}


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/font-mmt/  

