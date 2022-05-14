import React from "react";
import Contact from "./Contact";

function ContactList({contacts}) {

    return (
        <div>
            <div className={"px-5 py-10 border-2 border-purple-200 bg-purple-50 rounded"}>
                <table className={"mx-auto shadow-2xl"}>
                    <thead className={"bg-purple-300 text-purple-900"}>
                        <tr><th>Id</th><th>Name</th><th>Email</th><th>Phone</th></tr>
                    </thead>
                    <tbody>
                        {contacts.map(e => <Contact data={e}/>)}
                    </tbody>
                </table>
            </div>
        </div>

    )
}


export default ContactList;