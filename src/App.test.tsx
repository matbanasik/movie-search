import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import ItemsList from './components/ItemsList';
import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';
import items from './mocks/movie.json';

test('It should render an input element', () => {
    const utils = render(<App />);
    const inputElement = utils.getByPlaceholderText(/search movie/i);
    expect(inputElement).toBeInTheDocument();
});

test('It should render a button', () => {
    const utils = render(<App />);
    const button = utils.getByText(/search/i);
    expect(button).toBeInTheDocument();
});

test('It should movie details if movies array is passed through props', () => {
    const utils = render(<ItemsList items={items} />);
    const movie = utils.getByText(/la la land/i);
    expect(movie).toBeInTheDocument();
});

test('It should trigger search on button click', () => {
    const onClick = jest.fn();
    const utils = render(<SearchButton onClick={onClick} />);
    const button = utils.getByText(/search/i);
    fireEvent.click(button);
    
    expect(onClick).toHaveBeenCalled();
});

test('It should trigger change handler on input change', () => {
    const onChange = jest.fn();
    const utils = render(<SearchInput onChange={onChange} value="" />);
    const inputElement = utils.getByPlaceholderText(/search movie/i);
    fireEvent.change(inputElement, { target: { value: 'a' } });
    
    expect(onChange).toHaveBeenCalled();
});