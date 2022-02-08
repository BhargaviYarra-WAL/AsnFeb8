
import {useState} from "react";
function Average(){
    let [number,setNumber]=useState([]);
    let [Avg,setAvg]=useState([])
    function addNumber(event){
        event.preventDefault();
        let formTag=event.target;
        let inputTag=formTag.number;
        let newNum=[...number,inputTag.value]
        setNumber(newNum);
    }
    function Avrg(){
        let sum=0;
        number.map(function(val){
            sum=sum+Number(val)
        })
        setAvg((sum/number.length))
    }
    return(
        <div className="Average">
            <h2>Average Of Numbers</h2>
            <form onSubmit={addNumber}>
                <input type="number" name="number"/><br/>
                <button>Add Number</button>
            </form>
            <button onClick={Avrg}>Average</button>
            {number.map(function(val,index){
                return <div>{val}</div>
            })}
            <h2>Average of Numbers is :{Avg}</h2>
        </div>
    )
}
export default Average;