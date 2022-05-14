import React, {useState} from "react";
import LabeledInput from "../components/ui/LabeledInput";
import ContactList from "../components/ContactList";

function SearchPage({data}) {
    const [search, setSearch] = useState("");
    return (
        <div>

            <LabeledInput name={"Search"} label={"Search"}  type={'text'}
                          value={search}
                          onChange={(e) => {setSearch(e.currentTarget.value)}}/>
            <ContactList contacts={data.filter(e => e.last_name.toUpperCase().startsWith(search.toUpperCase()))}/>


        </div>
    )
}


export default SearchPage;