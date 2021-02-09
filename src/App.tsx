import React, { FC } from "react";
import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';
import ItemsList from './components/ItemsList';
// import './style/index.scss';
import "bulma";

const App: FC = () => {
    return (
        <div className="App">
            <div className="block">
                <div className="field is-grouped">
                    <div className="control">
                        <SearchInput value="test" />
                    </div>
                    <div className="control">
                        <SearchButton onClick={() => 'sasasa'} />
                    </div>
                </div>
            </div>
            <ItemsList />
        </div>
    )
}

export default App;
