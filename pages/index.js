import { Container } from 'semantic-ui-react';

import { host } from '../config';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home({ movies: { data } }) {
    return (
        <div className={styles.container}>
            <Meta />
            <Navbar />

            <Container>
                <main className={styles.main}>
                    {data &&
                        data.map((movie) => {
                            const { id, title, showTime } = movie;
                            return (
                                <div key={id}>
                                    <h1>{title}</h1>
                                    <span>{showTime}</span>
                                </div>
                            );
                        })}
                </main>
            </Container>

            <Footer />
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
