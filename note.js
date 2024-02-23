// The initial numbers that must be verified
// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;
// console.log(isSum50);
// console.log('----------')

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
// console.log(isTwoOdd);
// console.log('----------')

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 < 25 || n2 > 25 || n3 > 25 || n4 > 25;
// console.log(isOver25);
// console.log('---------')

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
// console.log(isUnique);
// console.log('----------')

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;
// console.log(isValid);
// console.log('----------')

// If all numbers are divisible by 5
// cache the result in a variable
// let allDivisibleBy5 = true
// console.log(allDivisibleBy5);
// console.log('----------')
// 
// If the first number is larger than the last
// cache the results in a variable
// const firstNumber = 10
// const lastNumber = 5
// let result = true
// console.log(firstNumber > lastNumber);


// Subtract the first number from the second number
// const sum = n2 - n1
// console.log(sum);
// console.log('----------')
// 

//Multiply the result by the third number 
// const multiple = 5 * n3
// console.log(multiple);
// console.log('----------')
// 
// Find the remainder of dividing the result byu the fourth number
// const divide = (100 / n3) % 2
// console.log(divide);
// console.log('----------')
// 
// Change the way that isOver25 calculates so that we
//do not need to use the NOT operator(!) in other logic
//Changed line 25 to less than (n1 < 25) ran for output of false. Deleted the (!) in line 41 and re-ran and got a true output.
// original: const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;) (changed to: const isOver25 = n1 < 25 || n2 > 25 || n3 > 25 || n4 > 25;)
// (original: const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;) (changed to: const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;)


//comparisons. Rename the variables as appropriate
//I couldn't find any stings this would take!


//PART 2
//Facts given in order to calculate info 
// const efficiency55 = 30;
// const efficiency60 = 28;
// const efficiency75 = 23;
// const tDistance = 1500;
// const fEfficiency = [30, 28, 23];
// const fuelCost = 3;
// const budget = 175;
// 
//How many gallons of fuel will you need for the entire trip @ each mph/mpg rate 
//Calculate this: divide total distance (1500) at the cars Fuel efficiency 55, 60, 75 mph (30, 28, 23 mpg)
//At 55mph/30mpg = 50 gal, 60mph/28mpg = 53.5714 gal, 75mph/23mpg = 65.2173 gal
// const totalDistance = 1500;
// const fuelEfficiency = 23;
// 
// const gallonsNeeded = totalDistance / fuelEfficiency;
// console.log("Gallons of fuel needed:", gallonsNeeded);
// console.log('----------')
// 
//At 50 mph (28 mpg)/ KEPT GETTING ERR THIS WAY SO DID EACH ABOVE INDIVIDUALLY
// const gallonsNeeded = totalDistance / fuelEfficiency;
// const totalDistance = 1500;
// const fuelEfficiency = 28;
// console.log("Gallons of fuel needed:", gallonsNeeded);


//is the budget enough to cover the fuel expense?
//calculate the cost of fuel based on the number of gal needed and compare to budget
//use gal needed for previous exapmple
// const totalDistance = 1500;
// const fuelEfficiency = 23;
// const fuelCost = 3;
// const budget = 175;

//At 55mph/30mpg the fuel cost is $150! At 60mph/28mpg the fuel cost is $160.714! At 70mph/23mpg the fuel cost is $195.652
// const gallonsNeeded = totalDistance / fuelEfficiency;
// const cost = gallonsNeeded * fuelCost;
// console.log(cost);
// console.log('----------')


//Hoe long will the trip take in hours?
//divide total distance by the traveling speed to get how many hours driven
const totalDistance = 1500;
const speed = 70;

//At 55mph it takes 27.27 hours drive. At 60mph it takes 25 hours. At 75mph it takes 21.428 hours 
const duration = totalDistance / speed;
console.log("Trip duration in hours:", duration);

//With the budget it would make sense to travel at 55mph, so there could be $50 to use for food!
