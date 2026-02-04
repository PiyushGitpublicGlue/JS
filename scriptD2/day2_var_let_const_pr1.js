/* TEST SETUP SCRIPT
   Topic: Variable Scope and Initialization
*/

// --- 1. CONFIGURATION DATA (CONST) ---
// We use const for things that MUST NOT change during execution (URLs, Credentials)

const TARGET_BROWSER = "Chrome";
console.log(`[CONFIG] Running tests on: ${TARGET_BROWSER}`);

// Uncommenting the line below will cause a TypeError
// TARGET_BROWSER = "Firefox"; 
// Why? This protects us from accidentally changing the browser in the middle of a test.

// Uncommenting the line below will cause a SyntaxError
// const MAX_RETRIES; 
// Why? Const variables must have a value immediately. You can't leave them empty.


// --- 2. RUNTIME DATA (LET) ---
// We use let for values we extract from the application (Order IDs, Tokens, Text)

let latestOrderId; 

// At this point, the test hasn't run, so the variable is declared but empty.
console.log(`[STATUS] Order ID before test: ${latestOrderId}`); // Output: undefined

// ... Simulate test running ...
console.log("... Creating Order in Application ...");
latestOrderId = "ORD-998877";

console.log(`[STATUS] Order ID after test: ${latestOrderId}`);


// --- 3. LEGACY/GLOBAL (VAR) ---
// We generally avoid 'var' in modern frameworks (Cypress/Playwright) 
// because it allows re-declaration which can cause silent bugs.

var userSession = "Active";
var userSession = "Inactive"; // 'var' allows this! 'let' would throw an error. Can't redeclare let variable
console.log(`[LEGACY] Session status: ${userSession}`);

let newTask = "Starting"
//let newTask = "Starting"

// Using VAR
if (true) {
    var status = "PASS";
}
console.log(status); // Output: "PASS" (It leaked out! This can overwrite other variables accidentally)

// Using LET
if (true) {
    let secureToken = "12345";
}
console.log(secureToken); // Error: secureToken is not defined (Correct! It stayed safe inside the block)

