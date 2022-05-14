import React, {useState} from "react";
import LabeledInput from "../components/ui/LabeledInput";
import LabeledTextArea from "../components/ui/LabeledTextArea";
import Button from "../components/ui/Button";

const CONTACT_TEMPLATE = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    notes: ""
}

function AddPage({data, setData}) {
    const [newContact, setNewContact] = useState(CONTACT_TEMPLATE);

    const formFieldSetter = (field_name, e) => {
        const newData = {...newContact};
        newData[field_name] = e.currentTarget.value;
        setNewContact(newData);
    }

    const saveContact = () => {
        const contact = {...newContact};
        contact.id = data.reduce( (id, e) => {return id > e.id? id : e.id}) + 1;
        const newData = [...data, contact];
        setData(newData);
        setNewContact(CONTACT_TEMPLATE);
    }

    const cancel = () => {
        setNewContact(CONTACT_TEMPLATE);
    }
    return (
        <div>
            <h1 className={"text-purple-900 text-4xl mb-5 mt-10"}>Add New</h1>
            <div className={"border-2 border-purple-200 bg-purple-50 px-5 py-5"}>
                <div className={"flex flex-row justify-between"}>
                    <LabeledInput name={"FirstName"} label={"First Name"} type={'text'} inline
                                  value={newContact.first_name}
                                  onChange={(e) => {formFieldSetter("first_name", e)}}/>
                    <LabeledInput name={"LastName"} label={"Last Name"} type={'text'} inline
                                  value={newContact.last_name}
                                  onChange={(e) => {formFieldSetter("last_name", e)}}/>
                </div>
                <LabeledInput name={"Email"} label={"Email"} type={'text'}
                              value={newContact.email}
                              onChange={(e) => {formFieldSetter("email", e)}}/>
                <LabeledInput name={"Phone"} label={"Phone"} type={'text'}
                              value={newContact.phone}
                              onChange={(e) => {formFieldSetter("phone", e)}}/>
                <LabeledTextArea name={"Notes"} label={"Notes"}
                                 value={newContact.notes}
                                 onChange={(e) => {formFieldSetter("notes", e)}}/>
                <div className={"flex flex-row justify-between mt-10"}>
                    <Button label={"Cancel"} onClick={cancel} secondary/>
                    <Button label={"Save"} onClick={saveContact}/>
                </div>
            </div>
        </div>
    )
}


export default AddPage;