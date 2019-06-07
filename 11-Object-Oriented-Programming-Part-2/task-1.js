Function.prototype.delay = function(time) {
  return (...n) => {
    setTimeout(() => {
      this(...n);
    }, time);
  };
};

function f() {
  console.log("hello");
}

f.delay(1000)(); 

function f2(a, b) {
  console.log(a + b);
}

f2.delay(1000)(1, 2); 