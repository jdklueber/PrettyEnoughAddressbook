import {useState} from "react";
import {mock_data} from "./data/mock_data";
import LabeledInput from "./components/LabeledInput";
import LabeledTextArea from "./components/LabeledTextArea";
import Contact from "./components/Contact";
import Button from "./components/Button";

const CONTACT_TEMPLATE = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    notes: ""
}

function App() {
    const [data, setData] = useState(mock_data);
    const [newContact, setNewContact] = useState(CONTACT_TEMPLATE);
    const [search, setSearch] = useState("");

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
            <LabeledInput name={"FirstName"} label={"First Name"} type={'text'}
                          value={newContact.first_name}
                          onChange={(e) => {formFieldSetter("first_name", e)}}/>
            <LabeledInput name={"LastName"} label={"Last Name"} type={'text'}
                          value={newContact.last_name}
                          onChange={(e) => {formFieldSetter("last_name", e)}}/>
            <LabeledInput name={"Email"} label={"Email"} type={'text'}
                          value={newContact.email}
                          onChange={(e) => {formFieldSetter("email", e)}}/>
            <LabeledInput name={"Phone"} label={"Phone"} type={'text'}
                          value={newContact.phone}
                          onChange={(e) => {formFieldSetter("phone", e)}}/>
            <LabeledTextArea name={"Notes"} label={"Notes"}
                          value={newContact.notes}
                          onChange={(e) => {formFieldSetter("notes", e)}}/>
            <LabeledInput name={"Search"} label={"Search"}  type={'text'}
                          value={search}
                          onChange={(e) => {setSearch(e.currentTarget.value)}}/>
            <Button label={"Cancel"} onClick={cancel}/>
            <Button label={"Save"} onClick={saveContact}/>

            {data.filter(e => e.last_name.toUpperCase().startsWith(search.toUpperCase())).map(e => <Contact id={e.id} data={e}/>)}
        </div>
    );
}

export default App;
