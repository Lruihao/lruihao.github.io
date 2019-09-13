---
title: netBeans IDE开发设置
date: 2019-08-15 18:36:15
tags:
- php
- netBeans
- 前端
categories:
- php
---

# 安裝
[官方下載點](https://netbeans.org/)

# 擴充功能
## 安裝擴充功能
1. 下載擴充套件包  
    * [官方套件庫](http://plugins.netbeans.org/PluginPortal/)
    * 或者在netbenas IDE裏面下載插件（方便）
2. 開啟 Netbeans→Tools→Plugins→Downloaded→Add Plugins
3. 選擇要安裝的擴充套件包

## 啟用已安裝的擴充功能
1. 開啟 Netbeans→Tools→Plugins→Installed
2. 選擇要啟用的套件 (\*.npm)
3. 點擊 Activate

## 匯入設定
1. 開啟 Netbeans→Tools→Options
2. 點擊 Import 匯入設定
3. 選擇要匯入的套件包 (\*.zip)

# 常用設定
## 程式碼排版
> 在程式開發中，程式碼排版很重要。一個好的排版利於開發人員程式閱讀，也便於後期維護人員閱讀。

在NetBeans中設置程式碼排版
1. 打開NetBeans->Tools->Options->Editor->Formatting；
2. Language選擇 All Languages，勾選"Expand Tabs to Spaces",用兩個空格鍵代替Tab鍵，首行留兩個Tab鍵。
3. 點擊Apply或Ok完成設置。具體設置及效果如下圖所示：

{% asset_img Formatting.png Formatting设置 %}
{% asset_img Javascript.png Javascript %}
{% asset_img Php.png Php %}

## 程式碼樣板
>　程式碼樣板可以幫助你快速書寫程序，不必繁瑣地聲明函數或其他代碼塊，更專注與邏輯的書寫。

在NetBeans中設置程式碼樣板
1. 打開NetBeans→Tools→Options→Editor→Code Templates；
2. 選擇你所用的語言（這裡以JavaScript為例）；
3. 點擊"New"新建屬於你的或修改原有的程式碼樣板（例子僅為演示）；
4. 在編程中應用它。

{% asset_img FindTemplate.png FindTemplate %}
{% asset_img BeforeEdit.png BeforeEdit %}
{% asset_img OpenInEditor.png OpenInEditor %}
{% asset_img AfterEdit.png AfterEdit %}

## 前端壓縮
下載擴充套件`netbeans minify` 或者 `minifierBeans`
1. 開啟 Netbeans→Tools→Plugins→Downloaded→Add Plugins
2. 選擇你下載的擴充套件開啟
3. 開啟Netbeans→Tools→options

{% asset_img Example1.png Example1 %}
{% asset_img Example2.png Example2 %}

## 快捷鍵
|键位|作用|
|:--|:--|
|Ctrl+/|注释一行（或选中部分）|
|Ctrl+X|剪切一行（或选中部分）|
|Ctrl+E|删除一行（或选中部分）|
|Shift+Alt+上下方向键|移动当前行|
|Ctrl+Shift+上下方向键|复制当前行(该操作并非复制到粘贴板)|
|Shift+Alt+F|整理代码|
|TAB|代碼自動補全/缩进/選中文字同時缩进|
|Shift+TAB|選中文字同時取消缩进|
|Ctrl+F|查找某个字|
|Ctrl+Shift+F|整个项目中查找某个字|
|Ctrl+H|替换某个字|
|Ctrl+Enter|增加空白行，光标不动。|
|Ctrl+(0~7)|打开各种小窗口|
|Shift+方向键|選中文字|
|Ctrl+Alt+Space|代码输入提示,不习惯的可以设置为(Alt+/)，超级好用！！！|
|Ctrl+Shift+F5|调试当前程序|
|Shift+F6|运行当前程序|
|F6|运行主程序|
|Alt+Enter|显示程式bug建议或者警示等|

* NetBeans中常用的快捷鍵↑：  
* 三種複製行方法
 1. 复制一行: Ctrl + Shift + 上下方向键(该操作并非复制到粘贴板)；  
 2. 复制一行: 在该行任何地方连续三击选中一样,然后Ctrl + C即可复制一行.；  
 3. 复制一行(使用宏): 编辑-开始录制宏(Home,Shift + End,Ctrl + C)-停止录制宏-设置宏名称(如select-entire-line)-设置快捷键(如Ctrl + Alt + C)； 
* 也可自己修改快捷鍵(Tools→Options→Keympa),如下圖

{% asset_img quickkey.png quickkey %}

## 遠程開發 (FTP)
> 工作为例

1. 新建项目
    1. 打开软件，进入新建项目页面（File-New Project），新建php项目，选择第一个（PHP-PHP Application）
    2. 项目名和地址自己选择（注意，选择地址后需在地址最后面加上"/项目名"）
2. FTP设置
    1. 点击下一步，进入FTP设置，Run As选择Remote Web Site(FTP,SFTP)
    2. Project URL填写`http://10.151.110.165/training/工号`
3. Manage设置
    1. 点击Manage,进入页面.名字自取.Host Name填写：10.151.110.165
    2. Encryption选择Pure FTP,User Name和Password（填写工号/课务系统登录密码）
    3. Initial Directory填写_training
    4. 点击Test Connection测试是否连接成功
4. 其他设置
    1. Upload Directory,上传目录不填，直接上传至个人根目录
    2. Upload File改为保存时上传文件（On Save）

## Chrome with NetNeans Connector
1. 打開chrome中的應用程式商店（使用chrome瀏覽器點擊下方鏈接即可）  
[chrome應用程式商店](https://chrome.google.com/webstore/category/themes?hl=en-US/)
2. 在搜索框中輸入NetNeans Connector后搜索，然後點擊右邊的加到Chrome即可，安裝成功后右上角會顯示Netbeans圖標。
3. 開啟netbeans 選擇Run→Set Project Browser→選中Chrome with NetBeans Connector
4. 選擇default下的Customize → 選擇Browser → 選擇Browser下 Chrome with NetBeans Connector即可

{% asset_img 01.png 第一步 %}
{% asset_img 02.png 第二步 %}
{% asset_img 03.png 第三步 %}