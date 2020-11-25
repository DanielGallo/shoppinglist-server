const db = require('../models');
const Item = db.items;
const Op = db.Sequelize.Op;

exports.findAll = (request, response) => {
    const userId = '';  // TODO

    Item.findAll({
        where: {
            userId: userId
        }
    })
        .then(data => {
            response.send(data);
        })
        .catch(error => {
            response.status(500).send({
                message: error.message || 'An unknown error occurred while retrieving the records.'
            })
        });
};

exports.create = (request, response) => {
    const item = {
        name: request.body.name,
        quantity: request.body.quantity,
        userId: ''  // TODO
    }

    Item.create(item)
        .then(data => {
            response.send(data);
        })
        .catch(error => {
            response.status(500).send({
                message: error.message || 'An unknown error occurred while creating the record.'
            })
        });
};

exports.update = (request, response) => {
    const id = request.params.id;
    const userId = '';  // TODO

    Item.update(request.body, {
        where: {
            id: id,
            userId: userId
        }
    })
        .then(code => {
            if (code === 1) {
                response.send({
                    message: 'Record was updated successfully.'
                });
            } else {
                response.send({
                    message: 'An error occurred during the update process.'
                });
            }
        })
        .catch(error => {
            response.status(500).send({
                message: error.message || 'An error occurred during the update process.'
            });
        });
};

exports.delete = (request, response) => {
    const id = request.params.id;
    const userId = '';  // TODO

    Item.destroy({
        where: {
            id: id,
            userId: userId
        }
    })
        .then(code => {
            if (code === 1) {
                response.send({
                    message: 'Record was successfully deleted.'
                });
            } else {
                response.send({
                    message: 'An error occurred during the deletion process.'
                });
            }
        })
        .catch(error => {
            response.status(500).send({
                message: error.message || 'An error occurred during the deletion process.'
            });
        });
};