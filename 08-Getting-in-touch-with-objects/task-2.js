const person = {};

Object.defineProperties(person, {
    rate: {
        value: 0,
        writable: true,
        configurable: false,
        enumerable: false
    },

    salary: {
        get() {
            let presentDay = new Date().getDate();
            return presentDay * this.rate;
        },

        set() {
            throw new Error(`You aren't allowed to set`);
        }
    }
});

person.rate = 30;

console.log(person.salary);