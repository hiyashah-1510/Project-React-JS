import React, { useState } from "react";

function FormEvent(){
    const [name , setName] = useState("")

    return(
        <>
            <h1>Live Name</h1>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
            <h3>Your name is {name}</h3>
        </>
    )
}

export default FormEvent;