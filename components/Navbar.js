import Link from 'next/link';
import { Container, Menu } from 'semantic-ui-react';

import { appTitle } from '../config';

const Navbar = () => {
    return (
        <>
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item header>
                        <Link href="/">{appTitle}</Link>
                    </Menu.Item>
                </Container>
            </Menu>
        </>
    );
};

export default Navbar;
