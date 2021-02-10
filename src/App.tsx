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
        setSearchValue(e?.currentTarget?.value || '');
    }

    const handleSearchButtonClick = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchValue}`);
            const movies = await response.json();
            setItems([movies]);
        } catch(e) {
            setItems([]);
        }
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <div className="columns is-centered">
                <div className="field is-grouped">
                    <div className="control">
                        <SearchInput value={searchValue} onChange={handleInputChange} />
                    </div>
                    <div className="control">
                        <SearchButton onClick={handleSearchButtonClick} />
                    </div>
                </div>
            </div>
            <div className="columns is-centered">
                {items.length > 0 ? <ItemsList items={items} /> : 'No movies found'}
            </div>
        </div>
    )
}

export default App;
