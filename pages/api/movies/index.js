import moviesData from '../../../data.json';

export default (req, res) => {
    const {
        query: { page }
    } = req;
    const limit = 10;

    let data = [];
    let maxPage = Math.ceil(moviesData.length / limit);

    if (!page) {
        data = moviesData;
    } else {
        const startId = (page - 1) * limit;
        const endId = page * limit;
        const filtered = moviesData.filter((movie) => movie.id > startId && movie.id <= endId);

        data = filtered;
    }

    res.status(200).json({ data, curPage: parseInt(page), maxPage });
};
