import { Card } from 'semantic-ui-react';

import MovieItem from '../components/MovieItem';

const MovieList = ({ data }) => {
    return (
        <Card.Group>
            {data && data.map((movie) => <MovieItem key={movie.id} data={movie} />)}
        </Card.Group>
    );
};

export default MovieList;
