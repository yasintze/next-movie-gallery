import { Container, Menu } from 'semantic-ui-react';

import { appTitle } from '../config';

const Navbar = () => {
    return (
        <>
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item as="a" header>
                        {appTitle}
                    </Menu.Item>
                </Container>
            </Menu>
        </>
    );
};

export default Navbar;
