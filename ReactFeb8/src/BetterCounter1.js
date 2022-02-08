import Hobby from "./Hobby";
import {useState} from "react";
function BetterCounter1(){
    let [count,setcount]=useState(0);
    function increase(){
        setcount(count+1);
    }
    function decrease(){
        setcount(count-1);
    }
    function reset(){
        setcount(0);
    }
    return(
        <div>
            <Hobby></Hobby>
            count={count}<br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default BetterCounter1;