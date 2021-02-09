import React, { FC } from 'react';

interface SearchInputProps {
    value: string
}

const SearchInput: FC<SearchInputProps> = ( { value }) => {
    return (
        <input type="text" className="input" value={value} />
    );
};

export default SearchInput;