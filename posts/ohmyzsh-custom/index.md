# 自定义 ohmyzsh 主题


ohmyzsh 自带了很多主题，也有很多没有收录的扩展主题，我就想要个简约的主题，但是每个都差点意思，干脆改一个主题。

&lt;!--more--&gt;

## 自定义主题

复制默认主题，当作模板：

```bash
cd ~/.oh-my-zsh
cat themes/robbyrussell.zsh-theme &gt; custom/custom.zsh-theme
vim custom/custom.zsh-theme
```

然后修改里面的内容：

```bash
if [[ -z $ZSH_THEME_CUSTOM_PREFIX ]]; then
  ZSH_THEME_CUSTOM_PREFIX=&#34;&gt;&#34;
fi

PROMPT=&#34;%(?:%{$fg_bold[blue]%}$ZSH_THEME_CUSTOM_PREFIX:%{$fg_bold[red]%}$ZSH_THEME_CUSTOM_PREFIX)&#34;
PROMPT&#43;=&#39; %{$fg[blue]%}%c%{$reset_color%} $(git_prompt_info)&#39;

ZSH_THEME_GIT_PROMPT_PREFIX=&#34;%{$fg_bold[green]%}git:(%{$fg[magenta]%}&#34;
ZSH_THEME_GIT_PROMPT_SUFFIX=&#34;%{$reset_color%} &#34;
ZSH_THEME_GIT_PROMPT_DIRTY=&#34;%{$fg[green]%}) %{$fg[yellow]%}✗&#34;
ZSH_THEME_GIT_PROMPT_CLEAN=&#34;%{$fg[green]%})&#34;
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

