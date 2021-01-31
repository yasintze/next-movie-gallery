import dayjs from 'dayjs';

import moviesData from '../../../data.json';

export default (req, res) => {
    const {
        query: { page, title, date }
    } = req;
    const limit = 10;

    let data = moviesData;
    let maxPage = Math.ceil(moviesData.length / limit);
    let isFiltered = false;

    const startId = (page - 1) * limit;
    const endId = page * limit;
    const filtered = moviesData.filter((movie) => movie.id > startId && movie.id <= endId);
    data = filtered;

    if (title) {
        const params = title.toLowerCase().replace('+', ' ');

        data = moviesData.filter((movie) => movie.title.toLowerCase().includes(params));
        isFiltered = true;
    }

    if (date) {
        data = moviesData.filter((movie) =>
            dayjs(movie.showTime).format('DD-MM-YYYY').includes(date)
        );
        isFiltered = true;
    }

    res.status(200).json({ data, curPage: parseInt(page), maxPage, isFiltered });
};
