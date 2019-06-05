const person = {};

Object.defineProperty(person, 'salary', {

    get() {
        let month = new Date().getMonth();
        let presentDay = new Date().getDate();
        let presentMonthDays = new Date(new Date().getFullYear(), month+1, 0).getDate();

        return presentMonthDays - presentDay > 20 ? 'good salary' : 'bad salary';
    },

})

console.log(person.salary);