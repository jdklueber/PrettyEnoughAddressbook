import React from "react";

function Contact({data}) {

    return (
        <tr className={"odd:bg-white even:bg-purple-50"}>
            <td className={"px-5"}>{data.id}</td>
            <td>{data.first_name} {data.last_name}</td>
            <td>{data.email}</td>
            <td className={"px-5"}>{data.phone}</td>
        </tr>
    )
}


export default Contact;