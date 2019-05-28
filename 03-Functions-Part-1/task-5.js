var isPositive = function(number) {

    if (typeof number !== 'number' ) {
        throw Error('all parameters type must be a Number');
    }

    return number > 0 ? true : false;
}

var numbers = [1, 2, -4, 3, -9, -1, 7];

var output = [];

for (let number of numbers) {

    if (isPositive(number)) {
        output.push(number);
    }
}

console.log(output);

console.log(isPositive(-3));
console.log(isPositive(3));
console.log(isPositive('s'));
