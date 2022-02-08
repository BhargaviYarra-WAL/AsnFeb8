import PropTypes from "prop-types";
function AddNos(props){
    return(
        <div className="AddNo">
            <h2>Adding Numbers</h2>
            <h4>No1={props.no1}</h4>
            <h4>No2={props.no2}</h4>
            <h4>Sum of two numbers:{props.no1+props.no2}</h4>   
        </div>
    )
}
AddNos.propTypes={
    no1:PropTypes.number,
    no2:PropTypes.number,   
}
export default AddNos;