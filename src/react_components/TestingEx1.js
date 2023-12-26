import React, { useEffect, useState } from "react";

export const TestingEx1 = () => {
  const [advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCounter((counter) => counter + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Msg count={counter} />
    </div>
  );
};

const Msg = ({ count }) => <p>{count}</p>;
