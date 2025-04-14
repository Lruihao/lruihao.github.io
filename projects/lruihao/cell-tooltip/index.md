# 基于 Bootstrap 5 + Font Awesome 6 的消息提示插件

# Cell Tooltip

基于 Bootstrap 5 + Font Awesome 6 的消息提示插件 (Base on [Bootstrap#Alerts](https://getbootstrap.com/docs/5.2/components/alerts/))

## [Documentation](https://raw.githubusercontent.com/Lruihao/cell-tooltip/refs/heads/main/docs/README.md)

文档更新命令：

```bash
npm run docs
```

## Usage

```js
this.tooltip = new CellTooltip({
  position: 'top-center',
  offset: document.querySelector('.container-header').offsetHeight
});

this.tooltip.show({
  type: 'info',
  content: 'hello world!'
});
/* Or */
this.tooltip.info({
  content: 'hello world!'
});
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/cell-tooltip/  

