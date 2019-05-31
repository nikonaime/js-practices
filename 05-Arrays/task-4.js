
function some(arr, callback) {
    if ( !Array.isArray(arr) ) {
        throw new Error('Error: First parameter required and has to be only array!');
    }
    if (typeof callback !== 'function') {
        throw new Error('Error: Second parameter required and has to be only function!');        
    }
    let output = false;
    for (let i = 0; i < arr.length; i++) {
        let cl = callback(arr[i], i, arr);
        
        if( cl ) output = true;
    }
    return output;
}
const arr = [1,2,3];
const output = some(arr, (element, i, arr) => {
    return element > 2;
});
console.log(output);
