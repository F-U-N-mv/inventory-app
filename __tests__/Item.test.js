const { Item, sequelize } = require('../server/models/index.js');

describe('------ testing Item calls ------', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('can add an Item record to the database', async () => {

        const backpack = await Item.create({
            
            "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price":109.95,
            "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category":"men's clothing",
            "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
             
        });

        expect(backpack['title']).toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
        expect(backpack['price']).toBe(109.95);
        expect(backpack['description']).toBe('Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday');
        expect(backpack['category']).toBe('men\'s clothing');
        expect(backpack['image']).toBe('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
    });
});