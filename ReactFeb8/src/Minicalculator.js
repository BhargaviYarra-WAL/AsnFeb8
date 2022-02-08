import PropTypes from "prop-types";
function Minicalculator(props){
    if(props.operation == "add"){
        return <div className="Demo">
            <h2>MiniCalculator</h2>
            <h3>Num 1: {props.no1}</h3>
            <h3>Num 2 : {props.no2}</h3>
            <h3>Sum is {props.no1 + props.no2}</h3>
        </div>
    }
    else if(props.operation == "sub"){
        return <div className="Demo">
            <h2>MiniCalculator</h2>
            <h3>Num 1: {props.no1}</h3>
            <h3>Num 2 : {props.no2}</h3>
            <h3>Difference is {props.no1 - props.no2}</h3>
        </div>
    }
    else if(props.operation == "mul"){
        return <div className="Demo">
            <h2>MiniCalculator</h2>
            <h3>Num 1: {props.no1}</h3>
            <h3>Num 2 : {props.no2}</h3>
            <h3>Multiplication is { props.no1 * props.no2}</h3>
            
        </div>
    }
    else if(props.operation == "div"){
        return <div className="Demo">
            <h2>MiniCalculator</h2>
            <h3>Num 1: {props.no1}</h3>
            <h3>Num 2 : {props.no2}</h3>
            <h3>Division is {props.no1 / props.no2}</h3>  
        </div>
    }  
        
}

Minicalculator.propTypes={
    no1:PropTypes.number,
    no2:PropTypes.number,   
}
export default Minicalculator;