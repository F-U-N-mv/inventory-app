const { Item, sequelize } = require('../server/models/index.js');

describe('------ testing Item calls ------', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });
});