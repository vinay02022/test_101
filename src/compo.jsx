import React from "react";
function Compo() {
    const [count, setCount] = useState(0);
    function handleClick() {
        console.log("Button clicked!");
        setCount(count + 1);
    }
    return (
        <div>
            <h1><button type="button" onClick={()=>handleClick()}>Click me</button></h1>
            <p>You clicked {count} times</p>
            
        </div>
    )
}