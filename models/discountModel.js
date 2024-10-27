const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Discount model, representing a discount entity in the database.
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
    created_at: {
        type: DataTypes.DATE,          
        defaultValue: Sequelize.NOW    
    },
    modified_at: {
        type: DataTypes.DATE,           
        defaultValue: Sequelize.NOW     
    }
}, {
    tableName: 'discounts',          
    timestamps: false                  // Disable automatic timestamp fields (createdAt, updatedAt)
});

// Export the Discount model for use in other parts of the application
module.exports = Discount;
