import React, { FC } from 'react';
import items from '../mocks/movie.json';

interface Movie {
    Title: string,
    Year: string,
}

const ItemsList: FC = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item: Movie) => {
                    return (
                        <tr>
                            <td>
                                {item.Title}
                            </td>
                            <td>
                                {item.Year}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default ItemsList;