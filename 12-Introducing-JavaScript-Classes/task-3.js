class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    getRate() {
        return this._rate;
    }

    setRate(value) {
        return (this._rate = value);
    }

    getDays() {
        return this._days;
    }

    setDays(value) {
        return (this._days = value);
    }

    getSalary() {
        return this._rate * this._days;
    }
}

const worker = new Worker("John", "Smith", 10, 31);

console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());

worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary());