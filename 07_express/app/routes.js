const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('pages/index')
});

router.get('/about', (req, res) => {
    const users = [
        { id: 1, name: 'Chris', avatar: 'http://placekitten.com/300/300' },
        { id: 2, name: 'Tom', avatar: 'http://placekitten.com/301/301' },
        { id: 3, name: 'Bill', avatar: 'http://placekitten.com/299/299' },
        { id: 4, name: 'Helen', avatar: 'http://placekitten.com/302/302' }
    ];

    res.render('pages/about', { users })
});

router.get('/contact', (req, res) => {
    res.render('pages/contact')
});

router.post('/contact', (req, res) => {
    res.send(`Your data is :
    <span>${req.body.message}</span>`)
})

module.exports = router;