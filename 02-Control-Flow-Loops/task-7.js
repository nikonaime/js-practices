var arr = [1,2,3,4];

var result = 0;

for (let i of arr) {
    if(i % 2 == 0) {
        result = result + i;
    }
}

console.log(result);