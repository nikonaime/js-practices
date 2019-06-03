const upperCaseFirst = (str) => {

    if (typeof str !== 'string') {
        throw new Error('Parameter must be string!');
    }

    if (str.length == 0) {
        return str;
    }

    let capitalizedString = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedString;
};

console.log(upperCaseFirst('pitter')); 
console.log(upperCaseFirst('niko')); 
console.log(upperCaseFirst('')); 

