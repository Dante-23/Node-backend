const notFound = (req, res, next) => {
    if (res.isError) {
        next();
    } else {
        res.status(404).send('Route does not exist');
    }
}

module.exports = notFound;