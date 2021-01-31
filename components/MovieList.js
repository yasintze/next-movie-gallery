import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'semantic-ui-react';

import MovieItem from '../components/MovieItem';

const MovieList = ({ data: { data: moviesData, curPage, maxPage, isFiltered } }) => {
    const [movies, setMovies] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (isFiltered || curPage === 1) {
            setMovies(moviesData);
        } else {
            setMovies([...movies, ...moviesData]);
        }
    }, [moviesData]);

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll);
        };
    });

    const handleInfiniteScroll = () => {
        const lastUserLoaded = document.querySelector('.cards > .card:last-child');
        if (lastUserLoaded) {
            const lastUserLoadedOffset = lastUserLoaded.offsetTop + lastUserLoaded.clientHeight;
            const pageOffset = window.pageYOffset + window.innerHeight;
            if (pageOffset > lastUserLoadedOffset) {
                if (curPage < maxPage) {
                    const query = router.query;
                    query.page = parseInt(curPage) + 1;
                    router.push({
                        pathname: router.pathname,
                        query: query
                    });
                }
            }
        }
    };

    return (
        <Card.Group>
            {movies.length > 0 && movies.map((movie) => <MovieItem key={movie.id} data={movie} />)}
        </Card.Group>
    );
};

export default MovieList;
