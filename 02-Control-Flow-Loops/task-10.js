var arr = [11,19,2,12,5,1,3,9,3,24,37];

let n = arr.length;

for (let i = 0; i < n-1; i++){
    for (let j = i + 1; j < n; j++){
        if (arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

for (let item of arr){
    console.log(item);
}