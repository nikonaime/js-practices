var f = function() {

    let output = 0;

    for (let item of arguments) {
        if (typeof item !== 'number' ) {
            throw Error('all parameters type should be a Number');
        }
        output += item;
    }
    
    return output;
}

console.log(f(1,2,3));
console.log(f(1,1,1,1,1,1,1,1));
console.log(f(1,2,'s',4));
