# 基于 Laravel 7 开发，支持 Markdown 语法的博客

<h1 align="center" >Cell Blog</h1>

> 基于Laravel7开发，Markdown语法的个人独立博客。

## 功能
- 支持Markdown,文章实时预览效果
- 支持多种编程语言代码高亮
- 编辑器图片上传
- 后台上传文件管理
- 文章搜索
- 文章分类
- 文章标签
- 热门文章
- 随机格言
- 文章管理(发布，评论开关，排序)
- 自定义导航(显示开关，排序)
- 自定义页面(发布开关)
- 友情链接(显示开关，排序)
- [COS桶相册](https://github.com/Lruihao/cos-album)
- 丰富的博客配置(方便扩展，支持自定义JS脚本)
- 不蒜子计数
- Leancloud计数
- Valine评论插件
- 文章分享插件


## 截图
![前台首页.png](https://i.loli.net/2020/05/11/vHeNRG4Qi7ljrM8.png)  
![管理文章.png](https://i.loli.net/2020/05/11/tMEQe7WvYmw3jd4.png)  
![编辑文章.png](https://i.loli.net/2020/05/11/DeOWyJ3zluLKvBn.png)  

## 安装
> 注意事项：PHP取消禁用函数`putenv()`和`symlink()`，安装`fileinfo`扩展。

下载
```
git clone https://github.com/Lruihao/cell-blog.git
```

进入站点
```
cd cell-blog
```

生成.env
```shell
cp .env.example .env
```

编辑.env环境配置
```shell
APP_URL=http://localhost ##使用本地文件系统存储文件时，必须填写正确地址
APP_DEBUG=false ##关闭调试
DB_HOST= ##数据库地址
DB_PORT=3306 ##数据库端口
DB_DATABASE= ##数据库名称
DB_USERNAME= ##数据库用户
DB_PASSWORD= ##数据库密码
```

打开`app\Providers\AppServiceProvider.php`,注释`SystemController:load()` 防止后续步骤报错
```
    public function boot()
    {
        Schema::defaultStringLength(191);
        //SystemController::load();
    }
```

安装项目依赖
```shell
composer install
```

生成key
```
php artisan key:generate
```

运行数据迁移和后台数据填充

> `php artisan admin:install`已包含数据迁移命令`php artisan migrate`  
`G:\cell-blog\app\Admin directory already exists !`无需理会，继续执行剩下命令即可。

```
php artisan admin:install

php artisan admin:import media-manager

php artisan db:seed
```

默认下使用了本地文件系统，创建storage目录在public的软链接
```
php artisan storage:link
```

打开`app\Providers\AppServiceProvider.php`,取消注释`SystemController:load()`
```
    public function boot()
    {
        Schema::defaultStringLength(191);
        SystemController::load();
    }
```

将博客网站根目录指向入口public目录

如果使用Nginx，要设置伪静态
```
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

启动服务后，在浏览器打开`http://localhost/admin/`,使用用户名`admin`和密码`admin`登录.

## License
Cell Blog is open-sourced software licensed under the MIT license.

![Stargazers over time](https://starchart.cc/Lruihao/cell-blog.svg)

---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/cell-blog/  

