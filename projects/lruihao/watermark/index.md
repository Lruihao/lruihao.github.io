# Create watermark for webpage and automatic adjust when window resize.

# Watermark

Create watermark for webpage and automatic adjust when windows resize.

## [Documentation](https://raw.githubusercontent.com/Lruihao/watermark/refs/heads/main/docs/README.md)

## Usage

### Browser

1. Clone source

    ```bash
    git clone git@github.com:Lruihao/watermark.git
    ```

2. Load `Watermark`

    ```html
    &lt;script type=&#34;text/javascript&#34; src=&#34;./src/watermark.js&#34;&gt;&lt;/script&gt;
    &lt;!-- Or CDN --&gt;
    &lt;script type=&#34;text/javascript&#34; src=&#34;https://cdn.jsdelivr.net/npm/cell-watermark&#34;&gt;&lt;/script&gt;
    ```

3. Initialization

    ```javascript
    document.addEventListener(&#39;DOMContentLoaded&#39;, function () {
      new Watermark({
        content: &#34;cell-watermark&#34;
      })
    });
    ```

### NPM

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


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/lruihao/watermark/  

