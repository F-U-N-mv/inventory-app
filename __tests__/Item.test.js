const { Item, sequelize } = require('../server/models/index.js');
const { items } = require("../server/seedData");
const runtime = require("regenerator-runtime");

describe('------ testing Item calls ------', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('can add an Item record to the database', async () => {

        const backpack = await Item.create(items[0]);

        expect(backpack.title).toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
        expect(backpack.price).toBe(109.95);
        expect(backpack.description).toBe('Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday');
        expect(backpack.category).toBe('men\'s clothing');
        expect(backpack.image).toBe('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
    });

    it('can find an item', async () => {
        const findItem = await Item.findAll()
        expect(findItem[0].title).toEqual('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    });

    it('can update an item', async () => {
        const foundItem = await Item.findAll();
        const updateItem = await foundItem[0].update({price: 99.95})
        expect(updateItem.title).toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
        expect(updateItem.price).toBe(99.95);
        expect(updateItem.description).toBe('Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday');
        expect(updateItem.category).toBe('men\'s clothing');
        expect(updateItem.image).toBe('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
        
    });

    it('can delete an item', async () => {
        const deleteItem = await Item.findAll();
        const destroyItem = await deleteItem[0].destroy();
        expect(destroyItem.title).toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
        expect(destroyItem.price).toBe(99.95);
        expect(destroyItem.description).toBe('Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday');
        expect(destroyItem.category).toBe('men\'s clothing');
        expect(destroyItem.image).toBe('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');

    });


});