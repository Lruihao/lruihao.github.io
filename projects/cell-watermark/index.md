# Cell Watermark


# Usage
## Browser
1. Clone source

    ```
    git clone git@github.com:Lruihao/watermark.git
    ```

2. Load `Watermark`

    ```html
    <script type="text/javascript" src="./src/watermark.js"></script>
    <script type="text/javascript" src="./src/watermark.min.js"></script>
    <!-- Or CDN -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/cell-watermark@1.0.3/src/watermark.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/cell-watermark@1.0.3/src/watermark.min.js"></script>
    ```
3. Initialization

    ```javascript
    document.addEventListener('DOMContentLoaded', function () {
      new Watermark({
        content: "cell-watermark"
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
    import Watermark from 'cell-watermark'
    /* Or */
    var Watermark = require("cell-watermark")
    ```
# Class: Watermark
## Watermark(options)

#### new Watermark(options)

##### Parameters:

| Name    | Type   | Description                       |
| ------- | ------ | --------------------------------- |
| options | Object | The options of watermark（[Properties](#properties)） |

###### Properties:

| Name       | Type   | Attributes | Default  | Description                          |
| ---------- | ------ | ---------- | :------- | ------------------------------------ |
| content    | String | \<optional\> |        | watermark's text                     |
| appendTo   | String | \<optional\> | 'body' | parent of watermark's container      |
| width      | Number | \<optional\> | 150    | watermark's width. unit: px          |
| height     | Number | \<optional\> | 20     | watermark's height. unit: px         |
| rowSpacing | Number | \<optional\> | 60     | row spacing of watermarks. unit: px  |
| colSpacing | Number | \<optional\> | 30     | col spacing of watermarks. unit: px  |
| rotate     | Number | \<optional\> | 15     | watermark's tangent angle. unit: deg |
| opacity    | Number | \<optional\> | 0.1    | watermark's transparency             |
| fontSize   | Number | \<optional\> | 0.85   | watermark's fontSize. unit: rem      |
| fontFamily | String | \<optional\> | 'inherit'| watermark's fontFamily             |

> Author: [Lruihao](https://lruihao.cn)

### Methods

#### upload(content)

Upload watermark's text content

##### Parameters:
|  Name   |  Type  |   Description    |
| :-----: | :----: | :--------------: |
| content | String | watermark's text |

#### render(options)
Rerender watermark

##### Parameters:

| Name    | Type   | Description                         |
| ------- | ------ | ----------------------------------- |
| options | Object | The options of watermark（[Properties](#properties)） |

#### destroy()

Force destroy watermark

---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/projects/cell-watermark/  

