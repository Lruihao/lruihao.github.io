# Hugo 使用 GitHub Actions 部署到 GithHb Pages 和 腾讯云 cos 桶


{{&lt; admonition quote &#34;解決痛點&#34;&gt;}}
Github Actions 真是靜態博客的福音，有了它 hugo, hexo 等博客構建過程可以丟給 Github 的服務器幫我們做了。  
也就是説實現了在線寫靜態博客的需求。
{{&lt; /admonition &gt;}}

&lt;!--more--&gt;

## 準備

工作流程涉及到兩個倉庫和一個 cos 桶，例如：

&gt; - Lruihao/hugo-blog # Blog source repository
&gt; - Lruihao/lruihao.github.io # GitHub pages repository
&gt; - blog-1256932288 # COS bucket

## Github Actions

### 創建 workflows 任務

創建 `hugo-site/.github/workflows/deploy.yml`, 這個文件會寫一些命令告訴 Github 在我們提交源碼的時候，它要幫我們做哪些事情。

```yaml
name: Auto Deploy hugo
on: [push]
jobs:
  Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
        with:
          submodules: recursive # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0 # Fetch all history for .GitInfo and .Lastmod
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: latest
          extended: true
      - name: Build Hugo static files
        run: hugo --minify
      - name: Deploy to Github Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.GP_DEPLOY_KEY }}
          external_repository: Lruihao/lruihao.github.io
          publish_branch: main
          publish_dir: ./public
          commit_message: ${{ github.event.head_commit.message }}
      - name: Install coscmd
        run: sudo pip install coscmd
      - name: Configure coscmd
        env:
          COS_SECRET_ID: ${{ secrets.COS_SECRET_ID }}
          COS_SECRET_KEY: ${{ secrets.COS_SECRET_KEY }}
          COS_BUCKET_NAME: blog-1256932288 # Change for yourself
          COS_BUCKET_REGION: ap-chengdu # Change for yourself
        run: coscmd config -a $COS_SECRET_ID -s $COS_SECRET_KEY -b $COS_BUCKET_NAME -r $COS_BUCKET_REGION
      - name: Deploy to COS Bucket
        run: coscmd upload -r -s --delete -f public/ /
```

### 配置 Github Pages 密鑰

1. 為了讓 Lruihao/hugo-blog 提交代碼后自動部署到 Lruihao/lruihao.github.io, 需要生成一對 ssh key.

   ```bash
   ssh-keygen -t rsa -b 4096 -C &#34;$(git config user.email)&#34; -f gh-pages -N &#34;&#34;
   # You will get 2 files:
   # gh-pages.pub (public key)
   # gh-pages     (private key)
   ```

2. 打開 Lruihao/hugo-blog 倉庫的 settings, 再点击 Secrets, 然後添加 private key, name 为 `GP_DEPLOY_KEY`
3. 打開 Lruihao/lruihao.github.io, 点击 Deploy keys, 添加 public key, name 隨意，`Allow write access` 一定要勾上，否則無法提交

### 配置 COS 密鑰

打開 Lruihao/hugo-blog 倉庫的 settings, 再点击 Secrets, 然後添加 COS 桶的 `secret_id` 和 `secret_key`:

- COS_SECRET_ID
- COS_SECRET_KEY

&gt; 至此，Github Pages 和 COS 都已經可以通過 Github Actions 自動部署了，有部署記錄后，  
&gt; 打開 Lruihao/hugo-blog -&gt; Actions 可以看到構建過程和結果，構建失敗也會收到 Github 發給你的郵件。

## COS 自動同步（備用）

本小節內容和 Github Actions 無關，僅作為 COS 備用上傳方式。

- COSBrowser

1. 下載 COS 官方軟件 COSBrowser
2. 點開右上角 工具箱
3. 選擇 文件同步
4. 選擇 本地文件夹 eg. `hugo-site/public`
5. 選擇 存储桶目录
6. 同步类型：單次同步、自動同步、定時同步

&gt; 同步前先執行 hugo 構建命令，eg. `hugo --minify`  
&gt; 有 Github actions 選單次同步就好，在 Github 不好用時可用。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/github-actions/  

