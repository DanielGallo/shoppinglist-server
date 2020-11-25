module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define('item', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.STRING
        }
    });

    return Item;
};