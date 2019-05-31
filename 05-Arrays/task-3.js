
function every(arr, callback) {
    if ( !Array.isArray(arr) ) {
        throw new Error('Error: First parameter required and has to be only array!');
    }
    if (typeof callback !== 'function') {
        throw new Error('Error: Second parameter required and has to be only function!');        
    }
    let output = true;
    for (let i = 0; i < arr.length; i++) {
        let cl = callback(arr[i], i, arr);
        if( !cl ) output = false;
    }
    return output;
}
const arr = [1,2,3];
const output = every(arr, (element, i, arr) => {
    return element > 2;
});
console.log(output);
