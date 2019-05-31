function forEach(arr, callback) {
    if ( !Array.isArray(arr) ) {
        throw new Error('Error: First parameter required and has to be only array!');
    }
    if (typeof callback !== 'function') {
        throw new Error('Error: Second parameter required and has to be only function!');        
    }
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
const arr = forEach([1,2,3], (item, i, arr) => {
    console.log('Index ' + i + ' Item ' + item +  ' Array ' + '['+ arr+ ']');
});
