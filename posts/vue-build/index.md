# Vue.js History 模式下的 NGINX 配置与 API 代理


<!-- 本文由 Poe AI 提供 -->

在使用 Vue.js 开发前端应用时，开启 history 模式可以让你的路由更加友好。然而，在部署应用时，需要正确配置 NGINX，以支持前端路由和 API 请求。本文将详细介绍如何配置 NGINX，使其能够处理 Vue 应用的 history 模式，并设置 API 代理。

<!--more-->

## 前提条件

在开始之前，请确保你已经完成以下步骤：

- 安装并配置好 NGINX。
- 完成 Vue.js 应用的开发，并使用 `npm run build` 命令打包应用。

## NGINX 配置示例

以下是一个典型的 NGINX 配置示例：

```nginx
server {
    listen 80;  # 监听80端口
    server_name your_domain.com;  # 替换为你的域名

    location / {
        root /path/to/your/dist;  # 指向打包后的文件夹
        try_files $uri $uri/ /index.html;  # 尝试访问指定文件，如果找不到则重定向到index.html
    }

    # API 代理设置
    location /api/ {
        proxy_pass http://your_api_server;  # 替换为你的 API 服务器地址
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 配置说明

- **listen**: 指定 NGINX 监听的端口，通常是 80（HTTP）。
- **server_name**: 配置你的域名。
- **root**: 指向 Vue 应用的打包输出目录，通常是 `dist` 文件夹。
- **try_files**: 尝试访问请求的文件，如果不存在，则返回 `index.html`，以允许 Vue Router 处理前端路由。
- **location /api/**: 所有以 `/api/` 开头的请求会被代理到指定的 API 服务器。
- **proxy_pass**: 设置 API 请求转发到的后端服务器地址。

### 部署步骤

1. **打包 Vue 应用**：

   ```bash
   npm run build
   ```

2. **上传内容**：将 `dist` 文件夹的内容上传到服务器的指定路径。

3. **修改 NGINX 配置**：编辑 NGINX 配置文件，通常在 `/etc/nginx/sites-available/default` 或 `/etc/nginx/nginx.conf`。

4. **检查配置**：检查 NGINX 配置是否有语法错误：

   ```bash
   sudo nginx -t
   ```

5. **重新加载 NGINX**：

   ```bash
   sudo systemctl reload nginx
   ```

## 总结

通过上述配置，你的 Vue.js 应用将可以在 NGINX 上正常运行，并支持 history 模式的路由。同时，所有以 `/api/` 开头的请求将被有效地代理到后端服务器。这样，前端与后端的交互就更加流畅自然。

希望这篇文章能帮助你顺利部署 Vue 应用！如有任何问题，欢迎留言讨论。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/vue-build/  

