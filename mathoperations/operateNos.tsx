export const add = (a:number, b:number) => (a+b)

const data = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 }
];

// Step 1: Extract the 'value' property from each object
const numbers = data.map(item => item.value);

// Step 2: Calculate the sum of the numbers
export const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Step 3: Calculate the average
export const average = sum / numbers.length;

// console.log(`The average value is: ${average}`); // Output: The average value is: 25