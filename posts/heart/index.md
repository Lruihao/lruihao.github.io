# “高逼格”C 语言画心


七夕又快到了，分享一个曾经玩过的代码，用 C 语言画一个跳动的心，很有逼格有木有。

![截图](https://i.loli.net/2018/08/29/5b8680e407e09.gif &#39;大一在机房拍的图&#39;)

&lt;!--more--&gt;

```c
#include &lt;stdio.h&gt;
#include &lt;math.h&gt;
#include &lt;windows.h&gt;
#include &lt;tchar.h&gt;

float f(float x, float y, float z) {
    float a = x * x &#43; 9.0f / 4.0f * y * y &#43; z * z - 1;
    return a * a * a - x * x * z * z * z - 9.0f / 80.0f * y * y * z * z * z;
}

float h(float x, float z) {
    for (float y = 1.0f; y &gt;= 0.0f; y -= 0.001f)
        if (f(x, y, z) &lt;= 0.0f)
            return y;
    return 0.0f;
}

int main() {
    HANDLE o = GetStdHandle(STD_OUTPUT_HANDLE);
    _TCHAR buffer[25][80] = { _T(&#39; &#39;) };
    _TCHAR ramp[] = _T(&#34;.:-=&#43;*#%@&#34;);

    for (float t = 0.0f;; t &#43;= 0.1f) {
        int sy = 0;
        float s = sinf(t);
        float a = s * s * s * s * 0.2f;
        for (float z = 1.3f; z &gt; -1.2f; z -= 0.1f) {
            _TCHAR* p = &amp;buffer[sy&#43;&#43;][0];
            float tz = z * (1.2f - a);
            for (float x = -1.5f; x &lt; 1.5f; x &#43;= 0.05f) {
                float tx = x * (1.2f &#43; a);
                float v = f(tx, 0.0f, tz);
                if (v &lt;= 0.0f) {
                    float y0 = h(tx, tz);
                    float ny = 0.01f;
                    float nx = h(tx &#43; ny, tz) - y0;
                    float nz = h(tx, tz &#43; ny) - y0;
                    float nd = 1.0f / sqrtf(nx * nx &#43; ny * ny &#43; nz * nz);
                    float d = (nx &#43; ny - nz) * nd * 0.5f &#43; 0.5f;
                    *p&#43;&#43; = ramp[(int)(d * 5.0f)];
                }
                else
                    *p&#43;&#43; = &#39; &#39;;
            }
        }

        for (sy = 0; sy &lt; 25; sy&#43;&#43;) {
            COORD coord = { 0, sy };
            SetConsoleCursorPosition(o, coord);
            WriteConsole(o, buffer[sy], 79, NULL, 0);
        }
        Sleep(33);
    }
}
```

[exe 文件下载 :(fa-solid fa-download):](heart.zip)


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/heart/  

