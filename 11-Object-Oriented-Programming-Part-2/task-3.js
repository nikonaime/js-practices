function Hamster() {
  this.food = [];
}

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

let speedy = new Hamster();
let lazy = new Hamster();

speedy.found("apple");
speedy.found("nut");

lazy.found("something1");
lazy.found("something2");
lazy.found("something3");
lazy.found("something4");

console.log(speedy.food.length);
console.log(lazy.food.length);
