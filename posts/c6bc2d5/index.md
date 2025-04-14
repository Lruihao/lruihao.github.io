# 写文档时英文标题什么时候要大写？


对于本文的标题的思考来自于 [Hugo 配置文档](https://gohugo.io/getting-started/configuration/#titlecasestyle)中的一个配置 `titleCaseStyle`，默认情况下，Hugo 在创建自动章节标题以及使用 `strings.Title` 函数转换字符串时遵循美联社样本中发布的大小写规则。

但是这似乎和我高中所学的英文标题大小写规则有所出入，我记得我的高中英语老师教的是虚词不需要大写的，而不是美联社风格的每个单词都首字母大写。

经过一番查阅，以下部分内容引用北京师范大学 - 出版科学研究院的一篇文章，[“出版物中，英文什么时候要大写？ ”](https://pub.bnu.edu.cn/jzyg1/72203.html)。

<!--more-->

## 标题中的大写规则

### 英式英语

文章标题一般只第一个单词的首字母大写，主副标题均是。

例如：China Daily《中国日报》的文章标题均第一个单词首字母大写。

China's panda protection bears fruit amid 150th anniversary of discovery.

### 美式英语（比较常见）

1. 标题的第一个单词，无论是实词还是虚词，首字母要大写。
2. 实词首字母要大写，比如名词、动词、形容词、副词、代词等。
3. 虚词推荐使用小写，除非在标题的第一个单词，比如冠词、介词、连词、感叹词等。

    满 5 个字母的虚词可以大写，不满 5 个字母的不得大写，满 7 个字母的虚词（through）则在标题或条标中必须大写。
    还有一种说法：虚词字母多于 3 个（不含 3）时首字母大写。

例如：

The Visual Arts and the Catholic Reformation

视觉艺术与天主教改革

看到这里和我高中所学的规则是一致的，终于对上了。另外这种风格对应的就是 Hugo 的 `titleCaseStyle` 配置项的 `chicago`，[Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html)（应该是吧 :D）

## 句子的大写规则

1. 句子开头的第一个字母要大写。“I（我）”在句中任何位置都要大写。

    例如：Mary and I are teachers．

2. 直接引语中，句首字母要大写。

    例如："Then," I said, "You have been making a mistake, and the letter is not in the apartment."

3. 诗歌每一行的第一个单词的首字母要大写。

## 专有名词、缩略词及其他大写情况

1. 国名、地名、人名、艺术作品、船只、航空器等专有名词首字母要大写。

    例如：Russia（俄罗斯），Youyang（酉阳），Chengdu（成都），Jack（杰克）

2. 由普通名词构成的专有名词词组，除其中的冠词、较短的介词和连词外，每个词的首字母都要大写。

    例如：the Great Wall（长城），the United States（美国）

3. 表示语种、民族的名词或形容词首字母要大写。

    例如：Russian（俄语、俄罗斯人的），Chinese（汉语、中国人的）

4. 星期、月份名称的首字母要大写，但季节名称首字母不大写。

    例如：Sunday 星期天，August 八月（星期、月份大写）

    winter 冬天，spring 春天（季节不大写）

5. 一些大型节日名称的第一个实词的首字母大写。

    例如：Children's Day 儿童节，National Day 国庆节，Teachers' Day 教师节

6. 大型会议、文件、条约、组织机关、学校等名称中的每个实词的首字母都要大写，这些名称的缩略词也大写。

    例如：Conference of Asia and Africa   亚非会议

    World Trade Organization 世界贸易组织（WTO）

    Beijing Normal University 北京师范大学（BNU）

7. 书名、报刊名中的每个实词的首字母应大写（且用斜体）。

    New York Times《纽约时报》

    English Coaching Paper《英语辅导报》

8. south，north 等方位名词一般小写，但形成专有名词时要大写。

    例如：South Africa（南非），North Carolina（北卡罗莱纳州）

9. 一些亲属关系（如 mother，sister，mum，dad 等）用作称呼语时首字母要大写。

    例如：Thank you, Granny．谢谢你，奶奶。

10. 人名前的称呼，以及头衔、职务的词首字母要大写。

    例如：Mr Green 格林先生，Dr. Li 李博士

11. 大多数的缩略词要大写。

    例如：OK (Okay), CCTV (China Central Television)

    由单词首字母构成的缩略词一般全部字母都大写，注意区分下列情况：

    who 谁

    WHO (World Health Organization) 世界卫生组织

    Project Hope 希望工程

    Project HOPE (Health Opportunities for People Everywhere) 世界健康基金会（简称世健会）

## 全部字母大写

1. 表示惊讶、感叹或强调时，部分单词会全部大写。
2. 美术设计根据需要，书名会全部字母大写。

例如：

LOOKING AHEAD


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/c6bc2d5/  

