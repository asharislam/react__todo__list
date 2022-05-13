import { useState } from "react";

const Counter = function(){
    const[count, setCount] = useState(0);
    let increase = ()=>{
        setCount(count + 1)
    }

    let decrease = ()=>{
        setCount(count - 1)
    }
    let reset = ()=>{
        setCount(count - count)
    }


    return(
        <div className="container">

        <h2>The Counter Number is: {count}</h2>    
        <button onClick={increase}>Increase</button>
        <button onClick={decrease} disabled= {count===0 ? true:false}>Decrease</button>
        <button onClick={reset}>Reset</button>
            
        </div>
    )
}
export default Counter;