module.exports = app => {
    const items = require('../controllers/item.controller');

    const router = require('express').Router();

    router.get('/', items.findAll);

    router.post('/', items.create);

    router.put('/:id', items.update);

    router.delete('/:id', items.delete);

    app.use('/items', router);
};