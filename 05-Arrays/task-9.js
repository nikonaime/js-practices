
function arrayFill(element, number) {
    if ( !Array.isArray(element) && typeof element !== 'number' && typeof element !== 'string' ) {
        throw new Error('First parameter required and must be number, string, object array!');
    }
    if (typeof number !== 'number') {
        throw new Error('Second parameter required and must be number!');        
    }
    let output = [];

    for (let i = 0; i < number; i++) {
        output.push(element);
    }
    return output;
}
let output = arrayFill('x', 5);
console.log(output);
