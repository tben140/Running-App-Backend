const methodNotAllowed = (req, res, next) => {
    const method = req.method;
    res.status(405).json({ msg: `${method} method not allowed on this endpoint.` })
}

const customErrors = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).json(err)
    } else next(err)
}

const allOtherErrors = (err, req, res, next) => {
    res.status(404).send({ msg: 'username already in use' })
}

module.exports = { methodNotAllowed, customErrors, allOtherErrors }