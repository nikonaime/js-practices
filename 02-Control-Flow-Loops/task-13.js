var arr = [11, -6, -22, 4, 18, -2, 9 ,16, -91, 12];
var sum = 0;

for (let item of arr) {
    if (item > 0) {
        sum += item;
    }
}

console.log(sum);