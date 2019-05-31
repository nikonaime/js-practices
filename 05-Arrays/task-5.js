function reduce(arr, callback, initial) {
    if ( !Array.isArray(arr) ) {
        throw new Error('Error: First parameter required and has to be only array!');
    }
    if (typeof callback !== 'function') {
        throw new Error('Error: Second parameter required and has to be only function!');        
    }
    if (typeof initial !== 'string' && typeof initial !== 'number') {
        throw new Error('Error: Third parameter required and has to be only string or number!');        
    }
    let output = initial;
    for (let i = 0; i < arr.length; i++) {
        let cl = callback(output, arr[i], i, arr);
        if( cl ) output = cl;
    }
    return output;
}

const arr = [1,2,3];
const acc = 0;
const output = reduce(arr, (sum, item, i, arr) => {
    return sum + item;
}, acc);
console.log(output);
