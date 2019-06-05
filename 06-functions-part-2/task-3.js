function mix(...func) {
    for (element of func) {
        if (typeof element !== 'function') {
            throw new Error('Each parameter has to be function!');
        }
    }

    let prev;
    let j = func.length;
    let response = {
        errors: [],
        value: null
    }

    for (let i = 0; i < j; i++) {
        try {
            prev = func[i](prev);
        } catch (err) {
            let myError = {
                name: err.name,
                message: err.message,
                stack: err.stack,
                level: i
            }
            response.errors.push(myError);
        }
    }

    response.value = prev;
    return response;
}

let result = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
}, (prev) => {
    throw new Error('My error');
});

console.log(result);