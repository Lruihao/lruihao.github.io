# Hugo 本地管理 Shell 腳本


{{< admonition abstract >}}
在使用 hugo 寫博客的過程中會使用到一些命令，包括 Git 的使用也會用到 Git 命令，但是這些命令我感覺知道就好，沒必要因輸入命令而增加寫博客和部署博客的額外工作。  
自然要想辦法簡化這些過程，Git 還好有 SourceTree 等工具，Hugo 卻沒有，也懶得去網絡上找類似以前 hexo 有 hexo-admin 的插件可以讓大家在瀏覽器寫博客，因為我覺得這和靜態博客初衷背道而馳，於是我就折中方案，寫了一個滿足日常需求的 Shell 腳本，生成管理本地博客。
{{< /admonition >}}

<!--more-->

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
read -p "Please enter the article name: " postName
if [ -z $postName ];then
  echo "The article name is required!"
else
  read -p "Will there be pictures in this article? [y/n]..." choice
  if [ $choice = "y" ];then
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
git commit -m "Feat: Update public module commit id"
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
# git commit -m "Feat: Update public module commit id"
git add .
read -p "Please enter commit message: " commitMsg
if [ -z $commitMsg ];then
  commitMsg="Docs: 『菠菜眾長』内容更新 $(date +'%F %a %T')"
fi
git commit -m "$commitMsg"
git push
```

### hugo_main.sh

> 可單獨執行子腳本也可以通過主介面來選擇序號執行

```bash
#!/bin/bash
#author: Lruihao
echo "Please enter the serial number to work"
echo "--------------------------------------"
echo "1. post generator"
echo "2. hugo server"
echo "3. hugo build"
echo "4. public async"
echo "5. auto push"
echo "--------------------------------------"
echo "Press Ctrl+C to stop"

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
    echo "There is no such serial number"
    ;;
esac

echo "Press any key to continue..."
read x
clear
sh hugo_main.sh
```

## 使用

1. 將 `hugo_main.sh` 建立桌面快捷鍵
2. 雙擊 `hugo_main.sh` 進入根據提示使用即可

由於一般寫博客會便邊寫邊預覽，所以一般開兩個主介面窗口，如下圖：

> - 一個選擇 `2` 啟動本地服務
> - 一個用於生成文章，部署文章等

![Hugo Admin](images/hugo-admin1.png 'Hugo Admin')


---

> 作者:   
> URL: https://lruihao.cn/posts/hugo-admin/  

