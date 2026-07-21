console.log("===== JavaScript Data Types =====");

// ------------------------------------------------------
// Data Type Kya Hota Hai?
// ------------------------------------------------------

// Data Type batata hai ke variable ke andar kis type ka data
// store ho raha hai.

// JavaScript mein 2 major categories hain:
// 1. Primitive Data Types
// 2. Non-Primitive (Reference) Data Types

// ======================================
// Primitive Data Types
// ======================================

// ------------------------------------------------------
// 1. String
// ------------------------------------------------------

// String matlab text ya words.
// Hamesha "" ya '' ke andar likhte hain.

let name = "Mariam";

console.log("String:", name);

// ------------------------------------------------------
// 2. Number
// ------------------------------------------------------

// Number integer ya decimal dono ho sakta hai.

let age = 19;
let cgpa = 3.75;

console.log("Number:", age);
console.log("Decimal Number:", cgpa);

// ------------------------------------------------------
// 3. Boolean
// ------------------------------------------------------

// Boolean ki sirf 2 values hoti hain:
// true ya false

let isStudent = true;
let isMarried = false;

console.log("Boolean:", isStudent);
console.log("Boolean:", isMarried);

// ------------------------------------------------------
// 4. Undefined
// ------------------------------------------------------

// Variable bana diya lekin value assign nahi ki.

let city;

console.log("Undefined:", city);

// ------------------------------------------------------
// 5. Null
// ------------------------------------------------------

// Null ka matlab intentionally empty value.

let phone = null;

console.log("Null:", phone);

// ------------------------------------------------------
// 6. BigInt
// ------------------------------------------------------

// Bohat bari numbers store karne ke liye.

let bigNumber = 123456789012345678901234567890n;

console.log("BigInt:", bigNumber);

// ------------------------------------------------------
// 7. Symbol
// ------------------------------------------------------

// Unique value create karta hai.

let id = Symbol("123");

console.log("Symbol:", id);

// ======================================
// typeof Operator
// ======================================

// typeof batata hai variable ka data type kya hai.

console.log(typeof name);
console.log(typeof age);
console.log(typeof cgpa);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof phone);
console.log(typeof bigNumber);
console.log(typeof id);

// Special Interview Question

console.log(typeof null);

// Output:
// object

// Yaad Rakho:
// typeof null = object
// Ye JavaScript ka purana bug hai.

// ======================================
// Revision Notes
// ======================================

// String     -> Text
// Number     -> Numbers
// Boolean    -> true / false
// Undefined  -> Value assign nahi hui
// Null       -> Empty value
// BigInt     -> Bohat bara number
// Symbol     -> Unique value

console.log("===== End of Data Types =====");