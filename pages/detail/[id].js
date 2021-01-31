import { useRouter } from 'next/router';

const Detail = () => {
    const router = useRouter();
    const { id } = router.query;

    return <p>Movie id: {id}</p>;
};

export default Detail;
