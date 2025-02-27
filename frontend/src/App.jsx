import { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";

function App() {

  const [code, setCode] = useState(`
    function add(a, b) {
    return a + b;
    }
    `);

  useEffect(() => {
    prism.highlightAll();
  }, []);


  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <button onClick={reviewCode} className="review">Review</button>
        </div>

        <div className="right"></div>
      </main>
    </>
  );
}

export default App;
