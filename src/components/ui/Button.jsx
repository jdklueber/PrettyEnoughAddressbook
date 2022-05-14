import React from "react";

function Button({label, onClick, secondary}) {
    const additionalClasses = secondary ?
        "border-purple-300 bg-purple-50 text-purple-900"
        : "border-purple-900 bg-purple-400 text-purple-50";

    return (
        <button onClick={onClick} className={`border-2 drop-shadow-2xl p-3 rounded-full
                                              w-1/6 
                                              ${additionalClasses}`}>
            {label}
        </button>
    )
}


export default Button;