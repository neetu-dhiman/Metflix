import React from 'react';
import styles from './MovieList.module.css';
import Card from '../../UI/Card';

const MovieList = (props) => {
    return <Card className={styles.movies}>
        <table>
            <tbody>
                <tr>
                    <th>Movie</th>
                    <th>Ratings</th>
                    <th>Duration</th>
                </tr>
                {props.movieList && props.movieList.filter((movie) => (props.filterVal.length > 2 && movie['name'].toLowerCase().includes(props.filterVal.toLowerCase()))
                    || (props.filterVal.length <= 2 ? true : false))
                    .map(movie => <tr key={movie.id}>
                        <td>{movie.name}</td>
                        <td>{movie.rating}</td>
                        <td>{movie.duration}</td>
                    </tr>
                    )}
            </tbody>
        </table>
    </Card>
}

export default MovieList;