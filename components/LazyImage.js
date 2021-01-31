import { useState } from 'react';
import { Dimmer, Loader, Image, Segment, Visibility } from 'semantic-ui-react';

import styles from '../styles/LazyImage.module.css';

const LazyImage = ({ fluid, src }) => {
    const [show, setShow] = useState(false);
    const showImage = () => {
        setShow(true);
    };

    if (!show) {
        return (
            <Visibility as="span" fireOnMount onTopVisible={showImage} updateOn="repaint">
                <Segment styles={styles.segmentHeight}>
                    <Dimmer active>
                        <Loader />
                    </Dimmer>
                </Segment>
            </Visibility>
        );
    }

    return <Image fluid={fluid} src={src} />;
};

LazyImage.defaultProps = {
    fluid: false
};

export default LazyImage;
