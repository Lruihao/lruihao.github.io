# Hexo D 出错


搭建这个博客以来，隔一段时间就出现一次部署失败的错误，每次都差不多，莫名其妙地出现的。前几次不知道怎么瞎搞就好了。  
现在做一下记录，防止以后出错用。  
错误如下

&lt;!--more--&gt;

```bash
Connection reset by 13.229.188.59 port 22
fatal: sha1 file &#39;&lt;stdout&gt;&#39; write error: Broken pipe
fatal: The remote end hung up unexpectedly
FATAL Something&#39;s wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Error: Connection reset by 13.229.188.59 port 22
fatal: sha1 file &#39;&lt;stdout&gt;&#39; write error: Broken pipe
fatal: The remote end hung up unexpectedly

at ChildProcess.&lt;anonymous&gt; (H:\Hexo\node_modules\hexo-util\lib\spawn.js:37:17)
    at emitTwo (events.js:106:13)
    at ChildProcess.emit (events.js:191:7)
    at ChildProcess.cp.emit (H:\Hexo\node_modules\cross-spawn\lib\enoent.js:40:29)
    at maybeClose (internal/child_process.js:850:16)
    at Socket.&lt;anonymous&gt; (internal/child_process.js:323:11)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at Pipe._handle.close [as _onclose] (net.js:492:12)

...
```

确保 ssh 正常，hexo-deploy-git 插件正常的情况下删除。deploy_git 文件夹就好了。
最后吐槽一下，这个鬼错误，搞我一晚上醉了。我又打算重装了的。/吐血


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/hexo-d-error/  

