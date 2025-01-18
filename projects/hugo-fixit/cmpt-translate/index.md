# 🌐 A component for site automatic translation.

&lt;!-- markdownlint-disable-file MD033 MD041 --&gt;
&lt;h1 align=&#34;center&#34;&gt;Auto Translate | FixIt&lt;/h1&gt;

![auto-translate](https://github.com/user-attachments/assets/10ab49bb-973f-4630-9a79-9639783bab06)

&lt;div align=&#34;center&#34; class=&#34;ignore&#34;&gt;
  &lt;p&gt;一个基于 &lt;a href=&#34;https://github.com/xnx3/translate&#34;&gt;translate.js&lt;/a&gt; 实现网站自动翻译的组件。&lt;/p&gt;
  简体中文 |
  &lt;a href=&#34;https://fixit.lruihao.cn/zh-cn/ecosystem/hugo-fixit/cmpt-translate/?lang=chinese_traditional&#34;&gt;繁體中文&lt;/a&gt; |
  &lt;a href=&#34;https://raw.githubusercontent.com/hugo-fixit/cmpt-translate/refs/heads/main/README.en.md&#34;&gt;English&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-translate/?lang=french&#34;&gt;Français&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-translate/?lang=russian&#34;&gt;Русский язык&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-translate/?lang=spanish&#34;&gt;Español&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-translate/?lang=hindi&#34;&gt;हिन्दी&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-translate/?lang=german&#34;&gt;deutsch&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-translate/?lang=korean&#34;&gt;한국어&lt;/a&gt; |
  &lt;a href=&#34;https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-translate/?lang=japanese&#34;&gt;しろうと&lt;/a&gt;
&lt;/div&gt;

## Demo

无论原站点是多语言还是单语言，都可以通过此组件额外增加自动翻译功能。

- 多语言 Hugo 站点：[fixit.lruihao.cn](https://fixit.lruihao.cn)
- 单语言 Hugo 站点：[lruihao.cn](https://lruihao.cn)

在网站右上角切换配置的翻译语言，或者在 URL 中添加 `?lang=` 参数指定任意[支持的翻译语言](https://api.translate.zvo.cn/language.json)。例如：`?lang=korean`。

## 特性

&gt; 每日翻译字符 **200 万**！\
&gt; _无语言配置文件、无 API Key、对 SEO 友好！_

- [x] 支持整页自动翻译
- [x] 支持指定翻译语言
- [x] 支持可选翻译服务
- [x] 支持忽略翻译元素
- [x] 支持忽略选择器
- [x] 支持忽略关键词翻译
- [x] 支持检测本地语言
- [x] 支持自定义翻译术语
- [x] 支持 CDN
- [x] 支持[企业级翻译通道](#enterprise) *

## 要求

- Hugo v0.139.0 或更高版本。
- FixIt v0.3.16 或更高版本。

## 安装组件

安装方式与 [安装主题](https://fixit.lruihao.cn/zh-cn/documentation/installation/) 相同，有多种安装方式，任选一种即可，这里介绍两种主流方式。

### 作为 Hugo 模块安装

首先确保你的项目本身是一个 [Hugo 模块](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module)。

然后将此主题组件添加到你的 `hugo.toml` 配置文件中：

```toml
[module]
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/FixIt&#34;
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/cmpt-translate&#34;
```

在 Hugo 的第一次启动时，它将下载所需的文件。

要更新到模块的最新版本，请运行：

```bash
hugo mod get -u
hugo mod tidy
```

### 作为 Git 子模块安装

将 [FixIt](https://github.com/hugo-fixit) 和此 git 存储库克隆到你的主题文件夹中，并将其作为网站目录的子模块添加。

```bash
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
git submodule add https://github.com/hugo-fixit/cmpt-translate.git themes/cmpt-translate
```

接下来编辑项目的 `hugo.toml` 并将此主题组件添加到你的主题中：

```toml
theme = [&#34;FixIt&#34;, &#34;cmpt-translate&#34;]
```

## 配置

为了通过 FixIt 主题在 `layouts/partials/custom.html` 文件中开放的 [自定义块](https://fixit.lruihao.cn/references/blocks/) 将 `cmpt-translate.html` 注入到 `custom-assets` 中，你需要填写以下必要配置：

```toml
[params]
  [params.customPartials]
    head = []
    menuDesktop = [
      &#34;inject/translate-menu-desktop.html&#34;,
    ]
    menuMobile = [
      &#34;inject/translate-menu-mobile.html&#34;,
    ]
    profile = []
    aside = []
    comment = []
    footer = []
    widgets = []
    assets = [
      &#34;inject/cmpt-translate.html&#34;,
    ]
    postFooterBefore = []
    postFooterAfter = []
```

另外，你还可以通过以下配置来自定义翻译的语言：

```toml
[languages]
  [languages.zh-cn]
    languageCode = &#34;zh-CN&#34;
    languageName = &#34;简体中文&#34;

[params]
  [params.autoTranslate]
    enable = true
    service = &#39;client.edge&#39;
    languages = []
    ignoreID = []
    ignoreClass = []
    ignoreTag = []
    detectLocalLanguage = false
    cdn = &#34;&#34;
    enterprise = false
```

- `enable`：是否启用自动翻译。
- `service`：翻译服务提供商，可选值为 `client.edge` 和 `translate.service`，详见：[翻译服务提供商](https://translate.zvo.cn/43086.html)。
- `languages`：要翻译到的语言 ID 列表，例如 `[&#34;english&#34;, &#34;chinese_simplified&#34;, &#34;chinese_traditional&#34;, ...]`，详见：[完整语言列表](https://api.translate.zvo.cn/language.json)。
- `ignoreID`：需要忽略翻译的元素 ID，例如 `[&#34;comment&#34;, ...]`。
- `ignoreClass`：需要忽略翻译的类名，例如 `[&#34;post-category&#34;, ...]`。
- `ignoreTag`：需要忽略翻译的标签，例如 `[&#34;title&#34;, ...]`。
- `ignoreText`：需要忽略翻译的文本，例如 `[&#34;FixIt&#34;, &#34;Lruihao&#34;, ...]`。
- `detectLocalLanguage`：是否检测本地语言。
- `cdn`：translate.js 的 CDN，例如 `https://cdn.jsdelivr.net/npm/i18n-jsautotranslate@latest`。
- `enterprise`：是否启用[企业级翻译通道](#enterprise)。

&gt; [!NOTE]
&gt; 为了避免翻译语言获取失败，即使你的站点本身是单语言的，也需要配置 `languageCode` 和 `languageName`，例如：
&gt;
&gt; ```toml
&gt; [languages]
&gt;   [languages.zh-cn]
&gt;     languageCode = &#34;zh-CN&#34;
&gt;     languageName = &#34;简体中文&#34;
&gt; ```

## Front Matter

```yaml
autoTranslate:
  local: &#39;&#39;
  fromLanguages: []
  onlyLocalLang: false
```

- `local`: `String` 用于指定当前页面的本地语言，例如 `local: english`。

    默认本地语言同 Hugo 站点配置相同，如果某个页面实际语言与站点配置不同，可以通过 `local` 参数指定。

- `fromLanguages`: `Array` 类型，用于指定当前页面内容中出现的语种是否需要翻译。

    例如：网页本身是中文，但是内容中还有其他语言，你可以指定需要翻译的语种，例如：

    ```yaml
    fromLanguages:
      - chinese_simplified
      - chinese_traditional
    ```

- `onlyLocalLang`: `Boolean` 类型，用于指定是否只翻译当前页面本地语言，默认为 `false`。

    例如：网页本身是中文，但是内容中其他语言的摘要引用，设置 `onlyLocalLang: true` 可以只翻译中文。

## 自定义翻译术语

在你的项目目录 `data` 文件夹下创建 `nomenclature.yml` 文件，然后添加自定义翻译术语，例如：

```yaml
- from: english
  to: chinese_simplified
  properties:
    Hello: 你好
    World: 世界
- from: english
  to: french
  properties:
    Hello: Bonjour
    World: Monde
```

&lt;!-- markdownlint-disable-next-line MD033 --&gt;
## 企业级翻译通道 &lt;a id=&#34;enterprise&#34;&gt;&lt;/a&gt;

&gt; 企业级稳定翻译通道，仅针对**付费用户**开放。\
&gt; **体验额度**：每天有 5 万字符的体验额度，超出部分将不再翻译！

在 FixIt 里启用企业级翻译通道，设置 `params.autoTranslate.enterprise` 为 `true` 即可，[企业级翻译通道](https://translate.zvo.cn/4087.html)相对于普通翻译通道有以下优势：

| 服务           | 开源翻译通道      | 企业级翻译通道           |
| :------------- | :---------------- | :----------------------- |
| 服务端缓存层数 | 1 层 (文件式缓存) | 1 层 (内存 &#43; 文件式缓存) |
| 翻译响应速度   | 1.5~5 秒          | 0.8~1.5 秒               |
| 翻译服务器     | 1 台              | &gt;=3 台                   |
| 网络节点       | 2 个              | &gt;=4 个                   |
| 翻译通道       | 手动设置          | 自动匹配最优             |
| 国内缓存节点   | 无                | 有                       |
| 每日翻译字符   | 200 万            | 5000 万                  |

### 赞助费用

考虑到 FixIt 生态受众群体大多为个人用户，因此我（[@Lruihao](https://github.com/Lruihao)）以**个人名义**拿出赞助收入进行补贴。

&gt; [!TIP]
&gt; **FixIt 项目补贴价**：**¥10** ~~_¥50_~~ / 域名 / 月\
&gt; _到期自动禁用，需要重新赞助续费！_

符合以下性质的可以免费联系我开通企业级翻译通道：

- [translate.js](https://github.com/xnx3/translate) 及相关生态产品的开发者
- [FixIt](https://github.com/hugo-fixit/FixIt) 及相关生态产品的开发者

另外，[Hugo FixIt 星球](https://wx.zsxq.com/group/88888281181442?group_id=88888281181442&amp;coupon_code=ks2qf5zd&amp;inviter_id=15442515242512&amp;inviter_sid=e15da0zzz4&amp;keyword=BQcpe&amp;type=group) 成员每人补贴赠送 **6 个月服务 / 年**。

### 赞助方式

- [微信支付](https://lruihao.cn/images/wechatpay.jpg)
- [支付宝](https://lruihao.cn/images/alipay.jpg)

选择赞助金额，然后在留言中备注 `AutoTranslate: 你的域名` 即可。

通过以下方式联系作者：

- 邮箱：`1024#lruihao.cn` (将 `#` 替换为 `@`)
- 微信：[关注公众号回复“Cell”获取作者微信](https://lruihao.cn/images/qr-wx-mp_s.webp)

## 致谢

[translate.js](https://github.com/xnx3/translate) 提供技术支持和赞助[企业级翻译通道](https://translate.zvo.cn/4087.html)。


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/cmpt-translate/  

