var isEven = function(number) {

    if (typeof number !== 'number' ) {
        throw Error('all parameters type must be a Number');
    }

    return number % 2 == 0 ? true : false;
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven('Content'));
