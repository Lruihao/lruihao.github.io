# A Hugo theme component with reward-log or sponsor-log shortcode.

# shortcode-rewards

A Hugo theme component with `reward-log` or `sponsor-log` shortcode.

## Demo

- [FixIt Docs](https://fixit.lruihao.cn/contributing/overview/#sponsor)
- [Lruihao&#39;s Blog](https://lruihao.cn/about/#sponsor)

## Requirements

&gt; Developed based on the FixIt Timeline plugin.

- FixIt v0.3.9 or later.

## Install Component

The installation method is the same as [installing a theme](https://fixit.lruihao.cn/documentation/installation/). There are several ways to install, choose one, for example, install through Hugo Modules:

```diff
[module]
  [[module.imports]]
    path = &#34;github.com/hugo-fixit/FixIt&#34;
&#43; [[module.imports]]
&#43;   path = &#34;github.com/hugo-fixit/shortcode-rewards&#34;
```

## Inject Partial

Inject the `shortcode-rewards.html` into the `custom-head` through the custom block opened by the FixIt theme in the `layouts/partials/custom.html` file:

```go-html-template
{{- define &#34;custom-head&#34; -}}
  {{- partial &#34;inject/shortcode-rewards.html&#34; . -}}
{{- end -}}
```

## Usage

First, create the `reward-log.yml` file and edit your data:

```bash
cp themes/shortcode-sponsor-log/reward_log.yml.example data/reward_log.yml
```

&gt; If your site is multilingual, you can create a `reward_log.en.yml` file for English and `reward_log.zh-cn.yml` for Chinese.

Next, use the `reward-log` shortcode in any page:

```markdown
{{?{}&lt; reward-log &gt;}}
```

&gt; [!note]
&gt; For compatibility with older versions, `sponsor-log` shortcode can also be used, and the corresponding data file is `sponsor_log.yml`.

## Params

### Shortcode

The `reward-log` shortcode has the following named parameters, and the positional parameters ordered from top to bottom:

| Parameter | Description                                                       | Type    | Optional values        | Default |
| :-------- | :---------------------------------------------------------------- | :------ | :--------------------- | :------ |
| reverse   | whether the node is ascending or descending                       | boolean | -                      | true    |
| placement | position of timestamp                                             | string  | top / bottom           | bottom  |
| animation | whether to enable animation                                       | boolean | -                      | false   |
| size      | node size                                                         | string  | small / medium / large | medium  |
| node      | node style                                                        | string  | circle / dot           | circle  |
| width     | `#` container width                                               | string  | -                      | -       |
| height    | `#` container height                                              | string  | -                      | -       |
| class     | `#` container classname                                           | string  | -                      | -       |

&gt; Parameters marked with `#` only support named parameters.

### Data

The `reward_log.yml` file has the following fields:

```yaml
# The sponsor logs data format is as follows
# currency: [CNY, USD, EUR, ...] https://gohugo.io/functions/lang/formatcurrency/
# origin: [alipay, bitcoin, paypal, wechatpay, ...]

message: Thanks all!
currency: CNY
symbol: ¥
# The sponsor logs inherit the FixIt Timeline events
logs:
  - date: &#34;2006-01-02 15:04:05&#34;
    sponsor: Cell
    money: 50
    origin: alipay
    remark: &#34;Come on!&#34;
```

## References

- [Develop Theme Components | FixIt](https://fixit.lruihao.cn/contributing/components/)
- [How to Develop a Hugo Theme Component | FixIt](https://fixit.lruihao.cn/components/dev-component/)


---

> 作者: [hugo-fixit](https://github.com/hugo-fixit)  
> URL: https://lruihao.cn/projects/hugo-fixit/shortcode-rewards/  

