/* UTILITY: Data Type Validator
   Scenario: Verifying Cart Totals from UI Text
*/

// --- 1. SIMULATE FETCHING DATA FROM UI ---
// Elements from a website (getText()) always return Strings
let uiPriceText = "500"; 
let deliveryFee = 50;

console.log(`[TEST DATA] UI Price: "${uiPriceText}" (Type: ${typeof uiPriceText})`);
console.log(`[TEST DATA] Delivery Fee: ${deliveryFee} (Type: ${typeof deliveryFee})`);


// --- 2. THE BUG (Implicit Coercion) ---
// If we forget to convert, JS concatenates strings!
let wrongTotal = uiPriceText + deliveryFee;
console.log(`[BUG RESULT] Incorrect Total: ${wrongTotal}`); // Output: "50050"


// --- 3. THE FIX (Explicit Conversion) ---
// We manually convert String -> Number
let convertedPrice = Number(uiPriceText);
let correctTotal = convertedPrice + deliveryFee;

console.log(`[SUCCESS] Correct Total: ${correctTotal}`); // Output: 550


// --- 4. HANDLING BAD DATA (NaN) ---
// What if the UI says "Sold Out" instead of a price?
let statusText = "Sold Out";
let numberStatus = Number(statusText);

console.log(`[CHECK] Converting "Sold Out" to number: ${numberStatus}`); // Output: NaN

// Automation Check for Valid Number
if (isNaN(numberStatus)) {
    console.error(`[TEST FAIL] Price is not a valid number! Found: ${statusText}`);
} else {
    console.log(`[TEST PASS] Price is valid.`);
}


// --- 5. NULL vs UNDEFINED (API Testing) ---
let discountCode;          // Variable declared but not defined
let couponValue = null;    // Variable defined as "nothing" (from DB/API)

console.log(`Type of undefined variable: ${typeof discountCode}`);
console.log(`Type of null variable: ${typeof couponValue}`); // WARNING: This returns 'object' in JS!



