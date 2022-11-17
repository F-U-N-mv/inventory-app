const { sauces, items} = require('./seedData.js'); // removed `sauces` import

const {sequelize} = require('./db');
const {Sauce, Item} = require('./models/index');
// const {Item} = require('./models/Item');
const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(sauces.map(sauce => Sauce.create(sauce)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
