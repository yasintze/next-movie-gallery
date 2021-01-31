import { Container } from 'semantic-ui-react';

import { host } from '../config';
import Meta from '../components/Meta';
import MovieList from '../components/MovieList';
import styles from '../styles/Home.module.css';

export default function Home({ movies: { data } }) {
    return (
        <div className={styles.container}>
            <Meta />

            <Container>
                <main className={styles.main}>
                    <MovieList data={data} />
                </main>
            </Container>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${host}/api/movies?page=1`);
    const data = await res.json();

    return {
        props: {
            movies: data
        }
    };
}
