# Cell Watermark


&lt;!-- markdownlint-disable --&gt;

# Usage

## Browser

1. Clone source

    ```
    git clone git@github.com:Lruihao/watermark.git
    ```

2. Load `Watermark`

    ```html
    &lt;script type=&#34;text/javascript&#34; src=&#34;./src/watermark.js&#34;&gt;&lt;/script&gt;
    &lt;script type=&#34;text/javascript&#34; src=&#34;./src/watermark.min.js&#34;&gt;&lt;/script&gt;
    &lt;!-- Or CDN --&gt;
    &lt;script type=&#34;text/javascript&#34; src=&#34;https://cdn.jsdelivr.net/npm/cell-watermark@1.0.3/src/watermark.js&#34;&gt;&lt;/script&gt;
    &lt;script type=&#34;text/javascript&#34; src=&#34;https://cdn.jsdelivr.net/npm/cell-watermark@1.0.3/src/watermark.min.js&#34;&gt;&lt;/script&gt;
    ```

3. Initialization

    ```javascript
    document.addEventListener(&#39;DOMContentLoaded&#39;, function () {
      new Watermark({
        content: &#34;cell-watermark&#34;
      })
    });
    ```

## NPM

1. Install

    ```bash
    npm i cell-watermark
    ```

2. Import

    ```javascript
    import Watermark from &#39;cell-watermark&#39;
    /* Or */
    var Watermark = require(&#34;cell-watermark&#34;)
    ```

# Class: Watermark

## Watermark(options)

#### new Watermark(options)

##### Parameters

| Name    | Type   | Description                       |
| ------- | ------ | --------------------------------- |
| options | Object | The options of watermark（[Properties](#properties)） |

###### Properties

| Name       | Type   | Attributes | Default  | Description                          |
| ---------- | ------ | ---------- | :------- | ------------------------------------ |
| content    | String | \&lt;optional\&gt; |        | watermark&#39;s text                     |
| appendTo   | String | \&lt;optional\&gt; | &#39;body&#39; | parent of watermark&#39;s container      |
| width      | Number | \&lt;optional\&gt; | 150    | watermark&#39;s width. unit: px          |
| height     | Number | \&lt;optional\&gt; | 20     | watermark&#39;s height. unit: px         |
| rowSpacing | Number | \&lt;optional\&gt; | 60     | row spacing of watermarks. unit: px  |
| colSpacing | Number | \&lt;optional\&gt; | 30     | col spacing of watermarks. unit: px  |
| rotate     | Number | \&lt;optional\&gt; | 15     | watermark&#39;s tangent angle. unit: deg |
| opacity    | Number | \&lt;optional\&gt; | 0.1    | watermark&#39;s transparency             |
| fontSize   | Number | \&lt;optional\&gt; | 0.85   | watermark&#39;s fontSize. unit: rem      |
| fontFamily | String | \&lt;optional\&gt; | &#39;inherit&#39;| watermark&#39;s fontFamily             |

&gt; Author: [Lruihao](https://lruihao.cn)

### Methods

#### upload(content)

Upload watermark&#39;s text content

##### Parameters

|  Name   |  Type  |   Description    |
| :-----: | :----: | :--------------: |
| content | String | watermark&#39;s text |

#### render(options)

Rerender watermark

##### Parameters

| Name    | Type   | Description                         |
| ------- | ------ | ----------------------------------- |
| options | Object | The options of watermark（[Properties](#properties)） |

#### destroy()

Force destroy watermark


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/cell-watermark/  

