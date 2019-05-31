function filter(arr, callback) {
    if ( !Array.isArray(arr) ) {
        throw new Error('Error: First parameter required and has to be only array!');
    }
    if (typeof callback !== 'function') {
        throw new Error('Error: Second parameter required and has to be only function!');        
    }
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let cl = callback(arr[i], i, arr);
        if( cl ) output.push(arr[i]);
    }
    return output;
}
const arr = [1,2,3,8,54,98];
console.log(filter(arr, (item, i, arr) => {
    return item > 30;
}));