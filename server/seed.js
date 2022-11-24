const { items} = require('./seedData.js'); // removed `sauces` import

const {sequelize} = require('./db');
const { Item} = require('./models/index');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(item => Item.create(item)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
