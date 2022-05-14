import React from "react";

function LabeledInput({label, type, name, value, onChange}) {

    return (
        <div>
          <label htmlFor={`LabeledInput_${name}`}>{label}</label>
            <input type={type} name={name} id={name} value={value} onChange={onChange}/>
        </div>
    )
}


export default LabeledInput;