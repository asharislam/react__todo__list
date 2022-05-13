import { useState } from "react";

const Counter = () =>{
    const[count, setCount] = useState(0);
    function increase(payLoad){
        setCount(count + payLoad)
    }
    function decrease(payLoad){
        setCount(count -payLoad)
    }

    return(
        <div className="container">
            <p>The Counter {count}</p>
            <div className="buttons">
                <button onClick={() => increase(2)}>Increse By 2</button>
                <button onClick={() => increase(2)}>Increse By 2</button>
                <button onClick={() => decrease(100)}>Decrese By 100</button>
                <button onClick={() => decrease(200)}>Decrese By 200</button>
            </div>
        </div>
    )
}
export default Counter;