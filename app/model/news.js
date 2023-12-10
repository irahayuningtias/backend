const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const News = sequelize.define('News', {
    category_id: {
        type: DataTypes.INTEGER,
    },
    news_date: {
        type: DataTypes.DATETIME,
        allowNull: false,
    },
    news_image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    news_caption: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    news_content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = News