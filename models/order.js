'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    order.init({
        userId: DataTypes.INTEGER,
        userName: DataTypes.STRING,
        userEmail: DataTypes.STRING,
        userAddress: DataTypes.STRING,
        userPhone: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        productName: DataTypes.STRING,
        price: DataTypes.INTEGER,
        category: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'order',
    });
    return order;
};