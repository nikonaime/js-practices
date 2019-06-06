Object.defineProperty(Object.prototype, 'extend', {

    value(source) {
        let descriptors = Object.getOwnPropertyDescriptors(source);
        
        Object.keys(descriptors).forEach((key) => {
            if (!this.hasOwnProperty(key)) {
                Object.defineProperty(this, key, {
                    value: descriptors[key].value,
                    writable: descriptors[key].writable,
                    enumerable: descriptors[key].enumerable,
                    configurable: descriptors[key].configurable
                })
            }
        });
    }
});

const data = { a: 'a' };
const source = { a: 'A', b: 'b' };

Object.defineProperty(source, 'b', { writable: false });
data.extend(source);
console.log(Object.getOwnPropertyDescriptors(data))