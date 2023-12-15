// require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.PG_URL,
    {
        define: {
            timestamps: false,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        },
        logging: false
    }
);

module.exports = sequelize;