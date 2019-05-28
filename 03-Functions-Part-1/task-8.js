var f = function(numbers) {
    
    if (typeof numbers !== 'object') {
        throw Error('parameter type must be an array');
    }

    if ( numbers.length == 0 ) {
        throw Error('parameter can not be an empty');        
    }

    console.log(numbers[0])
    numbers.splice(0, 1);
    
    return numbers.length > 0 ? f(numbers): false;
}

f([1,2,3]);
f(1,2,3);
f('Content');
f([]);