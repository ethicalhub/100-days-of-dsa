
# 📘 100 Days of DSA in JavaScript – Day 1: JavaScript Basics

---

## 🧠 1. What is Programming?

Programming is the process of writing instructions for a computer to execute.  
These instructions are written using programming languages. Programming helps automate tasks, solve problems, and build software systems.

---

## 🌐 2. Why Choose JavaScript?

- Runs in any browser – no setup required.
- Full-stack capabilities (Frontend + Backend via Node.js).
- Large community and support.
- Easy to learn and highly versatile.
- Used in interviews for algorithms and data structure problems.

---

## 🚀 3. First Program in JavaScript

```js
console.log("Hello, DSA World!");
```

Run this using:
- Browser Console (Right-click → Inspect → Console)
- Node.js CLI (`node filename.js`)

---

## 🧱 4. Basic Data Types, Variables & Declarations

### 🔑 Keywords:
- `var`: Function-scoped (avoid in modern JS)
- `let`: Block-scoped
- `const`: Block-scoped, cannot be reassigned

### 📦 Primitive Types:
- `String`, `Number`, `Boolean`, `undefined`, `null`, `BigInt`, `Symbol`

### 🧶 Non-Primitive:
- `Object`, `Array`, `Function`

```js
let name = "Yasir";       // string
const age = 25;           // number
let isLearning = true;    // boolean
let data = null;          // null
let value;                // undefined
```

---

## 🧠 5. JS Engine Executes Code Line-by-Line

JavaScript is **single-threaded** and executes code **synchronously**, top-to-bottom.

However, it supports **asynchronous operations** using:
- `setTimeout`
- `callbacks`
- `promises`
- `async/await`

---

## 🧺 6. Arrays & Objects

### 📚 Arrays

```js
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1
```

### 🧳 Objects

```js
let person = {
  name: "Yasir",
  age: 25,
  isStudent: true,
};
console.log(person.name); // Yasir
```

---

## 🧩 7. Functions

### 📝 Function Declaration

```js
function greet(name) {
  return `Hello, ${name}`;
}
```

### 🧱 Function Expression

```js
const greet = function(name) {
  return `Hi, ${name}`;
};
```

### ⚡ Arrow Function

```js
const greet = (name) => `Hey, ${name}`;
```

---

## 🔁 8. Loops

### 🔄 For Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 🔁 While Loop

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

## 🧠 9. Advanced Concepts (In Short)

- **Hoisting**: Variable/function declarations are moved to the top.
- **Closures**: Functions remember the scope in which they were created.
- **Callback Functions**: A function passed into another function as an argument.
- **Promises & Async/Await**: Handle asynchronous operations.
- **Scope & Block vs. Function Scope**: Determines variable visibility.
- **The `this` keyword**: Refers to the current execution context.

---

## 🎯 10. Interview Questions You Might Face

### 📌 Conceptual:
- What are the different data types in JS?
- What’s the difference between `let`, `const`, and `var`?
- What is hoisting?
- How does JavaScript execute code?
- Explain `==` vs `===` in JavaScript.
- What is the difference between primitive and reference types?

### 📌 Code-based:
1. Write a function to searchElement in an array.
2. Write a function to find the largest number in an array.
3. Implement a function that checks if a number is even or odd.
4. Loop through an object and log all key-value pairs.

More questions with solutions are present in the same folder...
---

✅ **Done for Day 1**  
Next up: Practice few more questions and move on Time Complexity

---