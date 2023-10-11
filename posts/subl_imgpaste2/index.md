# Sublime 剪贴板图片粘贴插件 —— Markdown 必备


<!-- markdownlint-disable MD034 -->

{{< link href="https://github.com/robinchenyu/imagepaste" content="插件地址" title="插件地址" card=true >}}

<!--more-->

## 功能

支持 Windows/Linux 系统下，实现对剪切板图像的处理调用 (Ctrl+Shift+V)  
默认使用 JPG 的方式保存，可以显著减小图片的存储体积。

- 对剪切板图像保存到本地并在 Markdown 文本中插入链接地址
- 对剪切板中的图像地址，直接插入到 Markdown 文本中

## 食用说明

1. 首先下载 zip 到本地，放到 sublime 安装目录的 `xxx\sublime\Data\Packages` 中，注意不是 `xxx\sublime\Packages` 下哦。
2. 记得要把 subl_imgpaste2-master 的 `-master` 删除掉。接着重新打开 sublime, 选择 `Preferences->Package Settings->ImaPaste2->settings-Default` 输入如下内容：

   ```json
   {
     "caption": "ImagePaste: Paste Image From Clipboard",
     "command": "image_paste",
     "image_dir_name": "images/" # 图片保存目录
   }
   ```

3. 然后就可以愉快的使用截图，然后在 sublime 里使用 `ctrl+shift+v` 粘贴 Markdown 格式的图片。默认会自动根据 md 文件名在同级目录下新建文件夹，图片就默认保存在那。如图：  
   ![演示](https://github.com/robinchenyu/imagepaste/raw/master/gif/imagepaste.gif '使用演示')

> VScode 也有更好用的插件：Past Image

```json
"pasteImage.defaultName": "YY_X",
"pasteImage.path": "${currentFileDir}/images/"
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/subl_imgpaste2/  

