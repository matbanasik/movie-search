import React, { FC } from 'react';

interface SearchInputProps {
    value: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
}

const SearchInput: FC<SearchInputProps> = ( { value, onChange }) => {
    return (
        <input type="text" className="input" value={value} onChange={onChange} placeholder="Search movie" />
    );
};

export default SearchInput;