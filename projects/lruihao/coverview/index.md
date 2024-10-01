# 🛠 Create Awesome Cover Images for Your Blog Posts Quickly.

# CoverView

👉 简体中文说明 | [English README](README.en.md)

[![用爱发电](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/Lruihao/CoverView)

&gt; 该项目基于原始的 [CoverView](https://github.com/rutikwankhade/CoverView)。

现在为你的博客创建封面图片变得非常简单。

![cover_852562](https://github.com/Lruihao/CoverView/assets/33419593/f61407eb-fcba-4e78-8ee1-abd633f4c5a0)

## 💥 变更通知

自 2024 年 03 月 28 日起，已将原始的 CoverView 移至我的存储库，并进行了以下更改和增强：

- 修复了具有图案背景的图像无法下载的问题
- 修复了无法下载和上传 SVG 格式图标的问题
- 修复了移动端样式混乱的问题
- 修复了 `重置所有` 按钮功能异常的问题
- 添加了 ESLint 支持
- 添加了 I18n 支持
- 增强了 Unsplash 图像搜索功能
- 添加了下载图像格式选择（PNG/JPEG/SVG/Blob），并支持 JPEG 图像质量调整
- 优化了图像下载速度
- 优化 Devicons 以多色 SVG 图标显示
- 添加了更多字体和平台支持
- 统一了不同主题下下载图像的尺寸
- 等等...

## ⚡ 特性

- 🚀 超快速且易于使用
- 🌈 7 种不同主题，多种字体
- 🌠 100&#43; 开发图标，并提供上传自定义图标选项
- ✨ 15&#43; 种不同背景图案
- 💾 基于博客平台或常用尺寸的封面大小
  - [Hashnode](https://hashnode.com/)
  - [Dev.to](https://dev.to/)
  - [Hugo FixIt](https://github.com/hugo-fixit/FixIt)
  - [稀土掘金](https://juejin.cn/)

## 👩‍💻 开发

&gt; 此项目是使用 [Create React App](https://github.com/facebook/create-react-app) 启动的。

1. 下载项目并安装依赖：

    ```shell
    git clone https://github.com/Lruihao/CoverView.git
    cd CoverView/
    npm install
    ```

2. 从 [Unsplash API](https://unsplash.com/developers) 获取访问密钥。
3. 在 `.env` 文件中添加 `REACT_APP_UNSPLASH_ACCESS_KEY` 环境变量。

    ```shell
    # https://unsplash.com/ Access Key
    REACT_APP_UNSPLASH_ACCESS_KEY=&#34;your_access_key_here&#34;
    ```

4. 运行以下命令开始项目：

    ```shell
    npm start
    ```

## 👇 贡献

欢迎提交拉取请求。对于重大更改，请先打开一个问题来讨论你想要更改的内容。

1. 克隆它 (&lt;https://github.com/Lruihao/CoverView/fork&gt;)
2. 创建你的功能分支 (`git checkout -b feature/fooBar`)
3. 提交你的更改 (`git commit -am &#39;Add some fooBar&#39;`)
4. 推送到分支 (`git push origin feature/fooBar`)
5. 创建一个新的拉取请求

## 🙏 致谢

- [Rutik Wankhade](https://github.com/rutikwankhade)（原始 CoverView）
- [dom-to-image-more](https://github.com/1904labs/dom-to-image-more)
- [Hero Patterns](https://www.heropatterns.com/)
- [Devicons](https://github.com/devicons/devicon)
- [Font Virgil](https://github.com/excalidraw/virgil)
- [Font MMT](https://github.com/Lruihao/MMT)

如果你觉得这个项目有用，请别忘了留下一个 ⭐。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/coverview/  

