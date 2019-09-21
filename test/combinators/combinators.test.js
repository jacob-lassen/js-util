const identitySuite = require('./identitySuite');
const constantSuite = require('./constantSuite');

describe('combinators', () => {
    identitySuite();
    constantSuite();
})