# cell-blog 开发记录


&gt; Cell Blog 开发记录，[项目地址](https://github.com/Lruihao/cell-blog)

&lt;!--more--&gt;

## 搭建 php 环境

1. 安装 wampserver
2. 安装 composer
3. 更换 aliyun 源

```
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

## 新建 laravel 项目

```
composer create-project --prefer-dist laravel/laravel cell-blog &#34;7.*&#34;
```

或者

```
composer global require laravel/installer
laravel new blog
```

## 下载 debugbar

```
composer require barryvdh/laravel-debugbar --dev
```

## 修改语言时区

修改 config/app.php，将 local 的值 en 改成 zh-CN(laravel-admin 自带 zh-CN)：

```
## 时区
&#39;timezone&#39; =&gt; &#39;Asia/Shanghai&#39;,
## 语言
&#39;locale&#39; =&gt; &#39;zh-CN&#39;,
```

## 配置数据库

首先确保安装好了 laravel，并且数据库连接设置正确。

```
APP_URL=http://cell.blog

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3307
DB_DATABASE=cell_blog
DB_USERNAME=root
DB_PASSWORD=123456
```

## 下载 laravel-admin

```
cd cell-blog
composer require encore/laravel-admin
```

&gt; 卸载命令`composer remove xxx`

然后运行下面的命令来发布资源：

```
php artisan vendor:publish --provider=&#34;Encore\Admin\AdminServiceProvider&#34;
```

在该命令会生成配置文件`config/admin.php`，可以在里面修改安装的地址、数据库连接、以及表名，建议都是用默认配置不修改。

然后运行下面的命令完成安装：

```
php artisan admin:install
```

&gt; 运行这个命令的时候，如果遇到了下面的错误：
&gt; `SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 1000 bytes (SQL: alter tableusersadd uniqueusers_email_unique(email))`  
&gt; 参考这个 issue 来解决 &lt;https://github.com/z-song/laravel-admin/issues/1541&gt;  
&gt; 在`app\Providers\AppServiceProvider.php`添加默认值

```php
&lt;?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema; //add fixed sql

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191); //add fixed sql
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
```

启动服务后，在浏览器打开 `http://localhost/admin/` , 使用用户名 `admin` 和密码 `admin` 登录。

&gt; 报错`Disk [admin] not configured, please add a disk config in config/filesystems.php`

在`config/filesystems.php`中 disks 处添加以下配置后执行`php artisan storage:link`来创建软链接（windows 和 linux 的软链接不一样不能直接复制！）

&gt; 宝塔执行时删除禁用函数 putenv(),symlink()

```
&#39;admin&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;local&#39;,
    &#39;root&#39; =&gt; storage_path(&#39;app/public/system&#39;),
    &#39;url&#39; =&gt; env(&#39;APP_URL&#39;).&#39;/storage/system&#39;,
    &#39;visibility&#39; =&gt; &#39;public&#39;,
],

或

&#39;admin&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;local&#39;,
    &#39;root&#39; =&gt; public_path(&#39;uploads&#39;),
    &#39;url&#39; =&gt; env(&#39;APP_URL&#39;).&#39;/public/uploads/&#39;,
    &#39;visibility&#39; =&gt; &#39;public&#39;,
],
```

## 下载 dcat-admin

```
composer require dcat/laravel-admin
```

然后运行下面的命令来发布资源：

```
php artisan admin:publish
```

在该命令会生成配置文件`config/admin.php`，可以在里面修改安装的地址、数据库连接、以及表名，建议都是用默认配置不修改。

然后运行下面的命令完成安装：

```
php artisan admin:install
```

## 迁移文件创建表

```sh
php artisan make:migration create_articles_table
php artisan make:migration create_tags_table
php artisan make:migration create_categories_table
php artisan make:migration create_article_tags_table
php artisan make:migration create_navigations_table
php artisan make:migration create_friendship_links_table
php artisan make:migration create_pages_table
php artisan make:migration create_systems_table
php artisan make:migration create_mottoes_table
```

运行迁移

```
php artisan migrate
```

## 创建模型 model

```sh
php artisan make:model Models/Article
php artisan make:model Models/Category
php artisan make:model Models/Tag
php artisan make:model Models/Navigation
php artisan make:model Models/FriendshipLink
php artisan make:model Models/Page
php artisan make:model Models/System
php artisan make:model Models/Motto
```

## 创建控制器

```sh
php artisan admin:make ArticleController --model=App\Models\Article
php artisan admin:make CategoryController --model=App\Models\Category
php artisan admin:make TagController --model=App\Models\Tag
php artisan admin:make NavigationController --model=App\Models\Navigation
php artisan admin:make FriendshipLinkController --model=App\Models\FriendshipLink
php artisan admin:make PageController --model=App\Models\Page
php artisan admin:make SystemController --model=App\Models\System
php artisan admin:make MottoController --model=App\Models\Motto
```

## 添加后台路由

app/Admin/routes.php

```
$router-&gt;resource(&#39;articles&#39;, ArticleController::class);
$router-&gt;resource(&#39;categories&#39;, CategoryController::class);
$router-&gt;resource(&#39;tags&#39;, TagController::class);
$router-&gt;resource(&#39;navigations&#39;, NavigationController::class);
$router-&gt;resource(&#39;friendship-links&#39;, FriendshipLinkController::class);
$router-&gt;resource(&#39;pages&#39;, PageController::class);
$router-&gt;resource(&#39;systems&#39;, SystemController::class);
$router-&gt;resource(&#39;mottoes&#39;, MottoController::class);
```

## editormd 安装

[editormd](https://github.com/ShareManT/laravel-admin-ext-editormd)
[github 图像问题](https://github.com/ShareManT/laravel-admin-ext-editormd/issues/3)

### 存放本地表情

```
public\vendor\laravel-admin-ext\editormd\editormd-1.5.0\images\emojis
```

修改 editormd.js 及 editormd.min.js

```
// Emoji graphics files url path
editormd.emoji     = {
    path  : &#34;/iamges/emojis/&#34;,
    ext   : &#34;.png&#34;
};
```

### 图片上传

#### csrf 419 错误

可以在`VerifyCsrfToken.php`中添加白名单跳过验证，或者手动添加 csrf 验证器：

修改 image-dialog.js 的`var dialogContent`  
[参考](https://www.jianshu.com/p/8101f7bc80f6)

```
if (settings.crossDomainUpload)
{
    action &#43;= &#34;&amp;callback=&#34; &#43; settings.uploadCallbackURL &#43; &#34;&amp;dialog_id=editormd-image-dialog-&#34; &#43; guid;
}
//添加 csrf 验证
var csrfToken = $(&#39;meta[name=&#34;csrf-token&#34;]&#39;).attr(&#39;content&#39;);
var csrfField = &#34;&#34;;
if (csrfToken) {
    csrfField = &#34;&lt;input type=&#39;hidden&#39; name=&#39;_token&#39; value=&#39;&#34; &#43; csrfToken &#43; &#34;&#39; /&gt;&#34;;
}
```

## markdown 转 HTML

&lt;https://www.zhiqiexing.com/119.html&gt;
[Laravel Markdown 安装](https://github.com/GrahamCampbell/Laravel-Markdown)

```
composer require graham-campbell/markdown
php artisan vendor:publish
```

扩展表格

```
composer require league/commonmark
```

config/markdown.php

```
&#39;extensions&#39; =&gt; [
        League\CommonMark\Extension\TaskList\TaskListExtension::class,
    ],
```

## Eloquent 模型事件

Eloquent 模型可以触发事件，允许你在模型生命周期中的多个时间点调用如下这些方法：retrieved, creating, created, updating, updated, saving, saved, deleting, deleted, restoring, restored。事件允许你在一个指定模型类每次保存或更新的时候执行代码。

retrieved 事件会在从数据库中获取已存在模型时触发。当一个新模型被首次保存的时候，creating 和 created 事件会被触发。如果一个模型已经在数据库中存在并调用 save 方法，updating/updated 事件会被触发，无论是创建还是更新，saving/saved 事件都会被触发。

## 添加后台验证码

依赖 php 扩展`fileinfo`  
[添加验证码](https://learnku.com/articles/32842)

## Media manager

```
composer require laravel-admin-ext/media-manager
php artisan admin:import media-manager
```

&#39;extensions&#39; =&gt; [
&#39;media-manager&#39; =&gt; [
// Select a local disk that you configured in `config/filesystem.php`
&#39;disk&#39; =&gt; &#39;public&#39;
],
],

```

## 给 laravel-admin 增加锁屏功能
```

composer require laravel-admin-ext/lock-screen

```
&#39;route&#39; =&gt; [
    &#39;prefix&#39; =&gt; &#39;demo&#39;,

    &#39;namespace&#39;     =&gt; &#39;App\\Admin\\Controllers&#39;,

    // 在中间件数组中加上&#39;admin.lock&#39;
    &#39;middleware&#39;    =&gt; [&#39;web&#39;, &#39;admin&#39;, &#39;admin.lock&#39;],
],
```

## 前台设计

创建控制器

```
php artisan make:controller HomeController
php artisan make:controller ArticleController
php artisan make:controller CategoryController
php artisan make:controller TagController
php artisan make:controller PageController
```

## 后台 img 灯箱

&lt;https://github.com/laravel-admin-extensions/grid-lightbox&gt;

```
composer require laravel-admin-ext/grid-lightbox

php artisan vendor:publish --tag=laravel-admin-grid-lightbox
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/cell-blog-dev/  

