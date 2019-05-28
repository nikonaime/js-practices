for (var j = 2; j <= 10; j++ ) {
    for (var k = 2; k <= j; k++) {
        if ( j != k && j % k == 0 ) {
            break;
        }
        if (k < j) {
            continue;
        }
        console.log(j);
    }
}