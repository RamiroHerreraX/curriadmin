const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('127.0.0.1/int', ['users']);

router.get('/login', (req, res, next) => {
    db.users.find((err, users) => {
        if (err) return next(err);
        res.json(users);
    });
});

router.get('/login/:id', (req, res, next) => {
    db.users.findOne({_id: req.params.id},(err, users) => {
        if (err) return next(err);
        res.json(users);
    });
});

module.exports = router;