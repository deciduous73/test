import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 测试
    // setInterval(() => {
    //   console.log("当前值：", count);
    // }, 1000);
  }, [count]);

  return (
    <>
      count: {count}
      <br />
      <button onClick={() => setCount((val) => val + 1)}>增加 1</button>
    </>
  );
}

export default App;
