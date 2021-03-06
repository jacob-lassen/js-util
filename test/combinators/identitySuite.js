const { expect } = require('chai');
const { constant } = require('../../src/index').combinators;

module.exports = function identitySuite() {
    describe('constant', () => {
        it('Returns the first arguments', () => {
            const result = constant(12);
            expect(result).to.equal(12);
        });

        it('Ignores all arguments except the first', () => {
            const result = constant(12, 13);
            expect(result).to.equal(12);
        });
    })
}