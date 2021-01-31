import { Container, Menu } from 'semantic-ui-react';

const Navbar = () => {
    return (
        <>
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item as="a" header>
                        Movie Gallery
                    </Menu.Item>
                </Container>
            </Menu>
        </>
    );
};

export default Navbar;
