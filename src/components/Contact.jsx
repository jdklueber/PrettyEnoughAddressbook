import React from "react";

function Contact({data}) {

    return (
        <div>
            {data.id} {data.first_name} {data.last_name} {data.email} {data.phone} {data.notes}
        </div>
    )
}


export default Contact;