import React from "react";
import Input from "../../components/form/input";

import "./search.css";

type SearchProps = {
    movieName: string;
    onChange: (a: string) => void
    className?: string
};

const Search: React.FC<SearchProps> = ({ movieName, onChange, className }) => (
    <div className={`index-searchbox${className ? ' ' + className : ''}`}>
        <Input name="Search" value={movieName} onChange={onChange} />
    </div >
);

export default Search;
