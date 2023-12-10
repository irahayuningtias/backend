const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Feedback = sequelize.define('Feedback', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telepon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    masukan: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

module.exports = Feedback