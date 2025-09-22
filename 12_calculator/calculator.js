const add = function(a, b) {
	 let sum = a + b;
   return sum;
};

const subtract = function(a, b) {
	let sum = a - b;
   return sum;
};

const sum = function(...args) {
  let total= args.reduce((acc, arg) => acc + arg, 0); 
  return total;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
