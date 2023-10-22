 
 import Proptypes from "prop-types"
 
 
 
 export default  function TextInput({id,label,value,setValue}){
    return(
        <div>
        <label htmlFor={id}>{label}</label>
        <input
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
        />
    </div>
    )

 }

 TextInput.propTypes = {
    id:Proptypes.string,
    label:Proptypes.string,
    value:Proptypes.func,
    setValue:Proptypes.func
 }