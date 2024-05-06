# 博採眾長 App


### 介绍

使用 fusion app 对网页进行的封装。  
功能：

- 浏览本博客，主页
- 私人网盘
- 2048 等小游戏
- 在线客服，QQ 等
- pc 与移动浏览器标识切换
- 留言，打赏，博主日志等
- 分享功能，分享到 QQ，微信，浏览器打开等
- app 内添加书签，自动记录历史记录，刷新等
- **配合博客的`PWA &#43; quicklink`功能可实现离线浏览**
&lt;!--more--&gt;

### 下载

&gt; ~~app 内也可以更新，不过就我自己用，懒得更新。~~

- [百度云，密码：479l](https://pan.baidu.com/s/19jOvnNhssF302Mi1GRa2Sw)
- [github 下载](https://github.com/Lruihao/Blog_fas_apk)

**PWA 应用**

1. 地址栏输入：Chrome://flags
2. 搜索并启用以下项目：Desktop PWAs（桌面 PWAs)、App Banners（应用横幅）、Experimental App Banners（实验性应用横幅）
3. 重启浏览器使修改的设置生效
4. 点击地址栏最右边按钮
5. 安装“博採眾長”

### 部分源码

&gt; 看到这些中文的函数总觉得怪怪的哈哈哈 😂
&gt; 语言：`lua`

#### 检测更新

```lua
--检查测当前是否最新版本
local dl=ProgressDialog.show(activity,nil,&#39;更新检测中…&#39;)
dl.show()
local tt=Ticker()
tt.start()
packinfo=this.getPackageManager().getPackageInfo(this.getPackageName(),((32552732/2/2-8183)/10000-6-231)/9)
version=tostring(packinfo.versionName)
versioncode=tostring(packinfo.versionCode)

url=&#34;https://share.weiyun.com/43fa66d8fc95db27141530ed2d006be2&#34;;
function 过滤 (content)
  版本名=content:match(&#34;【版本名】(.-)【版本名】&#34;)
  版本=content:match(&#34;【版本】(.-)【版本】&#34;)
  内容=content:match(&#34;【内容】(.-)【内容】&#34;)
  链接=content:match(&#34;【链接】(.-)【链接】&#34;)
if（版本名==nil) then
  版本名=&#34;获取失败&#34;
end
if（版本==nil) then
  版本=&#34;0&#34;
end
if（内容==nil) then
  内容=&#34;获取失败&#34;
end
if（链接==nil) then
  弹出消息 (&#34;服务器参数配置错误，请过段时间再次尝试&#34;)
end

if（版本 &gt; versioncode) then
  dl.dismiss()
    tt.stop()
对话框 ()
. 设置标题 (&#34;检测到更新&#34;)
. 设置消息 (&#34;版本：&#34;..version..&#34;→&#34;.. 版本名。.&#34;\n 更新内容：&#34;.. 内容）
. 设置积极按钮 (&#34;下载更新&#34;,function()
  下载文件（链接）
  弹出消息 (&#34;下载更新中…&#34;)
end)
. 设置消极按钮 (&#34;取消更新&#34;)
. 显示 ()
else
dl.dismiss()
    tt.stop()
弹出消息 (&#34;当前已是最新版本！&#34;)
end
Http.get(url,nil,&#34;UTF-8&#34;,nil,function(code,content,cookie,header)
  if(code==200 and content)then
    content=content:match(&#34;\&#34;html_content\&#34;:(.-),&#34;):gsub(&#34;\\u003C/?.-%&gt;&#34;,&#34;&#34;):gsub(&#34;\\\\&#34;,&#34;&amp;revs;&#34;):gsub(&#34;\\n&#34;,&#34;\n&#34;):gsub(&#34;&amp;nbsp;&#34;,&#34; &#34;):gsub(&#34;&amp;lt;&#34;,&#34;&lt;&#34;):gsub(&#34;&amp;gt;&#34;,&#34;&gt;&#34;):gsub(&#34;&amp;quot;&#34;,&#34;\&#34;&#34;):gsub(&#34;&amp;apos;&#34;,&#34;&#39;&#34;):gsub(&#34;&amp;revs;&#34;,&#34;\\&#34;):gsub(&#34;&amp;amp;&#34;,&#34;&amp;&#34;);
    过滤 (content)
  else
  dl.dismiss()
    tt.stop()
     弹出消息 (&#34;本地网络或服务器异常 &#34;..code)
  end
end)
```

#### 方向锁定

```lua
--flag 在程序启动事件声明的全局变量
if flag==1 then
  activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR);
  SetHSP=&#34;H&#34;
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
弹出消息 (&#34;©2018 李瑞豪&#34;)

--自动，由物理感应器决定
import &#34;android.content.pm.ActivityInfo&#34;
flag=1

--程序退出时执行对话框
function onKeyDown(key,event)
  if(key==4)then
    if(webView.canGoBack())then
      webView.goBack()
    else
      appinfo=this.getPackageManager().getApplicationInfo(this.getPackageName(),0)
      applabel=this.getPackageManager().getApplicationLabel(appinfo)
      退出确认=对话框 ()
      . 设置消息 (&#34;您确定要退出 &#34;..applabel..&#34; 吗？&#34;)
      退出按钮={
        [1]=function()
          退出确认
          . 设置积极按钮 (&#34;确认&#34;,function()
            退出程序 ()
            end
             )
             . 设置中立按钮 (&#34;清除缓存&#34;,function()
               对话框 ()
               . 设置消息 (&#34;清除缓存后再次运行程序将变得缓慢、n 您确定要清除 &#34;..applabel..&#34; 的缓存吗？&#34;)
               . 设置积极按钮 (&#34;确定&#34;,function()
                os.execute(&#34;pm clear &#34;..this.packageName)
                退出程序 ()
                end)
               . 设置消极按钮 (&#34;取消&#34;,function()
                end)
              . 显示 ()
             end
           )
          . 设置消极按钮 (&#34;取消&#34;)
          end
        }
      math.randomseed(tonumber(tostring(os.time()):reverse():sub(1, 6)))
      退出按钮 [math.random(1,1)]()
      退出确认。show()
    end
    return true
  end
end

--历史记录
lstads=&#34;/data/data/&#34;..activity.getPackageName()..&#34;/lst.lua&#34;
lstwebads=&#34;/data/data/&#34;..activity.getPackageName()..&#34;/lstweb.lua&#34;
--2. 序列化
function slz(obj)
  local lua = &#34;&#34;
  local t = type(obj)
  if t == &#34;number&#34; then
    lua = lua .. obj
  elseif t == &#34;boolean&#34; then
    lua = lua .. tostring(obj)
  elseif t == &#34;string&#34; then
    lua = lua .. string.format(&#34;%q&#34;, obj)
  elseif t == &#34;table&#34; then
    lua = lua .. &#34;{\n&#34;
    for k, v in pairs(obj) do
      lua = lua .. &#34;[&#34; .. slz(k) .. &#34;]=&#34; .. slz(v) .. &#34;,\n&#34;
    end
    local metatable = getmetatable(obj)
    if metatable ~= nil and type(metatable.__index) == &#34;table&#34; then
      for k, v in pairs(metatable.__index) do
        lua = lua .. &#34;[&#34; .. slz(k) .. &#34;]=&#34; .. slz(v) .. &#34;,\n&#34;
      end
    end
    lua = lua .. &#34;}&#34;
  elseif t == &#34;nil&#34; then
    return nil
  else
    error(&#34;can not serialize a &#34; .. t .. &#34; type.&#34;)
  end
  return lua
end
function rslz(lua)
  local t = type(lua)
  if t == &#34;nil&#34; or lua == &#34;&#34; then
    return {}
  elseif t == &#34;number&#34; or t == &#34;string&#34; or t == &#34;boolean&#34; then
    lua = tostring(lua)
  else
    error(&#34;can not unserialize a &#34; .. t .. &#34; type.&#34;)
  end
  lua = &#34;return &#34; .. lua
  local func = loadstring(lua)
  if func == nil then
    return nil
  end
  return func()
end

--3. 历史记录框布局
function hstshow()
  hstlayout={
    LinearLayout,
    orientation=&#34;1&#34;,
    gravity=&#34;center&#34;,
    layout_width=&#34;wrap_content&#34;,
    layout_height=&#34;wrap_content&#34;,
    {
      TextView,
      text=&#34;&#34;,
      gravity=&#34;center&#34;,
      layout_width=&#34;wrap_content&#34;,
      textSize=&#34;0sp&#34;,
      background=&#34;#000000&#34;,
      layout_height=&#34;15dp&#34;,},
    {
      TextView,
      text=&#34;历史记录&#34;,
      gravity=&#34;center&#34;,
      layout_width=&#34;wrap_content&#34;,
      textSize=&#34;30sp&#34;,
      textStyle=&#34;bold&#34;,
      layout_height=&#34;50dp&#34;,},
    {
      ListView,
      id=&#34;hlst&#34;,
      items=lst,
      layout_width=&#34;fill&#34;,
      layout_height=&#34;wrap_content&#34;,
    },
  }
end

--##功能函数##

--1. 读取历史文件
function read_hst()
  import &#34;java.io.File&#34;
  File(lstads).createNewFile()
  slst=io.open(lstads):read(&#34;*a&#34;)
  File(lstwebads).createNewFile()
  slstweb=io.open(lstwebads):read(&#34;*a&#34;)
  --转换成 table
  lst=rslz(slst)
  lstweb=rslz(slstweb)
end

--2. 新网页加入历史记录
function add_hst()
  if string.len(webView.getTitle())&lt;=300 then--粗略过掉无效标题
    newtitle=webView.getTitle()
    newurl=webView.getUrl()
    table.insert(lst,1,newtitle) --标题表添加新标题
    table.insert(lstweb,1,newurl) --网址表添加新网址
  end
end

--3. 存储历史文件
function save_hst()
  --转换成 string
  slst=slz(lst)
  slstweb=slz(lstweb)
  --保存
  file=io.open(lstads,&#34;w&#43;&#34;)
  io.output(file)
  io.write(slst)
  io.flush()
  io.close(file)
  file=io.open(lstwebads,&#34;w&#43;&#34;)
  io.output(file)
  io.write(slstweb)
  io.flush()
  io.close(file)
end

--4. 显示历史记录框
function show_hst()
  hstshow()
  local hl=AlertDialog.Builder(activity)
  .setView(loadlayout(hstlayout))
  .setNegativeButton(&#34;取消&#34;,DialogInterface.OnClickListener{
    onClick=function()
    end
  })
  .create()
  hl.show()
  hlst.onItemClick=function(l,v,c,b)
    加载网页 (lstweb[b])
    hl.dismiss()
  end
  hlst.onItemLongClick=function(l,v,c,b)
    hl.dismiss()
    对话框 ()
    . 设置消息 (&#34;是否删除记录？&#34;)
    . 设置消极按钮 (&#34;取消&#34;,function()
      show_hst()
    end)
    . 设置积极按钮 (&#34;确定&#34;,function()
      table.remove(lst,b)
      table.remove(lstweb,b)
      save_hst()
      show_hst()
    end )
    . 显示 ()
    return true
  end
end
--5. 清除缓存
function clr()
  --导入 File 类
  import &#34;java.io.File&#34;
  --显示多选框
  items={&#34;浏览记录&#34;,&#34;缓存文件&#34;}
  多选对话框=AlertDialog.Builder(this)
  .setTitle(&#34;清除记录&#34;)
  --勾选后执行
  .setPositiveButton(&#34;确定&#34;,function()
    if clearhistory==1 and clearall==1 then
      File(lstads).delete()
      File(lstwebads).delete()
      lst={}
      lstweb={}
      os.execute(&#34;pm clear &#34;..activity.getPackageName())
    elseif clearhistory==0 and clearall==1 then
      os.execute(&#34;pm clear &#34;..activity.getPackageName())
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
  多选对话框。show();
  clearhistory=0
  clearall=0
end

activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
--11. 长按弹窗
function popwin(od)
  local win1=&#34;向上移动&#34;
  local win2=&#34;编辑&#34;
  local win3=&#34;向下移动&#34;
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
    orientation=&#34;vertical&#34;,
    {ListView,
      id=&#34;winlv&#34;,
      items=win,
      layout_width=&#34;fill_parent&#34;,
      layout_height=&#34;wrap_content&#34;,},
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
    table.insert(fav,b&#43;1,dfav)
    table.insert(favweb,b&#43;1,dfavweb)
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
  emmm=24411107&#43;8236000&#43;236-95463&#43;852
  for k,v in pairs(data) do
    keys[#keys&#43;1]=k
  end
  return keys
end

function listValues(data,MzI1NTI3MzI)
  values={}
  for k,v in pairs(data) do
    values[#values&#43;1]=v
  end
  q=&#34;325 52732&#34;
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
  orientation=&#34;1&#34;,
  layout_width=&#34;fill&#34;,
  layout_height=&#34;wrap_content&#34;,
  {
    ListView,
    id=&#34;list&#34;,
    layout_marginTop=&#34;10dp&#34;,
    --items={&#34;3&#34;,&#34;2&#34;,&#34;5&#34;,&#34;5&#34;,&#34;2&#34;,&#34;7&#34;,&#34;3&#34;,&#34;2&#34;},
    layout_width=&#34;fill&#34;,
    layout_height=&#34;wrap_content&#34;,
  }
}

local inputlayout={
  LinearLayout,
  orientation=&#34;vertical&#34;,
  Focusable=true,
  FocusableInTouchMode=true,
  {
    EditText,
    id=&#34;edit&#34;,
    hint=&#34;Input here&#34;,
    layout_marginTop=&#34;5dp&#34;,
    layout_width=&#34;80%w&#34;,
    --uh=&#34;32552732&#34;,
    layout_gravity=&#34;center&#34;,
  },
}

local input2layout={
  LinearLayout,
  orientation=&#34;vertical&#34;,
  Focusable=true,
  FocusableInTouchMode=true,
  {
    EditText,
    id=&#34;edit1&#34;,
    hint=&#34;Input here&#34;,
    --numa=&#34;32552&#34;,
    --aaa=&#34;bbb&#34;
    layout_marginTop=&#34;5dp&#34;,
    layout_width=&#34;80%w&#34;,
    layout_gravity=&#34;center&#34;,
  },
  {
    EditText,
    id=&#34;edit2&#34;,
    --ccc=&#34;ddd&#34;,
    --numb=&#34;732&#34;,
    --eee=&#34;fff&#34;,
    hint=&#34;Input here&#34;,
    layout_margiTop=&#34;5dp&#34;,
    layout_width=&#34;80%w&#34;,
    layout_gravity=&#34;center&#34;,
  },
}

function showDataDialog(name,title,jdpuk)

  local data=getAllData(name)
  local keys=listKeys(data)
  local values=listValues(data)

  item={
    LinearLayout,
    orientation=&#34;vertical&#34;,
    layout_width=&#34;fill&#34;,
    {
      TextView,
      id=&#34;text&#34;,
      textSize=&#34;16sp&#34;,
      layout_margin=&#34;10dp&#34;,
      layout_width=&#34;fill&#34;,
      layout_width=&#34;70%w&#34;,
      layout_gravity=&#34;center&#34;,
    },
  }

  local adpd=adapterData(values)
  local items=LuaAdapter(this,adpd,item)

  local dlb=对话框 ()
  dlb. 设置标题 (title)
  local dl
  if #keys&gt;0 then
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
      对话框 ()
      . 设置标题 (title)
      .setView(loadlayout(input2layout))
      . 设置积极按钮 (&#34;保存&#34;,function()--32552732
        if not(edit1.text==&#34;&#34;) and not(edit2.text==&#34;&#34;) or 3255==2732 then
          removeData(name,keys[id])
          putData(name,edit2.text,edit1.text)--32552732
          if dl then
            dl.dismiss()
            showDataDialog(name,title)
          end
        else
          弹出消息 (&#34;请填写所有字段&#34;)
        end
      end)
      . 设置消极按钮 (&#34;取消&#34;)
      . 设置中立按钮 (&#34;删除&#34;,function()
        removeData(name,keys[id])
        items.remove(pos)
        table.remove(keys,id)
        table.remove(values,id)
        if #adpd&lt;=0 then
          if dl then
            dl.dismiss()
            showDataDialog(name,title);
          end
        end
      end)
      . 显示 ()
      edit1.setHint(&#34;标题&#34;)
      edit2.setHint(&#34;链接&#34;)
      edit1.setText(values[id])
      edit2.setText(keys[id])
      return true
    end
  else
    dlb. 设置消息 (&#34;没有收藏&#34;)
  end
  dlb. 设置积极按钮 (&#34;新建收藏&#34;,function()addDataDialog(name,&#34;新建收藏&#34;)end)
  dl=dlb.show()
end

function addDataDialog(name,title,value,key)--32552732
  对话框 ()
  . 设置标题 (title)
  .setView(loadlayout(input2layout))
  . 设置积极按钮 (&#34;保存&#34;,function()
    if not(edit1.text==&#34;&#34;) and not(edit2.text==&#34;&#34;) or 325==52732 then
      if not getData(name,edit2.text) then
        putData(name,edit2.text,edit1.text)
      else
        弹出消息 (&#34;该链接已存在&#34;)
        addDataDialog(name,title,edit1.text,edit2.text)
      end
    else
      弹出消息 (&#34;请填写所有字段&#34;)
      addDataDialog(name,title,edit1.text,edit2.text)
    end
  end)
  . 设置消极按钮 (&#34;取消&#34;)
  . 显示 ()
  edit1.setHint(&#34;标题&#34;)
  edit2.setHint(&#34;链接&#34;)
  if(value)then
    edit1.setText(value)
  end
  if(key)then
    edit2.setText(key)
  end
end
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/fas-app/  

