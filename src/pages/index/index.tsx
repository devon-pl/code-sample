import React, { useState } from "react";
import Search from '../../components/search';
import Movies from './movies';

import "./index.css";

const Index: React.FC = () => {
    const [movieName, setMovieName] = useState<string>("Start Trek");

    return (
        <div className="page-index">
            <Search className="page-search" movieName={movieName} onChange={(movieName) => setMovieName(movieName)} />
            <Movies movieName={movieName} />
        </div>
    );
}

export default Index;