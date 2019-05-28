var f = function(number) {

    if (typeof number !== 'number' ) {
        throw Error('parameter type is not a Number');
    }

    return number ** 3;
}

console.log(f(2));
console.log(f('Content'));
