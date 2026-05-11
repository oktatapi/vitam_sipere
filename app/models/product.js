import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Product = sequelize.define('products', {
    name: { type: DataTypes.STRING, allowNull: false },
    form: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.DECIMAL, allowNull: true }
}, {
    timestamps: true,
    freezeTableName: true
})

export default Product
