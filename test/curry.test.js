const { expect } = require('chai');
const { curry } = require('../src/index.js');

describe('curry', () => {
    it('Curring a function with multiple parameters results in a function', () => {
        const unCurried = (a, b) => 'Just a test';
        const curried = curry(unCurried);
        expect(curried).to.be.a('function');
    });

    it('Curring a function with no parameters results in a function', () => {
        const unCurried = () => 'Just a test';
        const curried = curry(unCurried);
        expect(curried).to.be.a('function');
    });

    it('Partially calling a curried function results in a function', () => {
        const unCurried = (a, b) => 'Just a test';
        const curried = curry(unCurried);
        const partial = curried(1);
        expect(partial).to.be.a('function');
    });

    it('Result is returns when all arguments are provided', () => {
        const unCurried = (a, b) => 'Just a test';
        const curried = curry(unCurried);
        const partial = curried(1);
        const result = partial(2);
        expect(result).to.equal('Just a test')
    });

    it('Curried function are called with given arguments', () => {
        const unCurried = (a, b) => [a, b];
        const curried = curry(unCurried);
        const partial = curried(1);
        const [ arg1, arg2 ] = partial(2);
        expect(arg1).to.equal(1);
        expect(arg2).to.equal(2);
    });

    it('Extra arguments are ignored', () => {
        const unCurried = (a, b) => [a, b];
        const curried = curry(unCurried);
        const partial = curried(1);
        const result = partial(2);
        expect(result).to.have.lengthOf(2)
            .and.have.all.members([1, 2]);
    });
});