var getDivisors = function(number) {

    if (typeof number !== 'number' ) {
        throw Error('parameter type is not a Number');
    } else if ( number <= 0 ) {
        throw Error('parameter can not be a '+ number);
    }

    var output = [];
    
    for (let i = 1; i <= number; i++) {
        
        if ( number % i != 0 ) {
            continue;
        }

        if ( number < i ) {
            continue;
        }
        output.push(i);

    }

    return output;
}


console.log(getDivisors(12));
console.log(getDivisors('Content'));
console.log(getDivisors(0));
