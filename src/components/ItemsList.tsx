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
                    <th>Director</th>
                    <th>Actors</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item: Movie) => {
                    return (
                        <tr key={item.Title}>
                            <td>
                                {item.Title}
                            </td>
                            <td>
                                {item.Year}
                            </td>
                            <td>
                                {item.Director}
                            </td>
                            <td>
                                {item.Actors}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default ItemsList;