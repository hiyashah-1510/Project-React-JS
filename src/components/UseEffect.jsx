import React, { useEffect, useState } from "react";

function UseEffect(){
    const [time , setTime] = useState(new Date)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date)
        }, 1000);

        return() => clearInterval(Date)
    },[])


    return(
        <>
            <h1>Real Time example</h1>
            <h3>Time : {time.toLocaleTimeString()}</h3>
        </>
    )
}

export default UseEffect;