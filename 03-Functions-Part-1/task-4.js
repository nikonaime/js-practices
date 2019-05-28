var f = function(day) {

    if (typeof day !== 'number' ) {
        throw Error('all parameters type must be a Number');
    } else if ( day < 1 || day > 7 ) {
        throw Error('parameter must be in the range of 1 to 7');
    }
    var week = ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'];

    return week[day-1];
}

console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));
