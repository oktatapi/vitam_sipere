import db from '../../app/models/modrels.js';

async function up({ context: QueryInterface }) {
  if (db.Product) {
    await db.Product.bulkCreate([
      { id: 1, name: "magnézium taurát", form: "kapszula", price: 1.5 },
      { id: 2, name: "magnézium malát", form: "por", price: 1.7 },
      { id: 3, name: "magnézium biszglicinát", form: "por", price: 1.6 },
      { id: 4, name: "K-komplex+D3 Forte", form: "csepp", price: 2.8 }
    ]);
  } else {
    await QueryInterface.bulkInsert('products', [

    ]);
  }

}

async function down({ context: QueryInterface }) {
  await QueryInterface.bulkDelete('products');
}

export { up, down }
