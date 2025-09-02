let numbers=[1,2,5,3,9];
console.log(numbers);
console.log(numbers[2]);
console.log(numbers.length);

numbers[3]=100;

console.log(numbers);

console.log(typeof numbers);

// array functions

console.log(numbers.toString());
console.log(numbers.join("--"));
console.log(numbers.pop());
console.log(numbers.push(45));
console.log(numbers.shift());
console.log(numbers.unshift(65));
console.log(delete numbers[0]);
console.log(numbers);

let num=[55,55,66,3,5];
numbers=numbers.concat(num);
console.log(numbers);


numbers.splice(0, 1); // remove 1 element at index 0

numbers.sort((a, b) => a - b); // ascending numeric
console.log(numbers);

numbers=numbers.reverse();
console.log(numbers);