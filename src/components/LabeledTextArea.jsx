import React from "react";

function LabeledTextArea({label, name, value, onChange}) {

    return (
        <div>
          <label htmlFor={`LabeledTextArea_${name}`}>{label}</label>
            <textarea name={name} id={name} value={value} onChange={onChange}/>
        </div>
    )
}


export default LabeledTextArea;