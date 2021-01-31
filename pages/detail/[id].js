import { Card, Container, Icon, Image } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { loremIpsum } from 'lorem-ipsum';

import Meta from '../../components/Meta';
import { appTitle, host } from '../../config';
import styles from '../../styles/Home.module.css';

const Detail = ({ movies: { id, title, showTime, image, like } }) => {
    const formattedTime = dayjs(showTime).format('DD MMM YYYY | HH:mm');
    const movieDesc = loremIpsum({
        count: 12,
        format: 'plain',
        paragraphLowerBound: 4, // Min. number of sentences per paragraph.
        paragraphUpperBound: 6
    });

    return (
        <div className={styles.container}>
            <Meta title={`${appTitle} | ${title}`} />

            <Container>
                <main className={styles.main}>
                    <Card fluid>
                        <Image src={`${image}${id}/800/600`} fluid />
                        <Card.Content>
                            <Card.Header>{title}</Card.Header>
                            <Card.Meta>{formattedTime}</Card.Meta>
                            <Card.Description>{movieDesc}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Icon name="like" />
                            {`${like} likes`}
                        </Card.Content>
                    </Card>
                </main>
            </Container>
        </div>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(`${host}/api/movies/${context.params.id}`);
    const data = await res.json();

    return {
        props: {
            movies: data[0]
        }
    };
}

export default Detail;
