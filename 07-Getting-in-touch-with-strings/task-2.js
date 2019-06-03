const checkSpam = function(source, example) {


    if ( typeof source !== 'string') {
        throw new Error('First parameter must be a string!');
    }

    if ( typeof example !== 'string') {
        throw new Error('Second parameter must be a string!');
    }

    return source.toLowerCase().includes(example.toLowerCase());
    
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); 
console.log(checkSpam('pitterxxx@gmail.com', 'XXX'));
console.log(checkSpam('pitter123@gmail.com', 'XXX'));
console.log(checkSpam('pitterxxx@gmail.com', '123'));