import {useState} from "react";
function BetterCounter(){
    let returnVal=useState(0);
    console.log(returnVal);
    function increase(){
        returnVal[1](returnVal[0]+1);
    }
    function decrease(){
        returnVal[1](returnVal[0]-1);
    }
    function reset(){
        returnVal[1](0);
    }
    return(
        <div>
            count={returnVal[0]}<br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default BetterCounter;