exports.getUser = () => {
    res.json({message: 'get user'});
    next();
}

exports.authenticate = (req, res, next) => {
    res.json({message: 'login user'});
    next();

}