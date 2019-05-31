
function reduceRight(arr, callback, initial) {
    if ( !Array.isArray(arr) ) {
        throw new Error('First parameter required and has to be only array!');
    }
    if (typeof callback !== 'function') {
        throw new Error('Second parameter required and has to be only function!');        
    }
    if (typeof initial !== 'string' && typeof initial !== 'number') {
        throw new Error('Third parameter required and has to be only string or number!');        
    }
    let output = initial;
    let length = arr.length; 

    for (let i = length - 1; i >= 0; i--) {
        let statement = callback(output, arr[i], i, arr);
        
        if( statement ) output = statement;
    }
    return output;
}

const arr = [1,2,3,4,5];
const acc = 0;
const output = reduceRight(arr, (sum, item, i, arr) => {
    return sum + item;
}, acc);
console.log(output);
