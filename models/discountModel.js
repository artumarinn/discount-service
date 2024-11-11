const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Discount model
const Discount = sequelize.define('Discount', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discount_percent: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    valid_until: {
        type: DataTypes.DATE,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    modified_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'discounts', // Specify the table name
    timestamps: false // Disable automatic timestamp fields (createdAt, updatedAt)
});

module.exports = Discount;
