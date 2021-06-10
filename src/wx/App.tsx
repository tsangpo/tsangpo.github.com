import React, { useState, useRef } from "react";
import "./App.scss";

const defaultImages = `
https://mmbiz.qpic.cn/sz_mmbiz_jpg/MhM4icFco851Cl2YpAfSVzgJOT7pOU8RMIQPbdwWpKdziaqwAAskYjs0mAZsPb6Ha0gd9JibopLSFF7dQWbXiaAVFQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1
https://mmbiz.qpic.cn/sz_mmbiz_jpg/MhM4icFco851Cl2YpAfSVzgJOT7pOU8RMNlrjBsCoV3NwVx5UZEqLGULtj5iaElQv5B71dr3nib38iawFNzgmI9ZsQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1
https://mmbiz.qpic.cn/sz_mmbiz_jpg/MhM4icFco851Cl2YpAfSVzgJOT7pOU8RMWy8McJ47k88Y8UOzF7HEq2aEJ0Ans7EdBREh5AH8O7ZyPT8c69ibJQg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1
https://mmbiz.qpic.cn/sz_mmbiz_jpg/MhM4icFco851Cl2YpAfSVzgJOT7pOU8RMHpWmvCs94TGiaxqeIm8Ng90GgR2YhicJRUpGD7axZuSgZKbRLRHSPQzA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1
`;

function App() {
  const [input, setInput] = useState(defaultImages);
  const refOutput = useRef(null);

  const urls = input
    .trim()
    .split("\n")
    .map((l) => l.trim());

  const styles: { [key: string]: React.CSSProperties } = {
    container: { display: "flex", overflowX: "auto" },
    image: { flex: "0 0 100%", display: "block", width: "100%" },
  };

  return (
    <article className="app-slider">
      <aside>
        <h2>图片拼接滑动</h2>
        <p>输入图片地址，每个一行</p>
        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></textarea>

        <button
          onClick={() => {
            window.getSelection()?.selectAllChildren(refOutput.current!);
            document.execCommand("copy");
          }}
        >
          选择复制
        </button>
      </aside>
      <main>
        <output ref={refOutput}>
          从这里开始复制
          <section style={styles.container}>
            {urls.map((l) => (
              <img style={styles.image} src={l} />
            ))}
          </section>
          滑动查看更多
        </output>
      </main>
    </article>
  );
}

export default App;
