class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

var worker = new Worker("John", "Smith", 10, 31);

console.log(worker.name);
console.log(worker.surname);

console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

const workerOne = new Worker("Worker", "First", 18, 25);
const workerTwo = new Worker("Worker", "Second", 12, 21);

console.log(
    `Sum of two workers\' salaries is ${workerOne.getSalary() +
    workerTwo.getSalary()}`
);