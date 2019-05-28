var f = function(a,b,c) {

    for (let item of arguments) {
        if (typeof item !== 'number' ) {
            throw Error('all parameters type must be a Number');
        }
    }
    
    return (a - b) / c;
}

console.log(f(9,3,2));
console.log(f('s',9,3));
