---
title: python实训总结Ⅱ
date: 2019-06-21 18:46:41
tags:
- python
categories:
- python
delicate: true
---

{% note info no-icon %}
后面几天讲的有点杂，简单记录一下知识点。
{% endnote %}

<!--more-->
# 6.19
> 这些知识点在课上都只是简单的提到了一下。
比如一些库的使用与安装都不会再课上详细讲解，需要课后再去研究。

## [切片操作](https://www.jianshu.com/p/15715d6f4dad)
列表切片操作

## 字符串
### python原始字符串
```python
print(r"D:\three\two")
```
### 长字符串
用三个单引号或者双引号包裹，前后呼应，成双成对。

### 用\换行字符表示字符未结束

## 格式化输出format
`"=={}=="`，`{}`表示占位符，其前后字符保持原样输出。 

```py TempConvert.py
#TempConvert.py
TempStr = input("请输入带有符号的温度值: ")
if TempStr[-1] in ['F','f']:
    C = (eval(TempStr[0:-1]) - 32)/1.8
    print("转换后的温度是{:.2f}C".format(C))
elif TempStr[-1] in ['C','c']:
    F = 1.8*eval(TempStr[0:-1]) + 32
    print("转换后的温度是{:.2f}F".format(F))
else:
    print("输入格式错误")
```
## 多变量赋值与交换（斐波那契数列）
python 3.x版本 `end=""` 可使输出不换行  
```py
print(x, end="")
```

```py 斐波那契数列
#斐波那契数列
a, b = 1,1
while a < 500: # 输出不大于500 的序列
    print(a,end=",")
    a,b = b,a + b #交换变量
```

## 笑傲江湖统计字符(dict,文件流)
> 统计《笑傲江湖》小说中出现的所有中文字符及标点符号的数量，每个字符及数目间用冒号`:`隔开，例如"笑:1024"，将所有字符及数量的对应采用逗号分隔，以CSV文件格式保存到`“笑傲江湖--字符统计.txt”`文件中。注意，统计字符不包括空格和回车。

>csv文件格式： ‘,’逗号连接元素

```py 
fi = open("data/笑傲江湖-网络版.txt","r",encoding="utf-8")
fo = open("data/笑傲江湖-字符统计.txt","w",encoding="utf-8")

txt = fi.read() #打开文件
#txt
d = {}

for c in txt:
    d[c] = d.get(c,0)+1

del d[' '] #删除字典中的空格和回车的键值对
del d['\n']

ls = []

for key in d:
    ls.append("{}:{}".format(key,d[key]))

fo.write(",".join(ls)) 
fi.close()
fo.close()
```
{% asset_img tj.png 文件读取及字符统计结果 %}

## numpy模块
**...**
## pandas模块
**...**

# 6.20

## matplotlib绘图
```py 指数函数
import matplotlib.pyplot as plt
import numpy as np
x = np.arange(-5,5,0.01)
y = 2**x+1
plt.plot(x,y)
plt.title("y=2^x+1",fontsize=24)
plt.xlabel("X",fontsize=14)
plt.ylabel("Y",fontsize=14)
plt.tick_params(axis="both",labelsize=14)
plt.show()
```
{% asset_img zhishu.png Y=2<sup>X</sup>+1 %}

## 爬虫
举了一个金融界，炒股，获取数据的爬虫
（今天没仔细听课，这数据爬过什么意思，咱不懂，咱也不敢问！）
```py stock15
#! /usr/bin/env python 
#-*- encoding: utf-8 -*- 
#author pythontab.com 
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import pandas_datareader.data as web
import datetime
#import tushare as ts

df_stockload = web.DataReader("000001.SS", "yahoo", datetime.datetime(2017,1,1), datetime.date.today())
#print(type(datetime.datetime.now().strftime('%Y-%m-%d')))
#df_stockload = ts.get_hist_data('sh',start='2017-01-01',end=datetime.datetime.now().strftime('%Y-%m-%d'))
print (df_stockload.columns)#查看列名
print (df_stockload.index)#查看索引
print (df_stockload.describe())#查看各列数据描述性统计

#绘制移动平均线
df_stockload.Close.plot(c='b')
df_stockload.Close.rolling(window=30).mean().plot(c='r') #pd.rolling_mean(df_stockload.Close,window=30).plot(c='r')
df_stockload.Close.rolling(window=60).mean().plot(c='g') #pd.rolling_mean(df_stockload.Close,window=60).plot(c='g')
plt.legend(['Close','30ave','60ave'],loc='best')
plt.show()
```
```py 结果
Index(['High', 'Low', 'Open', 'Close', 'Volume', 'Adj Close'], dtype='object')
DatetimeIndex(['2017-01-03', '2017-01-04', '2017-01-05', '2017-01-06',
               '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12',
               '2017-01-13', '2017-01-16',
               ...
               '2019-06-05', '2019-06-06', '2019-06-10', '2019-06-11',
               '2019-06-12', '2019-06-13', '2019-06-14', '2019-06-19',
               '2019-06-20', '2019-06-21'],
              dtype='datetime64[ns]', name='Date', length=596, freq=None)
              High          Low         Open        Close        Volume  \
count   596.000000   596.000000   596.000000   596.000000  5.960000e+02   
mean   3076.147753  3039.201569  3056.960338  3060.169056  5.098201e+06   
std     269.276147   273.757358   271.612122   272.072346  1.199107e+08   
min    2488.479004  2440.906982  2446.019043  2464.363037  8.820000e+04   
25%    2845.308228  2800.168762  2825.239502  2827.754822  1.375250e+05   
50%    3153.184937  3118.613525  3134.300537  3139.085449  1.666500e+05   
75%    3280.115234  3244.825256  3265.322021  3268.600342  2.091250e+05   
max    3587.031982  3534.195068  3563.639893  3559.465088  2.927580e+09   

         Adj Close  
count   596.000000  
mean   3060.169056  
std     272.072346  
min    2464.363037  
25%    2827.754822  
50%    3139.085449  
75%    3268.600342  
max    3559.465088 
```
{% asset_img stock15.png 生成的图 %}

# 6.21

## 类
比第一天稍微仔细一点讲了一下类,有点需要注意：
- `self`相当于`this`表示当前对象  
- python类的所有函数的第一个参数都要写`self`参数，self也可以是其他的比如`lrh`等字符替代，但是必须保持一致。
- `__`表示私有的
- class的定义可以不加(),()内可写继承的父类

## GUI设计 [wxPython](https://blog.csdn.net/mist99/article/details/80742548)
```bosh 安装 
pip install wxPython
```
```py 导入
import wx
```
```py 基本架构
import wx #导入wxPython库

class Panel(wx.Panel):  

    def __init__(self,parent):  

        wx.Panel.__init__(self,parent=parent, id=-1)  

        pass     

class Frame(wx.Frame):   

    def __init__(self):   

        wx.Frame.__init__(self, parent = None, title = u'量化软件', size=(1000,600), style=wx.DEFAULT_FRAME_STYLE^wx.MAXIMIZE_BOX)   

        self.DispPanel= Panel(self)

        pass            

class App(wx.App):

    def OnInit(self):

        self.frame = Frame()  

        self.frame.Show()

        self.SetTopWindow(self.frame)

        return True    

if __name__ == '__main__':   

    app = App()

    app.MainLoop()
```

```py helloworld
import wx

app = wx.App()
window = wx.Frame(None, title="wxPython 你好！", size=(400, 300))
panel = wx.Panel(window)
label = wx.StaticText(panel, label="Hello World", pos=(100, 100))
window.Show(True)
app.MainLoop()
```
{% asset_img wxpython 运行结果 %}

## talib库的安装

[下载whl文件](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ta-lib)

```
pip install TA_Lib-0.4.17-cp37-cp37m-win_amd64.whl
pip install TA-Lib
```
## 选择排序递归版
```py
def SelectSort(L):
    L=L[:]
    if len(L)<=1:
        return L
    min = 0
    for i in range(1,len(L)):
        if L[i]<L[min]:
            min = i
    L[min],L[0] = L[0],L[min]
    return [L[0]]+SelectSort(L[1:])

L = [5,2,3,6,1,9,8,10,0]
print(SelectSort(L))
```
```py 结果
[0, 1, 2, 3, 5, 6, 8, 9, 10]
```
## 机房上机系统(自我实践)

```py 简单机房上机系统源码
import time

class student():
    def __init__(self,stu_no="",stu_name="",stu_xi="",stu_time=""):
        self.stu_no = stu_no
        self.stu_name = stu_name
        self.stu_xi = stu_xi
        self.stu_time = stu_time

    def print(self):
        print("学号："+self.stu_no+"\t姓名："+self.stu_name+"\t系别："+self.stu_xi+"\t机时(h)："+self.stu_time)

    def get_stu_name(self):
        return self.stu_name

    def get_stu_time(self):
        return int(self.stu_time)

    def set_stu_time(self,add_time):
        self.stu_time = add_time

def menu():
    print("\t机房上机系统V0.1")
    print("********************************")
    print("\t—>1.录入学生信息")
    print("\t—>2.上机")
    print("\t—>3.下机")
    print("\t—>4.缴费")
    print("\t—>5.退出")
    print("********************************")
    select = eval(input("请输入序号："))
    while select not in [1,2,3,4,5]:
        print("输入错误，请重新输入！")
        select = eval(input("请输入序号："))
    return select

def get_time(): #获取当前时间
    return time.strftime("%H:%M:%S", time.localtime()) 

def main():
    # 全局变量
    text = [] # 上机记录列表
    start_time = ""
    end_time = ""
    sum = 0 # 本系统按小时计费，不足一小时按一小时算
    people = student()
    online_flag = False
    down_flag = False
    input_flag = False

    while True:
        select = menu() # 启用菜单

        if select == 1:
            if input_flag:
                print("已录入，无需重复操作，缴费请输入4:")
                continue
            else:
                input_flag = True
                stu_no = input("请输入学号：")
                stu_name = input("请输入姓名：")
                stu_xi = input("请输入系别：")
                stu_time = input("请输入机时：")
                people = student(stu_no,stu_name,stu_xi,stu_time)
                people.print()
                continue

        elif select == 2:
            if not input_flag:
                print("未录入学生信息，请录入！")
                continue
            if not online_flag:
                online_flag = True
                start_time = get_time()
                start_num = int(start_time[0:2])
                #print(start_num)

                text.append("上机时间："+start_time)
                print("已上机！上机时间为："+start_time)
                continue
            else:
                print("已上机！上机时间为："+start_time)
                continue
            
        elif select == 3:
            if not online_flag:
                print("还未上机，请上机！")
                continue
            else:
                end_time = get_time()
                end_num = int(end_time[0:2])
                sum = end_num - start_num
                sum = sum if(sum>=0) else sum+24
                sum = sum+1 if(sum==0) else sum
                print("已下机！下机时间为："+end_time+"\n上机时长(h)："+str(sum)+"\t剩余机时(h)："+str(people.get_stu_time()-sum))
                text.append("下机时间："+end_time+"\n上机时长(h)："+str(sum)+"\t"+people.get_stu_name()+"剩余机时(h)："+str(people.get_stu_time()-sum))
                people.set_stu_time(str(people.get_stu_time()-sum))
                down_flag = True
                continue

        elif select == 4:
            if not input_flag:
                print("未录入学生信息，请录入！")
                continue
            else:
                people.print()
                add_time = eval(input("请输入机时："))
                people.set_stu_time(str(add_time+people.get_stu_time()))
                people.print()

        else:
            if down_flag:
                print("3s后退出系统，感谢使用！")
                time.sleep(3) # 延迟3s，显示提示文字
                break # 退出系统 写入文件
            else:
                print("请下机！")
                continue


    #写入computer.txt文件
    fo = open("D:\\computer.txt","w",encoding="utf-8")
    fo.write("\n".join(text)) 
    fo.close()
    
if __name__=="__main__":
    main()
```

## 量化交易代码分析与调试
由于python的版本问题和一些库的导入问题所以还未调试成功，先挂上代码。以后改篇再论。
```py 主要代码
#! /usr/bin/env python 
#-*- encoding: utf-8 -*- 
#author pythontab.com 
import wx
import wx.adv
import numpy as np
import pandas as pd
import pandas_datareader.data as web
import matplotlib
import matplotlib.pyplot as plt
from matplotlib.figure import Figure  
import matplotlib.dates as mdates
import mpl_finance as mpf
from matplotlib.backends.backend_wxagg import FigureCanvasWxAgg as FigureCanvas
import matplotlib.gridspec as gridspec#分割子图
import datetime
import talib
import csv,os
import codecs

from RedefPanelMod import MPL_Panel_Base,Loop_Panel_Base
from StockDataMod import GetStockDatPro
from IndicatStrateMod import Excave_Indic_Base, QuantPickTimeSys,FactorPickStockAng

plt.rcParams['font.sans-serif']=['SimHei'] #用来正常显示中文标签
plt.rcParams['axes.unicode_minus']=False #用来正常显示负号

class UserDialog(wx.Dialog):# user-defined

    def __init__(self,parent,text):
        wx.Dialog.__init__(self,parent,-1,u"选股提示",size=(400,500),style=wx.CAPTION|wx.CLOSE_BOX|wx.MAXIMIZE_BOX|wx.MINIMIZE_BOX)
        
        sizer = wx.BoxSizer(wx.VERTICAL)
        
        pstock_Text = wx.StaticText(self, -1, u'选股策略筛选结果') 
        pstock_Text.SetFont(wx.Font(18,wx.DEFAULT,wx.NORMAL,wx.BOLD))
        pstock_sure = wx.TextCtrl(self, -1, "角度值:\n",size=(350,300),style = wx.TE_MULTILINE|wx.TE_READONLY)#多行|只读
        pstock_sure.SetFont(wx.Font(10,wx.DEFAULT,wx.NORMAL,wx.BOLD))

        okbtn = wx.Button(self,wx.ID_OK,u"确认")
        okbtn.SetDefault()
       
        sizer.Add(pstock_Text,flag=wx.ALIGN_CENTER)
        sizer.Add(pstock_sure,flag=wx.ALIGN_CENTER)
        sizer.Add(okbtn,flag=wx.ALIGN_CENTER)       
        self.SetSizer(sizer)
        for i in text:pstock_sure.AppendText(i)
    
        
class Frame(wx.Frame):   
    def __init__(self):   
        wx.Frame.__init__(self, parent = None, title = u'量化软件', size=(1500,800),   
                      style=wx.DEFAULT_FRAME_STYLE^wx.MAXIMIZE_BOX)   
        #创建显示区面板
        self.DispPanel = MPL_Panel_Base(self)
        self.BackPanel = Loop_Panel_Base(self)
        self.am = self.DispPanel.am
        self.vol = self.DispPanel.vol
        self.devol = self.DispPanel.devol
        self.macd = self.DispPanel.macd        
        
        #创建参数区面板
        self.ParaPanel = wx.Panel(self,-1)
        
        paraInput_Box = wx.StaticBox(self.ParaPanel, -1, u'参数输入') 
        paraInput_Sizer = wx.StaticBoxSizer(paraInput_Box, wx.VERTICAL)    
        self.StNameCodedict = {u"开山股份":"300257.SZ",u"浙大网新":"600797.SS",u"水晶光电":"002273.SZ", u"高鸿股份":"000851.SZ"}
        
        #初始化股票代码变量
        self.stockName_Val = u"开山股份"
        self.stockCode_Val = self.StNameCodedict[self.stockName_Val]
        
        self.stockName_CMBO = wx.ComboBox(self.ParaPanel, -1,self.stockName_Val, choices = list(self.StNameCodedict.keys()), style = wx.CB_READONLY|wx.CB_DROPDOWN) #股票名称
        stockCode_Text = wx.StaticText(self.ParaPanel, -1, u'股票名称') 

       #策略选取
        strate_Text = wx.StaticText(self.ParaPanel, -1, u'策略名称') 
        strate_Combo_Val = [u"双趋势融合", u"阿尔法", u"布林带"]
        self.pickstrate_Val = u"双趋势融合"
        self.pickstrate_CMBO = wx.ComboBox(self.ParaPanel, -1, self.pickstrate_Val, choices = strate_Combo_Val, style = wx.CB_READONLY|wx.CB_DROPDOWN) #策略名称        

        #日历控件选择数据周期
        self.dpcEndTime = wx.adv.DatePickerCtrl(self.ParaPanel, -1,style = wx.adv.DP_DROPDOWN|wx.adv.DP_SHOWCENTURY|wx.adv.DP_ALLOWNONE)#结束时间
        self.dpcStartTime = wx.adv.DatePickerCtrl(self.ParaPanel, -1,style = wx.adv.DP_DROPDOWN|wx.adv.DP_SHOWCENTURY|wx.adv.DP_ALLOWNONE)#起始时间
        DateTimeNow = wx.DateTime.Now()#wx.DateTime格式"03/03/18 00:00:00"
       #DateTimeNow = datetime.datetime.fromtimestamp(wx.DateTime.Now().GetTicks())
       #DateTimeNow = datetime.datetime.fromtimestamp(DateTimeNow)
        self.dpcEndTime.SetValue(DateTimeNow)
        DateTimeNow.SetYear(DateTimeNow.year-1)
        self.dpcStartTime.SetValue(DateTimeNow)
        stockData_Text = wx.StaticText(self.ParaPanel, -1, u'日期(Start-End)')
        
        #初始化时间变量
        dateVal = self.dpcStartTime.GetValue() 
        self.stockSdate_Val = datetime.datetime(dateVal.year,dateVal.month+1,dateVal.day)
        dateVal = self.dpcEndTime.GetValue() 
        self.stockEdate_Val = datetime.datetime(dateVal.year,dateVal.month+1,dateVal.day)

        paraInput_Sizer.Add(stockCode_Text,proportion=0,flag=wx.EXPAND|wx.ALL,border=2)
        paraInput_Sizer.Add(self.stockName_CMBO, 0, wx.EXPAND|wx.ALL|wx.CENTER, 2)
        paraInput_Sizer.Add(stockData_Text,proportion=0,flag=wx.EXPAND|wx.ALL,border=2)
        paraInput_Sizer.Add(self.dpcStartTime, 0, wx.EXPAND|wx.ALL|wx.CENTER, 2) 
        paraInput_Sizer.Add(self.dpcEndTime, 0, wx.EXPAND|wx.ALL|wx.CENTER, 2) 
        paraInput_Sizer.Add(strate_Text, 0, wx.EXPAND|wx.ALL|wx.CENTER, 2)
        paraInput_Sizer.Add(self.pickstrate_CMBO, 0, wx.EXPAND|wx.ALL|wx.CENTER, 2)
        
        RadioList = ["不显示","跳空缺口", "金叉/死叉", "N日突破"] 
        self.StratInputBox = wx.RadioBox(self.ParaPanel, -1, label=u'指标提示', choices=RadioList,majorDimension = 4, style = wx.RA_SPECIFY_ROWS) 
        self.StratInputBox.Bind(wx.EVT_RADIOBOX,self.OnRadioBox_Indicator) 
        #初始化指标变量
        self.IndicatInput_Val = self.StratInputBox.GetStringSelection()  
        
        self.TextAInput = wx.TextCtrl(self.ParaPanel, -1, "交易信息提示:", style = wx.TE_MULTILINE|wx.TE_READONLY)#多行|只读

        vboxnetA = wx.BoxSizer(wx.VERTICAL)#纵向box 
        vboxnetA.Add(paraInput_Sizer,proportion=0,flag=wx.EXPAND|wx.BOTTOM,border=2) #proportion参数控制容器尺寸比例
        vboxnetA.Add(self.StratInputBox,proportion=0,flag=wx.EXPAND|wx.BOTTOM,border=2)         
        vboxnetA.Add(self.TextAInput,proportion=1,flag=wx.EXPAND|wx.ALL,border=2) 
        self.ParaPanel.SetSizer(vboxnetA)
        
        #创建Right面板
        self.CtrlPanel = wx.Panel(self,-1) 
        #创建FlexGridSizer布局网格
        self.FlexGridSizer=wx.FlexGridSizer(rows=3, cols=1, vgap=3, hgap=3)  
        
        #行情按钮
        self.Firmoffer = wx.Button(self.CtrlPanel,-1,"行情")
        self.Firmoffer.Bind(wx.EVT_BUTTON,self.FirmEvent)#绑定行情按钮事件  
        #选股按钮
        self.Stockpick = wx.Button(self.CtrlPanel,-1,"选股")  
        self.Stockpick.Bind(wx.EVT_BUTTON,self.PstockpEvent)#绑定选股按钮事件
        #回测按钮  
        self.Backtrace = wx.Button(self.CtrlPanel,-1,"回测")  
        self.Backtrace.Bind(wx.EVT_BUTTON,self.BackEvent)#绑定回测按钮事件
         
        #加入Sizer中  
        self.FlexGridSizer.Add(self.Firmoffer,proportion = 1, border = 5,flag = wx.ALL | wx.EXPAND)  
        self.FlexGridSizer.Add(self.Stockpick,proportion = 1, border = 5,flag = wx.ALL | wx.EXPAND)  
        self.FlexGridSizer.Add(self.Backtrace,proportion = 1, border = 5,flag = wx.ALL | wx.EXPAND) 
        self.FlexGridSizer.SetFlexibleDirection(wx.BOTH)  
        
        self.CtrlPanel.SetSizer(self.FlexGridSizer)  
        
        self.HBoxPanel = wx.BoxSizer(wx.HORIZONTAL)
        self.HBoxPanel.Add(self.ParaPanel,proportion = 1.5, border = 2,flag = wx.EXPAND|wx.ALL) 
        self.HBoxPanel.Add(self.DispPanel,proportion = 8, border = 2,flag = wx.EXPAND|wx.ALL )         
        self.HBoxPanel.Add(self.CtrlPanel,proportion = 1, border = 2,flag = wx.EXPAND|wx.ALL ) 
        self.SetSizer(self.HBoxPanel)    

    def ProcessStock(self):         
        #df_stockload = web.DataReader("600797.SS", "yahoo", datetime.datetime(2017,1,1), datetime.date.today())
        df_stockload = GetStockDatPro(self.stockCode_Val,self.stockSdate_Val, self.stockEdate_Val)

        """ 绘制移动平均线图 """
        #self.am.plot(self.numic[0:self.butNum],self.close[0:self.butNum],'#0f0ff0',linewidth=1.0)
        
        dispCont_List = []

        examp_trade= Excave_Indic_Base()
        if self.IndicatInput_Val == u"金叉/死叉":  
            dispCont_pd,dispCont_List = examp_trade.plot_Aver_Cross(df_stockload)
            self.DispPanel.draw_avercross(df_stockload,dispCont_pd)
        elif self.IndicatInput_Val == u"跳空缺口":
            dispCont_pd,dispCont_List = examp_trade.plot_Jump_Thrd(df_stockload)
            self.DispPanel.draw_jumpgap(df_stockload,dispCont_pd)
        elif self.IndicatInput_Val == u"N日突破":
            dispCont_pd,dispCont_List = examp_trade.plot_Ndays_Break(df_stockload)
            self.DispPanel.draw_ndaysbreak(df_stockload,dispCont_pd)
        else:
            dispCont_List = dispCont_List
            
        self.TextAInput.SetValue(u"指标提示信息如下:"+'\n')
        for i in dispCont_List:self.TextAInput.AppendText(i)

        numic = np.arange(0,len(df_stockload.index))
        butNum = len(df_stockload.index)
        self.DispPanel.xylabel_tick_lim(self.stockName_Val,df_stockload.index)
        self.DispPanel.draw_subgraph(df_stockload,numic)

    def ProcessLoop(self): 

        df_stockload = GetStockDatPro(self.stockCode_Val,self.stockSdate_Val, self.stockEdate_Val)
        dispCont_List = []
        if self.pickstrate_Val == u"双趋势融合":  
            #多趋势融合策略执行 """
            examp_trade= QuantPickTimeSys(df_stockload)
            dispCont_List = examp_trade.run_factor_plot(self.BackPanel.trade,self.BackPanel.total,self.BackPanel.profit)           
        else:
            #执行其他策略
            pass    
            
        self.TextAInput.SetValue(u"策略提示信息如下:"+'\n')
        for i in dispCont_List:self.TextAInput.AppendText(i)
        self.BackPanel.xylabel_tick_lim(self.stockName_Val)
        
    def reFlashLoop(self): 
        self.BackPanel.clear_subgraph()#必须清理图形才能显示下一幅图
        self.ProcessLoop()
        self.BackPanel.update_subgraph()#必须刷新才能显示下一幅图 

    def reFlashFrame(self): 
        self.DispPanel.clear_subgraph()#必须清理图形才能显示下一幅图
        self.ProcessStock()
        self.DispPanel.update_subgraph()#必须刷新才能显示下一幅图 
        
    def FirmEvent(self,event):
        #显示行情面板
        self.HBoxPanel.Hide(self.BackPanel)
        self.HBoxPanel.Replace(self.BackPanel,self.DispPanel)
        self.HBoxPanel.Show(self.DispPanel)
        #self.HBoxPanel.Remove(self.BackPanel)
        self.SetSizer(self.HBoxPanel)  
        self.HBoxPanel.Layout()    
    
        #获取列表股票代码和起始时间
        self.stockName_Val = self.stockName_CMBO.GetString(self.stockName_CMBO.GetSelection())
        self.stockCode_Val = self.StNameCodedict[self.stockName_Val]

        dateVal = self.dpcStartTime.GetValue() 
        self.stockSdate_Val = datetime.datetime(dateVal.year,dateVal.month+1,dateVal.day)
        dateVal = self.dpcEndTime.GetValue() 
        self.stockEdate_Val = datetime.datetime(dateVal.year,dateVal.month+1,dateVal.day)

        self.reFlashFrame()
 
    def BackEvent(self,event):       
        #显示回测面板
        self.HBoxPanel.Hide(self.DispPanel)
        self.HBoxPanel.Replace(self.DispPanel,self.BackPanel) 
        self.HBoxPanel.Show(self.BackPanel)
        #self.HBoxPanel.Remove(self.DispPanel)
        self.SetSizer(self.HBoxPanel)  
        self.HBoxPanel.Layout()

        #获取策略名称
        self.pickstrate_Val = self.pickstrate_CMBO.GetString(self.pickstrate_CMBO.GetSelection())
        self.reFlashLoop()
        
    def PstockpEvent(self,event):
        dispCont_List = []
        """ 选股策略执行 """
        examp_trade= FactorPickStockAng()
        for index, stockName in enumerate(self.StNameCodedict.keys()) : 
            print("stockName",stockName,self.StNameCodedict[stockName])
            df_stockload = GetStockDatPro(self.StNameCodedict[stockName],self.stockSdate_Val, self.stockEdate_Val)
            df_stockload.fillna(method='bfill',inplace=True)#后一个数据填充NAN1
            dispCont_List.append(stockName+'\n'+examp_trade.fit_pick(df_stockload.Close)+'\n')
        print(dispCont_List)
        """ 选股策略执行 """
        """ 自定义提示框 """
        myPickStock = UserDialog(self,dispCont_List)    
        if myPickStock.ShowModal() == wx.ID_OK:
            pass 
        else:
            pass
        """ 自定义提示框 """

    def OnRadioBox_Indicator(self,event):  
        self.IndicatInput_Val = self.StratInputBox.GetStringSelection()

      
class App(wx.App):
    def OnInit(self):
        self.frame = Frame()  
        self.frame.ProcessStock()
        self.frame.Show()
        self.SetTopWindow(self.frame)
        return True
    
if __name__ == '__main__':   
    app = App()
    app.MainLoop() 
```

