import React, { FC } from 'react';
import Movie from '../interfaces/movie';

interface ItemListProps {
    items: Movie[],
}

const ItemsList: FC<ItemListProps> = ({ items }) => {

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