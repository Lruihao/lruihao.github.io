# 记一次 Debug 第三方包的过程


在完成一个 code diff 需求时，发现所使用的插件不足以完成预期的需求。当然最终还是顺利完成了，详见 [code diff demo](https://lruihao.github.io/vue-el-demo/#/code-diff)。

&lt;!--more--&gt;

## 需求

使用 [v-code-diff](https://github.com/Shimada666/v-code-diff) 组件，来开发一个接口请求结果比对的功能。

开发过程中，发现虽然它的 1.8.0 版本提供了具名插槽 `stat`，但是插槽并没有回传值，于是乎，看了一下它的源码，提了一个 PR 加了一个作用域，见 [Shimada666/v-code-diff#119](https://github.com/Shimada666/v-code-diff/pull/119)，作者很快也就合并了。

这样就简化了原插槽的使用：

```vue
&lt;CodeDiff
  :old-string=&#34;form.oldString&#34;
  :new-string=&#34;form.newString&#34;
  :language=&#34;form.language&#34;
  :diff-style=&#34;form.diffStyle&#34;
&gt;
  &lt;template #stat=&#34;{ stat }&#34;&gt;
    &lt;span class=&#34;diff-stat-added&#34;&gt;&#43;{{ stat.additionsNum }} 增&lt;/span&gt;
    &lt;span class=&#34;diff-stat-deleted&#34;&gt;-{{ stat.deletionsNum }} 减&lt;/span&gt;
  &lt;/template&gt;
&lt;/CodeDiff&gt;
```

但这只是完成需求路上的一个小插曲，真正的难点在于“比对结果时，支持关键词过滤的功能”，也就是如果比对结果中有包含关键词的行，则忽略该行的 diff。

## 师必有名

“赵若献璧，乃惧怕我邦，不难臣服；若是不献，再去征讨，方算出师有名。”

自古战事都讲究师必有名，其实在代码世界也一样，得考虑这个需求是否通用，不然即使提交 PR 给原作者，也大概率不会合并。我自己也有开源，如果遇到定制化很重的需求，往往只会以一个 `wontfix` 的标签收尾。

所以，我先去查了有没有类似的工具或者产品有过类似的需求。

很快就找到了 Linux 的 `diff` 指令的 `--ignore-matching-lines` 参数有类似的功能。

```bash
diff file1.json file2.json --ignore-matching-lines=&#34;time&#34;
```

上面的命令在比较两个文件时，会忽略包含 `time` 的行。

## 出师有名

既然有了参考，那么就可以开始动手了。

多的先不管，先把 [v-code-diff](https://github.com/Shimada666/v-code-diff) 的源码拉下来运行起来。

```bash
git clone git@github.com:Shimada666/v-code-diff.git &amp;&amp; cd v-code-diff
```

看了一眼是用 TypeScript 和 Vue3 的 Composition API 写的，这个我都不熟，不过没关系，先把它跑起来再说。

它的包管理器是 pnpm，那就先安装一下：

```bash
npm i -g pnpm
```

然后安装依赖：

```bash
pnpm install
```

然后在 `package.json` 找一下启动命令：

```json
&#34;scripts&#34;: {
  &#34;dev:2&#34;: &#34;vue-demi-switch 2 vue2 &amp;&amp; pnpm --filter vue2-playground dev&#34;,
  &#34;dev:2.7&#34;: &#34;vue-demi-switch 2.7 vue2 &amp;&amp; pnpm --filter vue2.7-playground dev&#34;,
  &#34;dev:3&#34;: &#34;vue-demi-switch 3 vue3 &amp;&amp; pnpm --filter vue3-playground dev&#34;,
  &#34;dev:demo&#34;: &#34;vue-demi-switch 3 vue3 &amp;&amp; pnpm --filter demo dev&#34;,
}
```

随便选一个运行：

```bash
npm run dev:2
```

ok，顺利启动！

## 一招制敌

然后开始阅读源码，寻找突破点。

two hours later...

经过一段时间阅读，虽然没有用过 TypeScript 以及 Composition API，但是对于读懂逻辑影响不大，很多就找到了突破口。

既然忽略关键词是为了让有差异的行不显示，那么正常的行就无需处理，只要找到有差异的行处理的阶段，然后加入关键词过滤的逻辑就可以了。

然后给 `CodeDiff` 组件新增一个 `ignoreMatchingLines` 属性，用于接收匹配忽略关键词的正则表达式。

最后简单测试一个在 Vue2.x、Vue2.7 以及 Vue3.x 的 demo，然后顺手把文档也完善一下，就可以提交 PR 给原作者了。详见 [Shimada666/v-code-diff#121](https://github.com/Shimada666/v-code-diff/pull/121)。

在等待了短暂几天后，原作者也是很快合并了 PR，并发布了新的版本 1.9.0，这样我们就可以在自己项目中升级使用了。

## 备用方案

如果作者觉得需求不妥，我们也可以 fork 一份，然后改名发包，或者只是简单的打包成一个 js 文件，然后放到自己的项目中使用。

## 总结

磨刀不误砍柴工，磨刀的过程也是砍柴的过程，找到根本原因，才能事半功倍。

比如，VS Code 的开发团队在使用 Electron 开发 VS Code 时，发现 Electron 的功能并不足以满足 VS Code 的开发需求，他们也是先参与到 Electron 的开发中，完善 Electron 后再使用 Electron 开发 VS Code 的。

经常逛 GitHub，潜移默化中，我也养成了看源码的习惯，遇到 BUG 时先想的是 PR，然后再是 issue，今年还提交了一下其他的 PR。

- [mdn/translated-content#15859](https://github.com/mdn/translated-content/pull/15859)
- [SchemaStore/schemastore#3411](https://github.com/SchemaStore/schemastore/pull/3411)
- [SchemaStore/schemastore#3420](https://github.com/SchemaStore/schemastore/pull/3420)
- [SchemaStore/schemastore#3463](https://github.com/SchemaStore/schemastore/pull/3463)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/900d5e4/  

