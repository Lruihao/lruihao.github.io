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

## 检查现有 SSH 密钥

1. 打开终端。

2. 输入 `ls -al ~/.ssh` 以查看是否存在现有的 SSH 密钥。

   ```shell
   # Lists the files in your .ssh directory, if they exist
   ls -al ~/.ssh
   ```

3. 检查目录列表以查看是否已经有 SSH 公钥。默认情况下，GitHub 的一个支持的公钥的文件名是以下之一。

   - id_rsa.pub
   - id_ecdsa.pub
   - id_ed25519.pub

## 生成新的 SSH 密钥

{{< admonition >}}
注意：GitHub 通过在 2022 年 3 月 15 日删除旧的、不安全的密钥类型来提高安全性。

自该日期起，不再支持 DSA 密钥 (`ssh-dss`)。无法在 GitHub.com 上向个人帐户添加新的 DSA 密钥。

2021 年 11 月 2 日之前带有 `valid_after` 的 RSA 密钥 (`ssh-rsa`) 可以继续使用任何签名算法。在该日期之后生成的 RSA 密钥必须使用 SHA-2 签名算法。一些较旧的客户端可能需要升级才能使用 SHA-2 签名。
{{< /admonition >}}

1. 打开终端。

2. 粘贴下面的文本（替换为你的 GitHub 电子邮件地址）。

   ```shell
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

   注意：如果你使用的是不支持 Ed25519 算法的旧系统，请使用以下命令：

   ```shell
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   这将以提供的电子邮件地址为标签创建新 SSH 密钥。

   ```shell
   > Generating public/private ALGORITHM key pair.
   ```

   当系统提示你“Enter a file in which to save the key（输入要保存密钥的文件）”时，可以按 Enter 键接受默认文件位置。请注意，如果以前创建了 SSH 密钥，则 ssh-keygen 可能会要求重写另一个密钥，在这种情况下，我们建议创建自定义命名的 SSH 密钥。为此，请键入默认文件位置，并将 id_ssh_keyname 替换为自定义密钥名称。

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM): [Press enter]
   ```

3. 在提示符下，键入安全密码。有关详细信息，请参阅“[使用 SSH 密钥密码](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)”。

   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

更多请查看 [生成新的 SSH 密钥](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)。

## 新增 SSH 密钥到 GitHub 帐户

注意：添加 SSH 密钥的类型选择 `Signing Key`，细节略，详见 [将 SSH 签名密钥添加到 GitHub 帐户](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)。

## 将 SSH 密钥告知 Git

1. 打开终端。
2. 配置 Git 使用 SSH 对提交和标记签名：

   ```bash
   git config --global gpg.format ssh
   ```

3. 若要在 Git 中设置 SSH 签名密钥，请粘贴下面的文本，将 `/PATH/TO/KEY.PUB` 替换为要使用的公钥路径（例如：`~/.ssh/id_ed25519.pub`）。

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

