import React from "react";

function LabeledInput({label, type, name, value, onChange, inline}) {
    const inlineClass = inline ? "inline" : "";
    const displayFull = !inline? "w-full mt-2" : "";

    return (
        <div className={`my-5 ${inlineClass}`}>
          <label htmlFor={`LabeledInput_${name}`}
                 className={"text-xl mr-5 text-purple-900"}>{label}</label>
            <input type={type} name={name} id={name} value={value} onChange={onChange}
                   className={`${displayFull} rounded-2xl focus:ring-2 focus:ring-purple-100 shadow-lg`}
            />
        </div>
    )
}


export default LabeledInput;