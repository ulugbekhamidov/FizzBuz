var a =+prompt("son kriting");
var b = 3;
var c = 4;
function fizzBuzz(a) {
    if (a % 3 === 0 && a % 4 === 0) {
        return "FizzBuzz"
    } if (a % 3 === 0) {
        return "Fizz"
    } if (a % 4 === 0) {
        return "Buzz"
    };
};

console.log(fizzBuzz(a));