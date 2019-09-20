function curry(fn) {
    const requiredArguments = fn.length;
    const appliedArguments = [];
    const curried = (...args) => {
        appliedArguments.push(...args);
        if (appliedArguments.length >= requiredArguments) {
            return fn(...appliedArguments);
        }
        return curried;
    }
    return curried;
}

module.exports = curry;