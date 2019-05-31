
function reverse(array) {
    if ( !Array.isArray(array) ) {
        throw new Error('First parameter required and has to be only array!');
    }
    if ( array.length == 0 ) {
        throw new Error('Error: parameter is not supposed to be empty!');
    }

    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        
        output.push( array[i] );
    }
    return output;
}

const arr = [9,8,7]; 
console.log(reverse(arr));
