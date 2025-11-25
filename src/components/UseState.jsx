import React, { useState } from "react";

function UseState(){
    const [count , setCount] = useState(0);

    return(
        <>
            <h1>UseState</h1>
            <h3>Count : {count}</h3>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default UseState;