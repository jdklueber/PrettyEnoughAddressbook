import React from "react";

function LabeledTextArea({label, name, value, onChange}) {

    return (
        <div>
          <label htmlFor={`LabeledTextArea_${name}`}
                 className={"text-xl mr-5 text-purple-900"}
          >{label}</label>
            <textarea name={name} id={name} value={value} onChange={onChange}
                      className={"rounded-2xl focus:ring-2 focus:ring-purple-100 shadow-lg w-full h-40"}/>
        </div>
    )
}


export default LabeledTextArea;