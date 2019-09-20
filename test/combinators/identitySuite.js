const { expect } = require('chai');
const { identity } = require('../../src/index').combinators;

module.exports = function identitySuite() {
    describe('identity', () => {
        it('Returns the first arguments', () => {
            const result = identity(12);
            expect(result).to.equal(12);
        });

        it('Ignores all arguments except the first', () => {
            const result = identity(12, 13);
            expect(result).to.equal(12);
        });
    })
}