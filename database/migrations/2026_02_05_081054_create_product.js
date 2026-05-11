import { DataTypes } from 'sequelize';

async function up({ context: QueryInterface }) {
  await QueryInterface.createTable('products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: { type: DataTypes.STRING, allowNull: false },
    form: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.DECIMAL, allowNull: true },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  });
}

async function down({ context: QueryInterface }) {
  await QueryInterface.dropTable('products');
}

export { up, down }
