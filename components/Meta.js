import Head from 'next/head';

const Meta = ({ title, desc }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
        </Head>
    );
};

Meta.defaultProps = {
    title: 'Movie Gallery',
    desc: 'An example of a simple movie gallery web apps built in Next.js'
};

export default Meta;
