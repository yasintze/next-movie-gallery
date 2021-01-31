import Link from 'next/link';
import { Card, Icon } from 'semantic-ui-react';
import dayjs from 'dayjs';

import LazyImage from '../components/LazyImage';
import movieItemStyles from '../styles/MovieItem.module.css';

const MovieItem = ({ data: { id, title, showTime, image, like } }) => {
    const formattedTime = dayjs(showTime).format('DD MMM YYYY | HH:mm');
    return (
        <Card fluid>
            <LazyImage src={`${image}${id}/320/240`} fluid={true} />
            <Card.Content>
                <Card.Header>
                    <Link href={`/detail/${id}`} style={movieItemStyles.titleCursor}>
                        {title}
                    </Link>
                </Card.Header>
                <Card.Meta>{formattedTime}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name="like" />
                {`${like} likes`}
            </Card.Content>
        </Card>
    );
};

export default MovieItem;
