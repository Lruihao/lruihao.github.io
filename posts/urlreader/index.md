# java 通过 URL 和 URLConnection 访问网页资源


> 该例中首先生成一个 URL 对象 lrh，指向 RUI 豪小栈，然后再调用 lrh.openStream() 方法生成该 URL 的一个输入流，这是一个字节流，在此基础上进一步通过 InputStreamReader 和 BufferedReader 构造一个带缓冲功能的字符流，并通过这个字符流对象读取该 URL 的 html 内容，进而输出到桌面文件和控制台屏幕。URLConnection 类也可以用来对由 URL 引用的资源进行读写操作，前提是先通过 connect() 方法建立连接，然后再去获取响应头信息或响应内容。

<!--more-->

```java
package cn.lruihao.base;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class URLReader {

	public static void main(String[] args) throws Exception{
		try {
			URL lrh=new URL("https://www.lruihao.cn");
			File file=new File("C:\\Users\\李瑞豪、\Desktop\\lrh.html");
			FileWriter fout=new FileWriter(file);
			BufferedReader in =new BufferedReader(new InputStreamReader(lrh.openStream()));//字节流转化成字符流，再构建缓冲字符流
			String inputLine;
			while((inputLine=in.readLine())!=null) {
				System.out.println(inputLine);
				fout.write(inputLine);
			}
			in.close();
			fout.close();
			
			//获取响应 header 信息
			URLConnection conn=lrh.openConnection();
			conn.connect();
			System.out.println("获取到的响应长度："+conn.getContentLength());
			System.out.println("响应类型："+conn.getContentType());

			//用 BufferedReader 读取 URL 的响应
			in =new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String line;
			String result=null;
			while((line=in.readLine())!=null) {
				result+=line;
			}
			System.out.println(result);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
```

---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/urlreader/  

