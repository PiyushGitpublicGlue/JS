// //1. Use forEach() to print each element of [1, 2, 3, 4, 5].
// let array = [1, 2, 3, 4, 5]
// array.forEach(element => {
//     console.log(element)
// });
// //2. Use map() to create a new array with each element doubled from [1, 2, 3]
// const dbarray = array.map(element=>element*2)
// console.log(dbarray)

/*
Scenario A: Filtering & Finding Data (The filter & find methods)
The "Failed Test" Extractor

Scenario: You have a massive JSON report of 500 test executions. Each object has a testName and status ('passed', 'failed', 'skipped').

Task: Write a filter() function to create a new array containing only the test cases that have status: 'failed' so you can retry them.

Finding a Specific User by ID

Scenario: Your API test returns a list of users [{id: 101, name: 'Alice'}, {id: 102, name: 'Bob'}].

Task: Use find() (not filter) to extract the single object where the id is 102 to validate their profile details.

Removing Sensitive Data from Logs

Scenario: You are capturing network logs in an array. Some logs contain PII (Personally Identifiable Information) flagged with isSensitive: true.

Task: Use filter() to create a sanitized log array that excludes any entry marked as sensitive.

Selecting Elements with Specific Text

Scenario: You scraped a list of dropdown options from the UI: ['Select Country', 'USA', 'Canada', 'Select State'].

Task: Use filter() to remove any options that start with the word "Select" so you are left with only valid countries.

Scenario B: Transforming Data (The map method)
Extracting Text from Web Elements

Scenario: You have queried a list of elements (e.g., product prices on an e-commerce site). You have an array of objects: [{ element: 'div', price: '$10.00' }, { element: 'div', price: '$20.50' }].

Task: Use map() to transform this complex array into a simple array of strings: ['$10.00', '$20.50'].

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

Flattning Nested Test Steps

Scenario: You have an array where each item is a Test Case, and inside each Test Case is an array of steps.

Task: Use reduce() (or flatMap) to flatten all steps from all test cases into a single master list of steps for a summary report.

Scenario D: Iteration (The forEach loop)
The Cleanup Script

Scenario: After a regression run, you have a list of createdUserIds = [101, 102, 103].

Task: Use forEach() to iterate over this array and call a function deleteUser(id) for each ID to clean up the database.

Scenario E: Chaining Methods (The "Power User" QA)
The "Get Active Emails" Chain

Scenario: You have a raw list of user objects [{ name: 'A', active: true, email: 'a@b.com'}, { name: 'B', active: false, email: 'b@c.com'}].

Task: Write a chain that first filters for active: true users, and then maps to return only their email addresses.

Filtering and Sorting Prices

Scenario: You are validating a "Sort by Price: Low to High" filter on a shopping site. You scrape the prices as strings ['$500', '$20', '$100'].

Task: Chain methods to:

Remove the '$' sign (map).

Convert to Number (map).

Filter out any item below $50 (out of stock logic) (filter).

Sort them numerically (sort).

Validating All Tests Passed

Scenario: You want a quick boolean check to fail the CI/CD pipeline if any test failed.

Task: Use the .every() or .some() method on an array of booleans [true, true, false, true] (where true = pass) to determine if the build should be marked as "Success".

*/


//1. The "Failed Test" Extractor (filter) Goal: Get an array of only failed tests.
const tests = [
  { testName: "Login", status: "passed" },
  { testName: "Checkout", status: "failed" },
  { testName: "Search", status: "skipped" },
  { testName: "Payment", status: "failed" }
];

console.log(typeof tests)
const failedTests = tests.filter(test => test.status === "failed");
console.log(failedTests);
// Output: [{ testName: "Checkout", status: "failed" }, { testName: "Payment", status: "failed" }]

//2. Finding a Specific User by ID (find) Goal: Get the single object for user 102.
const users = [
  { id: 101, name: "Piyush" },
  { id: 102, name: "Saxena" },
  { id: 103, name: "Akhil" }
];
const targetUser = users.find(user => user.id === 102);
console.log(targetUser);
// Output: { id: 102, name: "Saxena" }

//3. Removing Sensitive Data (filter) Goal: Exclude logs marked as sensitive.
const logs = [
  { msg: "User logged in", isSensitive: false },
  { msg: "Password updated: 12345", isSensitive: true },
  { msg: "Page load time: 200ms", isSensitive: false }
];

const safeLogs = logs.filter(log => !log.isSensitive);
console.log(safeLogs);
// Output: [{ msg: "User logged in"}, { msg: "Page load time" }]

//4. Selecting Elements with Specific Text (filter) Goal: Remove "Select..." options from a dropdown list.
const dropdownOptions = ['Select State', 'Delhi', 'UttarPradesh', 'Haryana'];
const validCountries = dropdownOptions.filter(opt => !opt.startsWith('Select'));
console.log(validCountries);
// Output: ['Delhi', 'UttarPradesh', 'Haryana']

//5. Extracting Text from Web Elements (map) Goal: Transform complex objects into a simple price list.
const elements = [
  { element: 'div', price: '$10.00' },
  { element: 'div', price: '$20.50' }
];

const pricesOnly = elements.map(item => item.price);
console.log(pricesOnly);
// Output: ['$10.00', '$20.50']