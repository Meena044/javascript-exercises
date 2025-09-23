const add = function(a, b) {
	 let sum = a + b;
   return sum;
};

const subtract = function(a, b) {
	let sum = a - b;
   return sum;
};

const sum = function([...args]) {
  let total= args.reduce((acc, item) => acc + item, 0); 
  return total;
};

const multiply = function([...values]) {
    let multiSum = values.reduce((acc,item)=> acc * item, 1 );
    return multiSum;
};

const power = function(val, power) {
  // let powSum = Math.pow(val,power); // two methods to write
  let powSum = val ** power;
  return powSum;
	
};

const factorial = function(num) {
	let factTotal=1;
  for(let i = 1; i <=num; i++){
    factTotal = i * factTotal; 
    
  }
  return factTotal;

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
