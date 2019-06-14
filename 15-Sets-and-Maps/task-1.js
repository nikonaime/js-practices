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
            throw new Error("User with this id does not exists.");
        }

        return this._users.delete(id);
    }
}

const db = new DB();

const person = {
    name: "Pitter",
    age: 21,
    country: "ge",
    salary: 500
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll();
db.update(id, {
    age: 22
});
db.delete(id);
