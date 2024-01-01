# 模仿知乎卡片式链接


&gt; 模仿知乎的卡片式链接，idea 来自 [兰州小红鸡]

&lt;!--more--&gt;

## 源码

&gt; **2021/10/2 1:29 更新**

这是一种后加载，创建`linkcard.js`放到`source/js/src/`，然后在`next\layout\_macro\post.swig`中引用

```js
function cardLink() {
  let $cardLinks = document.querySelectorAll(&#39;.card-link&#39;);
  if ($cardLinks.length === 0) {
    return;
  }
  //插入样式
  let $linkStyle = document.createElement(&#39;style&#39;);
  $linkStyle.innerHTML =
    &#39;.card-link,.card-link:hover{text-decoration:none;border:none!important;color:inherit!important}.card-link{position:relative;display:block;margin:1em auto;width:390px;box-sizing:border-box;border-radius:12px;max-width:100%;overflow:hidden;color:inherit;text-decoration:none}.ztext{word-break:break-word;line-height:1.6}.card-link-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background-image:url(/images/card-link-bg.jpg);background-repeat:no-repeat;-webkit-filter:blur(20px);filter:blur(20px);background-size:cover;background-position:center}.card-link,.card-link:hover{text-decoration:none;border:none!important;color:inherit!important}.card-link-content{position:relative;display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:inherit;background-color:rgba(246,246,246,0.88)}.card-link-text{overflow:hidden}.card-link-title{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;max-height:calc(16px * 1.25 * 2);font-size:16px;font-weight:500;line-height:1.25;color:#1a1a1a}.card-link-meta{display:flex;margin-top:4px;font-size:14px;line-height:20px;color:#999;white-space:nowrap}.card-link-url{display: inline-flex;align-items: center;}.card-link-imageCell{margin-left:8px;border-radius:6px}.card-link-image{display:block;width:60px;height:60px;border-radius:inherit}&#39;;
  document.querySelector(&#39;body&#39;).appendChild($linkStyle);
  //渲染 DOM
  for (let $cardLink of $cardLinks) {
    $cardLink.innerHTML = `&lt;span class=&#39;card-link-backdrop&#39;&gt;&lt;/span&gt;&lt;span class=&#39;card-link-content&#39;&gt;&lt;span class=&#39;card-link-text&#39;&gt;&lt;span class=&#39;card-link-title&#39;&gt;${$cardLink.innerText}&lt;/span&gt;&lt;span class=&#39;card-link-meta&#39;&gt;&lt;span class=&#39;card-link-url&#39;&gt;&lt;svg class=&#39;Zi Zi--InsertLink&#39; fill=&#39;currentColor&#39; viewBox=&#39;0 0 24 24&#39; width=&#39;17&#39; height=&#39;17&#39;&gt;&lt;path d=&#39;M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z&#39; fill-rule=&#39;evenodd&#39;&gt;&lt;/path&gt;&lt;/svg&gt;&lt;/span&gt;${$cardLink.href}&lt;/span&gt;&lt;/span&gt;&lt;span class=&#39;card-link-imageCell&#39;&gt;&lt;img class=&#39;card-link-image&#39; alt=&#39;card-link icon&#39; src=&#39;/images/linkicon.png&#39;&gt;&lt;/span&gt;&lt;/span&gt;`;
  }
}
window.onload = () =&gt; {
  cardLink();
};
```

## 使用

```html 知乎卡片链接
&lt;!--知乎卡片链接--&gt;
&lt;script type=&#34;text/javascript&#34; src=&#34;/js/src/card-link.js&#34;&gt;&lt;/script&gt;
```

html 链接写法，a 标签加上`class=&#34;card-link&#34;`

```html
&lt;a href=&#34;https://github.com/Lruihao/lruihao.github.io&#34; target=&#34;_blank&#34; class=&#34;card-link&#34;&gt;Lruihao 博客&lt;/a&gt;
```

&lt;!-- markdownlint-disable MD034 --&gt;

{{&lt; link href=&#34;https://github.com/Lruihao/lruihao.github.io&#34; content=&#34;Lruihao 博客&#34; card=true &gt;}}


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/linkcard/  

