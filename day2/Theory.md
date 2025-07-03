
## 🔁 Nested Loops – Theory & Example

### 💡 What are Nested Loops?
A **nested loop** is a loop inside another loop.

- The **outer loop** runs once, and for **each iteration**, the **inner loop runs completely**.
- Commonly used in **patterns, matrices, grids**, and **2D array operations**.

### 🧠 How it works:
If the outer loop runs `n` times and the inner loop runs `m` times per outer iteration,  
the total number of iterations = `n × m`

### ✅ Example – Printing a 3x3 grid of stars:
```javascript
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    row += "* ";
  }
  console.log(row);
}


## 🧮 Math Functions in JavaScript

JavaScript provides the built-in `Math` object to perform mathematical operations efficiently.

### 📌 Commonly Used Math Functions:

| Function             | Description                                         | Example                     | Output       |
|----------------------|-----------------------------------------------------|-----------------------------|--------------|
| `Math.sqrt(x)`       | Square root of `x`                                  | `Math.sqrt(25)`             | `5`          |
| `Math.pow(x, y)`     | `x` raised to the power `y`                         | `Math.pow(2, 3)`            | `8`          |
| `Math.floor(x)`      | Rounds down to the nearest integer                  | `Math.floor(4.9)`           | `4`          |
| `Math.ceil(x)`       | Rounds up to the nearest integer                    | `Math.ceil(4.1)`            | `5`          |
| `Math.round(x)`      | Rounds to the nearest integer                       | `Math.round(4.5)`           | `5`          |
| `Math.abs(x)`        | Absolute value (removes sign)                       | `Math.abs(-7)`              | `7`          |
| `Math.max(...nums)`  | Returns the largest among the numbers               | `Math.max(1, 5, 3)`         | `5`          |
| `Math.min(...nums)`  | Returns the smallest among the numbers              | `Math.min(1, 5, 3)`         | `1`          |
| `Math.random()`      | Generates a random number between 0 and 1 (exclusive) | `Math.random()`            | `0.5732...`  |