const add = function(a,b) {
	return (a+b)
};

const subtract = function(a,b) {
	return (a-b)
};

const sum = function(arr) {
	let count=0
  for (let i=0;i<arr.length;i++)
  {
    count+=arr[i]
  }
  return count;
};

const multiply = function(mults) {
  let prod=1
  for (let i=0;i<mults.length;i++)
  {
    prod*=mults[i]
  }
  return prod;
};

const power = function(a,b) {
	return (a**b)
};

const factorial = function(num) {
	let fact=1
  for (let i=num;i>0;i--)
  {
    fact*=i
  }
  return fact;
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
