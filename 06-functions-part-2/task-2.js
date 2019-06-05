function mix(...func) {
    for (element of func) {
        if (typeof element !== 'function') {
            throw new Error('Each parameter has to be function!');
        }
    }

    let prev;
    
    for (element of func) {
        prev = element(prev);
    }
    return prev;
}

let output = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
})

console.log(output);