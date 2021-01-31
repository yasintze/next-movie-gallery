import { Container } from 'semantic-ui-react';

import { host } from '../config';
import Meta from '../components/Meta';
import MovieList from '../components/MovieList';
import styles from '../styles/Home.module.css';

export default function Home({ movies }) {
    return (
        <div className={styles.container}>
            <Meta />

            <Container>
                <main className={styles.main}>
                    <MovieList data={movies} />
                </main>
            </Container>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const page = query.page || 1;
    const res = await fetch(`${host}/api/movies?page=${page}`);
    const data = await res.json();

    return {
        props: {
            movies: data
        }
    };
}
