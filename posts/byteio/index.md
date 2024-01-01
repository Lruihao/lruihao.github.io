# 文件加密解密（字节流）


&gt; 基本功能：给定一个密钥，读取文件内容，加密后，输出到另外一个文件。
&gt;
&gt; 这里使用文件输入流读取文件内容，然后每个字节和密码进行异或简单加密。加密完成，使用文件输出流写入另一个文件中。解密和加密方法一样。利用的是对同一个数异或两遍其值不变的性质。因此一个程序可以完成加密和解密功能。只需修改文件名即可。

&lt;!--more--&gt;

## 文件加密解密

```java
package cn.lruihao.base;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class EncryptFile {

  public static void main(String[] args) throws IOException {
    byte pwd=123;//加密/解密密码
    FileInputStream f=new FileInputStream(&#34;src/cn/lruihao/base/EncryptFile.java&#34;);//待加密文件
    FileOutputStream fout=new FileOutputStream(&#34;encrypted.txt&#34;);//已加密文件
    System.out.println(&#34;开始加密。&#34;);
    int n=f.available()/5;
    byte[] b=new byte[n];//以一个字节数组的长度读取和复制
    int count=0;
    while((count=f.read(b,0,n))!=-1) {
      //写入之前先加密/解密
      for(int i=0;i&lt;count;i&#43;&#43;) {
        b[i]=(byte)(b[i]^pwd);//
      }
      fout.write(b,0,count);
    }
    System.out.println(&#34;完成加密&#34;);
    f.close();
    fout.close();
//    f=new FileInputStream(&#34;encrypted.txt&#34;);
//    fout=new FileOutputStream(&#34;unencrypted.txt&#34;);
//    System.out.println(&#34;开始解密。&#34;);
//    n=f.available()/5;
//    b=new byte[n];//以一个字节数组的长度读取和复制
//    count=0;
//    while((count=f.read(b,0,n))!=-1) {
//      //写入之前先加密/解密
//      for(int i=0;i&lt;count;i&#43;&#43;) {
//        b[i]=(byte)(b[i]^pwd);
//      }
//      fout.write(b,0,count);
//    }
//    System.out.println(&#34;完成解密&#34;);
//    f.close();
//    fout.close();
  }

}
```

## 文件复制

```java
package cn.lruihao.base;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileStreamCopy {

  public static void main(String[] args) throws IOException {
    int size;
    FileInputStream f=new FileInputStream(&#34;src/cn/lruihao/base/FileStreamCopy.java&#34;);
    FileOutputStream fout=new FileOutputStream(&#34;copy-of-file.txt&#34;);
    System.out.println(&#34;总长度：&#34;&#43;(size=f.available()));
    int n=size/10;
    System.out.print(&#34;使用单字节方法读取后：&#34;);
    for(int i=0;i&lt;n;i&#43;&#43;) {
      fout.write(f.read());
    }
    System.out.println(&#34;剩余长度：&#34;&#43;f.available());
    System.out.println(&#34;读取一个字节数组后：&#34;);
    byte b[]=new byte[n];
    f.read(b);
    fout.write(b);
    System.out.println(&#34;剩余长度：&#34;&#43;f.available());
    System.out.println(&#34;读取余下数据：&#34;);
    int count=0;
    while((count=f.read(b,0,n))!=-1) {
      //System.out.println(count);
      fout.write(b,0,count);
    }
    System.out.println(&#34;剩余长度：&#34;&#43;f.available());
    f.close();
    fout.flush();
    fout.close();
  }

}
```

```java
package cn.lruihao.base;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class BufferedStreamCopy {

  public static void main(String[] args) throws IOException {
    FileInputStream f=new FileInputStream(&#34;src/cn/lruihao/base/BufferedStreamCopy.java&#34;);
    FileOutputStream fout=new FileOutputStream(&#34;copy-of-file.txt&#34;);
    BufferedInputStream bis=new BufferedInputStream(f);
    BufferedOutputStream bos=new BufferedOutputStream(fout);
    System.out.println(&#34;开始复制。&#34;);
    int n=f.available()/5;
    byte[] b=new byte[n];
    int count=0;
    while((count=bis.read(b,0,n))!=-1) {
      bos.write(b,0,count);
    }
    System.out.println(&#34;复制完成&#34;);
    bis.close();
    bos.flush();
    bos.close();
    f.close();
    fout.flush();
    fout.close();
  }

}
```


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/byteio/  

