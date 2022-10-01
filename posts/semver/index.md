# 语义版本控制（SemVer）


{{< admonition tip "摘要" >}}
版本格式：`MAJOR.MINOR.PATCH`，版本号递增规则如下：

1. `MAJOR`: **主版本号**，当你做了不兼容的 API 修改
1. `MINOR`: **次版本号**，当你做了向下兼容的功能性新增
1. `PATCH`: **修订号**，当你做了向下兼容的问题修正

先行版本号及版本编译信息可以加到 `MAJOR.MINOR.PATCH` 的后面，作为延伸。
{{< /admonition >}}

<!--more-->

## 格式

基本的语法格式如下，更多请参考 [Backus–Naur Form Grammar for Valid SemVer Versions](https://semver.org/#backusnaur-form-grammar-for-valid-semver-versions)

```
<valid semver> ::= <version core>
                 | <version core> "-" <pre-release>
                 | <version core> "+" <build>
                 | <version core> "-" <pre-release> "+" <build>
```

范例：

![version-number](images/version-number.png)

| 代码状态             | 等级         | 规则                                           | 版本样例 |
| -------------------- | ------------ | ---------------------------------------------- | -------- |
| 首次发布             | 新品发布     | 以 1.0.0 开始                                    | 1.0.0    |
| bug 修复，向后兼容    | 补丁版本发布 | 变更第三位数字                                 | 1.0.1    |
| 新功能，向后兼容     | 次版本发布   | 变更第二位数字，并且第三位数字重置为 0         | 1.1.0    |
| 重大变更，不向后兼容 | 主版本发布   | 变更第一位数字，并且第二位，第三位数字重置为 0 | 2.0.0    |

{{< admonition question "“v1.2.3” 是一个语义化版本号吗？" >}}
“v1.2.3” 并不是的一个语义化的版本号。  
但是，在语义化版本号之前增加前缀 “v” 是用来表示版本号的常用做法。  
在版本控制系统中，将 “version” 缩写为 “v” 是很常见的。  
比如：`git tag v1.2.3 -m "Release version 1.2.3"` 中，标签是 “v1.2.3”，语义化版本号是 “1.2.3”。
{{< /admonition >}}

## 规范

以下关键词 MUST、MUST NOT、REQUIRED、SHALL、SHALL NOT、SHOULD、SHOULD NOT、 RECOMMENDED、MAY、OPTIONAL 依照 [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) 的叙述解读。

{{< details "语义化版本控制规范（SemVer）" >}}

1. 使用语义化版本控制的软件必须（MUST）定义公共 API。该 API 可以在代码中被定义或出现于严谨的文档内。无论何种形式都应该力求精确且完整。

2. 标准的版本号必须（MUST）采用 X.Y.Z 的格式，其中 X、Y 和 Z 为非负的整数，且禁止（MUST NOT）在数字前方补零。X 是主版本号、Y 是次版本号、而 Z 为修订号。每个元素必须（MUST）以数值来递增。例如：1.9.1 -> 1.10.0 -> 1.11.0。

3. 标记版本号的软件发行后，禁止（MUST NOT）改变该版本软件的内容。任何修改都必须（MUST）以新版本发行。

4. 主版本号为零（0.y.z）的软件处于开发初始阶段，一切都可能随时被改变。这样的公共 API 不应该被视为稳定版。

5. 1.0.0 的版本号用于界定公共 API 的形成。这一版本之后所有的版本号更新都基于公共 API 及其修改内容。

6. 修订号 Z（x.y.Z | x > 0）必须（MUST）在只做了向下兼容的修正时才递增。这里的修正指的是针对不正确结果而进行的内部修改。

7. 次版本号 Y（x.Y.z | x > 0）必须（MUST）在有向下兼容的新功能出现时递增。在任何公共 API 的功能被标记为弃用（deprecated）时也必须（MUST）递增。也可以（MAY）在内部程序有大量新功能或改进被加入时递增，其中可以（MAY）包括修订级别的改变。每当次版本号递增时，修订号必须（MUST）归零。

8. 主版本号 X（X.y.z | X > 0）必须（MUST）在有任何不兼容的修改被加入公共 API 时递增。其中可以（MAY）包括次版本号及修订级别的改变。每当主版本号递增时，次版本号和修订号必须（MUST）归零。

9. 先行版本号可以（MAY）被标注在修订版之后，先加上一个连接号再加上一连串以句点分隔的标识符来修饰。标识符必须（MUST）由 ASCII 字母数字和连接号 [0-9A-Za-z-] 组成，且禁止（MUST NOT）留白。数字型的标识符禁止（MUST NOT）在前方补零。先行版的优先级低于相关联的标准版本。被标上先行版本号则表示这个版本并非稳定而且可能无法满足预期的兼容性需求。范例：1.0.0-alpha、1.0.0-alpha.1、1.0.0-0.3.7、1.0.0-x.7.z.92。

10. 版本编译信息可以（MAY）被标注在修订版或先行版本号之后，先加上一个加号再加上一连串以句点分隔的标识符来修饰。标识符必须（MUST）由 ASCII 字母数字和连接号 [0-9A-Za-z-] 组成，且禁止（MUST NOT）留白。当判断版本的优先层级时，版本编译信息可（SHOULD）被忽略。因此当两个版本只有在版本编译信息有差别时，属于相同的优先层级。范例：1.0.0-alpha+001、1.0.0+20130313144700、1.0.0-beta+exp.sha.5114f85。

11. 版本的优先层级指的是不同版本在排序时如何比较。

    1. 判断优先层级时，必须（MUST）把版本依序拆分为主版本号、次版本号、修订号及先行版本号后进行比较（版本编译信息不在这份比较的列表中）。

    2. 由左到右依序比较每个标识符，第一个差异值用来决定优先层级：主版本号、次版本号及修订号以数值比较。

       例如：1.0.0 < 2.0.0 < 2.1.0 < 2.1.1。

    3. 当主版本号、次版本号及修订号都相同时，改以优先层级比较低的先行版本号决定。

       例如：1.0.0-alpha < 1.0.0。

    4. 有相同主版本号、次版本号及修订号的两个先行版本号，其优先层级必须（MUST）透过由左到右的每个被句点分隔的标识符来比较，直到找到一个差异值后决定：

       1. 只有数字的标识符以数值高低比较。
       2. 有字母或连接号时则逐字以 ASCII 的排序来比较。
       3. 数字的标识符比非数字的标识符优先层级低。
       4. 若开头的标识符都相同时，栏位比较多的先行版本号优先层级比较高。

       例如：1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0

{{< /details >}}

## 版本阶段

- `Base`: 设计阶段，只有相应的设计没有具体的功能实现
- `Alpha`: 软件的初级版本，基本功能已经实现，但存在较多的 bug
- `Bate`: 相对于 Alpha 已经有了很大的进步，消除了严重的 BUG，但还存在一些潜在的 BUG，还需要不断测试
- `RC`: 该版本已经相当成熟了，基本上不存在导致错误的 Bug，与即将发行的正式版本相差无几
- `RELEASE`: 最终发布版本，没有太大的问题

最终发布版本（`RELEASE`）之前的所有版本，都称为先行版本（`pre-release`）。

## [FAQ](https://semver.org/lang/zh-CN/#faq)

## 其他相关

### npm SemVer

通常我们发布一个包到 npm 仓库时，我们的做法是先修改 `package.json` 为某个版本，然后执行 `npm publish` 命令。手动修改版本号的做法建立在你对 SemVer 规范特别熟悉的基础之上，否则可能会造成版本混乱。npm 和 yarn 两个包管理都提供了 SemVer 规范的版本控制命令：

- [npm-version](https://docs.npmjs.com/cli/v8/commands/npm-version)
- [yarn version](https://classic.yarnpkg.com/en/docs/cli/version)

npm 发包基础命令：

```bash
# 1. 创建一个新的包
npm init
# 2. 查看是否官方源
npm config get registry 
# 3. 登录
npm login
# 4. 发布
npm publish

# 版本变化 major.minor.patch
npm version patch # 升级补丁版本 
npm version minor # 升级小版号
npm version major # 升级大版号

# 下架 [-force]
npm unpublish
```

全局设置版本号前缀

```bash
# https://docs.npmjs.com/cli/v8/using-npm/config#tag-version-prefix
npm config set tag-version-prefix ""
# 全局设置版本更新 commit 提交信息
# https://docs.npmjs.com/cli/v8/using-npm/config#message
npm config set message "Chore(release): %s"
```

或者设置项目的 `.npmrc` 或者 `.yarnrc`

```bash
# .npmrc
tag-version-prefix=""
message="Chore(release): %s"

# .yarnrc
version-tag-prefix ""
version-git-message "Chore(release): %s"
```

package.json 版本控制规则使用了一些些符号：

- `^`
- `~`
- `>`
- `>=`
- `<`
- `<=`
- `=`
- `-`
- `||`

这些规则的详情如下：

- `^`: 只会执行不更改最左边非零数字的更新。 如果写入的是 `^0.13.0`，则当运行 `npm update` 时，可以更新到 `0.13.1`、`0.13.2` 等，但不能更新到 `0.14.0` 或更高版本。 如果写入的是 `^1.13.0`，则当运行 `npm update` 时，可以更新到 `1.13.1`、`1.14.0` 等，但不能更新到 `2.0.0` 或更高版本。
- `~`: 如果写入的是 `〜0.13.0`，则当运行 `npm update` 时，会更新到补丁版本：即 `0.13.1` 可以，但 `0.14.0` 不可以。
- `>`: 接受高于指定版本的任何版本。
- `>=`: 接受等于或高于指定版本的任何版本。
- `<=`: 接受等于或低于指定版本的任何版本。
- `<`: 接受低于指定版本的任何版本。
- `=`: 接受确切的版本。
- `-`: 接受一定范围的版本。例如：`2.1.0 - 2.6.2`。
- `||`: 组合集合。例如 `< 2.1 || > 2.6`。

可以合并其中的一些符号，例如 `1.0.0 || >=1.1.0 <1.2.0`，即使用 1.0.0 或从 1.1.0 开始但低于 1.2.0 的版本。

还有其他的规则：

- 无符号：仅接受指定的特定版本（例如 `1.2.1`）。
- `latest`: 使用可用的最新版本。

### 版本保留

1. 对于大型软件，每个版本都有使用价值时，应保留所有历史版本
2. 对于始终以最新版本为准的软件，则可保留至少最近的 10 个次版本

## 参考

- [Semantic Versioning 2.0.0](https://semver.org/)
- [使用 npm 的语义版本控制](http://nodejs.cn/learn/semantic-versioning-using-npm)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/semver/  

