
function f(arr) {
    if ( !Array.isArray(arr) ) {
        throw new Error('Error: First parameter required and has to be only array!');
    }
    let output = 0;
    for (let i = 0; i < arr.length; i++) {
        if ( typeof arr[i] !== 'number' && !Array.isArray(arr[i]) ) {
            throw Error('Every element is supposed to be either number or array.');            
        }
        if (Array.isArray(arr[i])) {
            let rec = f(arr[i]);
            output+=rec;
        } else {
            output+=arr[i];
        }
    }
    return output;
}
let arr = [[[1, 2], [1, 2]], [[2, [1]], [1, 2]]];
console.log(f(arr));
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)); 
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3));
const arr4 = [[[[[]]]]];
console.log(f(arr4));
const arr5 = [[[[[],3]]]];
console.log(f(arr5)); 
