const truncate = (string, maxlenght) => {

    if (typeof string !== 'string') {
        throw new Error('First parameter must be a string!');
    }
    if (typeof maxlenght !== 'number') {
        throw new Error('Second parameter must be a number!');
    }

    return string.length > maxlenght ? string.slice(0, maxlenght-3) + '...' : string;
};


console.log(truncate('I wanna to say next thing about this topic', 22));
console.log(truncate('I wanna to say', 22));
console.log(truncate('There goes some lorem ipsum text', 22));
console.log(truncate('Lorem ipsum ', 22));