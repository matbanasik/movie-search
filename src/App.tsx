import React, { FC, useState } from "react";
import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';
import ItemsList from './components/ItemsList';
import Movie from './interfaces/movie';
import "bulma";


const API_KEY = 'bfb1987';

const App: FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [items, setItems] = useState<Movie[]>([]);

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(e?.currentTarget?.value || '')
    }

    const handleSearchButtonClick = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchValue}`);
            const movies = await response.json();
            setItems([movies]);
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className="App">
            <div className="block">
                <div className="field is-grouped">
                    <div className="control">
                        <SearchInput value={searchValue} onChange={handleInputChange} />
                    </div>
                    <div className="control">
                        <SearchButton onClick={handleSearchButtonClick} />
                    </div>
                </div>
            </div>
            <ItemsList items={items} />
        </div>
    )
}

export default App;
