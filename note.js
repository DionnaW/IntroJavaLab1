// The initial numbers that must be verified
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log('The four numbers total 50 according to the provided criteria:${isSum50}');
console.log('----------')

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log('At least two numbers are odd according to the provided criteria:${isTwoOdd}');
console.log('----------')

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log('There is not any numbers over 25 according to the provided criteria:${isUnder25}');
console.log('---------')

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log('The four numbers are unique according to the provided criteria:${isUnique}');
console.log('----------')

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log('The four numbers are under 25 according to the provided criteria:${isValid}');
console.log('----------')

// If all numbers are divisible by 5
// cache the result in a variable
let allDivisibleBy5 = true
console.log('All four numbers are divisible by 5 according to the provided criteria:${allDivisibleBy5}');
 

// If the first number is larger than the last
// cache the results in a variable
// const firstNumber = 10
// const lastNumber = 5
// let result = true
// console.log(firstNumber > lastNumber);


// Subtract the first number from the second number
const sum = n2 - n1
console.log('The equasion is sum according to the provided criteria:${sum}');
console.log('----------')


//Multiply the result by the third number 
const multiple = 5 * n3
console.log('The multiple equals 100 according to the provided criteria:${5*n3}');
console.log('----------')

// Find the remainder of dividing the result byu the fourth number
const divide = 100 / n3
console.log('The division equals e according to the provided criteria:${100/n3}');
console.log('----------')

// Change the way that isOver25 calculates so that we
//do not need to use the NOT operator(!) in other logic
//comparisons. Rename the variables as appropriate


