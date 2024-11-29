# 基于 Bootstrap 5 &#43; Font Awesome 6 的消息提示插件

# Cell Tooltip

基于 Bootstrap 5 &#43; Font Awesome 6 的消息提示插件 (Base on [Bootstrap#Alerts](https://getbootstrap.com/docs/5.2/components/alerts/))

## [Documentation](https://raw.githubusercontent.com/Lruihao/cell-tooltip/refs/heads/main/docs/README.md)

文档更新命令：

```bash
npm run docs
```

## Usage

```js
this.tooltip = new CellTooltip({
  position: &#39;top-center&#39;,
  offset: document.querySelector(&#39;.container-header&#39;).offsetHeight
});

this.tooltip.show({
  type: &#39;info&#39;,
  content: &#39;hello world!&#39;
});
/* Or */
this.tooltip.info({
  content: &#39;hello world!&#39;
});
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/cell-tooltip/  

