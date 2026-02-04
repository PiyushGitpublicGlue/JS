/*
Normalizing Test Data

Scenario: Your test data CSV was parsed, but all user roles are mixed case: ['Admin', 'user', 'SUPERVISOR'].

Task: Use map() to convert all roles to lowercase so your assertion logic doesn't fail due to case sensitivity.

Converting API Currencies to Numbers

Scenario: An API returns prices as strings to ensure precision: ['100.50', '200.00', '50.10'].

Task: Use map() with the Number() constructor to convert this array of strings into an array of floating-point numbers for calculation.

Generating Email Addresses for Data-Driven Tests

Scenario: You have a list of names ['John Doe', 'Jane Smith'].

Task: Use map() to generate a dynamic email for each user for a registration test (e.g., transform "John Doe" into "john.doe+test@company.com").

Scenario C: Accumulation & Statistics (The reduce method)
Calculating Total Execution Time

Scenario: Your test suite finished running. You have an array of run times (in seconds): [12.5, 4.2, 30.1, 5.0].

Task: Use reduce() to calculate the total execution time of the entire suite.

Counting Pass/Fail Metrics

Scenario: You have an array of statuses: ['Pass', 'Fail', 'Pass', 'Pass', 'Fail'].

Task: Use reduce() to return a single object that counts the occurrences: { Pass: 3, Fail: 2 }. (This is a very popular senior interview question).
*/

//Normalizing Test Data (map) Goal: Convert mixed case strings to lowercase.
const roles = ['Piyush', 'SAXENA', 'PiYuSH sAxeNA'];
const normalizedRoles = roles.map(role => role.toLowerCase());
console.log(normalizedRoles);
// Output: ['admin', 'user', 'supervisor']

//Converting API Currencies to Numbers (map) Goal: Convert string numbers to real numbers.
const stringPrices = ['100.50', '200.00', '50.10'];

const numberPrices = stringPrices.map(price => Number(price));
// Or use: .map(parseFloat)

console.log(numberPrices);
// Output: [100.5, 200, 50.1]

//Generating Email Addresses (map) Goal: Create dynamic emails from names.
const names = ['Piyush Saxena', 'Akhil jain'];

const testEmails = names.map(name => {
  // Replace space with dot, convert to lowercase, add template
  const formattedName = name.toLowerCase().replace(' ', '.');
  return `${formattedName}@google.com`;
});

console.log(testEmails);
// Output: ['john.doe+test@company.com', 'jane.smith+test@company.com']

//Calculating Total Execution Time (reduce) Goal: Sum up all numbers in the array.
const runTimes = [12.5, 4.2, 30.1, 5.0];

const totalTime = runTimes.reduce((acc, curr) => acc + curr, 0);

console.log(totalTime);
// Output: 51.8

//Counting Pass/Fail Metrics (reduce) Goal: Count occurrences of each status.
const statuses = ['Pass', 'Fail', 'Pass', 'Pass', 'Fail'];

const report = statuses.reduce((acc, status) => {
  // If the key exists, add 1. If not, initialize it to 1.
  if (acc[status]) {
    acc[status]++;
  } else {
    acc[status] = 1;
  }
  return acc;
}, {}); // Initial value is an empty object

console.log(report);
// Output: { Pass: 3, Fail: 2 }