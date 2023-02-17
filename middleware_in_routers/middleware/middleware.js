module.exports = reqFilter = (req, res, next) => {
    // console.log('reqFilter');
    if (!req.query.age) {
        res.send("please enter your age");
    }
    else if (req.query.age < 18) {
        res.send("you cannot access this website");
    }
    else {
        next();
    }
}