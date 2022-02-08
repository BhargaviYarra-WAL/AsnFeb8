import { func } from "prop-types";
import {useState} from "react";
function Hobby(){
    let [hobby,setHobby]=useState([]);

    function addHobby(event){
        event.preventDefault();
        console.log(event);
        let formTag=event.target;
        let inputTag=formTag.hobby;
        let newHobby=[...hobby,inputTag.value]
        setHobby(newHobby);
    }
    function removeAll(){
        setHobby([]);
    }
    return(
        <div>
            <form onSubmit={addHobby}>
                <input type="text" name="hobby"/>
                <button>Add Hobby</button>
            </form>
            <button onClick={removeAll}>Remove all</button>
            {hobby.map(function(val,index){
                return <div>{val}</div>
            })}
        </div>
    )
}
export default Hobby;