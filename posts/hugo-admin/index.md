# Hugo 本地管理 Shell 腳本


{{&lt; admonition abstract &gt;}}
在使用 hugo 寫博客的過程中會使用到一些命令，包括 Git 的使用也會用到 Git 命令，但是這些命令我感覺知道就好，沒必要因輸入命令而增加寫博客和部署博客的額外工作。  
自然要想辦法簡化這些過程，Git 還好有 SourceTree 等工具，Hugo 卻沒有，也懶得去網絡上找類似以前 hexo 有 hexo-admin 的插件可以讓大家在瀏覽器寫博客，因為我覺得這和靜態博客初衷背道而馳，於是我就折中方案，寫了一個滿足日常需求的 Shell 腳本，生成管理本地博客。
{{&lt; /admonition &gt;}}

&lt;!--more--&gt;

## 實現

一共六個腳本，放在 `hugo-site/_localadmin/` 下

    _localadmin/
      ├── auto_push.sh       # 自動化提交源碼
      ├── hugo_builder.sh    # 構建 hugo 命令
      ├── hugo_main.sh       # 主介面入口
      ├── hugo_server.sh     # 啟動本地服務
      ├── post_generator.sh  # 創建文章
      └── public_async.sh    # 同步 public 子模組

### post_generator.sh

1. 輸入文章名稱（建議使用英文）
2. 文章是否會插入圖片等資源（默認：否）

```bash
#!/bin/bash
#author: Lruihao
cd ..
read -p &#34;Please enter the article name: &#34; postName
if [ -z $postName ];then
  echo &#34;The article name is required!&#34;
else
  read -p &#34;Will there be pictures in this article? [y/n]...&#34; choice
  if [ $choice = &#34;y&#34; ];then
    hugo new posts/$postName/index.md
  else
    hugo new posts/$postName.md
  fi
fi
```

### hugo_server.sh

```bash
cd ..
hugo server --disableFastRender
```

### hugo_builder.sh

```bash
cd ..
hugo --minify
```

### public_async.sh

```bash
cd ..
git submodule update --remote
git add public
git commit -m &#34;Feat: Update public module commit id&#34;
```

### auto_push.sh

不輸入 Git 提交訊息會使用腳本中默認訊息 `Docs: 『菠菜眾長』内容更新 YYYY-MM-DD week hh:mm::ss`

```bash
#!/bin/bash
#author: Lruihao
cd ..
# 是否需要每次提交自動更新子模組
# git submodule update --remote
# git add public
# git commit -m &#34;Feat: Update public module commit id&#34;
git add .
read -p &#34;Please enter commit message: &#34; commitMsg
if [ -z $commitMsg ];then
  commitMsg=&#34;Docs: 『菠菜眾長』内容更新 $(date &#43;&#39;%F %a %T&#39;)&#34;
fi
git commit -m &#34;$commitMsg&#34;
git push
```

### hugo_main.sh

&gt; 可單獨執行子腳本也可以通過主介面來選擇序號執行

```bash
#!/bin/bash
#author: Lruihao
echo &#34;Please enter the serial number to work&#34;
echo &#34;--------------------------------------&#34;
echo &#34;1. post generator&#34;
echo &#34;2. hugo server&#34;
echo &#34;3. hugo build&#34;
echo &#34;4. public async&#34;
echo &#34;5. auto push&#34;
echo &#34;--------------------------------------&#34;
echo &#34;Press Ctrl&#43;C to stop&#34;

read num
case $num in
  1)
    sh post_generator.sh
    ;;
  2)
    sh hugo_server.sh
    ;;
  3)
    sh hugo_builder.sh
    ;;
  4)
    sh public_async.sh
    ;;
  5)
    sh auto_push.sh
    ;;
  *)
    echo &#34;There is no such serial number&#34;
    ;;
esac

echo &#34;Press any key to continue...&#34;
read x
clear
sh hugo_main.sh
```

## 使用

1. 將 `hugo_main.sh` 建立桌面快捷鍵
2. 雙擊 `hugo_main.sh` 進入根據提示使用即可

由於一般寫博客會便邊寫邊預覽，所以一般開兩個主介面窗口，如下圖：

&gt; - 一個選擇 `2` 啟動本地服務
&gt; - 一個用於生成文章，部署文章等

![Hugo Admin](images/hugo-admin1.png &#39;Hugo Admin&#39;)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hugo-admin/  

