import React, { useEffect, useState } from "react";

function UseEffect() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Component Mounted..!");

    const timer = setInterval(() => {
      setTime(new Date());
      console.log("Component Updated..!");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Component Unmounted..!");
    };
  }, []);

  return (
    <>
      <h1>Real Time Example</h1>
      <h3>Time: {time.toLocaleTimeString()}</h3>
    </>
  );
}

export default UseEffect;
