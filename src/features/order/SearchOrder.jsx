import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function SearchOrder(props) {

    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) return;
        navigate(`order/${query}`);
        setQuery("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Search Order#' value={query} onChange={handleChange}/>
        </form>
    )
}

export default SearchOrder;
