# SSH 提交签名验证


Git 支持使用 GPG 来签名提交记录。但 GPG 用起来很复杂，一直赖得搞。Git 从 2.34 开始支持使用 SSH 签名，所以本文将介绍如何使用 SSH 对提交进行签名。

<!--more-->

## 操作步骤

可以使用 SSH 通过自己生成的 SSH 密钥对提交进行签名。有关详细信息，请查看 `user.Signingkey` 的 [Git 参考文档](https://git-scm.com/docs/git-config#Documentation/git-config.txt-usersigningKey)。如果已使用 SSH 密钥向 GitHub 进行了身份验证，还可以再次上传该相同密钥以用作签名密钥。可以添加到帐户的签名密钥数没有限制。

GitHub 使用 [ssh_data](https://github.com/github/ssh_data)（一种开放源代码 Ruby 库）来确认本地签名的提交和标记是否根据在 GitHub.com 上添加到帐户的公钥进行加密验证。

> 注意：SSH 签名验证可用于 Git 2.34 或更高版本。若要更新 Git 版本，请参阅 [Git](https://git-scm.com/downloads) 网站。

要使用 SSH 对提交签名并在 GitHub 上验证这些提交，请执行以下步骤：

1. [检查现有 SSH 密钥](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)
2. [生成新的 SSH 密钥](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
3. [将 SSH 签名密钥添加到 GitHub 帐户](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
4. [将你的签名密钥告诉 Git](https://docs.github.com/zh/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
5. [对提交签名](https://docs.github.com/zh/authentication/managing-commit-signature-verification/signing-commits)
6. [对标记签名](https://docs.github.com/zh/authentication/managing-commit-signature-verification/signing-tags)

前三步比较简单，相信在大家初次使用 GitHub 时就已经完成了，本文主要记录一下后三步的内容。

## 将 SSH 密钥告知 Git

1. 打开终端。
2. 配置 Git 使用 SSH 对提交和标记签名：

   ```bash
   git config --global gpg.format ssh
   ```

3. 若要在 Git 中设置 SSH 签名密钥，请粘贴下面的文本，将 `/PATH/TO/KEY.PUB` 替换为要使用的公钥路径（例如：`~/.ssh/id_rsa.pub`）。

   ```bash
   git config --global user.signingkey /PATH/TO/.SSH/KEY.PUB
   ```

## 对提交签名

当本地分支中的提交更改时，可以将 `-S` 添加到 `git commit` 命令：

```bash
# Creates a signed commit
git commit -S -m "YOUR_COMMIT_MESSAGE"
```

若要将 Git 客户端配置为默认对本地存储库的提交进行签名，请在 Git 版本 2.0.0 及更高版本中，运行：

```bash
git config commit.gpgsign true
```

要在计算机上的任何本地存储库中默认对所有提交进行签名，请运行：

```bash
git config --global commit.gpgsign true
```

在本地完成创建提交后，将其推送到 GitHub 上的远程仓库，在 GitHub 上查看提交记录就能看到 `Verified` 的标志了。

## 对标记签名

1. 若要对标记进行签名，请将 `-s` 添加到 `git tag` 命令。

   ```bash
   # Creates a signed tag
   git tag -s MYTAG
   ```

2. 通过运行 `git tag -v [tag-name]` 验证已签名的标记。

   ```bash
   # Verifies the signed tag
   git tag -v MYTAG
   ```

或者，可以将 `gpgsign` 设置为 `true`，以便在创建标记时自动对其进行签名：

```bash
git config tag.gpgsign true
# 或者
git config --global tag.gpgsign true
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/ssh-sign/  

