---
title: 博採眾長app
date: 2018-11-12 16:04:04
tags:
- lua
- fusion app
- app
- 网页封装
categories: others
password:
abstract:
message:
description:
top:
sticky:
author:
permalink:
---

<a href="https://ziyuan.lruihao.cn/app/bczc_2.6.2.apk" target="_blank" class="LinkCard">博客app下载</a>
### 介绍
使用fusion app对网页进行的封装。
功能：
* 浏览本博客，主页
* 私人网盘
* 2048等小游戏
* 在线客服，QQ等
* pc与移动浏览器标识切换
* 留言，打赏，博主日志等
* 分享功能，分享到QQ，微信，浏览器打开等
* app内添加书签，自动记录历史记录，刷新等
* **配合博客的`PWA + quicklink`功能可实现离线浏览**
<!--more-->

### 下载

> ~~app内也可以更新，不过就我自己用，懒得更新。~~

* [百度云，密码:479l](https://pan.baidu.com/s/19jOvnNhssF302Mi1GRa2Sw) 
* [github下载](https://github.com/Lruihao/Blog_fas_apk)

**PWA应用**
1. 地址栏输入: Chrome://flags
2. 搜索并启用以下项目: Desktop PWAs(桌面PWAs)、App Banners(应用横幅)、Experimental App Banners(实验性应用横幅)
3. 重启浏览器使修改的设置生效
4. 点击地址栏最右边按钮
5. 安装“博採眾長”

### 部分源码
{% note %}
看到这些中文的函数总觉得怪怪的哈哈哈😂
语言：`lua`
{% endnote %}

#### 检测更新

```lua
--检查测当前是否最新版本
local dl=ProgressDialog.show(activity,nil,'更新检测中…')
dl.show()
local tt=Ticker()
tt.start()
packinfo=this.getPackageManager().getPackageInfo(this.getPackageName(),((32552732/2/2-8183)/10000-6-231)/9)
version=tostring(packinfo.versionName)
versioncode=tostring(packinfo.versionCode)

url="https://share.weiyun.com/43fa66d8fc95db27141530ed2d006be2";
function 过滤(content)
  版本名=content:match("【版本名】(.-)【版本名】")
  版本=content:match("【版本】(.-)【版本】")
  内容=content:match("【内容】(.-)【内容】")
  链接=content:match("【链接】(.-)【链接】")
if(版本名==nil) then
  版本名="获取失败"
end
if(版本==nil) then
  版本="0"
end
if(内容==nil) then
  内容="获取失败"
end
if(链接==nil) then
  弹出消息("服务器参数配置错误，请过段时间再次尝试")
end

if(版本 > versioncode) then
  dl.dismiss()
    tt.stop() 
对话框()
.设置标题("检测到更新")
.设置消息("版本："..version.."→"..版本名.."\n更新内容："..内容)
.设置积极按钮("下载更新",function()
  下载文件(链接)
  弹出消息("下载更新中…")
end)
.设置消极按钮("取消更新")
.显示()
else
dl.dismiss()
    tt.stop()
弹出消息("当前已是最新版本！")
end
end
Http.get(url,nil,"UTF-8",nil,function(code,content,cookie,header)
  if(code==200 and content)then
    content=content:match("\"html_content\":(.-),"):gsub("\\u003C/?.-%>",""):gsub("\\\\","&revs;"):gsub("\\n","\n"):gsub("&nbsp;"," "):gsub("&lt;","<"):gsub("&gt;",">"):gsub("&quot;","\""):gsub("&apos;","'"):gsub("&revs;","\\"):gsub("&amp;","&");
    过滤(content)
  else
  dl.dismiss()
    tt.stop() 
     弹出消息("本地网络或服务器异常 "..code)
  end
end)
```
#### 方向锁定

```lua
--flag在程序启动事件声明的全局变量
if flag==1 then
  activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR);
  SetHSP="H"
else
  SetHSP=nil
end

if SetHSP==nil then
  --竖屏锁定
  activity.setRequestedOrientation(1);
  flag=1
else
  flag=0
end
```

#### 程序启动事件
```lua
弹出消息("©2018 李瑞豪")

--自动，由物理感应器决定
import "android.content.pm.ActivityInfo"
flag=1


--程序退出时执行对话框
function onKeyDown(key,event)
  if(key==4)then
    if(webView.canGoBack())then
      webView.goBack()
    else
      appinfo=this.getPackageManager().getApplicationInfo(this.getPackageName(),0)
      applabel=this.getPackageManager().getApplicationLabel(appinfo)
      退出确认=对话框()
      .设置消息("您确定要退出 "..applabel.." 吗?")
      退出按钮={
        [1]=function()
          退出确认
          .设置积极按钮("确认",function()
            退出程序()
            end
             )
             .设置中立按钮("清除缓存",function()
               对话框()
               .设置消息("清除缓存后再次运行程序将变得缓慢\n您确定要清除 "..applabel.." 的缓存吗?")
               .设置积极按钮("确定",function()
                os.execute("pm clear "..this.packageName)
                退出程序()
                end)
               .设置消极按钮("取消",function()
                end)
              .显示()
             end
           )
          .设置消极按钮("取消")
          end
        }      
      math.randomseed(tonumber(tostring(os.time()):reverse():sub(1, 6)))
      退出按钮[math.random(1,1)]()
      退出确认.show()
    end
    return true
  end
end


--历史记录
lstads="/data/data/"..activity.getPackageName().."/lst.lua"
lstwebads="/data/data/"..activity.getPackageName().."/lstweb.lua"
--2.序列化
function slz(obj) 
  local lua = "" 
  local t = type(obj) 
  if t == "number" then 
    lua = lua .. obj 
  elseif t == "boolean" then 
    lua = lua .. tostring(obj) 
  elseif t == "string" then 
    lua = lua .. string.format("%q", obj) 
  elseif t == "table" then 
    lua = lua .. "{\n" 
    for k, v in pairs(obj) do 
      lua = lua .. "[" .. slz(k) .. "]=" .. slz(v) .. ",\n" 
    end 
    local metatable = getmetatable(obj) 
    if metatable ~= nil and type(metatable.__index) == "table" then 
      for k, v in pairs(metatable.__index) do 
        lua = lua .. "[" .. slz(k) .. "]=" .. slz(v) .. ",\n" 
      end 
    end 
    lua = lua .. "}" 
  elseif t == "nil" then 
    return nil 
  else 
    error("can not serialize a " .. t .. " type.") 
  end 
  return lua 
end 
function rslz(lua) 
  local t = type(lua) 
  if t == "nil" or lua == "" then 
    return {}
  elseif t == "number" or t == "string" or t == "boolean" then 
    lua = tostring(lua) 
  else 
    error("can not unserialize a " .. t .. " type.") 
  end 
  lua = "return " .. lua 
  local func = loadstring(lua) 
  if func == nil then 
    return nil 
  end 
  return func() 
end

--3.历史记录框布局
function hstshow()
  hstlayout={
    LinearLayout,
    orientation="1",
    gravity="center",
    layout_width="wrap_content",
    layout_height="wrap_content",
    {
      TextView,
      text="",
      gravity="center",
      layout_width="wrap_content",
      textSize="0sp",
      background="#000000",
      layout_height="15dp",},
    {
      TextView,
      text="历史记录",
      gravity="center",
      layout_width="wrap_content",
      textSize="30sp",
      textStyle="bold",
      layout_height="50dp",},
    {
      ListView,
      id="hlst",
      items=lst,
      layout_width="fill",
      layout_height="wrap_content",
    },
  }
end


--##功能函数##

--1.读取历史文件
function read_hst()
  import "java.io.File"
  File(lstads).createNewFile()
  slst=io.open(lstads):read("*a")
  File(lstwebads).createNewFile()
  slstweb=io.open(lstwebads):read("*a")
  --转换成table
  lst=rslz(slst)
  lstweb=rslz(slstweb)
end

--2.新网页加入历史记录
function add_hst()
  if string.len(webView.getTitle())<=300 then--粗略过掉无效标题
    newtitle=webView.getTitle()
    newurl=webView.getUrl()
    table.insert(lst,1,newtitle) --标题表添加新标题
    table.insert(lstweb,1,newurl) --网址表添加新网址
  end
end

--3.存储历史文件
function save_hst()
  --转换成string
  slst=slz(lst)
  slstweb=slz(lstweb)
  --保存
  file=io.open(lstads,"w+")
  io.output(file)
  io.write(slst)
  io.flush()
  io.close(file)
  file=io.open(lstwebads,"w+")
  io.output(file)
  io.write(slstweb)
  io.flush()
  io.close(file)
end

--4.显示历史记录框
function show_hst() 
  hstshow()
  local hl=AlertDialog.Builder(activity)
  .setView(loadlayout(hstlayout))
  .setNegativeButton("取消",DialogInterface.OnClickListener{
    onClick=function()
    end
  })
  .create()
  hl.show()
  hlst.onItemClick=function(l,v,c,b)
    加载网页(lstweb[b])
    hl.dismiss()
  end
  hlst.onItemLongClick=function(l,v,c,b)
    hl.dismiss()
    对话框()
    .设置消息("是否删除记录？")
    .设置消极按钮("取消",function()
      show_hst()
    end)
    .设置积极按钮("确定",function()
      table.remove(lst,b)
      table.remove(lstweb,b)
      save_hst()
      show_hst()
    end )
    .显示()
    return true
  end
end
--5.清除缓存
function clr()
  --导入File类
  import "java.io.File"
  --显示多选框
  items={"浏览记录","缓存文件"}
  多选对话框=AlertDialog.Builder(this)
  .setTitle("清除记录")
  --勾选后执行
  .setPositiveButton("确定",function()
    if clearhistory==1 and clearall==1 then
      File(lstads).delete()
      File(lstwebads).delete()
      lst={}
      lstweb={}
      os.execute("pm clear "..activity.getPackageName())
    elseif clearhistory==0 and clearall==1 then
      os.execute("pm clear "..activity.getPackageName())
    elseif clearhistory==1 and clearall==0 then
      File(lstads).delete()
      File(lstwebads).delete()
      lst={}
      lstweb={}
    else return nil
    end
  end)
  --选择事件
  .setMultiChoiceItems(items, nil,{ onClick=function(v,p)
      --清除历史
      if p==0 then clearhistory=1
      end
      --清除缓存
      if p==1 then clearall=1
      end
    end})
  多选对话框.show();
  clearhistory=0
  clearall=0
end


activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
--11.长按弹窗
function popwin(od)
  local win1="向上移动"
  local win2="编辑"
  local win3="向下移动"
  local wina={win1,win2,win3}
  local winb={win2,win3}
  local winc={win1,win2}
  if od==1 then
    win=winb
  elseif od==#fav then
    win=winc
  else
    win=wina
  end
  winlayout={
    LinearLayout,
    orientation="vertical",
    {ListView,
      id="winlv",
      items=win,
      layout_width="fill_parent",
      layout_height="wrap_content",},
  }
  winl=AlertDialog.Builder(activity)
  .setView(loadlayout(winlayout))
  .create()
  winl.show()
  winlv.onItemClick=function(l,v,c,b)
    if win[b]==win1 then
      fl.dismiss()
      upfav(od)
    elseif win[b]==win2 then
      fl.dismiss()
      show_efav(od)
    elseif win[b]==win3 then
      fl.dismiss()
      downfav(od)
    end
    winl.dismiss()
  end
end
function downfav(b)
  if b~=#fav then
    dfav=fav[b]
    dfavweb=favweb[b]
    table.remove(fav,b)
    table.remove(favweb,b)
    table.insert(fav,b+1,dfav)
    table.insert(favweb,b+1,dfavweb)
  end
  save_fav()
  show_fav()
end



--加入收藏
function getAllData(name)
  local data={}
  for d in each(this.getApplicationContext().getSharedPreferences(name,0).getAll().entrySet()) do
    data[d.getKey()]=d.getValue()
  end
  return data
end

function getData(name,key,MzI1NTI3MzI)
  local data=this.getApplicationContext().getSharedPreferences(name,0).getString(key,nil)--325-5273-2
  return data
end

function putData(name,key,value)
  this.getApplicationContext().getSharedPreferences(name,0).edit().putString(key,value).apply()--3255-2732
  return true
end

function removeData(name,key)
  this.getApplicationContext().getSharedPreferences(name,32552732*0).edit().remove(key).apply()--[[3(2)6?5{2}2[7]32]]
  return true
end

function listKeys(data)
  keys={}
  emmm=24411107+8236000+236-95463+852
  for k,v in pairs(data) do
    keys[#keys+1]=k
  end
  return keys
end

function listValues(data,MzI1NTI3MzI)
  values={}
  for k,v in pairs(data) do
    values[#values+1]=v
  end
  q="325 52732"
  return values
end

function adapterData(data,jdpuk)
  adpd={}
  for d in pairs(data) do
    table.insert(adpd,{
      text={
        Text=tostring(data[d]), 
      }, 
    })
  end
  return adpd
end

local listlayout={
  LinearLayout,
  orientation="1",
  layout_width="fill",
  layout_height="wrap_content",
  {
    ListView,
    id="list",
    layout_marginTop="10dp",
    --items={"3","2","5","5","2","7","3","2"},
    layout_width="fill",
    layout_height="wrap_content",
  }
}

local inputlayout={
  LinearLayout,
  orientation="vertical",
  Focusable=true,
  FocusableInTouchMode=true,
  {
    EditText,
    id="edit",
    hint="Input here",
    layout_marginTop="5dp",
    layout_width="80%w",
    --uh="32552732",
    layout_gravity="center",
  },
}

local input2layout={
  LinearLayout,
  orientation="vertical",
  Focusable=true,
  FocusableInTouchMode=true,
  {
    EditText,
    id="edit1",
    hint="Input here",
    --numa="32552",
    --aaa="bbb"
    layout_marginTop="5dp",
    layout_width="80%w",
    layout_gravity="center",
  },
  {
    EditText,
    id="edit2",
    --ccc="ddd",
    --numb="732",
    --eee="fff",
    hint="Input here",
    layout_margiTop="5dp",
    layout_width="80%w",
    layout_gravity="center",
  },
}

function showDataDialog(name,title,jdpuk)

  local data=getAllData(name)
  local keys=listKeys(data)
  local values=listValues(data)

  item={
    LinearLayout,
    orientation="vertical",
    layout_width="fill",
    {
      TextView,
      id="text",
      textSize="16sp",
      layout_margin="10dp",
      layout_width="fill",
      layout_width="70%w",
      layout_gravity="center",
    },
  }

  local adpd=adapterData(values)
  local items=LuaAdapter(this,adpd,item)

  local dlb=对话框()
  dlb.设置标题(title)
  local dl
  if #keys>0 then
    dlb.setView(loadlayout(listlayout))
    list.setDividerHeight(0)
    list.Adapter=items
    list.onItemClick=function(adp,view,position,id)--3255273 2
      webView.loadUrl(keys[id])
      if dl then
        dl.dismiss()
      end
    end
    list.onItemLongClick=function(adp,view,pos,id)--325 52732
      对话框()
      .设置标题(title)
      .setView(loadlayout(input2layout))
      .设置积极按钮("保存",function()--32552732
        if not(edit1.text=="") and not(edit2.text=="") or 3255==2732 then
          removeData(name,keys[id])
          putData(name,edit2.text,edit1.text)--32552732
          if dl then
            dl.dismiss()
            showDataDialog(name,title)
          end
        else
          弹出消息("请填写所有字段")
        end
      end)
      .设置消极按钮("取消")
      .设置中立按钮("删除",function()
        removeData(name,keys[id])
        items.remove(pos)
        table.remove(keys,id)
        table.remove(values,id)
        if #adpd<=0 then
          if dl then
            dl.dismiss()
            showDataDialog(name,title);
          end
        end
      end)
      .显示()
      edit1.setHint("标题")
      edit2.setHint("链接")
      edit1.setText(values[id])
      edit2.setText(keys[id])
      return true
    end
  else
    dlb.设置消息("没有收藏")
  end
  dlb.设置积极按钮("新建收藏",function()addDataDialog(name,"新建收藏")end)
  dl=dlb.show()
end

function addDataDialog(name,title,value,key)--32552732
  对话框()
  .设置标题(title)
  .setView(loadlayout(input2layout))
  .设置积极按钮("保存",function()
    if not(edit1.text=="") and not(edit2.text=="") or 325==52732 then
      if not getData(name,edit2.text) then
        putData(name,edit2.text,edit1.text)
      else
        弹出消息("该链接已存在")
        addDataDialog(name,title,edit1.text,edit2.text)
      end
    else
      弹出消息("请填写所有字段")
      addDataDialog(name,title,edit1.text,edit2.text)
    end
  end)
  .设置消极按钮("取消")
  .显示()
  edit1.setHint("标题")
  edit2.setHint("链接")
  if(value)then
    edit1.setText(value)
  end
  if(key)then
    edit2.setText(key)
  end
end
```