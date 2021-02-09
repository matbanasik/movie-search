import React, { FC } from 'react';

interface SearchButtonProps {
    onClick: () => void;
}

const SearchButton: FC<SearchButtonProps> = ( { onClick }) => {
    return (
        <button type="button" className="button is-primary" onClick={onClick}>Search</button>
    );
};

export default SearchButton;