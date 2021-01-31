import { Container } from 'semantic-ui-react';

import { host } from '../config';
import Filter from '../components/Filter';
import Meta from '../components/Meta';
import MovieList from '../components/MovieList';
import styles from '../styles/Home.module.css';

export default function Home({ movies }) {
    return (
        <div className={styles.container}>
            <Meta />

            <Container>
                <main className={styles.main}>
                    <div className={styles.filter}>
                        <Filter />
                    </div>
                    <MovieList data={movies} />
                </main>
            </Container>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const params = new URLSearchParams({
        page: query.page || 1,
        title: query.title || '',
        date: query.date || ''
    });
    const res = await fetch(`${host}/api/movies?${params.toString()}`);
    const data = await res.json();

    return {
        props: {
            movies: data
        }
    };
}
