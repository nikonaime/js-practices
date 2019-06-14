class DB {
    constructor() {
        this._users = new Map();
    }

    _validate(str, type, arg) {
        if (typeof str !== type) {
            throw new Error(`${arg} is required and must be ${type}`);
        }

        return this;
    }

    create(user) {
        const {
            name,
            age,
            country,
            salary
        } = user;

        this._validate(name, "string", "Name")
            ._validate(age, "number", "Age")
            ._validate(country, "string", "Country")
            ._validate(salary, "number", "Salary");

        const id =
            (this.readAll()[0] &&
                (
                    parseInt(Array.from(this._users.keys()).reverse()[0]) + 1
                ).toString()) ||
            "1";
        this._users.set(id, user);

        return id;
    }

    read(id) {
        this._validate(id, "string", "First parameter");

        const user = this._users.get(id) || null;
        if (user) {
            user.id = id;
        }
        return user;
    }

    readAll(...args) {
        if (args.length > 0) {
            throw new Error("ReadAll does not have any parameter.");
        }
        return Array.from(this._users.values());
    }

    update(id, data) {
        this._validate(id, "string", "First parameter")._validate(
            data,
            "object",
            "Second parameter"
        );

        if (!this._users.has(id)) {
            throw new Error("User with this id does not exist.");
        }

        const user = this._users.get(id);
        this._users.set(id, {
            ...user,
            ...data
        });

        return id;
    }

    delete(id) {
        this._validate(id, "string", "First parameter");

        if (!this._users.has(id)) {
            throw new Error("User with this id does not exist.");
        }

        return this._users.delete(id);
    }

    find(query) {
        let users = [];

        if (typeof query.age === "object" && Object.keys(query.age).length == 0) {
            throw new Error("Age can not be empty");
        }

        if (
            typeof query.salary === "object" &&
            Object.keys(query.salary).length == 0
        ) {
            throw new Error("Salary can not be empty");
        }

        try {
            users = this.readAll().filter(user => {
                return (
                    user.country === (query.country || user.country) &&
                    user.age >= ((query.age && query.age.min) || 0) &&
                    user.age <= ((query.age && query.age.max) || Infinity) &&
                    user.salary >= ((query.salary && query.salary.min) || 0) &&
                    user.salary <= ((query.salary && query.salary.max) || Infinity)
                );
            });
        } catch (error) {}

        return users;
    }
}

const db = new DB();

const person = {
    name: "Pitter",
    age: 21,
    country: "ge",
    salary: 450
};

const id = db.create(person);

const query = {
    country: "ge",
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};

const customers = db.find(query);
