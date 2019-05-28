let j = 1000, num = 0;

while (j > 50){
    j/=2;
    num++;
}

console.log('Number = ' + j*2 + '\nNumber of iterations = ' + --num);