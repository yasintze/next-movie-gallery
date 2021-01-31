import moviesData from '../../../data.json';

export default (req, res) => {
    const {
        query: { page }
    } = req;

    let data = [];
    let total = 0;

    if (!page) {
        data = moviesData;
        total = moviesData.length;
    } else {
        const limit = 10;
        const startId = (page - 1) * limit;
        const endId = page * limit;
        const filtered = moviesData.filter((movie) => movie.id > startId && movie.id <= endId);

        data = filtered;
        total = filtered.length;
    }

    res.status(200).json({ data, total });
};
