# 自定义 Ohmyzsh 主题


ohmyzsh 自带了很多主题，也有很多没有收录的扩展主题，我就想要个简约的主题，但是每个都差点意思，干脆改一个主题。

<!--more-->

## 自定义主题

复制默认主题，当作模板：

```bash
cd ~/.oh-my-zsh
cat themes/robbyrussell.zsh-theme > custom/custom.zsh-theme
vim custom/custom.zsh-theme
```

然后修改里面的内容：

```bash
if [[ -z $ZSH_THEME_CUSTOM_PREFIX ]]; then
  ZSH_THEME_CUSTOM_PREFIX=">"
fi

PROMPT="%(?:%{$fg_bold[blue]%}$ZSH_THEME_CUSTOM_PREFIX:%{$fg_bold[red]%}$ZSH_THEME_CUSTOM_PREFIX)"
PROMPT+=' %{$fg[blue]%}%c%{$reset_color%} $(git_prompt_info)'

ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg_bold[green]%}git:(%{$fg[magenta]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%} "
ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[green]%}) %{$fg[yellow]%}✗"
ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[green]%})"
```

## 配置

```bash
vim ~/.zshrc
```

```bash
ZSH_THEME=custom
```

然后重启终端即可。


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/ohmyzsh-custom/  

