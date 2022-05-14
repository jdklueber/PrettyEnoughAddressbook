import React from "react";
import {Link} from "react-router-dom";
import {PlusCircleIcon, SearchCircleIcon} from "@heroicons/react/solid";

function Header() {

    return (
        <header className={"bg-purple-50 p-10 mb-5 flex flex-row justify-between"}>
            <div className={""}>
                <span className={"text-4xl text-purple-900"}>Pretty Enough Contact List</span>
            </div>
            <div>
                <Link to={"/"}><SearchCircleIcon className={"inline h-10 w-10 mx-10 text-purple-500"}/></Link>
                <Link to={"/add"}><PlusCircleIcon  className={"inline h-10 w-10 text-purple-500"}/></Link>
            </div>
        </header>
    )
}


export default Header;