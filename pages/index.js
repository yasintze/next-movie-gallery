import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Meta />
            <Navbar />

            <main className={styles.main}></main>

            <Footer />
        </div>
    );
}
