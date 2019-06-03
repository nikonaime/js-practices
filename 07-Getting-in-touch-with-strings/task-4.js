const extractCurrencyValue = function(source) {

    if ( typeof source !== 'string' ){
        throw new Error('Parameter Should be a string!');
    }

    let numericValue = source.replace('$','');
    let finalValue = parseInt(numericValue)
    return finalValue;
}

console.log(extractCurrencyValue('$120')); 
console.log(extractCurrencyValue('1$20')); 
console.log(extractCurrencyValue('12$0')); 
console.log(extractCurrencyValue('120$'));
