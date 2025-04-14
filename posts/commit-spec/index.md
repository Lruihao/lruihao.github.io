# Commit Message Spec


<!-- markdownlint-disable MD033 -->

Commit messages are short descriptions of changes to a repository. We should follow certain standards to effectively describe changes, such as the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) specification based on the [Angular convention](https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commit) that is most used on GitHub, or each development team can simplify and formulate their own commit specification. This is not only conducive to the automatic generation of Changelog in the later stage, but more importantly, when a bug occurs, the entire warehouse can be quickly checked, the problem point can be accurately located, and the version can be reverted.

<!--more-->

## Format

`[{emoji} ]{type}[({module})]: {subject within 50 words}[ (#{issue/pull request})]`

example:

- : tada: Feat: add shortcode fixit-encryptor shortcode (#123)
- : arrow_up: Chore(libs): update Artalk from 2.2.12 to 2.3.4 (#150)

## Emoji

- <https://gitmoji.dev>
- [vscode plugin](https://github.com/maixiaojie/git-emoji-zh.git)
- utools plugin `GitEmoji`

## Message

| Emoji                                         | Type     | Example                                                      | Description (No Ambiguous)                                                                                                               |
| :-------------------------------------------- | :------- | :----------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| :tada: <br>:sparkles:                         | Feat     | Feat: add {feature}                                          | new feature                                                                                                                              |
| :truck:                                       |          | Feat: adjust/migrate {feature name}, {change details}        | For the adjustment feature, it is necessary to describe the current situation (before) and after adjustment (after)                      |
| :fire:                                        |          | Feat: delete {feature name}, {deletion reason}               | If the feature is deleted, the reason for deletion must be explained                                                                     |
| :bug: <br>:construction: <br>:rotating_light: | Fix      | Fix: fix {bug description}                                   | Fix known bugs                                                                                                                           |
| :art: <br>:lipstick: <br>:pencil2:            | Style    | Style: Typesetting/CSS style {optimizing content}            | Changes that do not affect code operation, such as code layout and style change                                                          |
| :recycle:                                     | Refactor | Refactor: override {feature name}                            | It is neither a new function nor a code change to fix a bug. Simply rewriting the code of a function does not affect the function result |
| :zap:                                         | Perf     | Perf: improve performance {function name}, {improve content} | Optimize code performance                                                                                                                |
| :rewind:                                      | Revert   | Revert: restore version {commit message of restore version}  | Restore the version of one commit                                                                                                        |
| :pencil: <br>:pencil2:                        | Docs     | Docs: revise comments/update documents                       | Adjustment of documents and notes                                                                                                        |
| :wrench:                                      | Chore    | Chore: update plugin version                                 | Changes in the construction process or auxiliary tools                                                                                   |


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/commit-spec/  

