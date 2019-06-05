function bind(func, obj, ...n) {
    return () => func.call(obj, ...n)
}

const obj = {
    getName: function(message) {
        return `${message}: ${this.name}`;
    }
};

const getName = obj.getName;

const f = bind(getName, {name: 'Pitter'}, 'My name');

console.log(f());