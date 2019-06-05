function compose(...func) {
    return (a) => {

        let outcome = a;
        let j = func.length;
        for(i = j - 1; i >= 0; i--) {
            outcome = func[i](outcome);
        }

        return outcome;
    }
}

let res = compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a');

console.log(res);