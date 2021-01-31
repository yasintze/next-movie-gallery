import moviesData from '../../../data.json';

export default (req, res) => {
    const {
        query: { id }
    } = req;
    const filtered = moviesData.filter((movie) => movie.id === id);

    if (filtered.length > 0) res.status(200).json(filtered);

    res.status(404).json({ message: `Movie with id '${id}' is not found` });
};
