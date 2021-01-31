import Head from 'next/head';

import { appTitle, appDesc } from '../config';

const Meta = ({ title, desc }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
        </Head>
    );
};

Meta.defaultProps = {
    title: appTitle,
    desc: appDesc
};

export default Meta;
